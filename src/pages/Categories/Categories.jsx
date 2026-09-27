import { Link } from "react-router-dom";
import products from "../../data/products";
import styles from "./Categories.module.css";

function Categories() {
    const categories = [...new Set(products.map((product) => product.category))];

    return (
        <main className={styles.categories}>
            <section className={styles.hero}>
                <p className={styles.eyebrow}>THE SCENT LIBRARY</p>

                <h1>Scent Families</h1>

                <p className={styles.intro}>
                    Explore the different worlds of fragrance and discover
                    the notes that define your signature.
                </p>
            </section>

            <section className={styles.familyGrid}>
                {categories.map((category) => {
                    const categoryProducts = products.filter(
                        (product) => product.category === category
                    );

                    return (
                        <Link
                            key={category}
                            to={`/shop?category=${encodeURIComponent(category)}`}
                            className={styles.familyCard}
                        >
                            <span className={styles.number}>
                                {String(categories.indexOf(category) + 1).padStart(2, "0")}
                            </span>

                            <div className={styles.cardContent}>
                                <h2>{category}</h2>

                                <p>
                                    {categoryProducts.length}{" "}
                                    {categoryProducts.length === 1
                                        ? "fragrance"
                                        : "fragrances"}
                                </p>
                            </div>

                            <span className={styles.arrow}>↗</span>
                        </Link>
                    );
                })}
            </section>
        </main>
    );
}

export default Categories;

