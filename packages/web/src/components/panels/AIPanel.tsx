import { useState, useCallback } from 'react';
import { Button, Input } from 'antd';
import {
  improveText,
  translateText,
  generateSummary,
  checkATSCompatibility,
  suggestColorScheme,
  generateBulletPoints,
  type AIResponse,
} from '../../utils/ai';
import { useCanvasStore } from '../../stores/canvas.store';

type AISection = 'improve' | 'translate' | 'summary' | 'ats' | 'color' | 'bullet';

const SECTIONS: { key: AISection; label: string; icon: string }[] = [
  { key: 'improve', label: 'AI 润色', icon: '✨' },
  { key: 'translate', label: '智能翻译', icon: '🌐' },
  { key: 'summary', label: '生成摘要', icon: '📝' },
  { key: 'ats', label: 'ATS 检查', icon: '🔍' },
  { key: 'color', label: '智能配色', icon: '🎨' },
  { key: 'bullet', label: '生成要点', icon: '📋' },
];

const panelStyle: React.CSSProperties = {
  width: 260, background: '#FFFFFF', borderLeft: '1px solid #E7E5E4',
  height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden',
  fontFamily: "'Plus Jakarta Sans', -apple-system, 'PingFang SC', sans-serif",
};

const headerStyle: React.CSSProperties = {
  padding: '12px 14px', borderBottom: '1px solid #F5F5F4',
  fontSize: 13, fontWeight: 600, color: '#1C1917',
  display: 'flex', alignItems: 'center', gap: 6,
  background: '#FAFAF9',
};

const sectionBtnStyle = (active: boolean): React.CSSProperties => ({
  display: 'flex', alignItems: 'center', gap: 6,
  padding: '8px 12px', width: '100%', border: 'none',
  background: active ? '#F5F5F4' : 'transparent',
  borderLeft: active ? '2px solid #1C1917' : '2px solid transparent',
  cursor: 'pointer', fontSize: 12, color: active ? '#1C1917' : '#57534E',
  fontWeight: active ? 500 : 400, textAlign: 'left' as const,
  fontFamily: 'inherit', transition: 'all 0.15s',
});

const resultBoxStyle: React.CSSProperties = {
  padding: 10, borderRadius: 6, background: '#FAFAF9',
  border: '1px solid #E7E5E4', fontSize: 12, lineHeight: 1.6,
  color: '#44403C', marginTop: 8, wordBreak: 'break-word' as const,
};

const labelStyle: React.CSSProperties = {
  fontSize: 11, fontWeight: 500, color: '#78716C', marginBottom: 4, display: 'block',
};

function getSelectedTextBlockContent(
  blocks: Record<string, { data: { type: string; html?: string }; style: Record<string, unknown> }>,
  selectedIds: Set<string>,
): string | null {
  for (const id of selectedIds) {
    const block = blocks[id];
    if (block && (block.data.type === 'text' || block.data.type === 'heading') && block.data.html) {
      // Strip HTML tags for AI processing
      const tmp = document.createElement('div');
      tmp.innerHTML = block.data.html;
      return tmp.textContent || tmp.innerText || '';
    }
  }
  return null;
}

