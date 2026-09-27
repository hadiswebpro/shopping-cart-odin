import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import products from "../../data/products";


function Navbar({ favorites, cart }) {

    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    const [searchQuery, setSearchQuery] = useState("");
    const searchResults = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    function toggleSearch() {
        setSearchOpen((current) => {
            if (current) {
                setSearchQuery("");
            }

            return !current;
        });
    }

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
                            onClick={toggleSearch}
                            aria-label="Toggle fragrance search"
                        >
                            🔍
                        </button>

                        {searchOpen && (
                            <div className={styles.searchDropdown}>
                                <input
                                    type="search"
                                    placeholder="Search fragrances..."
                                    autoFocus
                                    value={searchQuery}
                                    onChange={(event) => setSearchQuery(event.target.value)}
                                />

                                {searchQuery && (
                                    <div className={styles.searchResults}>
                                        {searchResults.length > 0 ? (
                                            searchResults.map((product) => (
                                                <Link
                                                    key={product.id}
                                                    to={`/product/${product.id}`}
                                                    className={styles.searchResult}
                                                    onClick={() => setSearchOpen(false)}
                                                >
                                                    <span>{product.name}</span>
                                                    <small>{product.category}</small>
                                                </Link>
                                            ))
                                        ) : (
                                            <p className={styles.noResults}>
                                                No fragrances found.
                                            </p>
                                        )}
                                    </div>
                                )}
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
                        <span className={styles.cartCount}>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
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
