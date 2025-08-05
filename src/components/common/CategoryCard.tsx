import React from 'react';

interface Category {
  name: string;
  emoji: string;
  color: string; // e.g., Tailwind gradient classes
  ageRange: string;
}

interface CategoryCardProps {
  category: Category;
}

const getDescription = (name: string): string => {
  switch (name) {
    case 'Plush Toys':
      return 'Soft, cuddly friends for endless hugs';
    case 'STEM Toys':
      return 'Learning through play and discovery';
    case 'Wooden Toys':
      return 'Classic, eco-friendly playtime';
    case 'Dolls':
      return 'Imaginative play and storytelling';
    case 'Action Figures':
      return 'Heroes and adventures await';
    default:
      return 'Creativity and self-expression';
  }
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => (
  <div
    className={`bg-gradient-to-br ${category.color} rounded-3xl p-8 toy-shadow hover:transform hover:scale-105 transition-all group cursor-pointer`}
  >
    <div className="text-center">
      <div className="text-6xl mb-4 group-hover:bounce-gentle">{category.emoji}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{category.name}</h3>
      <p className="text-gray-600 mb-4">{getDescription(category.name)}</p>
      <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
        {category.ageRange}
      </span>
    </div>
  </div>
);

export default CategoryCard;
