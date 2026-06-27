import { test, expect, Page } from '@playwright/test';

const EDITOR_URL = '/editor?template=classic';

async function openEditor(page: Page) {
  await page.goto(EDITOR_URL);
  // 等模板预览 iframe 渲染出来，确保 resume/templateHtml 已就绪（canExport=true）。
  await expect(page.locator('iframe').first()).toBeVisible({ timeout: 15000 });
  await page.waitForTimeout(800);
}

function pdfButton(page: Page) {
  // 桌面 TopBar 的「导出 PDF」按钮（生成中时文案变「生成中…」）。
  return page.getByRole('button', { name: '导出为 PDF' });
}

test.describe('PDF 导出 - 设备容错验证', () => {
  test('A. 成功路径：真实 /api/pdf 渲染并交付 PDF', async ({ page }) => {
    await openEditor(page);

    let posted: any = null;
    page.on('request', req => {
      if (req.url().includes('/api/pdf') && req.method() === 'POST') {
        try { posted = JSON.parse(req.postData() || '{}'); } catch { /* ignore */ }
      }
    });

    const respPromise = page.waitForResponse(r => r.url().includes('/api/pdf'), { timeout: 40000 });
    await pdfButton(page).click();
    const resp = await respPromise;

    expect(resp.status()).toBe(200);
    expect(resp.headers()['content-type']).toContain('application/pdf');
    // 请求体应带 1:1 自包含 HTML + 文件名
    expect(posted?.html).toContain('@page');
    expect(typeof posted?.filename).toBe('string');
    // 成功 toast（桌面走 <a download> 兜底 → 「已导出 PDF」）
    await expect(page.getByText('已导出 PDF', { exact: false })).toBeVisible({ timeout: 8000 });
  });

  test('B. 服务端 500：透传 error detail 到提示', async ({ page }) => {
    await openEditor(page);
    await page.route('**/api/pdf', route =>
      route.fulfill({ status: 500, contentType: 'application/json',
        body: JSON.stringify({ error: '找不到可用的 Chromium' }) }),
    );
    await pdfButton(page).click();
    await expect(page.getByText('找不到可用的 Chromium', { exact: false })).toBeVisible({ timeout: 8000 });
  });

  test('C. 网络层失败（连不上）：引导本地兜底', async ({ page }) => {
    await openEditor(page);
    await page.route('**/api/pdf', route => route.abort('connectionrefused'));
    await pdfButton(page).click();
    // 短重试一次后失败 → 「连不上 PDF 服务…可改用「打印 / 导出 HTML」兜底」
    await expect(page.getByText('连不上 PDF 服务', { exact: false })).toBeVisible({ timeout: 12000 });
    await expect(page.getByText('打印 / 导出 HTML', { exact: false })).toBeVisible();
  });

  test('D. 持续 503：重试用尽提示繁忙 + 兜底', async ({ page }) => {
    await openEditor(page);
    await page.route('**/api/pdf', route =>
      route.fulfill({ status: 503, headers: { 'Retry-After': '1' },
        contentType: 'application/json', body: JSON.stringify({ error: '繁忙' }) }),
    );
    await pdfButton(page).click();
    await expect(page.getByText('服务繁忙', { exact: false })).toBeVisible({ timeout: 20000 });
  });

  test('E. 空 blob：判失败不交付坏文件', async ({ page }) => {
    await openEditor(page);
    await page.route('**/api/pdf', route =>
      route.fulfill({ status: 200, contentType: 'application/pdf', body: '' }),
    );
    await pdfButton(page).click();
    await expect(page.getByText('导出 PDF 失败', { exact: false })).toBeVisible({ timeout: 8000 });
  });
});
