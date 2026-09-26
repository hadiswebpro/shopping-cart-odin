import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
    return (
        <main className={styles.home}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
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
                        <div className={styles.socials}>
                            <a href="#instagram" aria-label="Instagram" className={styles.social}>
                                <img src={import.meta.env.BASE_URL + "icons/instagram.svg"} alt="" />
                            </a>
                            <a href="#telegram" aria-label="Telegram" className={styles.social}>
                                <img src={import.meta.env.BASE_URL + "icons/telegram.svg"} alt="" />
                            </a>
                        </div>
                        <Link to="/shop" className={styles.shopButton}>
                            EXPLORE THE COLLECTION
                            <span>→</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.heroImageWrapper}>
                    <div className={styles.bubble + " " + styles.bubbleOne} />
                    <div className={styles.bubble + " " + styles.bubbleTwo} />
                    <div className={styles.bubble + " " + styles.bubbleThree} />
                    <img
                        src="https://unsplash.com/photos/coi2fv2YUAc/download"
                        alt="VELT fragrance bottle"
                        className={styles.heroImage}
                    />
                </div>
            </section>
        </main>
    );
}

export default Home;
