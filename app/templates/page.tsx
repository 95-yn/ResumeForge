'use client';

import { useState, useEffect, useRef, useCallback, useMemo, useDeferredValue } from 'react';
import Link from 'next/link';
import { asset } from '@/lib/base-path';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/Logo';
import { TEMPLATE_LIST as TEMPLATES } from '@/data/template-list';
import styles from './templates.module.css';

/* ─── Template metadata ────────────────────────────────────── */
interface TemplateMeta {
  desc: string;
  profession: string;
}

const TEMPLATE_META: Record<string, TemplateMeta> = {
  classic:      { desc: '标准单栏布局，适合大多数行业', profession: '通用' },
  professional: { desc: '深色顶部 header，商务专业感强', profession: '通用' },
  executive:    { desc: '高管风格，大气稳重，金色分隔线点缀', profession: '金融财会' },
  corporate:    { desc: '企业标准配色，蓝色主调，规整表格感', profession: '通用' },
  banking:      { desc: '金融行业，保守配色，衬线标题字体', profession: '金融财会' },
  consulting:   { desc: '咨询风格，左右对称双栏，黑白为主', profession: '金融财会' },
  sales:        { desc: '销售商务，突出业绩数字，橙色点缀', profession: '市场营销' },
  hr:           { desc: '人力资源，温暖色调，柔和圆角标签', profession: '通用' },
  manager:      { desc: '项目经理，时间线布局，蓝灰色调', profession: 'IT互联网' },
  legal:        { desc: '法律行业，严肃衬线字体，全黑白无彩色', profession: '通用' },
  modern:       { desc: '双栏布局，深色侧边栏突出个人品牌', profession: '通用' },
  fresh:        { desc: '蓝色竖条装饰，清新活力，年轻感十足', profession: '通用' },
  creative:     { desc: '渐变色 header，进度条技能，设计感满满', profession: '设计创意' },
  designer:     { desc: '设计师风格，深色侧边栏，大量留白', profession: '设计创意' },
  photographer: { desc: '摄影师风格，全宽深色 header，衬线大标题', profession: '设计创意' },
  writer:       { desc: '书籍排版风格，Garamond 字体，文学气质', profession: '教育学术' },
  marketing:    { desc: '市场营销，渐变标题底色，数据可视化风格', profession: '市场营销' },
  media:        { desc: '新媒体运营，卡片式布局，圆角边框', profession: '市场营销' },
  artist:       { desc: '艺术家，大标题左对齐，棕色调', profession: '设计创意' },
  architect:    { desc: '建筑师，极细线条，网格感布局，灰色调', profession: '设计创意' },
  minimal:      { desc: '衬线字体，极简排版，适合学术与创意行业', profession: '通用' },
  elegant:      { desc: '居中布局，衬线大标题，优雅简约风', profession: '通用' },
  clean:        { desc: '纯净白，只用黑色和灰色，无任何装饰线', profession: '通用' },
  swiss:        { desc: '瑞士排版风格，网格对齐，红色点缀', profession: '设计创意' },
  nordic:       { desc: '北欧风，大量留白，浅蓝灰配色', profession: '通用' },
  japanese:     { desc: '日式简约，竖线分隔，留白极多', profession: '通用' },
  paper:        { desc: '纸质感，微黄背景，打字机字体', profession: '教育学术' },
  mono:         { desc: '单色风格，只用灰色深浅变化', profession: '通用' },
  line:         { desc: '线条艺术，所有分隔都用细线装饰', profession: '通用' },
  space:        { desc: '呼吸感设计，超大行距与section间距', profession: '教育学术' },
  tech:         { desc: '等宽字体，tag 技能，暗色调技术风格', profession: 'IT互联网' },
  developer:    { desc: '终端风格，绿色 # 前缀，代码感设计', profession: 'IT互联网' },
  github:       { desc: 'GitHub Profile 风格，绿色点缀', profession: 'IT互联网' },
  terminal:     { desc: '完整终端风格，黑底绿字，仿真命令行', profession: 'IT互联网' },
  vscode:       { desc: 'VS Code 深色主题配色，侧边栏布局', profession: 'IT互联网' },
  data:         { desc: '数据科学家，表格风格展示技能，深蓝暗色', profession: 'IT互联网' },
  devops:       { desc: 'DevOps 工程师，pipeline 时间线样式', profession: 'IT互联网' },
  mobile:       { desc: '移动开发，圆角卡片，iOS 设计语言', profession: 'IT互联网' },
  fullstack:    { desc: '全栈工程师，上深下白分栏布局', profession: 'IT互联网' },
  ai:           { desc: 'AI/ML 工程师，蓝紫渐变 header', profession: 'IT互联网' },
  'campus-general': { desc: '简洁单栏，教育置前，通用校招首选', profession: '通用' },
  'campus-tech':    { desc: '深色 header，技能和项目突出，技术校招专属', profession: 'IT互联网' },
  'campus-finance': { desc: '保守正式，衬线字体，金融校招专属', profession: '金融财会' },
  'campus-design':  { desc: '有设计感的全黑白排版，设计校招专属', profession: '设计创意' },
  'campus-intern':  { desc: '简洁明快，左侧蓝色装饰线，实习生专属', profession: '通用' },
  'it-frontend':    { desc: '技能标签突出位置，深蓝 header，前端工程师专属', profession: 'IT互联网' },
  'it-backend':     { desc: '纯白底，技能分组，代码风格标签，后端工程师专属', profession: 'IT互联网' },
  'it-fullstack':   { desc: '双栏布局，深色侧边栏，全栈工程师专属', profession: 'IT互联网' },
  'finance-analyst':    { desc: '深蓝 section 标题，资质证书突出，金融分析师专属', profession: '金融财会' },
  'finance-accounting': { desc: '纯黑白衬线标题，极严谨，会计审计专属', profession: '金融财会' },
  'finance-banking':    { desc: '深灰 header，白底正文，银行保险专属', profession: '金融财会' },
  'design-ui':      { desc: '双栏深色侧边栏，UI设计师专属', profession: '设计创意' },
  'design-graphic': { desc: '全黑白，排版层次感，平面设计专属', profession: '设计创意' },
  'design-video':   { desc: '深黑 header，视频动画专属', profession: '设计创意' },
  'edu-teacher':    { desc: '深蓝 section 标题，教育经历置前，中小学教师专属', profession: '教育学术' },
  'edu-professor':  { desc: '衬线字体，学术风格，大学教授专属', profession: '教育学术' },
  'edu-trainer':    { desc: '灰色标题，温暖色调，培训讲师专属', profession: '教育学术' },
  'mkt-digital':  { desc: '深色 header，数据突出，数字营销专属', profession: '市场营销' },
  'mkt-brand':    { desc: 'Editorial 杂志感，纯黑白，品牌营销专属', profession: '市场营销' },
  'mkt-content':  { desc: '左侧 4px 装饰线，内容运营专属', profession: '市场营销' },
  'med-doctor':  { desc: '深蓝极保守，严谨专业，医生专属', profession: '医疗健康' },
  'med-nurse':   { desc: '暖灰标题，柔和色调，护士专属', profession: '医疗健康' },
  'med-pharma':  { desc: '深灰 header，白底正文，药学专属', profession: '医疗健康' },
  'pm-product':   { desc: '细线分隔，简洁克制，产品经理专属', profession: '产品运营' },
  'pm-operation': { desc: '浅灰左栏，白底主栏，运营经理专属', profession: '产品运营' },
  'pm-growth':    { desc: '深色 header，增长策略专属', profession: '产品运营' },
  'hr-recruiter': { desc: '暖灰标题，温暖亲和，招聘HRBP专属', profession: '人力行政' },
  'hr-training':  { desc: '纯黑白简洁，培训发展专属', profession: '人力行政' },
  'hr-admin':     { desc: '深灰 section 标题，行政管理专属', profession: '人力行政' },
  'legal-lawyer':     { desc: '全黑白衬线字体，严肃正式，律师专属', profession: '法律合规' },
  'legal-compliance': { desc: '深蓝标题，合规专员专属', profession: '法律合规' },
  'legal-ip':         { desc: '深灰标题，知识产权专属', profession: '法律合规' },
  'pm-metrics':       { desc: '海蓝细线分隔，暖墨单栏，数据指标清晰利落', profession: '产品运营' },
  'pm-canvas':        { desc: '大量留白单栏左对齐，沉稳高级砖红点缀', profession: '产品运营' },
  'campus-clean':     { desc: '清爽留白，墨青标题，教育项目优先', profession: '校招' },
  'campus-spark':     { desc: '砖红点缀，项目技能优先的清爽校招版式', profession: '校招' },
  'blueprint-engineer': { desc: '工程蓝图风，深蓝+青线网格，技术标注编号，机械/制造工程岗专属', profession: '工程制造' },
  'mech-engineer': { desc: '钛灰安全橙剖面斜线，尺寸标注工业精密感', profession: '工程制造' },
  'electrical-engineer': { desc: '深炭黄铜配色，电路走线分隔，技术克制专业', profession: '工程制造' },
  'civil-engineer': { desc: '水泥灰配安全橙，梁柱网格的硬核工程感', profession: '工程制造' },
  'quality-engineer': { desc: '检测绿红配色，勾叉清单与表格化严谨排版', profession: '工程制造' },
  'automotive-engineer': { desc: '哑光黑配赛车红，仪表盘刻度与速度线张力十足', profession: '工程制造' },
  'robotics-engineer': { desc: '深空灰电光蓝，坐标轴关节节点科技风', profession: '工程制造' },
  'process-engineer': { desc: '米白管道蓝，P&ID 流程线串联节点编号', profession: '工程制造' },
  'civil-servant': { desc: '党政红头线，正黑庄重，端正对称的体制风', profession: '政府事业' },
  'public-affairs': { desc: '藏蓝金徽章衬线，稳重权威的公务风', profession: '政府事业' },
  'social-worker': { desc: '暖橙米色调，圆角亲和，柔和分隔的社工简历', profession: '政府事业' },
  nonprofit: { desc: '草木绿配牛皮纸，质朴手账感公益简历', profession: '政府事业' },
  'policy-analyst': { desc: '石墨酒红学术衬线，引文式排版严谨', profession: '政府事业' },
  'customer-support': { desc: '天蓝对话气泡，圆润友好，亲和力满分', profession: '客户服务' },
  'call-center': { desc: '青绿耳机声波细节，整洁专业客服风', profession: '客户服务' },
  'cs-manager': { desc: '深蓝橙撞色，KPI数据条，专业管理质感', profession: '客户服务' },
  'success-manager': { desc: '紫白客户旅程时间线，现代专业，层级清晰', profession: '客户服务' },
  'supply-chain': { desc: '钢蓝琥珀流向箭头，节点网络感的供应链简历', profession: '物流供应链' },
  'warehouse-ops': { desc: '工业黄黑斑马线，货位编号硬朗排版', profession: '物流供应链' },
  'logistics-coord': { desc: '路网灰底红标记，里程碑节点串联履历的地图感简历', profession: '物流供应链' },
  procurement: { desc: '墨绿米色配色，清单表格线，规整专业的采购履历', profession: '物流供应链' },
  'hotel-manager': { desc: '金棕米色衬线优雅，五星留白质感', profession: '酒店餐饮' },
  'chef-resume': { desc: '炭黑铜金菜单式，主厨级专业质感', profession: '酒店餐饮' },
  barista: { desc: '牛皮纸质感配浓缩棕，杯测笔记式温暖简历', profession: '酒店餐饮' },
  sommelier: { desc: '酒红米金酒标式排版，优雅衬线尽显品鉴格调', profession: '酒店餐饮' },
  'event-planner': { desc: '香槟金细线点缀，优雅留白的高端宴会风', profession: '酒店餐饮' },
  'interior-designer': { desc: '燕麦赤陶材质色块，留白质感的设计师简历', profession: '建筑地产' },
  realtor: { desc: '藏青描金楼盘卡片，专业可信的地产质感', profession: '建筑地产' },
  'construction-pm': { desc: '安全橙撞炭灰，甘特进度条，工程项目硬核范', profession: '建筑地产' },
  'landscape-designer': { desc: '苔绿配米，等高线纹理，自然有机的景观设计简历', profession: '建筑地产' },
  'property-manager': { desc: '稳重蓝灰配米色，规整分区，可靠专业', profession: '建筑地产' },
  scientist: { desc: '白底靛蓝论文感，公式编号细节，学术严谨', profession: '科研学术' },
  'phd-academic': { desc: '米白墨色衬线，出版物列表风，严谨学术', profession: '科研学术' },
  'lab-researcher': { desc: '冷灰试管青，数据网格，精确严谨的科研履历', profession: '科研学术' },
  'research-data': { desc: '暗板岩配霓虹青，代码图表，数据分析感十足', profession: '科研学术' },
  postdoc: { desc: '象牙底配酒红衬线，学术出版般严谨', profession: '科研学术' },
  journalist: { desc: '报纸黑白刊头，栏线时间戳，新闻版式叙事', profession: '传媒影视' },
  filmmaker: { desc: '胶片黑配琥珀金，场记板条纹，浓郁电影质感', profession: '传媒影视' },
  broadcaster: { desc: '深红幕布配流金，聚光灯下的舞台主持质感', profession: '传媒影视' },
  'video-editor': { desc: '暗色时间轴轨道，关键帧点缀的专业剪辑师风格', profession: '传媒影视' },
  'content-creator': { desc: '活力渐变配圆角卡片，自带社媒数据感', profession: '传媒影视' },
  'account-exec': { desc: '藏蓝镶金，业绩数字夺目，沉稳专业可信', profession: '销售商务' },
  'retail-sales': { desc: '暖橙亲和卡片，明快活力，专业销售范', profession: '销售商务' },
  'biz-dev': { desc: '墨绿铜金，增长曲线握手意象，商务拓展专属', profession: '销售商务' },
  'sales-director': { desc: '深炭配金，业绩看板风，权威大气有冲击力', profession: '销售商务' },
  sustainability: { desc: '叶绿配再生纸，叶脉肌理，质朴环保的专业气质', profession: '环境能源' },
  'energy-engineer': { desc: '深蓝电光黄，电网节点感，专为清洁能源工程师打造', profession: '环境能源' },
  environmental: { desc: '水青米色调，水波纹与地层肌理，自然清新专业', profession: '环境能源' },
  agronomist: { desc: '麦黄土棕配田垄纹理，朴实沉稳的农艺师简历', profession: '农业食品' },
  'food-scientist': { desc: '奶油莓红配方表，清爽食品研发风', profession: '农业食品' },
  veterinarian: { desc: '暖绿米白配色，圆角亲和，关怀感十足的兽医简历', profession: '农业食品' },
  'fitness-coach': { desc: '炭黑电橙力量感，动感粗体的教练简历', profession: '体育健身' },
  'sports-coach': { desc: '赛道蓝黄计分板风，竞技感十足的教练简历', profession: '体育健身' },
  'yoga-instructor': { desc: '鼠尾草绿配米色，柔和留白平衡呼吸感', profession: '体育健身' },
  'athlete-pro': { desc: '动感斜切配号码字，运动品牌竞技感', profession: '体育健身' },
  'it-react': { desc: 'VSCode暗青配色，组件树侧栏与JSX标签感', profession: 'IT互联网' },
  'it-java': { desc: '暖白砖红配色，Spring分层结构，稳重专业', profession: 'IT互联网' },
  'it-golang': { desc: '极简白底搭配 Gopher 青，干净利落的后端工程师简历', profession: 'IT互联网' },
  'it-python': { desc: '米白底配Python蓝黄，缩进层次清晰，简洁专业', profession: 'IT互联网' },
  'it-data-eng': { desc: '暗板岩配管道青，ETL 流向管线感设计', profession: 'IT互联网' },
  'it-ml': { desc: '蓝紫渐变张量网格，神经网络层次感', profession: 'IT互联网' },
  'it-security': { desc: '黑底霓虹绿终端风，盾牌硬核安全感', profession: 'IT互联网' },
  'it-sre': { desc: '暗色监控仪表盘，告警橙指标条，运维可靠性风格', profession: 'IT互联网' },
  'it-cloud': { desc: '天蓝拓扑节点，架构图感，云端工程师专属', profession: 'IT互联网' },
  'it-qa': { desc: '勾叉绿红配色，用例表格风，严谨可读', profession: 'IT互联网' },
  'it-game': { desc: '深紫霓虹像素风，8bit 点缀的趣味开发简历', profession: 'IT互联网' },
  'it-blockchain': { desc: '黑金链块风，去中心化节点连接的极客气质', profession: 'IT互联网' },
  'pm-b2b': { desc: '克制灰蓝调，流程节点与权限表式版式，理性专业', profession: '产品运营' },
  'pm-consumer': { desc: '活力圆角卡片配色，用户旅程式动线，亲和又专业', profession: '产品运营' },
  'pm-ai-product': { desc: '蓝紫渐变模型闭环，前沿AI产品质感', profession: '产品运营' },
  'pm-platform': { desc: '网格模块化系统感，克制冷静的产品履历', profession: '产品运营' },
  'pm-data': { desc: '图表指标墙，蓝青数据感产品履历', profession: '产品运营' },
  'ops-growth': { desc: '漏斗曲线橙红数据，增长感十足的运营简历', profession: '产品运营' },
  'ux-researcher': { desc: '米靛配色，亲和图与旅程地图，满满洞察感', profession: '设计创意' },
  'motion-designer': { desc: '暗色霓虹渐变，关键帧轨道，动感十足', profession: '设计创意' },
  'brand-designer': { desc: '超大字与留白，logo网格构建识别系统', profession: '设计创意' },
  'product-designer': { desc: '双栏规范感版式，秩序留白的产品设计简历', profession: '设计创意' },
  'illustrator-pro': { desc: '暖彩手绘画框，童趣点缀，治愈系插画风', profession: '设计创意' },
  'design-3d': { desc: '暗色等距网格，渲染高光的立体设计', profession: '设计创意' },
  'fin-quant': { desc: '黑底终端绿，K线与公式精密风', profession: '金融财会' },
  'fin-ib': { desc: '藏青配金，严谨表格栏式，精英投行气质', profession: '金融财会' },
  'fin-risk': { desc: '深灰警示红配色，风险矩阵审慎质感', profession: '金融财会' },
  'fin-audit': { desc: '纯黑白衬线，规整表格线，极致严谨专业', profession: '金融财会' },
  'fin-fintech': { desc: '蓝紫渐变卡片化，现代金融科技专业风', profession: '金融财会' },
  'fin-vc': { desc: '米金优雅版式，组合列表配大留白显洞察力', profession: '金融财会' },
  'campus-medical': { desc: '洁白医蓝，严谨清晰，教育背景优先呈现', profession: '校招' },
  'campus-law': { desc: '黑白衬线庄重排版，竞赛奖项重点凸显', profession: '校招' },
  'campus-art': { desc: '大胆色块拼接，留白克制，个性张扬的艺术风', profession: '校招' },
  'campus-engineering': { desc: '蓝灰网格底纹，项目优先排版，理工科严谨利落', profession: '校招' },
  'campus-business': { desc: '藏蓝镶金，实习经历突出，商科求职专业之选', profession: '校招' },
  'campus-overseas': { desc: '衬线优雅·中英友好·国际申请感简历', profession: '校招' },
  magazine: { desc: 'editorial 大刊头，黑白对比，多栏栏线编排', profession: '通用' },
  brutalist: { desc: '粗黑边框超大字，原始有力的野兽派', profession: '通用' },
  bauhaus: { desc: '红黄蓝三原色几何块，构成主义张力版式', profession: '通用' },
  'art-deco': { desc: '金黑对称几何线脚，复古奢华气派', profession: '通用' },
  ledger: { desc: '米色纸张配细表格线，复古记账栏目，严谨可读', profession: '通用' },
  ticket: { desc: '虚线裁切锯齿边，编号条码票根质感', profession: '通用' },
  kraft: { desc: '牛皮底配墨色手账，质朴温暖贴纸感', profession: '通用' },
  letterpress: { desc: '米白压印阴影，经典衬线工艺感排版', profession: '通用' },
};

/* ─── Template editorial quotes ───────────────────────────── */
const TEMPLATE_QUOTES: Record<string, string> = {
  classic:      'a study in restraint',
  professional: 'tailored for the boardroom',
  modern:       'a quiet rebellion',
  elegant:      'serif at its most generous',
  minimal:      'less, more deliberately',
  tech:         'commits made visible',
  developer:    'pull request as portrait',
  manifesto:    'shouts when it must',
  executive:    'authority without ornament',
  corporate:    'the architecture of trust',
  banking:      'conservative by design',
  consulting:   'symmetry as argument',
  creative:     'permission to be seen',
  designer:     'white space as voice',
  architect:    'the grid is the idea',
  swiss:        'helvetica had an heir',
  nordic:       'cold air, warm paper',
  japanese:     'the pause is the point',
  terminal:     'the shell never lies',
  paper:        'typed in earnest',
  mono:         'tone without colour',
  clean:        'nothing left to remove',
  legal:        'measured and unapologetic',
  writer:       'sentences first',
  photographer: 'image before word',
  github:       'the commit history speaks',
  vscode:       'dark mode as lifestyle',
  data:         'structured for the analyst',
  devops:       'shipping is the metric',
  mobile:       'native in spirit',
  fullstack:    'top to bottom, no gaps',
  ai:           'models all the way down',
};

const FALLBACK_QUOTES = [
  'a measured statement',
  'composed for the eye',
  'patient in its choices',
  'unafraid of white',
  'a careful kind of confident',
];

function getQuote(slug: string, idx: number): string {
  return TEMPLATE_QUOTES[slug] ?? FALLBACK_QUOTES[idx % FALLBACK_QUOTES.length];
}

/* ─── Filter categories ────────────────────────────────────── */
const STYLE_FILTERS = [
  { key: 'all',        label: 'All' },
  { key: 'saved',      label: '★ Saved' },
  { key: 'business',   label: 'Business' },
  { key: 'creative',   label: 'Creative' },
  { key: 'minimal',    label: 'Minimal' },
  { key: 'tech',       label: 'Tech' },
  { key: 'campus',     label: 'Campus' },
  { key: 'profession', label: 'Profession' },
];

const PROFESSION_FILTERS = [
  { key: 'all',     label: 'ALL' },
  { key: 'IT互联网', label: 'IT' },
  { key: '金融财会', label: '金融' },
  { key: '设计创意', label: '设计' },
  { key: '教育学术', label: '教育' },
  { key: '市场营销', label: '营销' },
  { key: '医疗健康', label: '医疗' },
  { key: '产品运营', label: '产品' },
  { key: '人力行政', label: '人力' },
  { key: '法律合规', label: '法律' },
  { key: '工程制造', label: '工程' },
  { key: '政府事业', label: '政府' },
  { key: '客户服务', label: '客服' },
  { key: '物流供应链', label: '物流' },
  { key: '酒店餐饮', label: '酒店' },
  { key: '建筑地产', label: '地产' },
  { key: '科研学术', label: '科研' },
  { key: '传媒影视', label: '传媒' },
  { key: '销售商务', label: '销售' },
  { key: '环境能源', label: '能源' },
  { key: '农业食品', label: '农业' },
  { key: '体育健身', label: '体育' },
];

