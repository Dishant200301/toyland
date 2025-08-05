// Define the Category interface
export interface Category {
  name: string;
  emoji: string;
  color: string;
  ageRange: string;
}

// Export the typed category array
export const categories: Category[] = [
  {
    name: "Plush Toys",
    emoji: "🧸",
    color: "from-pink-pastel/20 to-pink-pastel/40",
    ageRange: "Ages 0-10",
  },
  {
    name: "STEM Toys",
    emoji: "🔬",
    color: "from-sky-pastel/20 to-sky-pastel/40",
    ageRange: "Ages 3-10",
  },
  {
    name: "Wooden Toys",
    emoji: "🪵",
    color: "from-mint-pastel/20 to-mint-pastel/40",
    ageRange: "Ages 1-8",
  },
  {
    name: "Dolls",
    emoji: "👗",
    color: "from-yellow-pastel/20 to-yellow-pastel/40",
    ageRange: "Ages 2-10",
  },
  {
    name: "Action Figures",
    emoji: "🦸",
    color: "from-lavender-pastel/20 to-lavender-pastel/40",
    ageRange: "Ages 4-10",
  },
  {
    name: "Arts & Crafts",
    emoji: "🎨",
    color: "from-pink-pastel/20 to-yellow-pastel/20",
    ageRange: "Ages 3-10",
  },
];
