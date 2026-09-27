import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";

function Checkout({ cart }) {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <main className={styles.empty}>
                <p className={styles.eyebrow}>CHECKOUT</p>
                <h1>Your bag is empty.</h1>
                <p>Add a fragrance before continuing to checkout.</p>
                <Link to="/shop" className={styles.backLink}>EXPLORE COLLECTION →</Link>
            </main>
        );
    }

    return (
        <main className={styles.page}>
            <header className={styles.header}>
                <p className={styles.eyebrow}>VELT CHECKOUT</p>
                <h1>Complete your order.</h1>
                <p>Enter your details below to continue securely to payment.</p>
            </header>
            <section className={styles.layout}>
                <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
                    <section className={styles.section}>
                        <div className={styles.sectionHeading}><span>01</span><h2>Contact information</h2></div>
                        <div className={styles.fields}>
                            <label>Email address<input type="email" name="email" placeholder="you@example.com" required /></label>
                            <label>Phone number<input type="tel" name="phone" placeholder="+98 912 000 0000" required /></label>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <div className={styles.sectionHeading}><span>02</span><h2>Shipping address</h2></div>
                        <div className={styles.fields}>
                            <label>Full name<input type="text" name="name" placeholder="Your full name" required /></label>
                            <label>Country<input type="text" name="country" placeholder="Country" required /></label>
                            <label className={styles.full}>Address<input type="text" name="address" placeholder="Street, building, apartment..." required /></label>
                            <label>City<input type="text" name="city" placeholder="City" required /></label>
                            <label>Postal code<input type="text" name="postalCode" placeholder="Postal code" required /></label>
                        </div>
                    </section>
                    <button type="submit" className={styles.paymentButton}>Continue to payment <span>→</span></button>
                    <Link to="/cart" className={styles.returnLink}>← RETURN TO BAG</Link>
                </form>
                <aside className={styles.summary}>
                    <p className={styles.summaryLabel}>ORDER SUMMARY</p>
                    <div className={styles.products}>
                        {cart.map(({ product, quantity }) => (
                            <div className={styles.product} key={product.id}>
                                <div><strong>{product.name}</strong><span>{quantity} × ${product.price}</span></div>
                                <strong>${product.price * quantity}</strong>
                            </div>
                        ))}
                    </div>
                    <div className={styles.summaryRow}><span>Items</span><span>{itemCount}</span></div>
                    <div className={styles.summaryRow}><span>Subtotal</span><span>${subtotal}</span></div>
                    <div className={styles.total}><span>Total</span><strong>${subtotal}</strong></div>
                    <p className={styles.secure}>Your order details will be reviewed before payment.</p>
                </aside>
            </section>
        </main>
    );
}

export default Checkout;
