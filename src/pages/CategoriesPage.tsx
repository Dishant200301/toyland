import React from 'react';
import { categories } from '../data/categories.ts';
import CategoryCard from '../components/common/CategoryCard.tsx';

const CategoriesPage = () => (
    <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-playful font-bold text-center text-gray-800 mb-12">🎨 Toy Categories 🎨</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <CategoryCard key={index} category={category} />
                ))}
            </div>
        </div>
    </section>
);

export default CategoriesPage;