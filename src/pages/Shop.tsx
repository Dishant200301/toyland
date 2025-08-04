import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: "1",
      name: "Rainbow Building Blocks Set",
      price: 29.99,
      originalPrice: 39.99,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 124,
      ageRange: "2-6",
      badges: ["Bestseller", "Educational"]
    },
    {
      id: "2", 
      name: "Cuddly Unicorn Plush",
      price: 24.99,
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 89,
      ageRange: "0-10",
      badges: ["New Arrival", "Soft & Safe"]
    },
    {
      id: "3",
      name: "STEM Science Kit",
      price: 45.99,
      originalPrice: 55.99,
      image: "/placeholder.svg", 
      rating: 4.7,
      reviews: 156,
      ageRange: "6-10",
      badges: ["Educational", "Award Winner"]
    },
    {
      id: "4",
      name: "Wooden Puzzle Adventure",
      price: 19.99,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 78,
      ageRange: "3-7", 
      badges: ["Eco-Friendly", "Classic"]
    },
    {
      id: "5",
      name: "Musical Baby Piano",
      price: 34.99,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 92,
      ageRange: "1-4",
      badges: ["Musical", "Development"]
    },
    {
      id: "6",
      name: "Art & Craft Mega Kit",
      price: 39.99,
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 67,
      ageRange: "4-10",
      badges: ["Creative", "Complete Set"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            🛍️ <span className="text-primary font-playful">Magical</span> Toy Shop
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover amazing toys that spark imagination and joy
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5 text-primary" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search Toys</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Find your perfect toy..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Age Range */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Age Range</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-2">0-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="6-8">6-8 years</SelectItem>
                      <SelectItem value="9-10">9-10 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="educational">Educational</SelectItem>
                      <SelectItem value="plush">Plush Toys</SelectItem>
                      <SelectItem value="building">Building Blocks</SelectItem>
                      <SelectItem value="arts">Arts & Crafts</SelectItem>
                      <SelectItem value="vehicles">Vehicles</SelectItem>
                      <SelectItem value="games">Board Games</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="space-y-4">
                  <label className="text-sm font-medium">Price Range</label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Popular Badges */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Popular Tags</label>
                  <div className="flex flex-wrap gap-2">
                    {["Bestseller", "Educational", "Eco-Friendly", "New Arrival"].map((tag) => (
                      <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-accent">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 p-4 bg-card rounded-lg border">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Showing {products.length} toys
                </span>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="animate-bounce-gentle">
                Load More Magical Toys
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;