import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./component/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;