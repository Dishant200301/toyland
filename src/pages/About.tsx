import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Shield, Users, Award, Sparkles } from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "Emma Johnson",
      role: "Co-Founder & CEO", 
      image: "/placeholder.svg",
      description: "Former child psychologist with 15 years of experience in child development and educational play."
    },
    {
      name: "Michael Chen",
      role: "Co-Founder & Head of Safety",
      image: "/placeholder.svg", 
      description: "Toy safety engineer ensuring every product meets the highest safety standards for children."
    },
    {
      name: "Sarah Williams",
      role: "Chief Toy Curator",
      image: "/placeholder.svg",
      description: "Mother of three with a passion for finding toys that truly spark imagination and learning."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Love & Care",
      description: "Every toy is chosen with love, ensuring it brings joy and wonder to your child's world."
    },
    {
      icon: Shield,
      title: "Safety First", 
      description: "We rigorously test every product to meet the highest safety standards for worry-free play."
    },
    {
      icon: Star,
      title: "Quality Promise",
      description: "Only the finest materials and craftsmanship make it into our magical collection."
    },
    {
      icon: Sparkles,
      title: "Imagination",
      description: "We believe in toys that inspire creativity, learning, and endless possibilities."
    }
  ];

  const milestones = [
    { year: "2018", event: "ToyLand founded with a dream to spread joy through play" },
    { year: "2019", event: "Reached 10,000 happy families worldwide" },
    { year: "2020", event: "Launched eco-friendly wooden toy collection" },
    { year: "2021", event: "Won 'Best Online Toy Retailer' award" },
    { year: "2022", event: "Expanded to serve 50+ countries globally" },
    { year: "2023", event: "Celebrated 100,000 smiling children milestone" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted to-secondary">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <Badge variant="secondary" className="font-playful text-sm px-4 py-2 mb-6">
            ✨ Our Magical Story ✨
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Spreading 
            <span className="text-primary font-playful"> Joy </span>
            Through 
            <span className="text-accent font-playful"> Play </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At ToyLand, we believe every child deserves toys that inspire wonder, creativity, and boundless imagination. 
            Our journey began with a simple mission: to curate the world's most magical toys for the world's most precious little ones.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            💝 What We Believe In
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center group bounce-hover soft-shadow hover:playful-shadow transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto group-hover:animate-bounce-gentle">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-gradient-to-r from-muted to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            👥 Meet Our Dreamers
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="group bounce-hover soft-shadow hover:playful-shadow transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto group-hover:animate-bounce-gentle">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{founder.name}</h3>
                    <Badge variant="outline" className="mt-2">{founder.role}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{founder.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            🌟 Our Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg group-hover:animate-bounce-gentle">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="flex-1 group-hover:playful-shadow transition-all duration-300">
                    <CardContent className="p-4">
                      <p className="text-foreground font-medium">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100K+</div>
              <div className="text-muted-foreground">Happy Children</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">1000+</div>
              <div className="text-muted-foreground">Magical Toys</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">50+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">4.9★</div>
              <div className="text-muted-foreground">Parent Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-4xl mx-auto soft-shadow">
            <CardContent className="p-12">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center animate-float">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground">Our Promise to You</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "We promise to continue curating the most wonderful, safe, and inspiring toys for your little ones. 
                  Every product in our collection is chosen with the same care and love we'd use for our own children. 
                  Because at ToyLand, we're not just selling toys – we're nurturing dreams, fostering creativity, 
                  and spreading joy one smile at a time."
                </p>
                
                <div className="flex justify-center">
                  <Badge variant="outline" className="font-playful text-lg px-6 py-2">
                    💕 Made with Love, Delivered with Care 💕
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;