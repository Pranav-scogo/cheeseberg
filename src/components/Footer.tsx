import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Youtube,
  Calendar,
  Play,
  Sparkles,
  CheckCircle,
  Clock,
  Users,
  Shield
} from "lucide-react";

// HubSpot API integration function
const bookDemo = async () => {
  try {
    // Replace with your actual HubSpot portal ID and form ID
    const HUBSPOT_PORTAL_ID = "YOUR_PORTAL_ID";
    const HUBSPOT_FORM_ID = "YOUR_FORM_ID";
    
    // HubSpot Forms API endpoint
    const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: [
          {
            objectTypeId: "0-1",
            name: "email",
            value: "demo-request@company.com" // This would come from a form
          },
          {
            objectTypeId: "0-1", 
            name: "firstname",
            value: "Demo Request"
          },
          {
            objectTypeId: "0-1",
            name: "lastname", 
            value: "User"
          }
        ],
        context: {
          pageUri: window.location.href,
          pageName: "Iceberg CTA Section"
        }
      })
    });

    if (response.ok) {
      console.log("Demo booking successful");
      alert("Demo booking request sent! We'll contact you soon.");
    } else {
      console.error("Demo booking failed");
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error booking demo:", error);
    alert("Something went wrong. Please try again.");
  }
};

const benefits = [
  {
    icon: CheckCircle,
    text: "Free consultation included",
    color: "text-green-600"
  },
  {
    icon: Users,
    text: "Custom implementation plan",
    color: "text-blue-600"
  },
  {
    icon: Clock,
    text: "See results in 3 weeks",
    color: "text-purple-600"
  },
  {
    icon: Shield,
    text: "Enterprise security guaranteed",
    color: "text-amber-600"
  }
];

export function Footer() {
  const [isBookingDemo, setIsBookingDemo] = useState(false);

  const handleBookDemo = async () => {
    setIsBookingDemo(true);
    await bookDemo();
    setIsBookingDemo(false);
  };

  const handleTryDemo = () => {
    console.log("Try demo clicked");
    // Add your live demo logic here
    alert("Live demo would be launched here");
  };

  return (
    <>
      {/* Final CTA Section */}
      <section className="pb-24 pt-10 bg-gradient-to-br from-background via-purple-50/30 to-background dark:from-background dark:via-purple-900/20 dark:to-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10  bg-gradient-to-br from-purple-200/20 to-blue-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/25 to-purple-200/35 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto relative">
          <motion.div 
            className=" mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-card/90 backdrop-blur-xl border border-border/50 shadow-2xl relative overflow-hidden max-w-6xl mx-auto">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white/20 to-blue-50/30 dark:from-purple-900/20 dark:via-purple-800/10 dark:to-blue-900/20 pointer-events-none"></div>
              
              <CardContent className="p-12 text-center relative z-10">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <Badge variant="outline" className="text-purple-700 dark:text-purple-300 border-purple-200/60 dark:border-purple-600/60 bg-purple-50/80 dark:bg-purple-900/40 backdrop-blur-sm px-4 py-2">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Ready to Transform IT Support?
                  </Badge>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold mb-6"
                >
                  Want to see Iceberg in action?
                </motion.h2>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
                >
                  Try a live demo or talk to our product team to discover how Iceberg can transform your enterprise IT support.
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary"
                    onClick={handleBookDemo}
                    disabled={isBookingDemo}
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    {isBookingDemo ? "Booking..." : "Book Demo"}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-primary/5 backdrop-blur-sm"
                    onClick={handleTryDemo}
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Try Live Demo
                  </Button>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                >
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <motion.div 
                        key={index}
                        className="flex flex-col items-center gap-3 group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center group-hover:border-primary/30 transition-colors">
                          <Icon className={`w-6 h-6 ${benefit.color}`} />
                        </div>
                        <span className="text-sm text-muted-foreground text-center leading-tight group-hover:text-foreground transition-colors">
                          {benefit.text}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Bottom trust indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="mt-10 pt-8 border-t border-border/50"
                >
                  <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>30-minute setup demo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span>Custom ROI analysis</span>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="font-bold text-xl mb-4 text-primary">Iceberg</div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Modern tech support for enterprise teams, powered by agentic AI. Automate ITSM and improve digital employee experience.
              </p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <Linkedin className="w-4 h-4 text-primary" />
                </div>
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <Twitter className="w-4 h-4 text-primary" />
                </div>
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <Youtube className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Agentic AI Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security & Compliance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Nexus RMM</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Documentation</a></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">IT Support Automation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Digital Employee Experience</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ITSM Integration</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Enterprise AI</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Remote Device Management</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@iceberg.ai</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
              
              <div className="mt-4">
                <Button size="sm" className="w-full" onClick={handleBookDemo}>
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Iceberg AI. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}