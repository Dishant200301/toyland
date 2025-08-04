import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  // Sample product data - in real app this would come from API
  const featuredProducts = [
    {
      id: "1",
      name: "Rainbow Building Blocks Set",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center",
      rating: 4.8,
      reviews: 124,
      ageRange: "2-6",
      badges: ["Bestseller", "Educational"]
    },
    {
      id: "2", 
      name: "Cuddly Unicorn Plush Toy",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center",
      rating: 4.9,
      reviews: 89,
      ageRange: "1-8",
      badges: ["New Arrival"]
    },
    {
      id: "3",
      name: "STEM Robot Learning Kit",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center",
      rating: 4.7,
      reviews: 67,
      ageRange: "6-10",
      badges: ["STEM", "Sale"]
    },
    {
      id: "4",
      name: "Wooden Puzzle Train Set",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=400&h=300&fit=crop&crop=center",
      rating: 4.6,
      reviews: 156,
      ageRange: "3-7",
      badges: ["Eco-Friendly"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            ✨ Featured 
            <span className="text-primary font-playful"> Favorites </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked toys that spark imagination, encourage learning, and bring endless smiles
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;