import { useEffect, useRef, useState, useCallback } from "react";
import styles from './WhatWeDo.module.css';

const sliderData = [
  "Aging is an intrinsically complex systems biology challenge. Our Integrated Platform is purpose-built to unravel its intricate networks.",
  "Bridging synthetic biology, chemistry, and AI, we interrogate disease biology with unprecedented control and precision, unlocking a chemical space that was previously inaccessible.",
  "Through the convergence of high-fidelity biological and chemical data with advanced AI, we unlock new therapeutic opportunities for age-related diseases."
];


const calculateProgress = (rect, windowHeight) => {
  const scrollableDistance = rect.height - windowHeight;
  let progress = -rect.top / scrollableDistance;
  return Math.min(Math.max(progress, 0), 1);
};

const getActiveBlock = (progress, totalSlides) => {
  const blockSize = 1 / totalSlides;
  let index = Math.floor(progress / blockSize);
  
  if (index >= totalSlides) index = totalSlides - 1;
  
  const blockStart = index * blockSize;
  const lightProgress = ((progress - blockStart) / blockSize) * 100;
  
  return { currentIndex: index, lightProgress };
};

const illuminateWords = (textElement, percentage) => {
  if (!textElement) return;
  
  const wordSpans = textElement.querySelectorAll('span');
  const limitToLight = Math.ceil((percentage / 100) * wordSpans.length);

  wordSpans.forEach((span, index) => {
    span.style.opacity = index < limitToLight ? '1' : '0.2';
  });
};

export function WhatWeDo() {
  const sectionRef = useRef(null);
  const progressBarRef = useRef(null);
  const textRefs = useRef([]);
  const ticking = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);


  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        if (!sectionRef.current) {
          ticking.current = false;
          return;
        }

        const rect = sectionRef.current.getBoundingClientRect();
        const progress = calculateProgress(rect, window.innerHeight);

        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${progress * 100}%`;
        }

        const { currentIndex, lightProgress } = getActiveBlock(progress, sliderData.length);

        setActiveIndex((prev) => (prev !== currentIndex ? currentIndex : prev));

        illuminateWords(textRefs.current[currentIndex], lightProgress);

        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Safe DOM Ref Assignment
  const setContentRef = (el, ind) => {
    if (el) textRefs.current[ind] = el;
  };

  return (
    <section className={styles.whatWeDoWrapper} ref={sectionRef}>
      <div className={styles.stickyContent}>
        <p className={styles.sectionLabel}>WHAT WE DO</p>

        <div className={styles.progressTrack}>
          <div className={styles.progressBar} ref={progressBarRef}></div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.leftCol}>
            <div className={styles.counterBadge} aria-live="polite">
              {String(activeIndex + 1).padStart(2, '0')} / {String(sliderData.length).padStart(2, '0')}
            </div>
          </div>

          <div className={styles.rightCol}>
            {sliderData.map((text, ind) => (
              <h2
                key={ind}
                ref={(el) => setContentRef(el, ind)}
                className={`${styles.revealText} ${activeIndex === ind ? styles.activeSlide : ''}`}
                aria-hidden={activeIndex !== ind}
              >
                {text.split(/\s+/).map((word, i) => (
                  <span key={i} className={styles.wordNode}>
                    {word}{" "}
                  </span>
                ))}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
