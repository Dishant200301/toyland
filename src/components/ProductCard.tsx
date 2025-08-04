import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  ageRange: string;
  badges?: string[];
  isWishlisted?: boolean;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  ageRange, 
  badges = [],
  isWishlisted = false 
}: ProductCardProps) => {
  const [wishlistState, setWishlistState] = useState(isWishlisted);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group overflow-hidden border-0 soft-shadow hover:playful-shadow transition-all duration-300 bounce-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {badges.map((badge, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs font-semibold bg-accent text-accent-foreground"
            >
              {badge}
            </Badge>
          ))}
        </div>

        {/* Action buttons */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={() => setWishlistState(!wishlistState)}
          >
            <Heart 
              className={`h-4 w-4 transition-colors ${wishlistState ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
            />
          </Button>
          
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
          >
            <Eye className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>

        {/* Age range badge */}
        <div className="absolute bottom-3 left-3">
          <Badge variant="outline" className="text-xs bg-background/80 backdrop-blur-sm">
            Ages {ageRange}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({reviews})</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
            )}
          </div>
        </div>

        {/* Add to cart button */}
        <Button 
          variant="playful" 
          className="w-full group-hover:animate-bounce-gentle"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;