import React from "react";
import { products } from "../data/products.js";
import AnimatedCloud from "../components/common/AnimatedCloud.js";
import Button from "../components/common/Button.js";
import ProductCard from "../components/common/ProductCard.js";

const HomePage = ({ onAddToCart, onToggleWishlist, isInWishlist }) => (
  <section id="home" className="relative overflow-hidden">
    <AnimatedCloud className="top-10 left-10" />
    <AnimatedCloud className="top-20 right-20 text-4xl opacity-60" delay={1} />
    <AnimatedCloud className="top-40 left-1/3 text-5xl opacity-50" delay={2} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <div className="mb-8 bounce-gentle">
          <div className="text-8xl mb-4">🎈</div>
          <h1 className="text-5xl md:text-7xl font-playful font-bold text-gray-800 mb-4">
            Welcome to{" "}
            <span className="text-transparent bg-toyland-gradient bg-clip-text">
              ToyLand!
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Where imagination comes to play! 🌟
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg">🛍️ Shop Now</Button>
          <Button variant="secondary" size="lg">
            🎁 Gift Guide
          </Button>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <h2 className="text-4xl font-playful font-bold text-center text-gray-800 mb-12">
        ✨ Featured Toys ✨
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.slice(0, 3).map((product) => (
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

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <h2 className="text-4xl font-playful font-bold text-center text-gray-800 mb-12">
        🎯 Shop by Category 🎯
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-sky-pastel/30 rounded-3xl p-6 text-center hover:transform hover:scale-105 transition-all wiggle cursor-pointer">
          <div className="text-4xl mb-2">👶</div>
          <h3 className="font-bold text-gray-800">Ages 1-3</h3>
        </div>
        <div className="bg-pink-pastel/30 rounded-3xl p-6 text-center hover:transform hover:scale-105 transition-all wiggle cursor-pointer">
          <div className="text-4xl mb-2">🧒</div>
          <h3 className="font-bold text-gray-800">Ages 4-6</h3>
        </div>
        <div className="bg-yellow-pastel/30 rounded-3xl p-6 text-center hover:transform hover:scale-105 transition-all wiggle cursor-pointer">
          <div className="text-4xl mb-2">👧</div>
          <h3 className="font-bold text-gray-800">Ages 7-10</h3>
        </div>
        <div className="bg-mint-pastel/30 rounded-3xl p-6 text-center hover:transform hover:scale-105 transition-all wiggle cursor-pointer">
          <div className="text-4xl mb-2">🎁</div>
          <h3 className="font-bold text-gray-800">Gifts</h3>
        </div>
      </div>
    </div>
  </section>
);

export default HomePage;
