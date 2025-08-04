import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Heart, 
  Send,
  Facebook,
  Twitter,
  Instagram
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our friendly team",
      contact: "+1 (555) TOY-LAND",
      subtext: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Us", 
      description: "We'll respond within 24 hours",
      contact: "hello@toyland.com",
      subtext: "Support & General Inquiries"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Start Chat",
      subtext: "Available Mon-Fri 9AM-6PM"
    }
  ];

  const officeLocations = [
    {
      title: "Headquarters",
      address: "123 Toy Street\nWonderland, NY 10001",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9AM-6PM\nSat: 10AM-4PM\nSun: Closed"
    },
    {
      title: "West Coast Office",
      address: "456 Play Avenue\nMagic City, CA 90210", 
      phone: "+1 (555) 765-4321",
      hours: "Mon-Fri: 9AM-6PM\nSat: 10AM-4PM\nSun: Closed"
    }
  ];

  const faqs = [
    {
      question: "What are your shipping options?",
      answer: "We offer free standard shipping on orders over $50, plus express and overnight options."
    },
    {
      question: "How do I return a product?",
      answer: "Easy returns within 30 days! Contact us for a return label and full refund."
    },
    {
      question: "Are your toys safety certified?",
      answer: "Absolutely! All toys meet CPSIA, ASTM, and international safety standards."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <Badge variant="secondary" className="font-playful text-sm px-4 py-2 mb-6">
            📞 Get in Touch 📞
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            We'd <span className="text-primary font-playful">Love</span> to 
            <span className="text-accent font-playful"> Hear</span> from You!
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our toys? Need help with an order? Our friendly team is here to help make your ToyLand experience magical!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className="text-center group bounce-hover soft-shadow hover:playful-shadow transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto group-hover:animate-bounce-gentle">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                    <div className="font-medium text-primary">{method.contact}</div>
                    <div className="text-xs text-muted-foreground mt-1">{method.subtext}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name *</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name *</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address *</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">How can we help? *</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="order">Order Support</SelectItem>
                      <SelectItem value="product">Product Question</SelectItem>
                      <SelectItem value="return">Returns & Exchanges</SelectItem>
                      <SelectItem value="safety">Safety Concern</SelectItem>
                      <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message *</label>
                  <Textarea 
                    placeholder="Tell us how we can help you..."
                    className="min-h-32"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="newsletter" className="rounded" />
                  <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                    I'd like to receive updates about new toys and special offers
                  </label>
                </div>

                <Button variant="hero" className="w-full group animate-bounce-gentle">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within 24 hours during business days 💕
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Office Locations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Our Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {officeLocations.map((location, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-semibold text-foreground">{location.title}</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <div className="whitespace-pre-line">{location.address}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 flex-shrink-0" />
                        <div>{location.phone}</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <div className="whitespace-pre-line">{location.hours}</div>
                      </div>
                    </div>
                    {index < officeLocations.length - 1 && (
                      <div className="border-b border-border"></div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick FAQs */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Answers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium text-foreground text-sm">{faq.question}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{faq.answer}</p>
                    {index < faqs.length - 1 && (
                      <div className="border-b border-border pt-2"></div>
                    )}
                  </div>
                ))}
                
                <Button variant="outline" className="w-full mt-4">
                  View All FAQs
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Follow us for toy tips, parenting advice, and behind-the-scenes fun!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Find Us on the Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="h-8 w-8 text-primary mx-auto" />
                  <p className="text-muted-foreground">Interactive map would be embedded here</p>
                  <p className="text-sm text-muted-foreground">123 Toy Street, Wonderland, NY 10001</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;