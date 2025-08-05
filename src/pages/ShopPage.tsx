import React, { useState } from 'react';
import { products } from '../data/products.ts';
import ProductCard from '../components/common/ProductCard.tsx';
import Button from '../components/common/Button.tsx';

const ShopPage = ({ onAddToCart, onToggleWishlist, isInWishlist }) => {
    const [filters, setFilters] = useState({
        age: 'All Ages',
        type: 'All Types',
        price: 'Price Range'
    });

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({ ...prev, [filterType]: value }));
    };

    return (
        <section id="shop" className="py-20 bg-white/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-playful font-bold text-center text-gray-800 mb-12">🛍️ Our Toy Collection 🛍️</h2>

                <div className="bg-white rounded-3xl p-6 mb-8 toy-shadow">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <select
                            className="bg-sky-pastel/20 rounded-full px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-sky-pastel"
                            value={filters.age}
                            onChange={(e) => handleFilterChange('age', e.target.value)}
                        >
                            <option>All Ages</option>
                            <option>1-3 years</option>
                            <option>4-6 years</option>
                            <option>7-10 years</option>
                        </select>
                        <select
                            className="bg-pink-pastel/20 rounded-full px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-pink-pastel"
                            value={filters.type}
                            onChange={(e) => handleFilterChange('type', e.target.value)}
                        >
                            <option>All Types</option>
                            <option>Plush Toys</option>
                            <option>Educational</option>
                            <option>Action Figures</option>
                        </select>
                        <select
                            className="bg-yellow-pastel/20 rounded-full px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-pastel"
                            value={filters.price}
                            onChange={(e) => handleFilterChange('price', e.target.value)}
                        >
                            <option>Price Range</option>
                            <option>Under $20</option>
                            <option>$20-$50</option>
                            <option>Over $50</option>
                        </select>
                        <Button variant="success">🔍 Search</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                            onToggleWishlist={onToggleWishlist}
                            isInWishlist={isInWishlist(product.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopPage;