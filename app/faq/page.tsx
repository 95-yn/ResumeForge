'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '@/components/Logo';
import styles from './faq.module.css';

/* ─── Feature pillars（核心卖点） ───────────────────────── */
const PILLARS = [
  {
    num: '01',
    kicker: 'FOREVER FREE',
    title: '永久免费',
    body:
      '72 套模板，全部 0 元。导出无水印、无次数限制、无会员墙、无「高级模板」二次收费。我们不会把本该免费的东西卖给你——简历是你找工作的工具，不是我们的生意。',
    shots: ['classic', 'executive', 'consulting'],
  },
  {
    num: '02',
    kicker: 'YOUR DATA STAYS HOME',
    title: '数据只属于你',
    body:
      '所有内容只保存在你自己浏览器的本地存储里（localStorage），不上传、不联网、不经过任何服务器。我们看不到，也不想看到你的简历。拔掉网线也能写，关掉标签页数据还在。',
    shots: ['clean', 'elegant', 'minimal'],
  },
  {
    num: '03',
    kicker: 'TYPESET, NOT TEMPLATED',
    title: '印刷级排版',
    body:
      '每一套都按字体样本（type specimen）的标准来设计：层级、字距、留白都经过推敲，而不是「换个颜色」的流水线模板。导出标准 A4 PDF，打印即用，HR 打开就是专业的第一印象。',
    shots: ['designer', 'architect', 'swiss'],
  },
  {
    num: '04',
    kicker: 'ZERO FRICTION',
    title: '打开即用',
    body:
      '无需注册、无需登录、无需安装任何软件。选模板 → 填内容 → 导出，三步搞定。实时预览所见即所得，浏览器原生一键导出 PDF。从打开到拿到简历，最快只要几分钟。',
    shots: ['developer', 'ai', 'fullstack'],
  },
];

