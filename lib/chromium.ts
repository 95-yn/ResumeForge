/**
 * 服务端 Chromium 解析 + Puppeteer 浏览器单例。
 *
 * 仅用于 Node 运行时（PDF 导出 API）。不要在客户端 import。
 *
 * 设计：
 *  - 不依赖 puppeteer 自带下载的 Chromium（Alpine/musl 上跑不起来），改用 puppeteer-core
 *    + 系统安装的 Chromium。生产镜像里通过 apk 装 chromium，并设 PUPPETEER_EXECUTABLE_PATH。
 *  - 本地开发（macOS/Linux）自动探测常见的 Chrome/Chromium 路径，免配置即可用。
 *  - 维持一个浏览器单例，避免每次请求都冷启 Chromium（首次约 300ms，复用后毫秒级）。
 */
import fs from 'node:fs';
import type { Browser } from 'puppeteer-core';

// 常见可执行文件路径：优先环境变量，其次各平台默认安装位置。
const CANDIDATE_PATHS = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  // Linux（含 Docker/Alpine 的 apk chromium）
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  // macOS
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
].filter(Boolean) as string[];

function resolveExecutablePath(): string {
  for (const p of CANDIDATE_PATHS) {
    try {
      if (fs.existsSync(p)) return p;
    } catch {
      /* ignore */
    }
  }
  throw new Error(
    '找不到可用的 Chromium/Chrome 可执行文件。请安装 Chrome 或设置环境变量 PUPPETEER_EXECUTABLE_PATH 指向 chromium 可执行文件。',
  );
}

// 单例：跨请求复用浏览器进程。被外部关闭/崩溃后会自动重建。
let browserPromise: Promise<Browser> | null = null;

export async function getBrowser(): Promise<Browser> {
  if (browserPromise) {
    try {
      const b = await browserPromise;
      if (b.connected) return b;
    } catch {
      /* 启动失败，落到下方重建 */
    }
    browserPromise = null;
  }

  // 延迟 import，确保 puppeteer-core 只在服务端被加载。
  const puppeteer = (await import('puppeteer-core')).default;
  browserPromise = puppeteer.launch({
    executablePath: resolveExecutablePath(),
    headless: true,
    // 容器内以非 root 运行 + 无 /dev/shm 配额，需以下参数保证稳定。
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--font-render-hinting=none',
    ],
  });

  const browser = await browserPromise;
  // 进程意外退出时清空单例，下次请求重建。
  browser.on('disconnected', () => {
    browserPromise = null;
  });
  return browser;
}

/**
 * PDF 渲染并发闸门。
 *
 * 每个并发请求会在共享的 Chromium 里开一个 page，单 page 渲染约吃 50–150MB 内存 + 一定 CPU。
 * 不限并发的话，瞬时大量请求会把内存/CPU 打爆导致整体崩溃。这里用信号量把「同时渲染」的
 * page 数压在 PDF_MAX_CONCURRENCY 以内，超出的排队；队列再满（PDF_MAX_QUEUE）则直接 503，
 * 让调用方快速失败重试，而不是无限堆积。两个上限都可用环境变量按机器规格调。
 */
const MAX_CONCURRENCY = Math.max(1, Number(process.env.PDF_MAX_CONCURRENCY) || 4);
const MAX_QUEUE = Math.max(0, Number(process.env.PDF_MAX_QUEUE ?? 20));

let active = 0;
const waiters: Array<() => void> = [];

/** 当前并发与排队情况（用于日志/监控）。 */
export function pdfLoad() {
  return { active, queued: waiters.length, max: MAX_CONCURRENCY, maxQueue: MAX_QUEUE };
}

/**
 * 申请一个渲染名额。拿到名额后必须调用返回的 release()（放在 finally）。
 * 队列已满时抛出 code='BUSY' 的错误 → 路由层据此回 503。
 */
export async function acquirePdfSlot(): Promise<() => void> {
  if (active < MAX_CONCURRENCY) {
    active++;
  } else {
    if (waiters.length >= MAX_QUEUE) {
      const err = new Error('PDF 服务繁忙，请稍后重试');
      (err as Error & { code?: string }).code = 'BUSY';
      throw err;
    }
    await new Promise<void>(resolve => waiters.push(resolve)); // 等一个名额被让出
  }
  let released = false;
  return () => {
    if (released) return;
    released = true;
    const next = waiters.shift();
    if (next) next();   // 把名额直接交给下一个排队者（active 不变）
    else active--;       // 没人排队，释放名额
  };
}
