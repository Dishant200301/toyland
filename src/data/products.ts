// Define the Product interface
export interface Product {
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

// Export the typed product array
export const products: Product[] = [
  {
    id: 1,
    name: "Super Cuddly Bear",
    emoji: "🧸",
    price: 24.99,
    description: "This adorable cuddly bear is the perfect companion for your little one!",
    ageRange: "Ages 1-8",
    badges: ["Bestseller", "Eco-Friendly"],
    rating: 5,
    reviews: 127,
  },
  {
    id: 2,
    name: "Magic Unicorn",
    emoji: "🦄",
    price: 29.99,
    description: "Magical unicorn that sparkles with imagination!",
    ageRange: "Ages 3-8",
    badges: ["Bestseller"],
    rating: 5,
    reviews: 89,
  },
  {
    id: 3,
    name: "Space Rocket",
    emoji: "🚀",
    price: 34.99,
    description: "Blast off to adventure with this amazing space rocket!",
    ageRange: "Ages 5-10",
    badges: ["New"],
    rating: 4,
    reviews: 56,
  },
  {
    id: 4,
    name: "Circus Tent",
    emoji: "🎪",
    price: 45.99,
    description: "Step right up to the greatest show on earth!",
    ageRange: "Ages 2-6",
    badges: ["Eco-Friendly"],
    rating: 5,
    reviews: 73,
  },
];
