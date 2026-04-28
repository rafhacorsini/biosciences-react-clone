import { useState, useEffect } from "react";
import styles from './Navbar.module.css'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function toggleMenu(){
        setIsOpen(!isOpen);

    }

    return (
        <>
        <header className={`${styles.navbar} ${isOpen ? styles.navbarDark : ''}`}>
            <div className={`${styles.logo} ${isScrolled ? styles.logoScrolled : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>
            IntegratedBio
            </div>

            <button className={styles.menuToggle} onClick={toggleMenu}>
          
            {isOpen ? (
                
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 7L7 17M7 7l10 10" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : (
                
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 10h10M7 14h10" strokeLinecap="round" strokeLinejoin="round"/></svg>
            )}
            </button>

            <nav className={styles.navLinksDesktop}>
                <a href="#plataform">Plataforma</a>
                <a href="#empresa">Empresa</a>
                <a href="noticias#">Notícias</a>
                <a href="#trabalhe" className={styles.btnWork}>Trabalhe com a gente</a>
            </nav>

        </header>
        <div className={`${styles.mobileOverlay} ${isOpen? styles.open : ''}`}>
            <nav className={styles.mobileLinks}>
                <a href="plataforma" onClick={toggleMenu}>Plataforma</a>
                <a href="empresa" onClick={toggleMenu}>Empresa</a>
                <a href="noticias" onClick={toggleMenu}>Noticias</a>
                <a href="trabalhe" onClick={toggleMenu}>Trabalhe conosco</a>
            </nav>

            <div className={styles.mobileFooter}>
                <a href="ailto:hello@integratedbio.com" className="">hello@integratedbio.com</a>
            </div>





        </div>


        </>
    )
}