const CATEGORY_DISPLAY: Record<string, string> = {
  business:   'BUSINESS',
  creative:   'CREATIVE',
  minimal:    'MINIMAL',
  tech:       'TECH',
  profession: 'PROFESSION',
  campus:     'CAMPUS',
};

// 按类别轮转交错出固定顺序：相邻卡片类别不同、首屏多样，且每次刷新顺序一致（确定性，无随机）。
// 类别先后用一个固定偏好序，类别内保留 TEMPLATE_LIST 原顺序（classic 等仍排在 business 最前）。
const CATEGORY_ORDER = ['business', 'creative', 'tech', 'minimal', 'profession', 'campus'];
function interleaveByCategory<T extends { category: string }>(items: T[]): T[] {
  const byCat = new Map<string, T[]>();
  for (const it of items) {
    if (!byCat.has(it.category)) byCat.set(it.category, []);
    byCat.get(it.category)!.push(it);
  }
  // 先按偏好序，再追加偏好序里没列出的类别（按首次出现顺序），保证全部覆盖
  const cats = [
    ...CATEGORY_ORDER.filter(c => byCat.has(c)),
    ...[...byCat.keys()].filter(c => !CATEGORY_ORDER.includes(c)),
  ];
  const out: T[] = [];
  for (let i = 0; ; i++) {
    let added = false;
    for (const c of cats) {
      const arr = byCat.get(c)!;
      if (i < arr.length) { out.push(arr[i]); added = true; }
    }
    if (!added) break;
  }
  return out;
}

