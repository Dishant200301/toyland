import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Heart, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-kids-playing.jpg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted to-secondary py-16 md:py-24">
      {/* Floating elements */}
      <div className="absolute top-10 left-10 animate-float">
        <Star className="h-6 w-6 text-accent fill-accent" />
      </div>
      <div className="absolute top-20 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <Heart className="h-8 w-8 text-secondary fill-secondary" />
      </div>
      <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="h-7 w-7 text-primary fill-primary" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="font-playful text-sm px-4 py-2">
                ✨ Magical Playground of Joy ✨
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Where 
                <span className="text-primary font-playful"> Dreams </span>
                Come to 
                <span className="text-accent font-playful"> Play! </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Discover a world of wonder with our carefully curated collection of safe, 
                educational, and absolutely delightful toys for children aged 1-10.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" className="group" onClick={() => navigate('/shop')}>
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="font-semibold" onClick={() => navigate('/shop')}>
                View Categories
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Toys</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">50k+</div>
                <div className="text-sm text-muted-foreground">Smiling Kids</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">4.9★</div>
                <div className="text-sm text-muted-foreground">Parent Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden soft-shadow">
              <img 
                src={heroImage} 
                alt="Happy children playing with toys"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating badges on image */}
              <div className="absolute top-6 left-6">
                <Badge className="bg-primary text-primary-foreground font-semibold animate-bounce-gentle">
                  🎉 New Arrivals
                </Badge>
              </div>
              
              <div className="absolute bottom-6 right-6">
                <Badge className="bg-accent text-accent-foreground font-semibold animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
                  🚚 Free Shipping
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;