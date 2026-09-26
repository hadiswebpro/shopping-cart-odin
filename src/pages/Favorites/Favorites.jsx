import { Link } from "react-router-dom";
import ProductCard from "../../component/ProductCard/ProductCard";
import products from "../../data/products";
import styles from "./Favorites.module.css";

function Favorites({ favorites, onToggleFavorite }) {
    const favoriteProducts = products.filter((product) => favorites.includes(product.id));

    return (
        <main className={styles.favorites}>
            <section className={styles.header}>
                <p className={styles.eyebrow}>YOUR SIGNATURES</p>
                <h1>Favorites</h1>
                <p className={styles.description}>
                    Keep the fragrances that feel unmistakably yours close at hand.
                </p>
            </section>

            {favoriteProducts.length > 0 ? (
                <section className={styles.productsSection}>
                    <div className={styles.productGrid}>
                        {favoriteProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                isFavorite={true}
                                onToggleFavorite={onToggleFavorite}
                            />
                        ))}
                    </div>
                </section>
            ) : (
                <section className={styles.empty}>
                    <div className={styles.emptyIcon}>♡</div>
                    <h2>Your collection is waiting</h2>
                    <p>
                        Explore the collection and save the scents you would wear
                        again and again.
                    </p>
                    <Link to="/shop" className={styles.shopLink}>
                        EXPLORE FRAGRANCES
                    </Link>
                </section>
            )}
        </main>
    );
}

export default Favorites;