/* ─── Irregular margin rhythm (larger jumps) ─────────────── */
const MARGIN_RHYTHM = [40, 96, 56, 32, 72, 48];
function cardMarginBottom(idx: number): number {
  return MARGIN_RHYTHM[idx % MARGIN_RHYTHM.length];
}

/* ─── Masonry card with staggered reveal ──────────────────── */
interface MasonryCardProps {
  t: { slug: string; name: string; category: string };
  idx: number;
  onCardClick: (slug: string) => void;
  isFav: boolean;
  onToggleFav: (slug: string) => void;
}

// /editor 路由的 JS chunk 与 ?template 参数无关，全站共用，预取一次即可（浏览器 HTTP 缓存跨标签共享）。
let editorPrefetched = false;

function MasonryCard({ t, idx, onCardClick, isFav, onToggleFav }: MasonryCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

  // hover / focus 卡片时预热编辑器路由，点进去（新标签）更快可交互
  const prefetchEditor = useCallback(() => {
    if (editorPrefetched) return;
    editorPrefetched = true;
    try { router.prefetch('/editor'); } catch { /* ignore */ }
  }, [router]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger by index within a batch — capped to avoid huge delays
          const delay = (idx % 6) * 60;
          const timer = setTimeout(() => setVisible(true), delay);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [idx]);

  const meta = TEMPLATE_META[t.slug] ?? { desc: '', profession: '通用' };
  const num = String(idx + 1).padStart(3, '0');
  const catDisplay = CATEGORY_DISPLAY[t.category] ?? t.category.toUpperCase();
  const quote = getQuote(t.slug, idx);

  return (
    <div
      ref={ref}
      className={`${styles.card}${visible ? ` ${styles.cardVisible}` : ''}`}
      style={{ marginBottom: cardMarginBottom(idx) }}
      onClick={() => onCardClick(t.slug)}
      onMouseEnter={prefetchEditor}
      onFocus={prefetchEditor}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onCardClick(t.slug)}
      aria-label={`使用模板：${t.name}`}
    >
      {/* 收藏星标（点击不触发进编辑器） */}
      <button
        type="button"
        className={`${styles.cardFav}${isFav ? ` ${styles.cardFavOn}` : ''}`}
        onClick={(e) => { e.stopPropagation(); onToggleFav(t.slug); }}
        aria-label={isFav ? '取消收藏' : '收藏'}
        aria-pressed={isFav}
        title={isFav ? '取消收藏' : '收藏'}
      >{isFav ? '★' : '☆'}</button>

      {/* Marginalia */}
      <div className={styles.cardMarginalia}>
        <div className={styles.cardNum}>№ {num}</div>
        <p className={styles.cardPullQuote}>{quote}</p>
      </div>

      {/* Thumbnail */}
      <div className={styles.cardImgWrap}>
        {imgError ? (
          <div className={styles.cardImgPlaceholder}>
            <span className={styles.placeholderLabel}>preview pending</span>
          </div>
        ) : (
          <picture>
            <source srcSet={asset(`/thumbnails/${t.slug}.avif`)} type="image/avif" />
            <source srcSet={asset(`/thumbnails/${t.slug}.webp`)} type="image/webp" />
            <img
              src={asset(`/thumbnails/${t.slug}.png`)}
              alt={t.name}
              loading="lazy"
              decoding="async"
              className={styles.cardImg}
              onError={() => setImgError(true)}
            />
          </picture>
        )}
      </div>

      {/* Card body */}
      <div className={styles.cardBody}>
        <h2 className={styles.cardName}>{t.name}</h2>
        <p className={styles.cardTags}>
          {catDisplay} · {meta.profession !== '通用' ? meta.profession : 'UNIVERSAL'}
        </p>
        <p className={styles.cardDesc}>{meta.desc}</p>
      </div>
    </div>
  );
}

