# PDF 导出服务（Puppeteer）

服务端用无头 Chromium 把简历渲染为 PDF。相比浏览器原生「打印 / 另存为 PDF」：

- 不弹系统打印框，点一下直接下载；
- 跨浏览器 / 设备排版一致（统一用服务端 Chromium 排版）；
- 背景色 / 底纹默认保留，无需用户手动勾选「打印背景图形」。

> 编辑器仍保留「导出 HTML」「打印」两条出口，三者共用同一份「与屏幕所见 1:1」的自包含
> HTML（见 `lib/use-resume-export.ts`）。本文只讲 PDF 这条服务端链路。

---

## 1. 架构与启动

PDF 导出**不是独立服务**，就是 Next 应用本身的一个接口路由，Puppeteer 跑在同一个 Node 进程里：

```
前端「导出 PDF」  ──POST /api/pdf {html, filename}──▶  Next 路由 app/api/pdf/route.ts
                                                          │ puppeteer-core 连系统 Chromium
                                                          ▼
                                              page.setContent(html) → page.pdf()
                                                          │
   浏览器自动下载 ◀──────── application/pdf (Content-Disposition 附件) ─────────┘
```

关键文件：

| 文件 | 职责 |
|---|---|
| `app/api/pdf/route.ts` | 接口：校验入参、并发闸门、渲染、返回 PDF |
| `lib/chromium.ts` | Chromium 路径探测、浏览器单例复用、并发信号量 |
| `lib/use-resume-export.ts` | 前端导出/打印/HTML 统一逻辑（含 503 自动重试） |

**启动方式（任选其一，确保有一个 Next 服务在跑）：**

| 场景 | 命令 |
|---|---|
| 本地开发 | `npm run dev` |
| 本地/服务器生产 | `npm run build` 然后 `npm run start` |
| Docker（推荐部署） | `docker compose up -d --build`（或 `./docker-deploy.sh`） |

> ⚠️ `next dev` 与 `next start` 不要同时开：dev 会覆盖 `.next` 生产产物，导致 `next start`
> 报 “Could not find a production build”。

---

## 2. 运行依赖：Chromium + 中文字体

`puppeteer-core` **不自带浏览器**，运行服务的机器上必须有 Chromium/Chrome，且要有中文字体
（否则 PDF 里中文是豆腐块 □□□）。

- **Docker**：镜像已内置，无需额外操作。`Dockerfile` 运行层已 `apk add chromium font-noto-cjk
  wqy-zenhei …` 并设置 `PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser`。
- **裸机 `npm run start`**：在部署机器装一次即可，路径会被自动探测：

  ```bash
  # Debian/Ubuntu
  sudo apt-get update && sudo apt-get install -y chromium fonts-noto-cjk
  # 包名是 chromium-browser 的发行版则装 chromium-browser
  ```

- **本地 macOS 开发**：自动探测到已安装的 Google Chrome，无需配置。

路径探测顺序见 `lib/chromium.ts`：`PUPPETEER_EXECUTABLE_PATH` → 常见 Linux 路径 → macOS 路径。
路径特殊时显式指定：

```bash
PUPPETEER_EXECUTABLE_PATH=/your/path/to/chromium npm run start
```

---

## 3. 并发与容量

单份 PDF 渲染约 **0.5–1.5s**，每个并发渲染占用约 **50–150MB 内存** + 一定 CPU。不限并发会被
瞬时高峰打爆，因此服务内置**并发闸门**：

- 同时渲染上限 `PDF_MAX_CONCURRENCY`（默认 **4**），超出的请求排队；
- 队列上限 `PDF_MAX_QUEUE`（默认 **20**）；
- 两者都满（默认共 `4 + 20 = 24` 个在途）时，新请求立刻返回 **503 + `Retry-After`**，
  快速失败而非无限堆积拖垮整机；
- 前端收到 503 会**自动按 `Retry-After` 退避重试**（最多 4 次），并提示「正在重试…」，
  重试用尽才提示失败。

### 调参

用环境变量按机器规格调整（部署时设置即可）：

```bash
PDF_MAX_CONCURRENCY=6 PDF_MAX_QUEUE=40 npm run start
# docker compose：写进 environment: 或 docker-compose.yml
```

经验值（渲染是 CPU 密集，并发约等于核数；内存按 `并发 × 150MB` 预留）：

| 机器规格 | 建议 `PDF_MAX_CONCURRENCY` |
|---|---|
| 2 核 / 2GB | 2 |
| 4 核 / 4GB | 4（默认） |
| 8 核 / 8GB+ | 6 ~ 8 |

### 压测参考（本地 dev server，默认 4/20；生产更快）

| 并发 | 成功 | 503 | 吞吐 | 延迟 p50 / p95 |
|---|---|---|---|---|
| 1 | 1/1 | 0 | — | 0.7s |
| 4（=上限） | 4/4 | 0 | 2.7 req/s | 1.5s / 1.5s |
| 8 | 8/8 | 0 | 2.1 req/s | 3.9s / 3.9s |
| 16 | 16/16 | 0 | 2.1 req/s | 5.8s / 7.8s |
| 30（超容量 24） | 24/30 | 6 | 2.1 req/s | 7.1s / 11.5s |

即：默认配置下最多 **24 个在途请求**不报错（4 个并行渲染 + 20 个排队），再多返回 503 由前端自动重试。

---

## 4. nginx 反代注意

带 base64 内联头像的简历，POST 给 `/api/pdf` 的 HTML 可能超过 nginx 默认 1MB 上限被拦成 413。
参考配置 `deploy/nginx.conf` 已加：

```nginx
client_max_body_size 10m;   # 应用层另有 8MB 上限兜底（MAX_HTML_BYTES）
```

现网 nginx 记得同步加这一行并 `nginx -t && nginx -s reload`。

---

## 5. 排障：「导出不可用」自查

1. **有没有 Next 服务在跑？** 直接 `open` 打开导出的 HTML 文件（`file://`）是没有服务器的，
   `fetch('/api/pdf')` 必然失败。要从 `npm run dev` / `start` / Docker 起的地址打开页面。
2. **dev 和 start 同时开了？** 见上文警告，二选一。
3. **服务器装了 Chromium 吗？** 裸机部署需 `apt install chromium fonts-noto-cjk`；Docker 已内置。
4. **看错误**：浏览器控制台，或服务端日志 `[api/pdf] 生成失败: …`（含具体原因）。
5. **一直 503？** 说明并发被打满，调大 `PDF_MAX_CONCURRENCY`/`PDF_MAX_QUEUE`，或加机器。

---

## 6. 接口契约

```
POST /api/pdf
Content-Type: application/json
Body: { "html": "<完整自包含 HTML 字符串>", "filename": "李然-运营经理-简历" }

200  application/pdf  （Content-Disposition: attachment; filename*=UTF-8''…）
400  缺少/非法 html
413  HTML 超过 8MB（MAX_HTML_BYTES）
503  服务繁忙（队列已满），带 Retry-After，前端会自动重试
500  渲染失败（detail 字段含原因）
```
