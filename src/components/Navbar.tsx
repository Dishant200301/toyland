import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Search, Menu, User } from "lucide-react";
import { useState } from "react";
import mascotImage from "@/assets/mascot-cloud.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={mascotImage} 
              alt="ToyLand Mascot" 
              className="w-10 h-10 animate-bounce-gentle"
            />
            <h1 className="text-2xl font-bold text-primary font-playful">
              ToyLand
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#shop" className="text-foreground hover:text-primary transition-colors font-medium">
              Shop
            </a>
            <a href="#categories" className="text-foreground hover:text-primary transition-colors font-medium">
              Categories
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors font-medium">
              Blog
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                3
              </Badge>
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge 
                variant="secondary" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent"
              >
                2
              </Badge>
            </Button>

            <Button variant="outline" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-scale-in">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Home
              </a>
              <a href="#shop" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Shop
              </a>
              <a href="#categories" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Categories
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                About
              </a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Blog
              </a>
              <div className="pt-3 border-t border-border">
                <Button variant="outline" className="w-full">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;