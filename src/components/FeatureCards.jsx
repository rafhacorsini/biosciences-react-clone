import { useEffect, useRef, useState } from 'react';
import styles from './FeatureCards.module.css';
import icon1 from '../assets/images/icon-1.svg';
import icon2 from '../assets/images/icon-2.svg';
import icon3 from '../assets/images/icon-3.svg';

const cardsData = [
  {
    number: '01.',
    icon: icon1,
    title: 'Optogenetics',
    description: 'We harness light to control biology with unmatched precision.',
    bgClass: 'greenLight',
    dark: false,
  },
  {
    number: '02.',
    icon: icon2,
    title: 'Chemistry',
    description: 'We apply the latest chemistry tools to optimize our drug discovery.',
    bgClass: 'dark',
    dark: true,
  },
  {
    number: '03.',
    icon: icon3,
    title: 'AI',
    description: 'Our platform is powered by an AI engine fueled by differentiated datasets.',
    bgClass: 'grayLight',
    dark: false,
  },
];

export function FeatureCards() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.cardsGrid} ref={containerRef}>
      {cardsData.map(({ number, icon, title, description, bgClass, dark }, index) => (
        <div
          key={index}
          className={`
            ${styles.card} 
            ${styles[bgClass]} 
            ${dark ? styles.textLight : styles.textDark}
            ${isVisible ? styles.visible : ''}
          `}
          style={{ '--delay': index }}
        >
          <div className={styles.cardHeader}>
            <img src={icon} alt={`${title} icon`} className={styles.icon} />
            <span className={styles.number}>{number}</span>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
