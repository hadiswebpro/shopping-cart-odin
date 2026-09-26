import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.brand}>
                    <Link to="/" className={styles.logo}>
                        VELT
                    </Link>

                    <p>
                        Step into your style.
                        <br />
                        Move with confidence.
                    </p>
                </div>

                <div className={styles.footerColumn}>
                    <h3>SHOP</h3>

                    <Link to="/shop">All Sneakers</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/cart">Cart</Link>
                </div>

                <div className={styles.footerColumn}>
                    <h3>ABOUT</h3>

                    <a href="#about">About Us</a>
                    <a href="#contact">Contact</a>
                    <a href="#faq">FAQ</a>
                </div>

                <div className={styles.footerColumn}>
                    <h3>FOLLOW US</h3>

                    <div className={styles.socials}>
                        <a
                            href="#instagram"
                            aria-label="Instagram"
                            className={styles.social}
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}icons/instagram-white.svg`}
                                alt=""
                            />
                        </a>

                        <a
                            href="#telegram"
                            aria-label="Telegram"
                            className={styles.social}
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}icons/telegram-white.svg`}
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>© 2026 VELT. All rights reserved.</p>

                <p>Built with React</p>
            </div>
        </footer>
    );
}

export default Footer;