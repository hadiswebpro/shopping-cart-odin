import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ favorites }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link to="/" className={styles.logo}>VELT</Link>

                <div className={styles.navLinks + (menuOpen ? " " + styles.menuOpen : "")}>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                    <Link to="/shop" onClick={closeMenu}>Collection</Link>
                    <Link to="/categories" onClick={closeMenu}>Scent Families</Link>
                </div>

                <div className={styles.actions}>
                    <div className={styles.searchWrapper}>
                        <button
                            className={styles.searchButton}
                            onClick={() => setSearchOpen(!searchOpen)}
                            aria-label="Toggle fragrance search"
                        >
                            🔍
                        </button>

                        {searchOpen && (
                            <div className={styles.searchDropdown}>
                                <input type="search" placeholder="Search fragrances..." autoFocus />
                            </div>
                        )}
                    </div>

                    <Link to="/favorites" className={styles.favorite} aria-label="Favorites">
                        <span className={styles.favoriteIcon}>♥</span>
                        {favorites.length > 0 && (
                            <span className={styles.favoriteCount}>{favorites.length}</span>
                        )}
                    </Link>

                    <Link to="/cart" className={styles.cart}>
                        🛒
                        <span>Bag</span>
                        <span className={styles.cartCount}>0</span>
                    </Link>

                    <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
