import styles from "./Cart.module.css";

function Cart({ cart, onUpdateQuantity, onRemove }) {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <main className={styles.emptyPage}>
                <p className={styles.eyebrow}>YOUR VELT BAG</p>
                <h1>Your bag is empty.</h1>
                <p>Discover a fragrance made to leave a lasting impression.</p>
                <a href="/shop" className={styles.shopLink}>Explore collection →</a>
            </main>
        );
    }

    return (
        <main className={styles.page}>
            <header className={styles.header}>
                <p className={styles.eyebrow}>YOUR VELT BAG</p>
                <h1>Your Bag</h1>
                <p>{itemCount} {itemCount === 1 ? "item" : "items"}</p>
            </header>

            <section className={styles.layout}>
                <div className={styles.items}>
                    {cart.map(({ product, quantity }) => {
                        const imageSource = product.image.startsWith("http")
                            ? product.image
                            : import.meta.env.BASE_URL + product.image;

                        return (
                            <article className={styles.item} key={product.id}>
                                <img src={imageSource} alt={product.name} />

                                <div className={styles.info}>
                                    <p className={styles.category}>{product.category}</p>
                                    <h2>{product.name}</h2>
                                    <p className={styles.unitPrice}>${product.price}</p>

                                    <div className={styles.bottomRow}>
                                        <div className={styles.quantity}>
                                            <button type="button" onClick={() => onUpdateQuantity(product.id, quantity - 1)} aria-label="Decrease quantity">−</button>
                                            <span>{quantity}</span>
                                            <button type="button" onClick={() => onUpdateQuantity(product.id, quantity + 1)} aria-label="Increase quantity">+</button>
                                        </div>

                                        <button type="button" className={styles.remove} onClick={() => onRemove(product.id)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                <strong className={styles.total}>
                                    ${product.price * quantity}
                                </strong>
                            </article>
                        );
                    })}
                </div>

                <aside className={styles.summary}>
                    <p className={styles.summaryLabel}>ORDER SUMMARY</p>

                    <div>
                        <span>Items</span>
                        <span>{itemCount}</span>
                    </div>

                    <div>
                        <span>Subtotal</span>
                        <span>${subtotal}</span>
                    </div>

                    <div className={styles.summaryTotal}>
                        <span>Total</span>
                        <strong>${subtotal}</strong>
                    </div>

                    <button type="button" className={styles.checkout}>
                        Continue to checkout <span>→</span>
                    </button>

                    <p className={styles.note}>
                        Shipping and taxes calculated at checkout.
                    </p>
                </aside>
            </section>
        </main>
    );
}

export default Cart;