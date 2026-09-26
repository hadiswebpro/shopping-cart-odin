import styles from "./Home.module.css";

function Home() {
    return (
        <main className={styles.home}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <p className={styles.eyebrow}>STEP INTO YOUR STYLE</p>

                    <h1>
                        Sneakers for
                        <span>every version</span>
                        of you.
                    </h1>

                    <p className={styles.description}>
                        Discover sneakers designed to move with you,
                        wherever your style takes you.
                    </p>

                    <div className={styles.heroActions}>
                        

                        <div className={styles.socials}>
                            <a
                                href="#instagram"
                                aria-label="Instagram"
                                className={styles.social}
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}icons/instagram.svg`}
                                    alt=""
                                />
                            </a>

                            <a
                                href="#telegram"
                                aria-label="Telegram"
                                className={styles.social}
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}icons/telegram.svg`}
                                    alt=""
                                />
                            </a>
                        </div>

                        <a href="/shop" className={styles.shopButton}>
                            SHOP COLLECTION
                            <span>→</span>
                        </a>
                    </div>
                </div>

                <div className={styles.heroImageWrapper}>
                    <div
                        className={`${styles.bubble} ${styles.bubbleOne}`}
                    />

                    <div
                        className={`${styles.bubble} ${styles.bubbleTwo}`}
                    />

                    <div
                        className={`${styles.bubble} ${styles.bubbleThree}`}
                    />

                    <img
                        src={`${import.meta.env.BASE_URL}images/hero.jpg`}
                        alt="Featured sneaker"
                        className={styles.heroImage}
                    />
                </div>
            </section>
        </main>
    );
}

export default Home;