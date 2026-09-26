import { useState } from "react";
import ProductCard from "../../component/ProductCard/ProductCard";
import products from "../../data/products";
import styles from "./Shop.module.css";

function Shop({ favorites, onToggleFavorite }) {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...new Set(products.map((product) => product.category))];

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((product) => product.category === activeCategory);

    return (
        <main className={styles.shop}>
            <section className={styles.shopHeader}>
                <p className={styles.eyebrow}>THE VELT COLLECTION</p>
                <h1>Fine Fragrances</h1>
                <p className={styles.description}>
                    Ten distinctive compositions, each built around a
                    different mood, memory, and trail.
                </p>
            </section>

            <section className={styles.productsSection}>
                <div className={styles.categories}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={activeCategory === category ? styles.activeCategory : styles.category}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className={styles.productGrid}>
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isFavorite={favorites.includes(product.id)}
                            onToggleFavorite={onToggleFavorite}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Shop;
