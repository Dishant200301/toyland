import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  ShoppingCart, 
  Truck, 
  RotateCcw, 
  Shield, 
  CreditCard, 
  MessageCircle,
  Star,
  Gift,
  HelpCircle
} from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      id: "orders",
      title: "Orders & Shopping",
      icon: ShoppingCart,
      color: "bg-primary",
      faqs: [
        {
          question: "How do I place an order?",
          answer: "Simply browse our collection, add items to your cart, and follow our easy checkout process. You can shop as a guest or create an account for faster future orders."
        },
        {
          question: "Can I modify or cancel my order?",
          answer: "You can modify or cancel orders within 2 hours of placement. After that, we begin processing for shipment. Contact us immediately if you need changes."
        },
        {
          question: "Do you offer gift wrapping?",
          answer: "Yes! We offer beautiful gift wrapping for $3.99 per item. You can add this option during checkout and include a personalized message."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and Klarna for buy-now-pay-later options."
        }
      ]
    },
    {
      id: "shipping",
      title: "Shipping & Delivery",
      icon: Truck,
      color: "bg-secondary",
      faqs: [
        {
          question: "What are your shipping options?",
          answer: "We offer free standard shipping (5-7 business days) on orders over $50, express shipping (2-3 business days) for $7.99, and overnight shipping for $19.99."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes! We ship to over 50 countries worldwide. International shipping costs and delivery times vary by destination. Duties and taxes may apply."
        },
        {
          question: "How can I track my order?",
          answer: "Once shipped, you'll receive a tracking number via email. You can also track orders in your account dashboard or contact us for updates."
        },
        {
          question: "What if my package is damaged or lost?",
          answer: "We're fully insured! If your package arrives damaged or doesn't arrive, contact us immediately. We'll send a replacement or provide a full refund."
        }
      ]
    },
    {
      id: "returns",
      title: "Returns & Exchanges",
      icon: RotateCcw,
      color: "bg-accent",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We offer easy 30-day returns for unused items in original packaging. Digital receipts make returns hassle-free - no need to print anything!"
        },
        {
          question: "How do I return an item?",
          answer: "Contact us for a free return label, pack the item securely, and drop it off at any authorized shipping location. Refunds process within 5-7 business days."
        },
        {
          question: "Can I exchange for a different size or color?",
          answer: "Absolutely! Exchanges follow the same process as returns. We'll send your new item as soon as we receive the original."
        },
        {
          question: "Who pays for return shipping?",
          answer: "We provide free return shipping for defective items or our errors. For other returns, standard return shipping applies unless you have our premium membership."
        }
      ]
    },
    {
      id: "safety",
      title: "Safety & Quality",
      icon: Shield,
      color: "bg-destructive",
      faqs: [
        {
          question: "Are your toys safety tested?",
          answer: "Yes! All toys meet or exceed CPSIA, ASTM, and international safety standards. We conduct rigorous third-party testing before any product reaches our shelves."
        },
        {
          question: "What age recommendations mean?",
          answer: "Age ranges are based on developmental appropriateness and safety testing. They consider small parts, complexity, and skill level required for safe play."
        },
        {
          question: "Are your toys non-toxic?",
          answer: "Absolutely! All toys are made from non-toxic, BPA-free materials with lead-free paints and finishes. Safety certificates are available upon request."
        },
        {
          question: "What if I have a safety concern?",
          answer: "Contact us immediately! We take safety seriously and investigate all concerns. We'll work with you and our suppliers to address any issues promptly."
        }
      ]
    },
    {
      id: "account",
      title: "Account & Membership",
      icon: Star,
      color: "bg-primary",
      faqs: [
        {
          question: "Do I need an account to shop?",
          answer: "No, you can shop as a guest. However, creating an account lets you track orders, save wishlists, earn rewards, and enjoy faster checkout."
        },
        {
          question: "How do I reset my password?",
          answer: "Click 'Forgot Password' on the login page, enter your email, and we'll send reset instructions. Check your spam folder if you don't see it within a few minutes."
        },
        {
          question: "What are the benefits of membership?",
          answer: "Members enjoy early access to sales, exclusive discounts, free return shipping, birthday surprises, and points for every purchase that convert to rewards."
        },
        {
          question: "How do I update my account information?",
          answer: "Log into your account and visit 'Account Settings' to update personal information, addresses, payment methods, and communication preferences."
        }
      ]
    },
    {
      id: "products",
      title: "Products & Recommendations",
      icon: Gift,
      color: "bg-accent",
      faqs: [
        {
          question: "How do you choose your toys?",
          answer: "Our expert team evaluates toys based on educational value, safety, durability, and fun factor. We test everything ourselves and partner with trusted brands."
        },
        {
          question: "Can you help me choose the right toy?",
          answer: "Of course! Use our age and interest filters, read our detailed descriptions, or contact our toy experts for personalized recommendations."
        },
        {
          question: "Do you have toys for children with special needs?",
          answer: "Yes! We curate sensory-friendly, therapeutic, and adaptive toys. Look for our 'Special Needs Friendly' filter or contact us for specific recommendations."
        },
        {
          question: "When do you add new products?",
          answer: "We add new products weekly! Follow us on social media or subscribe to our newsletter to be first to know about new arrivals and exclusive launches."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <Badge variant="secondary" className="font-playful text-sm px-4 py-2 mb-6">
            ❓ Frequently Asked Questions ❓
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            We're Here to 
            <span className="text-primary font-playful"> Help! </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers to common questions about shopping, shipping, safety, and more. Can't find what you're looking for? We're just a message away!
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search for answers..."
              className="pl-12 pr-4 py-3 rounded-full border-2 focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center group bounce-hover soft-shadow hover:playful-shadow transition-all duration-300">
            <CardContent className="p-6">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4 group-hover:animate-bounce-gentle" />
              <h3 className="font-semibold mb-2">Need More Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">Chat with our friendly support team</p>
              <Button variant="outline" size="sm">Start Live Chat</Button>
            </CardContent>
          </Card>
          
          <Card className="text-center group bounce-hover soft-shadow hover:playful-shadow transition-all duration-300">
            <CardContent className="p-6">
              <CreditCard className="h-12 w-12 text-secondary mx-auto mb-4 group-hover:animate-bounce-gentle" />
              <h3 className="font-semibold mb-2">Track Your Order</h3>
              <p className="text-sm text-muted-foreground mb-4">Check the status of your purchase</p>
              <Button variant="outline" size="sm">Track Order</Button>
            </CardContent>
          </Card>
          
          <Card className="text-center group bounce-hover soft-shadow hover:playful-shadow transition-all duration-300">
            <CardContent className="p-6">
              <RotateCcw className="h-12 w-12 text-accent mx-auto mb-4 group-hover:animate-bounce-gentle" />
              <h3 className="font-semibold mb-2">Start a Return</h3>
              <p className="text-sm text-muted-foreground mb-4">Easy returns within 30 days</p>
              <Button variant="outline" size="sm">Return Item</Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {(searchQuery ? filteredFAQs : faqCategories).map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${category.color} flex items-center justify-center`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    {category.title}
                    <Badge variant="outline" className="ml-auto">
                      {category.faqs.length} questions
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`${category.id}-${index}`}>
                        <AccordionTrigger className="text-left hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {searchQuery && filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
            <p className="text-muted-foreground mb-6">
              We couldn't find any FAQs matching "{searchQuery}". Try different keywords or contact us directly.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
              <Button variant="hero">
                Contact Support
              </Button>
            </div>
          </div>
        )}

        {/* Still Need Help */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-0 text-center">
            <CardContent className="p-12">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto animate-bounce-gentle">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground">
                  Still Have Questions?
                </h3>
                
                <p className="text-muted-foreground">
                  Our friendly customer service team is here to help! We typically respond within 24 hours and love hearing from our ToyLand families.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact Us
                  </Button>
                  <Button variant="outline">
                    <Search className="mr-2 h-4 w-4" />
                    Browse Help Center
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  📞 Call us: +1 (555) TOY-LAND | 📧 Email: help@toyland.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;