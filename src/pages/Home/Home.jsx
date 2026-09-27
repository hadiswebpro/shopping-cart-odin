import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../component/ProductCard/ProductCard";
import products from "../../data/products";
import styles from "./Home.module.css";

function Home({ favorites, onToggleFavorite }) {
    const desktopHeroImages = Array.from({ length: 5 }, (_, index) =>
        import.meta.env.BASE_URL + `images/hero-desktop-${index + 1}.jpg`
    );
    const [activeImage, setActiveImage] = useState(0);
    const featuredProducts = products.slice(0, 4);

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

                        <img
                            src={import.meta.env.BASE_URL + "images/hero-mobile.jpg"}
                            alt="VELT luxury fragrance"
                            className={styles.mobileHeroImage}
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

            <section className={styles.featured}>
                <div className={styles.featuredHeader}>
                    <div>
                        <p className={styles.eyebrow}>THE VELT EDIT</p>
                        <h2>Featured Fragrances</h2>
                    </div>

                    <Link to="/shop" className={styles.viewAll}>
                        VIEW COLLECTION
                        <span>→</span>
                    </Link>
                </div>

                <div className={styles.featuredGrid}>
                    {featuredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isFavorite={favorites.includes(product.id)}
                            onToggleFavorite={onToggleFavorite}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.families}>
                <div className={styles.familiesHeader}>
                    <div>
                        <p className={styles.eyebrow}>THE WORLD OF VELT</p>
                        <h2>Scent Families</h2>
                    </div>

                    <Link to="/categories" className={styles.familyLink}>
                        EXPLORE FAMILIES
                        <span>↗</span>
                    </Link>
                </div>

                <div className={styles.familyList}>
                    {[...new Set(products.map((product) => product.category))].map((category, index) => (
                        <Link
                            key={category}
                            to={`/shop?category=${encodeURIComponent(category)}`}
                            className={styles.familyItem}
                        >
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <strong>{category}</strong>
                            <i>↗</i>
                        </Link>
                    ))}
                </div>
            </section>

            <section className={styles.story}>
                <div className={styles.storyImage}>
                    <img
                        src={import.meta.env.BASE_URL + "images/hero-desktop-3.jpg"}
                        alt="VELT fragrance editorial"
                    />
                </div>

                <div className={styles.storyContent}>
                    <p className={styles.eyebrow}>THE VELT STORY</p>
                    <h2>Scent that stays.</h2>
                    <p>
                        VELT is built around the idea that fragrance is more
                        than a finishing touch. Each composition is designed
                        to become part of a memory — something felt long
                        after the moment has passed.
                    </p>
                    <Link to="/shop" className={styles.storyLink}>
                        DISCOVER THE COLLECTION
                        <span>→</span>
                    </Link>
                </div>
            </section>

            <section className={styles.homeCta}>
                <p className={styles.eyebrow}>FIND YOUR SIGNATURE</p>
                <h2>Find a scent that feels like you.</h2>
                <p>Explore the VELT collection and discover your next signature.</p>
                <Link to="/shop" className={styles.ctaButton}>
                    EXPLORE COLLECTION
                    <span>→</span>
                </Link>
            </section>
        </main>
    );
}

export default Home;
