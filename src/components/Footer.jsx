import styles from './Footer.module.css'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.bgOverlay}></div>

      <div className={styles.container}>

        <div className={styles.topSection}>
          <div className={styles.colLeft}>
            <h2 className={styles.headline}>
              We are advancing small molecule<br />
              therapeutics for age-related diseases.
            </h2>
            <div className={styles.actions}>
              <a href="#" className={styles.workBtn}>WORK WITH US</a>
              <a href="#" className={styles.arrowBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12h13M13 5l7 7-7 7" stroke="#22313A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <button className={styles.scrollUpBtn} onClick={scrollToTop} aria-label="Voltar ao topo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>

        <div className={styles.navSection}>
          <div className={styles.navCol}>
            <span className={styles.colLabel}>NAVIGATE</span>
            <nav className={styles.navLinks}>
              <a href="#">Platform</a>
              <a href="#">Company</a>
              <a href="#">Newsroom</a>
              <a href="#">Work with us</a>
            </nav>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.navCol}>
            <span className={styles.colLabel}>CONNECT</span>
            <nav className={styles.navLinks}>
              <a href="#">LinkedIn</a>
              <a href="#">X</a>
            </nav>
          </div>
        </div>

        <div className={styles.baseSection}>
          <span className={styles.copyright}>
            © 2026 INTEGRATED BIOSCIENCES. ALL RIGHTS RESERVED.
          </span>
          <h1 className={styles.brandMark}>IntegratedBio</h1>
        </div>

      </div>
    </footer>
  )
}
