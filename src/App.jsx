import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainNavbar from "./Navbar/MainNavbar";
import Footer from "./Footer/Footer";

import HomePage from "./HomePage/HomePage";
import WelcomePage from "./WelcomePage/WelcomePage";
import OffersPage from "./OffersPage/OfferPage";
import Testimonial from "./testimonial/testimonial";
import NewsArticle from "./NewsAndArticals/NewsArtical";
import Gallery from "./Gallery/GallerySection";
import About from "./AboutUs/About";
import ProductDetails from "./ProductDetails/ProductDetails";

import Products from "./Products/Products";
import Cart from "./ProductCart/Cart";
import { CartProvider } from "./ProductCart/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <MainNavbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <WelcomePage />
                <OffersPage />
                <Testimonial />
                <NewsArticle />
                <Gallery />
                <About />
              </>
            }
          />

          <Route path="/products" element={<Products />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;


// for git update https://github.com/tanviikhairnar/ecommerce-fesho.git