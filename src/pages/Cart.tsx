import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag, Gift, Truck, Shield, ArrowRight } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Rainbow Building Blocks Set",
      price: 29.99,
      originalPrice: 39.99,
      image: "/placeholder.svg",
      quantity: 2,
      ageRange: "2-6"
    },
    {
      id: "2",
      name: "Cuddly Unicorn Plush", 
      price: 24.99,
      image: "/placeholder.svg",
      quantity: 1,
      ageRange: "0-10"
    },
    {
      id: "3",
      name: "STEM Science Kit",
      price: 45.99,
      originalPrice: 55.99,
      image: "/placeholder.svg",
      quantity: 1,
      ageRange: "6-10"
    }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setAppliedPromo("WELCOME10 - 10% off");
      setPromoCode("");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => 
    sum + ((item.originalPrice || item.price) - item.price) * item.quantity, 0
  );
  const promoDiscount = appliedPromo ? subtotal * 0.1 : 0;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal - promoDiscount + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-bounce-gentle">
            <ShoppingBag className="h-16 w-16 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">Your cart is empty!</h2>
          <p className="text-muted-foreground">Start filling it with magical toys for your little ones</p>
          <Button variant="hero" size="lg">
            Continue Shopping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            🛒 Your <span className="text-primary font-playful">Magical</span> Cart
          </h1>
          <p className="text-lg text-muted-foreground">
            Review your selected toys and proceed to checkout
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                  Cart Items ({cartItems.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-foreground">{item.name}</h3>
                          <Badge variant="outline" className="text-xs mt-1">
                            Ages {item.ageRange}
                          </Badge>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-primary">${item.price}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${item.originalPrice}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Promo Code */}
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <Input 
                      placeholder="Enter promo code (try: WELCOME10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" onClick={applyPromoCode}>
                    Apply
                  </Button>
                </div>
                {appliedPromo && (
                  <div className="mt-3 p-3 bg-accent/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Gift className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-accent">{appliedPromo}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {savings > 0 && (
                    <div className="flex justify-between text-accent">
                      <span>You saved</span>
                      <span>-${savings.toFixed(2)}</span>
                    </div>
                  )}
                  
                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-accent">
                      <span>Promo discount</span>
                      <span>-${promoDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className={shipping === 0 ? "text-accent" : ""}>
                      {shipping === 0 ? "Free!" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>

                {shipping > 0 && (
                  <div className="text-sm text-muted-foreground text-center p-3 bg-muted/50 rounded-lg">
                    💡 Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                  </div>
                )}

                <Button variant="hero" className="w-full group animate-bounce-gentle">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                  <div className="space-y-2">
                    <Shield className="h-6 w-6 text-accent mx-auto" />
                    <div className="text-xs text-muted-foreground">Secure Payment</div>
                  </div>
                  <div className="space-y-2">
                    <Truck className="h-6 w-6 text-secondary mx-auto" />
                    <div className="text-xs text-muted-foreground">Fast Shipping</div>
                  </div>
                  <div className="space-y-2">
                    <Gift className="h-6 w-6 text-primary mx-auto" />
                    <div className="text-xs text-muted-foreground">Gift Wrapping</div>
                  </div>
                </div>

                <div className="text-center">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;