/* ─── Main component ───────────────────────────────────────── */
export default function TemplatesPage() {
  const router = useRouter();
  const [styleFilter, setStyleFilter]         = useState<string>('all');
  const [professionFilter, setProfessionFilter] = useState<string>('all');
  const [query, setQuery]                       = useState<string>('');
  const deferredQuery                           = useDeferredValue(query);

  // 收藏（localStorage 持久化）：星标模板，可用 ★ 筛选只看收藏
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  useEffect(() => {
    try { const raw = localStorage.getItem('resumeforge_favorites'); if (raw) setFavorites(new Set(JSON.parse(raw))); } catch { /* ignore */ }
  }, []);
  const toggleFavorite = useCallback((slug: string) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug); else next.add(slug);
      try { localStorage.setItem('resumeforge_favorites', JSON.stringify([...next])); } catch { /* ignore */ }
      return next;
    });
  }, []);

  // 浏览密度：舒展(大卡看全貌) ↔ 紧凑(小封面一屏看更多)，localStorage 记住偏好
  const [density, setDensity] = useState<'comfortable' | 'compact'>('comfortable');
  useEffect(() => {
    try { const d = localStorage.getItem('resumeforge_density'); if (d === 'compact') setDensity('compact'); } catch { /* ignore */ }
  }, []);
  const changeDensity = useCallback((d: 'comfortable' | 'compact') => {
    setDensity(d);
    try { localStorage.setItem('resumeforge_density', d); } catch { /* ignore */ }
  }, []);

  // 返回顶部按钮：滚动超过一屏后浮现
  const [showTop, setShowTop] = useState(false);

  // Hero title stagger — mount-triggered
  const [titlePhase, setTitlePhase] = useState(0);
  useEffect(() => {
    // Title: delay 300ms
    const t1 = setTimeout(() => setTitlePhase(1), 300);
    // Filter bar: delay 500ms
    const t2 = setTimeout(() => setTitlePhase(2), 500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Set page title
  useEffect(() => {
    document.title = 'ResumeForge — Template Archive';
    return () => { document.title = 'ResumeForge'; };
  }, []);

  // 固定的、按类别交错的顺序（确定性；首屏类别分散）
  const templates = useMemo(() => interleaveByCategory(TEMPLATES), []);
  const total = templates.length;

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return templates
      .filter(t => {
        const styleMatch = styleFilter === 'saved'
          ? favorites.has(t.slug)
          : (styleFilter === 'all' || t.category === styleFilter);
        const meta = TEMPLATE_META[t.slug];
        const profMatch = professionFilter === 'all' || (meta && meta.profession === professionFilter);
        if (!styleMatch || !profMatch) return false;
        if (!q) return true;
        return (
          t.slug.toLowerCase().includes(q) ||
          t.name.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          (meta?.desc?.toLowerCase().includes(q) ?? false) ||
          (meta?.profession?.toLowerCase().includes(q) ?? false)
        );
      });
    // 顺序直接沿用 templates（已类别交错、确定性），过滤保留相对顺序，不再额外排序。
  }, [templates, styleFilter, professionFilter, deferredQuery, favorites]);

  const isStale = query !== deferredQuery;

  const handleCardClick = useCallback((slug: string) => {
    const meta = TEMPLATE_META[slug];
    window.open(asset(`/editor?template=${slug}&profession=${encodeURIComponent(meta?.profession || '通用')}`), '_blank', 'noopener,noreferrer');
  }, []);

  const handleClearFilters = () => {
    setStyleFilter('all');
    setProfessionFilter('all');
    setQuery('');
  };

  // Cmd+K / Ctrl+K to focus search input
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const input = document.querySelector<HTMLInputElement>('input[aria-label="搜索模板"]');
        input?.focus();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // 滚动监听：超过约一屏高度显示返回顶部
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 640);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // titlePhase class helper
  const titlePhaseClass = titlePhase >= 1 ? (titlePhase >= 2 ? styles.phase2 : styles.phase1) : '';

  return (
    <div className={styles.page}>

      {/* ── 1. Top nav ── */}
      <header className={styles.header}>
        <Logo
          variant="archive"
          onClick={() => router.push('/landing')}
          aria-label="返回 ResumeForge 首页"
        />
        <span className={styles.headerRight}>
          <span className={styles.meta}>
            {total} Templates · {PROFESSION_FILTERS.length - 1} Professions · Updated 2026.06
          </span>
          <Link href="/faq" className={styles.headerLink}>Q&amp;A</Link>
        </span>
      </header>

      {/* ── 2. Compact Hero title ── */}
      <div className={styles.titleArea}>
        <div className={`${styles.titleDisplay}${titlePhase >= 1 ? ` ${titlePhaseClass}` : ''}`}>
          <h1 className={styles.displayTitle}>Templates</h1>
        </div>
        <span className={styles.subtitle} aria-live="polite">
          {(styleFilter !== 'all' || professionFilter !== 'all' || query.trim() !== '')
            ? <><strong className={styles.subtitleCount}>{filtered.length}</strong> of {total} specimens</>
            : <>A curated archive of {total} specimens</>}
        </span>
        {/* 浏览密度切换：舒展 ↔ 紧凑 */}
        <div className={styles.densityToggle} role="group" aria-label="浏览密度">
          <button
            type="button"
            className={`${styles.densityBtn}${density === 'comfortable' ? ` ${styles.densityActive}` : ''}`}
            onClick={() => changeDensity('comfortable')}
            aria-pressed={density === 'comfortable'}
          >舒展</button>
          <span className={styles.densitySep} aria-hidden="true">/</span>
          <button
            type="button"
            className={`${styles.densityBtn}${density === 'compact' ? ` ${styles.densityActive}` : ''}`}
            onClick={() => changeDensity('compact')}
            aria-pressed={density === 'compact'}
          >紧凑</button>
        </div>
      </div>

      {/* ── 3. Sticky filter bar ── */}
      <StickyFilterBar
        styleFilter={styleFilter}
        professionFilter={professionFilter}
        query={query}
        onQueryChange={setQuery}
        isStale={isStale}
        onStyleChange={setStyleFilter}
        onProfessionChange={setProfessionFilter}
        titlePhase={titlePhase}
      />

      {/* ── 4. Main content ── */}
      <div className={styles.content}>
        {filtered.length === 0 ? (
          /* Empty state */
          <div className={styles.emptyState}>
            <p className={styles.emptyHeadline}>Nothing in this corner of the archive.</p>
            <p className={styles.emptyHint}>Try another combination or clear filters.</p>
            <button className={styles.emptyClear} onClick={handleClearFilters}>
              Clear filters
            </button>
          </div>
        ) : (
          /* ── Masonry archive ── */
          <div className={`${styles.archive}${density === 'compact' ? ` ${styles.archiveCompact}` : ''}`}>
            {filtered.map((t, idx) => (
              <MasonryCard
                key={t.slug}
                t={t}
                idx={idx}
                onCardClick={handleCardClick}
                isFav={favorites.has(t.slug)}
                onToggleFav={toggleFavorite}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── 5. Footer ── */}
      <footer className={styles.footer}>
        <span className={styles.footerColophon}>
          ResumeForge · {total} Specimens · Set in Fraunces &amp; JetBrains Mono · 2026
        </span>
      </footer>

      {/* ── 返回顶部（滚动后浮现）── */}
      <button
        type="button"
        className={`${styles.backToTop}${showTop ? ` ${styles.backToTopShow}` : ''}`}
        onClick={scrollToTop}
        aria-label="返回顶部"
        tabIndex={showTop ? 0 : -1}
      >
        <span className={styles.backToTopArrow} aria-hidden="true">↑</span>
        <span className={styles.backToTopLabel}>TOP</span>
      </button>
    </div>
  );
}

/* ─── Sticky filter bar component ────────────────────────── */
interface StickyFilterBarProps {
  styleFilter: string;
  professionFilter: string;
  query: string;
  onStyleChange: (key: string) => void;
  onProfessionChange: (key: string) => void;
  onQueryChange: (q: string) => void;
  titlePhase: number;
  isStale: boolean;
}

function StickyFilterBar({ styleFilter, professionFilter, query, onStyleChange, onProfessionChange, onQueryChange, titlePhase, isStale }: StickyFilterBarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filterBarClass = [
    styles.filterBar,
    styles.filterBarFade,
    titlePhase >= 2 ? styles.phase2 : '',
    scrolled ? styles.scrolled : '',
  ].filter(Boolean).join(' ');

  return (
    <nav
      className={filterBarClass}
      aria-label="Template filters"
    >
      {/* Style group */}
      <div className={styles.filterGroup} role="group" aria-label="Style filter">
        <span className={styles.filterGroupLabel}>Style</span>
        {STYLE_FILTERS.map((f) => (
          <button
            key={f.key}
            className={`${styles.filterBtnStyle}${styleFilter === f.key ? ` ${styles.active}` : ''}`}
            onClick={() => onStyleChange(f.key)}
            aria-pressed={styleFilter === f.key}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className={styles.filterDivider} aria-hidden="true" />

      {/* Profession group：标签静止 + chip 在内层横向滚动（职业多，避免撑爆筛选栏） */}
      <div className={`${styles.filterGroup} ${styles.filterGroupScroll}`} role="group" aria-label="Profession filter">
        <span className={styles.filterGroupLabel}>Profession</span>
        <div className={styles.filterScroll}>
          {PROFESSION_FILTERS.map((f) => (
            <button
              key={f.key}
              className={`${styles.filterBtnProf}${professionFilter === f.key ? ` ${styles.active}` : ''}`}
              onClick={() => onProfessionChange(f.key)}
              aria-pressed={professionFilter === f.key}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterDivider} aria-hidden="true" />

      {/* Search */}
      <div className={styles.searchWrap} role="search">
        <span className={styles.searchIcon} aria-hidden="true">⌕</span>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="搜索模板…  /  search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          aria-label="搜索模板"
          style={{ opacity: isStale ? 0.55 : 1, transition: 'opacity 150ms ease-out' }}
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange('')}
            className={styles.searchClear}
            aria-label="清除搜索"
            title="清除"
          >×</button>
        )}
      </div>
    </nav>
  );
}
