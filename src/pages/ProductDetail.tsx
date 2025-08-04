import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Heart, ShoppingCart, Share2, Shield, Truck, RotateCcw, Award } from "lucide-react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    id: "1",
    name: "Rainbow Building Blocks Deluxe Set",
    price: 29.99,
    originalPrice: 39.99,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.8,
    reviews: 124,
    ageRange: "2-6 years",
    badges: ["Bestseller", "Educational", "Safe Materials"],
    description: "Spark your child's creativity with our Rainbow Building Blocks Deluxe Set! This colorful collection includes 100 pieces in various shapes and sizes, perfect for endless building adventures. Made from premium, non-toxic materials that are safe for little hands.",
    features: [
      "100 colorful building pieces",
      "Non-toxic, BPA-free materials", 
      "Rounded edges for safety",
      "Storage bag included",
      "Develops motor skills & creativity",
      "Compatible with major block brands"
    ],
    specifications: {
      "Age Range": "2-6 years",
      "Material": "Premium ABS Plastic",
      "Pieces": "100 blocks",
      "Dimensions": "12 x 8 x 6 inches",
      "Weight": "2.5 lbs",
      "Safety": "CPSIA & ASTM Certified"
    }
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      date: "2 days ago",
      comment: "My 4-year-old absolutely loves these blocks! Great quality and the colors are so vibrant. Highly recommend!"
    },
    {
      id: 2,
      name: "Mike D.",
      rating: 5,
      date: "1 week ago", 
      comment: "Perfect size for little hands. The blocks connect well and my daughter plays with them for hours."
    },
    {
      id: 3,
      name: "Emma L.",
      rating: 4,
      date: "2 weeks ago",
      comment: "Good quality blocks, though I wish there were more unique shapes included. Still a great buy!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden soft-shadow">
              <img 
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              {product.badges.map((badge) => (
                <Badge key={badge} variant="secondary" className="bg-accent/20 text-accent-foreground">
                  {badge}
                </Badge>
              ))}
            </div>

            {/* Title & Rating */}
            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <Badge variant="outline" className="text-sm">
                  Ages {product.ageRange}
                </Badge>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-primary">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
              )}
              <Badge variant="destructive" className="text-sm">
                Save ${(product.originalPrice! - product.price).toFixed(2)}
              </Badge>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Key Features:</h3>
              <ul className="grid grid-cols-1 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-center gap-4">
                <label className="font-medium">Quantity:</label>
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="px-4 py-2 min-w-12 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="hero" className="flex-1 group animate-bounce-gentle">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center space-y-2">
                <Shield className="h-8 w-8 text-accent mx-auto" />
                <div className="text-xs text-muted-foreground">Safety Certified</div>
              </div>
              <div className="text-center space-y-2">
                <Truck className="h-8 w-8 text-secondary mx-auto" />
                <div className="text-xs text-muted-foreground">Free Shipping</div>
              </div>
              <div className="text-center space-y-2">
                <RotateCcw className="h-8 w-8 text-primary mx-auto" />
                <div className="text-xs text-muted-foreground">30-Day Returns</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
              <TabsTrigger value="safety">Safety & Care</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4 text-foreground">Specifications</h3>
                      <dl className="space-y-3">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <dt className="text-muted-foreground">{key}:</dt>
                            <dd className="font-medium">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-4 text-foreground">What's Included</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-accent" />
                          <span className="text-sm">100 Rainbow Building Blocks</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-accent" />
                          <span className="text-sm">Convenient Storage Bag</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-accent" />
                          <span className="text-sm">Building Guide & Ideas Booklet</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                          {review.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium">{review.name}</span>
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="safety" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-foreground">Safety Information</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• CPSIA and ASTM safety certified</li>
                        <li>• Non-toxic, BPA-free materials</li>
                        <li>• No small parts that could pose choking hazards</li>
                        <li>• Rounded edges for safe play</li>
                        <li>• Lead-free paint and finishes</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3 text-foreground">Care Instructions</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Clean with mild soap and warm water</li>
                        <li>• Air dry completely before storage</li>
                        <li>• Store in the included storage bag</li>
                        <li>• Keep away from extreme heat</li>
                        <li>• Regular inspection recommended</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;