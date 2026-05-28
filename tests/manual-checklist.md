# ResumeForge 编辑器手动测试清单

## 测试环境
- Dev server: http://localhost:3000
- 浏览器: Chrome / Safari

---

## 场景 1: 下拉框可见（Bug 1 — Portal dropdown）

**步骤**:
1. 访问 `/editor?template=classic`
2. 等待模板加载完成（右侧出现简历预览）
3. 点击左侧「基本信息」section，展开后向下滚动到底部
4. 点击「添加字段」按钮

**预期**:
- 下拉菜单完整展示在按钮下方（或上方，如空间不足时翻转）
- 菜单不被左侧栏的 overflow:auto 截断
- 菜单中可以看到「个人网站」「LinkedIn」「GitHub」「微信」选项
- 点击菜单外区域可关闭 dropdown

**已知风险**: 如果 CollapsiblePanel 动画期间调用 getBoundingClientRect，位置可能略有偏移，等动画结束后再点。

---

## 场景 2: 网站字段渲染（Bug 2 — website injection）

**步骤**:
1. 访问 `/editor?template=classic`
2. 左侧「基本信息」→ 点「添加字段」→ 选「个人网站」
3. 在「个人网站」输入框填入：`myname.com`
4. 查看右侧简历预览

**预期**:
- 右侧预览的联系信息行（email / phone 附近）展示 `🌐 myname.com`
- 点击该链接可正确导航到 `https://myname.com`
- 若填 LinkedIn，同样注入 `in linkedin.com/in/xxx`
- 若填 GitHub，注入 `GH github.com/xxx`

**验证方式（自动化）**: 在预览 iframe 的 srcdoc 中搜索 `myname.com` 字符串。

---

## 场景 3: 字体颜色（Bug 3 — TipTap Color v3）

**步骤**:
1. 访问 `/editor?template=classic`，确认右侧有简历内容
2. 双击右侧预览中的任意文字（如姓名）
3. FloatingEditor 弹出后，选中部分文字（鼠标拖选）
4. 点击工具栏中的字体颜色图标（A 或 🅐）
5. 在颜色板中选择红色 (#DC2626)

**预期**:
- 所选文字立刻变红
- 点击「确认」后关闭 FloatingEditor
- 重新点击该字段时，颜色仍为红色（表明保存成功）
- `editor.getHTML()` 输出包含 `<span style="color: #DC2626">...</span>`

**已知限制**: FloatingEditor 中颜色 picker 使用 onMouseDown+preventDefault 避免 editor 失焦；TipTap v3 的 Color extension 通过 TextStyle mark 实现。

---

## 场景 4: 左侧富文本（Bug 4 — InlineRichText）

**步骤**:
1. 访问 `/editor?template=classic`
2. 左侧展开「工作经历」→ 点击第一条展开编辑表单
3. 找到「工作亮点」字段（highlights）
4. 点击某条亮点文本框，聚焦后上方出现 mini toolbar (B/I/U/A)
5. 选中部分文字 → 点 B（加粗）
6. 同样测试 I（斜体）和 A（颜色）
7. 点击编辑框外部 → onBlur 触发保存
8. 查看右侧预览是否同步更新

**预期**:
- 亮点字段变为 InlineRichText 编辑器（带 mini toolbar）
- 加粗/斜体/颜色选择即时反映在编辑区
- 右侧预览中对应文字以 HTML 形式渲染（粗体/斜体/彩色）
- 项目描述字段（description）同样是 InlineRichText

**注意**: 教育背景字段（institution/area/studyType）保持 plain input，不受影响。

---

## 场景 5: 回归检查

**5a: 背景色 picker 仍然可用**
1. 左侧栏底部「简历背景色」区域点击彩色渐变圆（自定义颜色）
2. 系统颜色选择器弹出（不自动关闭）
3. 选择一个颜色 → 右侧背景色同步变化
4. 确认 color picker 弹窗不会立即消失（之前的 bug 已修复）

**5b: 模板切换不崩溃**
1. 点击左下角「换模板」→ 进入模板列表页
2. 选择另一个模板（如 minimal）
3. 回到编辑器，数据应保留（或使用 default 数据）
4. 没有 JS 错误或白屏

**5c: Undo/Redo**
1. 修改姓名字段 → Cmd+Z 撤销 → 姓名恢复
2. Cmd+Shift+Z 重做 → 姓名重新修改

**5d: Section 拖拽排序**
1. 拖动「工作经历」到「教育背景」上方
2. 右侧预览中顺序同步变化

---

## 自动化覆盖情况
| 场景 | Playwright 自动化 | 说明 |
|------|-----------|------|
| Bug 1 下拉框可见 | ✅ | 检测 dropdown visible + boundingBox |
| Bug 2 网站渲染 | ✅ | 检测 iframe srcdoc 包含 website 值 |
| Bug 3 字体颜色 | ⚠️ 简化版 | toolbar 存在 + click 不 crash |
| Bug 4 左侧富文本 | ⚠️ 简化版 | InlineRichText toolbar 存在 |
| Bug 5 回归 | ✅ | 颜色 picker + 基本交互 |