export function AIPanel() {
  const [activeSection, setActiveSection] = useState<AISection>('improve');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResponse | null>(null);
  const [atsResult, setAtsResult] = useState<{ score: number; issues: string[] } | null>(null);
  const [colorResult, setColorResult] = useState<{ primary: string; secondary: string; accent: string } | null>(null);
  const [bulletResult, setBulletResult] = useState<string[] | null>(null);
  const [targetLang, setTargetLang] = useState<'zh' | 'en'>('en');
  const [industry, setIndustry] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');

  const blocks = useCanvasStore((s) => s.blocks);
  const selectedIds = useCanvasStore((s) => s.selectedIds);
  const updateBlockData = useCanvasStore((s) => s.updateBlockData);
  const updateVariables = useCanvasStore((s) => s.updateVariables);

  const clearResults = useCallback(() => {
    setResult(null);
    setAtsResult(null);
    setColorResult(null);
    setBulletResult(null);
  }, []);

  const handleSwitchSection = useCallback((section: AISection) => {
    setActiveSection(section);
    clearResults();
  }, [clearResults]);

  // Apply result text to the selected text/heading block
  const applyToSelected = useCallback((text: string) => {
    for (const id of selectedIds) {
      const block = blocks[id];
      if (block && (block.data.type === 'text' || block.data.type === 'heading')) {
        updateBlockData(id, { html: `<p>${text}</p>` });
        break;
      }
    }
  }, [selectedIds, blocks, updateBlockData]);

  // Handler: AI improve
  const handleImprove = useCallback(async () => {
    const text = getSelectedTextBlockContent(blocks as any, selectedIds);
    if (!text) return;
    setLoading(true);
    clearResults();
    try {
      const res = await improveText(text);
      setResult(res);
    } finally {
      setLoading(false);
    }
  }, [blocks, selectedIds, clearResults]);

  // Handler: translate
  const handleTranslate = useCallback(async () => {
    const text = getSelectedTextBlockContent(blocks as any, selectedIds);
    if (!text) return;
    setLoading(true);
    clearResults();
    try {
      const res = await translateText(text, targetLang);
      setResult(res);
    } finally {
      setLoading(false);
    }
  }, [blocks, selectedIds, targetLang, clearResults]);

  // Handler: generate summary
  const handleSummary = useCallback(async () => {
    setLoading(true);
    clearResults();
    try {
      const res = await generateSummary(['前端开发', '项目管理'], ['React', 'TypeScript', 'Node.js']);
      setResult(res);
    } finally {
      setLoading(false);
    }
  }, [clearResults]);

  // Handler: ATS check
  const handleATS = useCallback(async () => {
    setLoading(true);
    clearResults();
    try {
      const res = await checkATSCompatibility('<html></html>');
      setAtsResult(res);
    } finally {
      setLoading(false);
    }
  }, [clearResults]);

  // Handler: color scheme
  const handleColor = useCallback(async () => {
    if (!industry.trim()) return;
    setLoading(true);
    clearResults();
    try {
      const res = await suggestColorScheme(industry.trim());
      setColorResult(res);
    } finally {
      setLoading(false);
    }
  }, [industry, clearResults]);

  // Handler: bullet points
  const handleBullet = useCallback(async () => {
    if (!role.trim() || !company.trim()) return;
    setLoading(true);
    clearResults();
    try {
      const res = await generateBulletPoints(role.trim(), company.trim());
      setBulletResult(res);
    } finally {
      setLoading(false);
    }
  }, [role, company, clearResults]);

  // Render the active section content
  const renderContent = () => {
    const selectedText = getSelectedTextBlockContent(blocks as any, selectedIds);

    switch (activeSection) {
      case 'improve':
        return (
          <div>
            <span style={labelStyle}>选中文本块后点击润色</span>
            {selectedText ? (
              <div style={{ ...resultBoxStyle, marginTop: 4, background: '#F5F5F4', color: '#78716C', fontSize: 11 }}>
                {selectedText.length > 80 ? selectedText.slice(0, 80) + '...' : selectedText}
              </div>
            ) : (
              <div style={{ fontSize: 11, color: '#A8A29E', marginBottom: 8 }}>请先在画布中选中一个文本块</div>
            )}
            <Button
              size="small" block
              loading={loading}
              disabled={!selectedText}
              onClick={handleImprove}
              style={{
                marginTop: 8, borderRadius: 6, fontSize: 12, fontFamily: 'inherit',
                background: selectedText ? '#1C1917' : undefined,
                borderColor: selectedText ? '#1C1917' : undefined,
                color: selectedText ? '#FAFAF9' : undefined,
              }}
            >
              开始润色
            </Button>
            {result && (
              <div style={resultBoxStyle}>
                <div>{result.result}</div>
                {result.suggestions?.map((s, i) => (
                  <div key={i} style={{ fontSize: 11, color: '#A8A29E', marginTop: 4 }}>💡 {s}</div>
                ))}
                <Button
                  size="small" block
                  onClick={() => applyToSelected(result.result)}
                  style={{ marginTop: 8, borderRadius: 6, fontSize: 12, fontFamily: 'inherit' }}
                >
                  应用
                </Button>
              </div>
            )}
          </div>
        );

      case 'translate':
        return (
          <div>
            <span style={labelStyle}>翻译方向</span>
            <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
              {(['en', 'zh'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setTargetLang(l)}
                  style={{
                    flex: 1, padding: '4px 0', borderRadius: 4, border: 'none', fontSize: 11,
                    cursor: 'pointer', fontFamily: 'inherit',
                    background: targetLang === l ? '#1C1917' : '#F5F5F4',
                    color: targetLang === l ? '#FAFAF9' : '#57534E',
                    transition: 'all 0.15s',
                  }}
                >
                  {l === 'en' ? '中 → 英' : '英 → 中'}
                </button>
              ))}
            </div>
            {selectedText ? (
              <div style={{ ...resultBoxStyle, marginTop: 0, background: '#F5F5F4', color: '#78716C', fontSize: 11 }}>
                {selectedText.length > 80 ? selectedText.slice(0, 80) + '...' : selectedText}
              </div>
            ) : (
              <div style={{ fontSize: 11, color: '#A8A29E', marginBottom: 8 }}>请先在画布中选中一个文本块</div>
            )}
            <Button
              size="small" block loading={loading} disabled={!selectedText}
              onClick={handleTranslate}
              style={{
                marginTop: 8, borderRadius: 6, fontSize: 12, fontFamily: 'inherit',
                background: selectedText ? '#1C1917' : undefined,
                borderColor: selectedText ? '#1C1917' : undefined,
                color: selectedText ? '#FAFAF9' : undefined,
              }}
            >
              开始翻译
            </Button>
            {result && (
              <div style={resultBoxStyle}>
                <div>{result.result}</div>
                <Button
                  size="small" block
                  onClick={() => applyToSelected(result.result)}
                  style={{ marginTop: 8, borderRadius: 6, fontSize: 12, fontFamily: 'inherit' }}
                >
                  应用
                </Button>
              </div>
            )}
          </div>
        );

      case 'summary':
        return (
          <div>
            <span style={labelStyle}>基于工作经历和技能自动生成个人摘要</span>
            <Button
              size="small" block loading={loading}
              onClick={handleSummary}
              style={{
                marginTop: 4, borderRadius: 6, fontSize: 12, fontFamily: 'inherit',
                background: '#1C1917', borderColor: '#1C1917', color: '#FAFAF9',
              }}
            >
              生成摘要
            </Button>
            {result && (
              <div style={resultBoxStyle}>
                <div>{result.result}</div>
                {result.suggestions?.map((s, i) => (
                  <div key={i} style={{ fontSize: 11, color: '#A8A29E', marginTop: 4 }}>💡 {s}</div>
                ))}
                <Button
                  size="small" block
                  onClick={() => applyToSelected(result.result)}
                  style={{ marginTop: 8, borderRadius: 6, fontSize: 12, fontFamily: 'inherit' }}
                >
                  应用
                </Button>
              </div>
            )}
          </div>
        );

      case 'ats':
        return (
          <div>
            <span style={labelStyle}>检测简历的 ATS 兼容性</span>
            <Button
              size="small" block loading={loading}
              onClick={handleATS}
              style={{
                marginTop: 4, borderRadius: 6, fontSize: 12, fontFamily: 'inherit',
                background: '#1C1917', borderColor: '#1C1917', color: '#FAFAF9',
              }}
            >
              开始检查
            </Button>
            {atsResult && (
              <div style={resultBoxStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, color: '#78716C' }}>兼容性评分</span>
                  <span style={{
                    fontSize: 20, fontWeight: 700,
                    color: atsResult.score >= 80 ? '#16A34A' : atsResult.score >= 60 ? '#CA8A04' : '#DC2626',
                  }}>
                    {atsResult.score}
                  </span>
                  <span style={{ fontSize: 11, color: '#A8A29E' }}>/ 100</span>
                </div>
                {/* Score bar */}
                <div style={{ height: 4, borderRadius: 2, background: '#E7E5E4', marginBottom: 10 }}>
                  <div style={{
                    height: 4, borderRadius: 2, width: `${atsResult.score}%`,
                    background: atsResult.score >= 80 ? '#16A34A' : atsResult.score >= 60 ? '#CA8A04' : '#DC2626',
                    transition: 'width 0.3s',
                  }} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 500, color: '#57534E', display: 'block', marginBottom: 6 }}>
                  改进建议
                </span>
                {atsResult.issues.map((issue, i) => (
                  <div key={i} style={{ fontSize: 11, color: '#78716C', marginBottom: 4, paddingLeft: 10, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#CA8A04' }}>•</span>
                    {issue}
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'color':
        return (
          <div>
            <span style={labelStyle}>输入行业获取配色建议</span>
            <Input
              size="small"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="例如：科技、金融、设计..."
              style={{ fontSize: 12, borderRadius: 6, marginBottom: 6 }}
              onPressEnter={handleColor}
            />
            <Button
              size="small" block loading={loading}
              disabled={!industry.trim()}
              onClick={handleColor}
              style={{
                borderRadius: 6, fontSize: 12, fontFamily: 'inherit',
                background: industry.trim() ? '#1C1917' : undefined,
                borderColor: industry.trim() ? '#1C1917' : undefined,
                color: industry.trim() ? '#FAFAF9' : undefined,
              }}
            >
              获取配色
            </Button>
            {colorResult && (
              <div style={resultBoxStyle}>
                {(['primary', 'secondary', 'accent'] as const).map((key) => (
                  <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: 4,
                      background: colorResult[key],
                      border: '1px solid #E7E5E4', flexShrink: 0,
                    }} />
                    <span style={{ fontSize: 11, color: '#57534E' }}>
                      {key === 'primary' ? '主色' : key === 'secondary' ? '辅色' : '强调色'}
                    </span>
                    <span style={{ fontSize: 11, color: '#A8A29E', marginLeft: 'auto' }}>
                      {colorResult[key]}
                    </span>
                  </div>
                ))}
                <Button
                  size="small" block
                  onClick={() => {
                    updateVariables({
                      primaryColor: colorResult.primary,
                      secondaryColor: colorResult.secondary,
                      accentColor: colorResult.accent,
                    });
                  }}
                  style={{ marginTop: 6, borderRadius: 6, fontSize: 12, fontFamily: 'inherit' }}
                >
                  应用配色
                </Button>
              </div>
            )}
          </div>
        );

      case 'bullet':
        return (
          <div>
            <span style={labelStyle}>职位</span>
            <Input
              size="small"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="例如：前端工程师"
              style={{ fontSize: 12, borderRadius: 6, marginBottom: 6 }}
            />
            <span style={labelStyle}>公司</span>
            <Input
              size="small"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="例如：字节跳动"
              style={{ fontSize: 12, borderRadius: 6, marginBottom: 6 }}
              onPressEnter={handleBullet}
            />
            <Button
              size="small" block loading={loading}
              disabled={!role.trim() || !company.trim()}
              onClick={handleBullet}
              style={{
                borderRadius: 6, fontSize: 12, fontFamily: 'inherit',
                background: (role.trim() && company.trim()) ? '#1C1917' : undefined,
                borderColor: (role.trim() && company.trim()) ? '#1C1917' : undefined,
                color: (role.trim() && company.trim()) ? '#FAFAF9' : undefined,
              }}
            >
              生成要点
            </Button>
            {bulletResult && (
              <div style={resultBoxStyle}>
                {bulletResult.map((point, i) => (
                  <div key={i} style={{ fontSize: 11, color: '#44403C', marginBottom: 6, paddingLeft: 12, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#1C1917', fontWeight: 600 }}>{i + 1}.</span>
                    {point}
                  </div>
                ))}
                <Button
                  size="small" block
                  onClick={() => applyToSelected(bulletResult.map((p, i) => `${i + 1}. ${p}`).join('\n'))}
                  style={{ marginTop: 6, borderRadius: 6, fontSize: 12, fontFamily: 'inherit' }}
                >
                  应用
                </Button>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={panelStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <span>🤖</span>
        <span>AI 助手</span>
      </div>

      {/* Section tabs */}
      <div style={{ borderBottom: '1px solid #F5F5F4' }}>
        {SECTIONS.map((sec) => (
          <button
            key={sec.key}
            onClick={() => handleSwitchSection(sec.key)}
            style={sectionBtnStyle(activeSection === sec.key)}
            onMouseEnter={(e) => {
              if (activeSection !== sec.key) e.currentTarget.style.background = '#FAFAF9';
            }}
            onMouseLeave={(e) => {
              if (activeSection !== sec.key) e.currentTarget.style.background = 'transparent';
            }}
          >
            <span style={{ fontSize: 14 }}>{sec.icon}</span>
            <span>{sec.label}</span>
          </button>
        ))}
      </div>

      {/* Active section content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 14px' }}>
        {renderContent()}
      </div>

      {/* Footer hint */}
      <div style={{
        padding: '8px 14px', borderTop: '1px solid #F5F5F4',
        fontSize: 10, color: '#A8A29E', background: '#FAFAF9',
      }}>
        AI 功能为预览版，即将接入真实 AI 服务
      </div>
    </div>
  );
}
