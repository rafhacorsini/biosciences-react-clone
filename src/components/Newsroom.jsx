import featuredCellImage from '../assets/images/featured-cell-2.webp'
import styles from './Newsroom.module.css'

const featuredArticle = {
    tag: 'PUBLICATIONS',
    date: 'SEPTEMBER 4, 2025',
    image: featuredCellImage,
    title:  'Optogenetics-enabled discovery of integrated stress response modulators',
    description: 'In this landmark Cell publication, we unveil our first-of-a-kind optogenetic screening platform, which unlocks a novel mode of drug discovery by enabling tunable, millisecond- and micron-level control over previously intractable biological systems.',
};

const articles = [
    {
        tag: 'PUBLICATIONS',
        date: 'FEBRUARY 20, 2026',
        title: 'FATE-MAP predicts teratogenicity and human gastrulation failure modes by integrating deep learning and mechanistic modeling',
        dark: false,
    },
    {
        tag: 'NEWS',
        date: 'FEBRUARY 19, 2026',
        title: 'Integrated Biosciences Appoints Tony Wu, Co-Founder of xAI, to its Scientific Advisory Board',
        dark: true,
    },
    {
        tag: 'NEWS',
        date: 'JANUARY 27, 2026',
        title: 'Integrated Biosciences Appoints Daniel J. Anderson, Ph.D. as Chief Scientific Officer',
        dark: true,
    },
];

export function Newsroom(){
    return (
        <section className={styles.newsroomSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Newsroom</h2>
                <button className={styles.viewAllBtn}>
                    VIEW ALL ARTICLES <span className={styles.viewAllArrow}>→</span>
                </button>
            </div>
            
            <div className={styles.featuredWrapper}>
                <div className={styles.featuredCard}>
                    <img src={featuredArticle.image} alt="Featured article" className={styles.featuredImage}/>
                    <div className={styles.cardBody}>
                        <div className={styles.cardMeta}>
                            <span className={styles.tagLabel}>
                                <span className={styles.greenSquare}></span> 
                                {featuredArticle.tag}
                            </span>
                            <span className={styles.dateLabel}>{featuredArticle.date}</span>
                        </div>
                        <h3 className={styles.cardTitle}>{featuredArticle.title}</h3>
                        <p className={styles.cardDesc}>{featuredArticle.description}</p>
                        <div className={styles.cardFooter}>
                            <span className={styles.readArticle}>READ ARTICLE</span>
                        </div>
                    </div>
                </div>
                <button className={styles.featuredArrowBtn}>
                    <span className={styles.arrowText}>→</span>
                </button>
            </div>

            <div className={styles.miniCardsContainer}>
                {articles.map((article, index) => (
                    <div key={index} className={styles.miniCardWrapper}>
                        <div className={`${styles.miniCard} ${article.dark ? styles.dark : styles.light}`}>
                            <div className={styles.cardMeta}>
                                <span className={styles.tagLabel}>
                                    <span className={styles.greenSquare}></span> 
                                    {article.tag}
                                </span>
                                <span className={styles.dateLabel}>{article.date}</span>
                            </div>
                            <h4 className={styles.miniCardTitle}>{article.title}</h4>
                            <div className={styles.cardFooter}>
                                <span className={styles.readArticle}>READ ARTICLE</span>
                            </div>
                        </div>
                        <button className={styles.cardArrowBtn}>
                            <span className={styles.arrowText}>→</span>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}
