import styles from './OurCompany.module.css';

import teamImage from '../assets/images/Integrated_Biosciences-176-scaled.jpg';
import btnDark from '../assets/images/btn-dark.svg';   
import btnGreen from '../assets/images/btn-green.svg'; 

export function OurCompany() {
  return (
    <section className={styles.companySection}>
      <div className={styles.inner}>
        <div className={styles.panelCap}></div>

        <p className={styles.sectionLabel}>
          <span className={styles.greenSquare}></span> OUR COMPANY
        </p>

        <div className={styles.contentRow}>
          <img
            src={teamImage}
            alt="Scientists at work"
            className={styles.heroImage}
          />

          <div className={styles.textContent}>

            <h3 className={styles.sectionTitle}>
              Bold research to unlock small molecule discovery for human health and aging.
            </h3>

            <div className={styles.textColumns}>
              <p>
                We are advancing a pipeline of novel small molecule therapeutics by unraveling 
                complex biology with optogenetics, chemistry, and AI. Built on pioneering science 
                from our scientific co-founder, Prof. Jim Collins at MIT, and powered by a world-class 
                team of innovators, we are pushing the boundaries of how biology can be understood and engineered.
              </p>
              <div>
                <p>
                  Our discoveries have been repeatedly featured in <em>Nature</em>, <em>Nature Aging</em>, 
                  <em>Nature Protocols</em>, and <em>Cell</em>, underscoring the impact of our approach.
                </p>
                <p>
                  Today, our mission targets age-related diseases, while our ultimate ambition is far bolder: 
                  to fundamentally rewrite the biology of aging.
                </p>
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.btnDiscover}>
                <img src={btnDark} alt="Botão Descobrir" className={styles.btnBackground} />
                <span className={styles.btnText}>LEARN MORE ABOUT US</span>
              </button>
              <button className={styles.btnArrow}>
                <img src={btnGreen} alt="Botão Seta" className={styles.btnBackground} />
                <span className={styles.btnTextArrow}>→</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
