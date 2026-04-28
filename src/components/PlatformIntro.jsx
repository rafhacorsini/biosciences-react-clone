import { useEffect, useRef, useState } from 'react';
import styles from './PlatformIntro.module.css';

import btnDark from '../assets/images/btn-dark.svg';   
import btnGreen from '../assets/images/btn-green.svg'; 

const titleWords = [
  { word: 'Combining', faded: false },
  { word: 'synthetic', faded: false },
  { word: 'biology,', faded: false },
  { word: 'chemistry,', faded: false },
  { word: 'and', faded: false },
  { word: 'AI', faded: false },
  { word: 'into', faded: false },
  { word: 'an', faded: false },
  { word: 'engine', faded: true },
  { word: 'of', faded: true },
  { word: 'discovery.', faded: true },
];

export function PlatformIntro() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.platformSection} ref={sectionRef}>
      <div className={styles.panelCap}></div>
      <div className={styles.leftCol}>
        <p className={styles.sectionLabel}>
           <span className={styles.greenSquare}></span> THE INTEGRATED PLATFORM
        </p>
      </div>

      <div className={styles.rightCol}>
        <h2 className={`${styles.curtainTitle} ${isVisible ? styles.visible : ''}`}>
          {titleWords.map((item, index) => (
             <span 
                key={index} 
                className={`${styles.wordCurtain} ${item.faded ? styles.faded : ''}`} 
                style={{ '--delay': index }}
             >
                <span className={styles.wordInner}>{item.word}{" "}</span>
             </span>
          ))}

        </h2>

        <p className={styles.description}>
          Our platform enables precise, dynamic control of biological targets and pathways, 
          generating high-fidelity datasets that, combined with advanced AI, unlock systematic 
          exploration of previously inaccessible chemical space. At its core are our ultra-large, 
          in-house aging datasets, which provide a rich foundation for target identification 
          and therapeutic discovery.
        </p>

        <div className={styles.actions}>
            <button className={styles.btnDiscover}>
                <img src={btnDark} alt="Botão Descobrir" className={styles.btnBackground} />
                <span className={styles.btnText}>DISCOVER OUR PLATFORM</span>
            </button>
            
            <button className={styles.btnArrow}>
                <img src={btnGreen} alt="Botão Seta" className={styles.btnBackground} />
                <span className={styles.btnTextArrow}>→</span> 
            </button>
        </div>

      </div>
    </section>
  );
}
