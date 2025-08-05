import React from 'react';
import { useCart } from './hooks/useCart.js';
import { useWishlist } from './hooks/useWishlist.js';
import Navigation from './components/layout/Navigation.js';
import HomePage from './pages/HomePage.js';
import ShopPage from './pages/ShopPage.js';
import CategoriesPage from './pages/CategoriesPage.js';
import AboutPage from './pages/AboutPage.js';
import BlogPage from './pages/BlogPage.js';
import ContactPage from './pages/ContactPage.js';
import FAQPage from './pages/FAQPage.js';
import Footer from './components/layout/Footer.js';

// Main App Component
const ToyLandApp = () => {
    const { cartCount, addToCart } = useCart(); // Destructure only what's needed here
    const { toggleWishlist, isInWishlist } = useWishlist();

    return (
        <div className="font-friendly bg-gradient-to-br from-sky-pastel/20 to-mint-pastel/20 min-h-screen">
            <Navigation cartCount={cartCount} />
            <HomePage
                onAddToCart={addToCart}
                onToggleWishlist={toggleWishlist}
                isInWishlist={isInWishlist}
            />
            <ShopPage
                onAddToCart={addToCart}
                onToggleWishlist={toggleWishlist}
                isInWishlist={isInWishlist}
            />
            <CategoriesPage />
            <AboutPage />
            <BlogPage />
            <ContactPage />
            <FAQPage />
            <Footer />
        </div>
    );
};

export default ToyLandApp;