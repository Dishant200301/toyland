import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Baby, 
  Blocks, 
  Heart, 
  BookOpen, 
  Car,
  Palette,
  TreePine,
  Gamepad2
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: "plush",
      name: "Plush Toys",
      icon: Heart,
      description: "Soft, cuddly companions for comfort and love",
      color: "bg-secondary",
      ageRange: "0-10",
      itemCount: 156
    },
    {
      id: "educational",
      name: "STEM Learning",
      icon: BookOpen,
      description: "Build tomorrow's innovators with hands-on science",
      color: "bg-primary",
      ageRange: "3-10",
      itemCount: 89
    },
    {
      id: "building",
      name: "Building Blocks",
      icon: Blocks,
      description: "Create, construct, and let imagination soar",
      color: "bg-accent",
      ageRange: "2-8",
      itemCount: 203
    },
    {
      id: "dolls",
      name: "Dolls & Figures",
      icon: Baby,
      description: "Friends for storytelling and role-play adventures",
      color: "bg-muted",
      ageRange: "2-10",
      itemCount: 134
    },
    {
      id: "vehicles",
      name: "Cars & Vehicles",
      icon: Car,
      description: "Zoom into action with wheels, wings, and speed",
      color: "bg-secondary",
      ageRange: "1-8",
      itemCount: 178
    },
    {
      id: "arts",
      name: "Arts & Crafts",
      icon: Palette,
      description: "Express creativity with colors, textures, and fun",
      color: "bg-accent",
      ageRange: "3-10",
      itemCount: 97
    },
    {
      id: "wooden",
      name: "Wooden Toys",
      icon: TreePine,
      description: "Sustainable, classic toys built to last generations",
      color: "bg-muted",
      ageRange: "1-7",
      itemCount: 112
    },
    {
      id: "games",
      name: "Board Games",
      icon: Gamepad2,
      description: "Family fun that brings everyone together",
      color: "bg-primary",
      ageRange: "4-10",
      itemCount: 76
    }
  ];

  return (
    <section id="categories" className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            🎪 Explore by 
            <span className="text-primary font-playful"> Category </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect toy for every little dreamer in our magical collection
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <Card 
                key={category.id}
                className="group cursor-pointer border-0 soft-shadow hover:playful-shadow transition-all duration-300 bounce-hover overflow-hidden"
              >
                <CardContent className="p-6 text-center space-y-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto group-hover:animate-bounce-gentle`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex justify-center gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs">
                      Ages {category.ageRange}
                    </Badge>
                    <Badge variant="secondary" className="text-xs bg-accent/20 text-accent-foreground">
                      {category.itemCount} items
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;