import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ product, isFavorite, onToggleFavorite }) {
    const imageSource = product.image.startsWith("http")
        ? product.image
        : import.meta.env.BASE_URL + product.image;

    return (
        <article className={styles.card}>
            <Link to={"/product/" + product.id} className={styles.imageLink}>
                <div className={styles.imageWrapper}>
                    <img src={imageSource} alt={product.name} className={styles.image} />

                    {product.badge && <span className={styles.badge}>{product.badge}</span>}

                    <button
                        className={styles.favorite + (isFavorite ? " " + styles.favoriteActive : "")}
                        type="button"
                        aria-label={
                            isFavorite
                                ? "Remove " + product.name + " from favorites"
                                : "Add " + product.name + " to favorites"
                        }
                        onClick={(event) => {
                            event.preventDefault();
                            onToggleFavorite(product.id);
                        }}
                    >
                        {isFavorite ? "♥" : "♡"}
                    </button>
                </div>
            </Link>

            <div className={styles.info}>
                <div className={styles.details}>
                    <p className={styles.category}>{product.category}</p>
                    <Link to={"/product/" + product.id} className={styles.name}>
                        {product.name}
                    </Link>
                </div>
                <p className={styles.price}>{"$"}{product.price}</p>
            </div>
        </article>
    );
}

export default ProductCard;
