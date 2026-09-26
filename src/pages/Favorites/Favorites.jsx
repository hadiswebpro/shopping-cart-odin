import ProductCard from "../../component/ProductCard/ProductCard";
import products from "../../data/products";
import styles from "./Favorites.module.css";

function Favorites({ favorites, onToggleFavorite }) {
    const favoriteProducts = products.filter((product) =>
        favorites.includes(product.id)
    );

    return (
        <main className={styles.favorites}>
            <section className={styles.header}>
                <p className={styles.eyebrow}>YOUR COLLECTION</p>

                <h1>Favorites</h1>

                <p className={styles.description}>
                    Your favorite sneakers, all in one place.
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

                    <h2>No favorites yet</h2>

                    <p>
                        Start exploring and save the sneakers
                        you love.
                    </p>
                </section>
            )}
        </main>
    );
}

export default Favorites;