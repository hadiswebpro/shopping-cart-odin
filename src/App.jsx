import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

import Favorites from "./pages/Favorites/Favorites";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
    const [favorites, setFavorites] = useState([]);

    function toggleFavorite(productId) {
        setFavorites((currentFavorites) => {
            if (currentFavorites.includes(productId)) {
                return currentFavorites.filter(
                    (id) => id !== productId
                );
            }

            return [...currentFavorites, productId];
        });
    }

    return (
        <BrowserRouter>
            <Navbar favorites={favorites} />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/shop"
                    element={
                        <Shop
                            favorites={favorites}
                            onToggleFavorite={toggleFavorite}
                        />
                    }
                />

                <Route
                    path="/product/:id"
                    element={<ProductDetail favorites={favorites} onToggleFavorite={toggleFavorite} />}
                />

                <Route
                    path="/favorites"
                    element={
                        <Favorites
                            favorites={favorites}
                            onToggleFavorite={toggleFavorite}
                        />
                    }
                />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;