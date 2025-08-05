import React, { useState } from 'react';

interface NavigationProps {
  cartCount: number;
}

const Navigation: React.FC<NavigationProps> = ({ cartCount }) => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 toy-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-pastel to-yellow-pastel rounded-full flex items-center justify-center text-2xl wiggle">
              🧸
            </div>
            <span className="text-2xl font-playful font-bold text-gray-800">ToyLand</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {['home', 'shop', 'categories', 'about', 'blog', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-gray-700 hover:text-pink-500 font-medium transition-colors capitalize ${
                  activeSection === section ? 'text-pink-500' : ''
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-yellow-pastel/50 hover:bg-yellow-pastel transition-colors wiggle">
              🔍
            </button>
            <button className="p-2 rounded-full bg-pink-pastel/50 hover:bg-pink-pastel transition-colors wiggle">
              ❤️
            </button>
            <button className="p-2 rounded-full bg-mint-pastel/50 hover:bg-mint-pastel transition-colors wiggle relative">
              🛒
              <span className="absolute -top-2 -right-2 bg-red-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