/* ─── FAQ（常见问题） ──────────────────────────────────── */
const FAQS = [
  {
    q: '真的永久免费吗？会不会有隐藏收费？',
    a: '是，真的免费。全部 72 套模板都免费，导出无水印、无次数限制，没有会员墙，也没有「这套是高级模板请付费」的套路。不需要绑卡、不需要订阅。',
  },
  {
    q: '我的简历数据会被上传吗？安全吗？',
    a: '不会上传。你填写的所有内容只保存在你当前这台设备、这个浏览器的本地存储（localStorage）里，不会发送到任何服务器，我们也无从查看。换句话说，数据安全的边界就是你自己的电脑。',
  },
  {
    q: '需要注册或登录账号吗？',
    a: '完全不需要。打开网页就能直接用，没有账号、没有密码、没有邮箱验证。也正因为没有账号体系，我们不会收集你的任何个人信息。',
  },
  {
    q: '怎么导出 PDF？',
    a: '编辑完成后，用浏览器的「打印 → 另存为 PDF」即可。每套模板都已按 A4 纸张调好版心和分页，导出就是印刷级效果，无需额外软件。',
  },
  {
    q: '换设备或换浏览器，数据会丢吗？',
    a: '因为数据只存在本地、不上传云端，所以换设备不会自动同步。建议在原设备上先导出 PDF 随身携带；同一台设备、同一个浏览器再次打开，内容都还在。',
  },
  {
    q: '支持中文和英文简历吗？',
    a: '都支持。模板对中英文混排都做了字体与间距优化，无论是中文求职、英文 Resume 还是双语简历，排版都不会乱。',
  },
  {
    q: '数据具体存在哪里？我想彻底删除怎么办？',
    a: '存在浏览器的 localStorage 里。想彻底删除，只需在浏览器设置中清除本站点的数据，或使用无痕模式编辑（关闭即清空）。删除即不可恢复，因为本来就没有别的副本。',
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={styles.root}>
      {/* NAV */}
      <nav className={styles.nav}>
        <Logo variant="landing" href="/landing" aria-label="ResumeForge 品牌页" />
        <Link href="/" className={styles.navCta}>开始创建 →</Link>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <span className={`${styles.kicker} ${styles.mono}`}>§ Q&amp;A — 关于 ResumeForge</span>
        <h1 className={`${styles.heroTitle} ${styles.display}`}>
          Free.<br />
          Local.<br />
          Yours.
        </h1>
        <p className={styles.heroLede}>
          ResumeForge 是一个永久免费、数据只留在本地的在线简历工具。
          没有账号，没有上传，没有收费墙——你只管写，剩下的我们替你想好了。
        </p>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={`${styles.statNum} ${styles.display}`}>72</span>
            <span className={`${styles.statLabel} ${styles.mono}`}>专业模板</span>
          </div>
          <div className={styles.stat}>
            <span className={`${styles.statNum} ${styles.display}`}>¥0</span>
            <span className={`${styles.statLabel} ${styles.mono}`}>永久免费</span>
          </div>
          <div className={styles.stat}>
            <span className={`${styles.statNum} ${styles.display}`}>0</span>
            <span className={`${styles.statLabel} ${styles.mono}`}>数据上传</span>
          </div>
          <div className={styles.stat}>
            <span className={`${styles.statNum} ${styles.display}`}>0</span>
            <span className={`${styles.statLabel} ${styles.mono}`}>需要的账号</span>
          </div>
        </div>
      </section>

      {/* ── PILLARS（卖点 + 截图） ───────────────────────── */}
      <section className={styles.pillars}>
        {PILLARS.map((p, i) => (
          <div
            className={`${styles.pillar} ${i % 2 === 1 ? styles.pillarReverse : ''}`}
            key={p.num}
          >
            <div className={styles.pillarText}>
              <span className={`${styles.pillarNum} ${styles.display}`}>{p.num}</span>
              <span className={`${styles.pillarKicker} ${styles.mono}`}>{p.kicker}</span>
              <h2 className={`${styles.pillarTitle} ${styles.display}`}>{p.title}</h2>
              <p className={styles.pillarBody}>{p.body}</p>
            </div>

            <div className={styles.pillarShots} aria-hidden="true">
              {p.shots.map((slug, si) => (
                <img
                  key={slug}
                  src={`/thumbnails/${slug}.png`}
                  alt=""
                  className={styles.shot}
                  style={{ ['--si' as string]: si }}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── PRIVACY PROMISE（数据安全承诺） ───────────────── */}
      <section className={styles.promise}>
        <span className={`${styles.kicker} ${styles.mono}`}>§ The Promise — 隐私承诺</span>
        <p className={`${styles.promiseLine} ${styles.display}`}>
          我们没有你的数据库。<br />
          因为<span className={styles.promiseMark}>你的数据从未离开过你的电脑</span>。
        </p>
        <div className={styles.promiseGrid}>
          <div className={styles.promiseItem}>
            <span className={`${styles.promiseTag} ${styles.mono}`}>LOCAL ONLY</span>
            <p>内容写入浏览器 localStorage，全程不联网、不上传、不缓存到任何服务器。</p>
          </div>
          <div className={styles.promiseItem}>
            <span className={`${styles.promiseTag} ${styles.mono}`}>NO ACCOUNT</span>
            <p>不需要注册登录，我们不收集邮箱、手机号或任何能定位到你的信息。</p>
          </div>
          <div className={styles.promiseItem}>
            <span className={`${styles.promiseTag} ${styles.mono}`}>YOU OWN DELETE</span>
            <p>想删除？清除浏览器站点数据即可彻底抹掉，因为根本没有别的副本。</p>
          </div>
        </div>
      </section>

      {/* ── FAQ（手风琴） ────────────────────────────────── */}
      <section className={styles.faq}>
        <div className={styles.faqHead}>
          <span className={`${styles.kicker} ${styles.mono}`}>§ Frequently Asked — 常见问题</span>
          <h2 className={`${styles.faqTitle} ${styles.display}`}>Questions &amp; Answers</h2>
        </div>

        <div className={styles.faqList}>
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}
              >
                <button
                  className={styles.faqQ}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`${styles.faqQNum} ${styles.mono}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.faqQText}>{item.q}</span>
                  <span className={styles.faqToggle} aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div className={styles.faqA} hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className={styles.cta}>
        <span className={`${styles.kicker} ${styles.mono}`}>§ Begin</span>
        <Link href="/" className={`${styles.ctaLink} ${styles.display}`}>
          挑一套模板，开始写 ⟶
        </Link>
        <p className={styles.ctaSub}>
          72 套样本，0 元，0 上传，0 门槛。<br />
          选好，填上，导出。页面会替你记住一切。
        </p>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <span className={styles.footerMeta}>
          &copy; 2026 RF &nbsp;·&nbsp; FOREVER FREE &nbsp;·&nbsp; LOCAL-FIRST
        </span>
        <span className={styles.footerMeta}>
          <Link href="/landing" className={styles.footerLink}>Brand</Link>
          &nbsp;·&nbsp;
          <Link href="/" className={styles.footerLink}>Templates</Link>
          &nbsp;·&nbsp;
          <Link href="/editor" className={styles.footerLink}>Editor</Link>
        </span>
      </footer>
    </div>
  );
}
