import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

import Favorites from "./pages/Favorites/Favorites";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Categories from "./pages/Categories/Categories";

function App() {
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]);

    function addToCart(product, quantity) {
        setCart((currentCart) => {
            const existingItem = currentCart.find((item) => item.product.id === product.id);

            if (existingItem) {
                return currentCart.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...currentCart, { product, quantity }];
        });
    }

    function updateCartQuantity(productId, quantity) {
        if (quantity < 1) {
            setCart((currentCart) => currentCart.filter((item) => item.product.id !== productId));
            return;
        }

        setCart((currentCart) => currentCart.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
        ));
    }

    function removeFromCart(productId) {
        setCart((currentCart) => currentCart.filter((item) => item.product.id !== productId));
    }

    function toggleFavorite(productId) {
        setFavorites((currentFavorites) => {
            if (currentFavorites.includes(productId)) {
                return currentFavorites.filter((id) => id !== productId);
            }

            return [...currentFavorites, productId];
        });
    }

    return (
        <BrowserRouter>
            <Navbar favorites={favorites} cart={cart} />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/shop" element={<Shop favorites={favorites} onToggleFavorite={toggleFavorite} />} />

                <Route
                    path="/product/:id"
                    element={
                        <ProductDetail
                            favorites={favorites}
                            onToggleFavorite={toggleFavorite}
                            onAddToCart={addToCart}
                        />
                    }
                />

                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            onUpdateQuantity={updateCartQuantity}
                            onRemove={removeFromCart}
                        />
                    }
                />

                <Route
                    path="/favorites"
                    element={<Favorites favorites={favorites} onToggleFavorite={toggleFavorite} />}
                />

                <Route path="/categories" element={<Categories />} />
                
            </Routes>

            

            <Footer />
        </BrowserRouter>
    );
}

export default App;