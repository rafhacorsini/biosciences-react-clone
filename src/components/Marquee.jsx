import { useEffect, useRef } from 'react';
import styles from './Marquee.module.css';

export function Marquee() {
  const trackRef = useRef(null);
  const phraseRef = useRef(null);
  const rafRef = useRef(null);
  
  const offsetRef = useRef(0);

  useEffect(() => {
    const loop = () => {
      offsetRef.current -= 1.5;

      const phraseWidth = phraseRef.current?.offsetWidth || 0;

      if (phraseWidth > 0) {
        if (offsetRef.current <= -phraseWidth) {
          offsetRef.current += phraseWidth; 
        }
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className={styles.marqueeSection}>
      <div className={styles.marqueeTrack} ref={trackRef}>
        <div className={styles.marqueeText} ref={phraseRef}>
          Integrated Biosciences
        </div>
        <div className={styles.marqueeText}>
          Integrated Biosciences
        </div>
        <div className={styles.marqueeText}>
          Integrated Biosciences
        </div>
        <div className={styles.marqueeText}>
          Integrated Biosciences
        </div>
      </div>
    </section>
  );
}
