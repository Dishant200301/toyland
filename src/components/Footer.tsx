import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Gift, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Youtube,
  Heart
} from "lucide-react";
import mascotImage from "@/assets/mascot-cloud.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted to-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={mascotImage} 
                alt="ToyLand Mascot" 
                className="w-8 h-8 animate-bounce-gentle"
              />
              <h3 className="text-xl font-bold text-primary font-playful">ToyLand</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Spreading joy through play since 2020. We curate the most delightful, 
              safe, and educational toys for your little ones.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-primary hover:text-primary hover:bg-primary/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-secondary hover:text-secondary hover:bg-secondary/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-accent hover:text-accent hover:bg-accent/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shop All</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Gift Cards</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Customer Care</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground text-sm">
              Get the latest toy news and special offers!
            </p>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="rounded-xl border-border"
                />
                <Button variant="playful" size="icon" className="rounded-xl">
                  <Gift className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="font-medium text-foreground">Call Us</div>
              <div className="text-sm text-muted-foreground">1-800-TOY-LAND</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Mail className="h-5 w-5 text-accent" />
            </div>
            <div>
              <div className="font-medium text-foreground">Email Us</div>
              <div className="text-sm text-muted-foreground">hello@toyland.com</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <div className="font-medium text-foreground">Visit Us</div>
              <div className="text-sm text-muted-foreground">123 Toy Street, Play City</div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 ToyLand. Made with <Heart className="inline h-4 w-4 text-red-500 fill-red-500" /> for little dreamers.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;