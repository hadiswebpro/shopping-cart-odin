import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
    const desktopHeroImages = Array.from({ length: 5 }, (_, index) =>
        import.meta.env.BASE_URL + `images/hero-desktop-${index + 1}.jpg`
    );
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveImage((current) => (current + 1) % desktopHeroImages.length);
        }, 4000);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <main className={styles.home}>
            <section className={styles.hero}>
                <div className={styles.heroGlow} aria-hidden="true" />
                <div className={styles.heroLine} aria-hidden="true" />

                <div className={styles.heroContent}>
                    <div className={styles.contentInner}>
                        <p className={styles.eyebrow}>THE ART OF FRAGRANCE</p>

                        <h1>
                            A scent for
                            <span>every version</span>
                            of you.
                        </h1>

                        <p className={styles.description}>
                            Discover refined fragrances composed to leave
                            a lasting impression, from first note to final
                            trace.
                        </p>

                        <div className={styles.heroActions}>
                            <Link to="/shop" className={styles.shopButton}>
                                EXPLORE THE COLLECTION
                                <span>→</span>
                            </Link>

                            <div className={styles.socials}>
                                <a href="#instagram" aria-label="Instagram" className={styles.social}>
                                    <img src={import.meta.env.BASE_URL + "icons/instagram.svg"} alt="" />
                                </a>
                                <a href="#telegram" aria-label="Telegram" className={styles.social}>
                                    <img src={import.meta.env.BASE_URL + "icons/telegram.svg"} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.heroVisual}>
                    <div className={styles.visualFrame}>
                        <div className={styles.visualGlow} aria-hidden="true" />

                        <picture>
                            <source
                                media="(max-width: 650px)"
                                srcSet={import.meta.env.BASE_URL + "images/hero-mobile.jpg"}
                            />
                            <div className={styles.heroSlides} aria-hidden="true">
                                {desktopHeroImages.map((image, index) => (
                                    <img
                                        key={image}
                                        src={image}
                                        alt=""
                                        className={styles.heroImage + (index === activeImage ? " " + styles.heroImageActive : "")}
                                    />
                                ))}
                            </div>
                        </picture>

                        <div className={styles.visualLabel}>
                            <span>VELT</span>
                            <small>EAU DE PARFUM · 01</small>
                        </div>
                    </div>

                    <span className={styles.floatingNote}>SCENT THAT STAYS.</span>
                    <span className={styles.orbit} aria-hidden="true" />
                </div>

                <div className={styles.scrollHint}>
                    <span>DISCOVER</span>
                    <i />
                </div>
            </section>
        </main>
    );
}

export default Home;
