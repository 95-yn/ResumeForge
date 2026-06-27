import { test, expect, Page } from '@playwright/test';

// 模拟触屏手机：hasTouch + isMobile 让 matchMedia('(hover:none) and (pointer:coarse)') 命中，
// deliverFile 据此走 Web Share 优先分支。
test.use({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });

async function openMobileEditor(page: Page) {
  await page.goto('/editor?template=classic');
  await expect(page.locator('iframe').first()).toBeVisible({ timeout: 15000 });
  await page.waitForTimeout(800);
}

// 移动端布局底部「导出」→ 弹层「导出 PDF」。
async function triggerMobilePdf(page: Page) {
  await page.getByRole('button', { name: '导出', exact: true }).first().click().catch(() => {});
  // 弹层项
  const item = page.getByText('导出 PDF', { exact: true });
  await item.click();
}

test.describe('PDF 导出（移动/触屏）', () => {
  test('M0. 触屏设备命中 touch-primary 媒体查询', async ({ page }) => {
    await openMobileEditor(page);
    const m = await page.evaluate(() =>
      window.matchMedia('(hover: none) and (pointer: coarse)').matches);
    expect(m).toBe(true);
  });

  test('M1. share 成功 → 提示存到文件', async ({ page }) => {
    await openMobileEditor(page);
    await page.addInitScript(() => {
      (navigator as any).canShare = () => true;
      (navigator as any).share = async () => {}; // 成功
    });
    await page.reload(); await page.waitForTimeout(800);
    await triggerMobilePdf(page);
    await expect(page.getByText('请在分享面板选', { exact: false })).toBeVisible({ timeout: 40000 });
  });

  test('M2. 用户取消分享（AbortError）→ 不报错、不重复下载', async ({ page }) => {
    await page.addInitScript(() => {
      (navigator as any).canShare = () => true;
      (navigator as any).share = async () => { const e: any = new Error('cancel'); e.name = 'AbortError'; throw e; };
    });
    await openMobileEditor(page);
    await triggerMobilePdf(page);
    await page.waitForTimeout(3000);
    // 不应出现成功/失败 toast
    await expect(page.getByText('已导出 PDF', { exact: false })).toHaveCount(0);
    await expect(page.getByText('导出 PDF 失败', { exact: false })).toHaveCount(0);
  });

  test('M3. share 不可用 → 回退下载', async ({ page }) => {
    await page.addInitScript(() => {
      (navigator as any).canShare = () => true;
      (navigator as any).share = async () => { throw new Error('not allowed by gesture'); };
    });
    await openMobileEditor(page);
    let dl = false;
    page.on('download', () => { dl = true; });
    await triggerMobilePdf(page);
    await expect(page.getByText('已导出 PDF', { exact: false })).toBeVisible({ timeout: 40000 });
    expect(dl).toBe(true);
  });
});
