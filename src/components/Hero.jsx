import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

import heroVideo from '../assets/images/video-bg.mp4';
import btnDark from '../assets/images/btn-dark.svg';
import btnGreen from '../assets/images/btn-green.svg'; 

export function Hero() {
    
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const lidarComScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', lidarComScroll);
        return () => window.removeEventListener('scroll', lidarComScroll);
    }, []);

    return(
        <>
            <video 
                src={heroVideo} 
                className={`${styles.bgVideo} ${isScrolled ? styles.videoEsticado : ''}`}
                autoPlay 
                loop 
                muted 
                playsInline
            />
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        Engineering the future<br/>
                        of aging medicine.
                    </h1>

                    <div className={styles.heroFooter}>
                        <p className={styles.subtitle}>
                            We unravel complex biology with optogenetics, chemistry, and <br />
                            AI for small molecule therapeutic discovery.
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
                </div>

            </div>
        </>
    )
}
