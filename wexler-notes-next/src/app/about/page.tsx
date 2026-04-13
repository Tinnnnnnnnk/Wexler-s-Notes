// src/app/about/page.tsx
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'My Little World',
  description: '在风吹过的季节里，记录我的日常与灵感',
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      {/* Background Elements */}
      <div className={styles.background}>
        <div className={`${styles.cloud} ${styles.cloud1}`}></div>
        <div className={`${styles.cloud} ${styles.cloud2}`}></div>
        <div className={styles.sakuraContainer}>
          {/* 樱花点缀 (CSS实现的简单漂浮物) */}
          <div className={`${styles.sakura} ${styles.s1}`}></div>
          <div className={`${styles.sakura} ${styles.s2}`}></div>
          <div className={`${styles.sakura} ${styles.s3}`}></div>
          <div className={`${styles.sakura} ${styles.s4}`}></div>
          <div className={`${styles.sakura} ${styles.s5}`}></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>Harukaze</div>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>返回首页</Link>
          <a href="#about" className={styles.navLink}>关于我</a>
          <a href="#projects" className={styles.navLink}>作品</a>
          <a href="#contact" className={styles.navLink}>联系</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>Welcome to My Space</h1>
          <p className={styles.subtitle}>在风吹过的季节里，记录我的日常与灵感</p>
          <div className={styles.heroButtons}>
            <a href="#about" className={styles.btnPrimary}>了解我</a>
            <a href="#projects" className={styles.btnSecondary}>查看作品</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>- 关于我 -</h2>
          <div className={styles.cardGrid} style={{ gridTemplateColumns: '1fr' }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>你好，我是一名向往自由的创造者</h3>
              <p className={styles.cardDesc}>
                喜欢安静的午后、轻柔的微风，以及在代码与设计之间寻找平衡。<br/>
                这里是我的个人空间，收集着我喜欢的文字、尝试过的项目，和生活中的小确幸。<br/>
                希望在这个快节奏的世界里，能为你提供片刻的宁静与治愈。
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>- 作品展 -</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>治愈系待办事项</h3>
              <p className={styles.cardDesc}>一个极其简单的 Todo 应用，没有截止日期，没有压力，只有柔和的色彩和轻轻的提示音。</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>风之物语摄影集</h3>
              <p className={styles.cardDesc}>收录了去各地旅行时拍摄的天空与街道，用镜头捕捉风的形状。</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>轻小说阅读器</h3>
              <p className={styles.cardDesc}>专注排版与沉浸感的阅读器，提供像纸质书般温暖的阅读体验。</p>
            </div>
          </div>
        </section>

        {/* Tags Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>- 兴趣标签 -</h2>
          <div className={styles.tags}>
            <span className={styles.tag}>摄影</span>
            <span className={styles.tag}>前端开发</span>
            <span className={styles.tag}>轻小说</span>
            <span className={styles.tag}>咖啡</span>
            <span className={styles.tag}>UI设计</span>
            <span className={styles.tag}>散步</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.socials}>
          <a href="#" className={styles.socialLink}>Github</a>
          <a href="#" className={styles.socialLink}>Twitter</a>
          <a href="#" className={styles.socialLink}>Email</a>
        </div>
        <p>与作品、文字和想法相遇的地方。</p>
        <p style={{ marginTop: '10px', fontSize: '0.8rem' }}>© 2026 Harukaze. All rights reserved.</p>
      </footer>
    </div>
  );
}
