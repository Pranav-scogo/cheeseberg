import { Button } from "./ui/button";
import { ArrowRight, Bot, Shield, Zap, Sparkles, Star, CircuitBoard, Database } from "lucide-react";
import { ScrollReveal } from "./ui/scroll-reveal";

export function Hero() {
  const handleBookDemo = () => {
    // Mock HubSpot API call - replace with actual implementation
    console.log("Booking demo via HubSpot API");
    // In production, this would call HubSpot's API to book a demo
    alert("Demo booking would be processed via HubSpot API");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating animated icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/10 animate-float" style={{ animationDelay: '0s', animationDuration: '6s' }}>
          <Bot className="w-8 h-8" />
        </div>
        <div className="absolute top-40 right-20 text-purple-400/10 animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}>
          <CircuitBoard className="w-12 h-12" />
        </div>
        <div className="absolute bottom-20 left-20 text-accent/20 animate-float" style={{ animationDelay: '4s', animationDuration: '7s' }}>
          <Database className="w-6 h-6" />
        </div>
        <div className="absolute bottom-40 right-10 text-primary/15 animate-float" style={{ animationDelay: '6s', animationDuration: '9s' }}>
          <Shield className="w-10 h-10" />
        </div>
        <div className="absolute top-1/2 left-1/4 text-purple-500/10 animate-float" style={{ animationDelay: '1s', animationDuration: '10s' }}>
          <Star className="w-4 h-4" />
        </div>
        <div className="absolute top-1/3 right-1/3 text-primary/10 animate-float" style={{ animationDelay: '3s', animationDuration: '5s' }}>
          <Sparkles className="w-6 h-6" />
        </div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative container mx-auto px-4 lg:pt-14 lg:pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
     

          {/* Main Headline */}
          <ScrollReveal direction="up" delay={400}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Modern Tech Support for{" "}
              <span className="text-primary relative">
                Enterprise Teams
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full"></div>
              </span>,{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-primary/60 bg-clip-text text-transparent animate-pulse">
                Powered by Agentic AI
              </span>
            </h1>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal direction="up" delay={600}>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Automate ITSM, improve DEX/EX (Digital Employee Experience), and resolve employee issues instantly across chat, voice, email, and more.
            </p>
          </ScrollReveal>

          {/* CTA Button */}
          <ScrollReveal direction="up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                onClick={handleBookDemo}
              >
                <span className="relative z-10">Book Demo</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </ScrollReveal>

          {/* Trust Indicators */}
         
        </div>
      </div>

      {/* Background Pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}