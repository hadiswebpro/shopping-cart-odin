import { Link, useParams } from "react-router-dom";
import products from "../../data/products";
import styles from "./ProductDetail.module.css";

function ProductDetail({ favorites, onToggleFavorite }) {
    const { id } = useParams();
    const product = products.find((item) => item.id === Number(id));

    if (!product) {
        return <main className={styles.notFound}><p className={styles.eyebrow}>VELT</p><h1>Fragrance not found</h1><Link to="/shop" className={styles.backLink}>Return to collection</Link></main>;
    }

    const imageSource = product.image.startsWith("http") ? product.image : import.meta.env.BASE_URL + product.image;
    const isFavorite = favorites.includes(product.id);

    return (
        <main className={styles.page}>
            <section className={styles.product}>
                <div className={styles.imageSide}>
                    <div className={styles.imageFrame}>
                        <img src={imageSource} alt={product.name} />
                        {product.badge && <span className={styles.badge}>{product.badge}</span>}
                    </div>
                </div>
                <div className={styles.details}>
                    <Link to="/shop" className={styles.backLink}>← Back to collection</Link>
                    <p className={styles.category}>{product.category}</p>
                    <h1>{product.name}</h1>
                    <p className={styles.price}>${product.price}</p>
                    <div className={styles.divider} />
                    <p className={styles.description}>A distinctive VELT composition created for those who want their presence remembered. Elegant, atmospheric, and designed to leave a lasting trail.</p>
                    <div className={styles.notes}>
                        <div><span>CHARACTER</span><strong>{product.category}</strong></div>
                        <div><span>CONCENTRATION</span><strong>EAU DE PARFUM</strong></div>
                        <div><span>COLLECTION</span><strong>VELT</strong></div>
                    </div>
                    <div className={styles.actions}>
                        <button type="button" className={styles.addButton}>Add to bag <span>→</span></button>
                        <button type="button" className={styles.favoriteButton} onClick={() => onToggleFavorite(product.id)} aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}>{isFavorite ? "♥" : "♡"}</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProductDetail;