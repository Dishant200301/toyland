import React, { useState } from 'react';
import Button from './Button';

interface Product {
  id: number;
  name: string;
  emoji: string;
  price: number;
  description: string;
  ageRange: string;
  badges: string[];
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: number) => void;
  isInWishlist: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleWishlist,
  isInWishlist,
}) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl p-4 toy-shadow hover:transform hover:scale-105 transition-all group">
      <div className="relative">
        <div className="text-6xl text-center mb-4 group-hover:bounce-gentle">
          {product.emoji}
        </div>
        <button
          onClick={() => onToggleWishlist(product.id)}
          className={`absolute top-2 right-2 text-xl wiggle ${
            isInWishlist ? 'text-red-600' : 'text-red-400 hover:text-red-600'
          }`}
        >
          {isInWishlist ? '💖' : '❤️'}
        </button>
        {product.badges.map((badge, index) => {
          const badgeColor =
            badge === 'Bestseller'
              ? 'bg-pink-pastel'
              : badge === 'New'
              ? 'bg-mint-pastel'
              : badge === 'Eco-Friendly'
              ? 'bg-sky-pastel'
              : 'bg-gray-400';

          return (
            <span
              key={index}
              className={`absolute left-2 text-white text-xs px-2 py-1 rounded-full font-bold ${badgeColor}`}
              style={{ top: `${8 + index * 24}px` }}
            >
              {badge}
            </span>
          );
        })}
      </div>

      <h3 className="font-bold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.ageRange}</p>
      <div className="flex items-center gap-1 mb-2">
        <span className="text-yellow-400">{'⭐'.repeat(product.rating)}</span>
        <span className="text-gray-600 text-xs">({product.reviews})</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-pink-500">
          ${product.price.toFixed(2)}
        </span>
        <Button
          onClick={handleAddToCart}
          variant="success"
          size="sm"
          className={isAdded ? 'bounce-gentle' : ''}
        >
          {isAdded ? '✅ Added!' : '🛒 Add to Cart'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
