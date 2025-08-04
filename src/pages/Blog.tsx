import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, Search, ArrowRight, Heart, Share2 } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "The Ultimate Guide to STEM Toys for Early Learners",
    excerpt: "Discover how STEM toys can boost your child's problem-solving skills and creativity from as early as age 2. We've tested the best options available!",
    image: "/placeholder.svg",
    author: "Emma Johnson",
    date: "December 15, 2023",
    readTime: "8 min read",
    category: "Educational",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "Top 5 Eco-Friendly Toys Your Kids Will Love",
      excerpt: "Sustainable play doesn't mean less fun! Explore our favorite eco-conscious toys that are kind to both kids and the planet.",
      image: "/placeholder.svg",
      author: "Sarah Williams",
      date: "December 12, 2023",
      readTime: "6 min read",
      category: "Sustainability"
    },
    {
      id: 3,
      title: "Safety First: Essential Toy Safety Tips for Parents",
      excerpt: "Learn the key safety guidelines every parent should know when choosing toys for different age groups.",
      image: "/placeholder.svg", 
      author: "Michael Chen",
      date: "December 10, 2023",
      readTime: "7 min read",
      category: "Safety"
    },
    {
      id: 4,
      title: "Building Creativity: Best Art & Craft Kits for Kids",
      excerpt: "Unleash your child's artistic potential with these amazing craft kits that encourage creativity and self-expression.",
      image: "/placeholder.svg",
      author: "Emma Johnson", 
      date: "December 8, 2023",
      readTime: "5 min read",
      category: "Creative Play"
    },
    {
      id: 5,
      title: "The Science of Play: How Toys Shape Child Development",
      excerpt: "Discover the fascinating research behind how different types of play contribute to your child's cognitive and emotional growth.",
      image: "/placeholder.svg",
      author: "Dr. Lisa Park",
      date: "December 5, 2023", 
      readTime: "10 min read",
      category: "Child Development"
    },
    {
      id: 6,
      title: "Holiday Gift Guide: Magical Toys for Every Age",
      excerpt: "Make this holiday season extra special with our curated gift guide featuring the most enchanting toys for children of all ages.",
      image: "/placeholder.svg",
      author: "Sarah Williams",
      date: "December 1, 2023",
      readTime: "12 min read", 
      category: "Gift Guides"
    },
    {
      id: 7,
      title: "Screen-Free Fun: Classic Toys Making a Comeback",
      excerpt: "In our digital age, traditional toys are experiencing a renaissance. Find out why parents are returning to timeless classics.",
      image: "/placeholder.svg",
      author: "Michael Chen",
      date: "November 28, 2023",
      readTime: "6 min read",
      category: "Trends"
    }
  ];

  const categories = ["All", "Educational", "Safety", "Creative Play", "Child Development", "Gift Guides", "Sustainability", "Trends"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <Badge variant="secondary" className="font-playful text-sm px-4 py-2 mb-6">
            📚 ToyLand Blog 📚
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary font-playful">Parenting</span> 
            {" & "}
            <span className="text-accent font-playful">Play</span> Tips
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Expert advice, toy reviews, and parenting tips to help you choose the perfect toys for your little ones
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search articles..."
              className="pl-12 pr-4 py-3 rounded-full border-2 focus:border-primary"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">🌟 Featured Article</h2>
          <Card className="overflow-hidden soft-shadow hover:playful-shadow transition-all duration-300 group">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Featured
                </Badge>
              </div>
              
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4">
                  {featuredPost.category}
                </Badge>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <Button variant="hero" className="w-fit group">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Categories Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group cursor-pointer overflow-hidden soft-shadow hover:playful-shadow transition-all duration-300 bounce-hover">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge variant="secondary" className="absolute top-3 left-3 text-xs">
                  {post.category}
                </Badge>
                
                {/* Hover Actions */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="animate-bounce-gentle">
            Load More Articles
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                📬 Never Miss a Tip!
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Subscribe to our newsletter for the latest parenting tips, toy reviews, and exclusive content
              </p>
              
              <div className="flex max-w-md mx-auto gap-3">
                <Input 
                  placeholder="Enter your email..."
                  className="flex-1"
                />
                <Button variant="hero">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-3">
                No spam, unsubscribe anytime. We respect your privacy! 💕
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;