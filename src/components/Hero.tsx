import { Button } from "./ui/button";
import { ArrowRight, Bot, Shield, Zap } from "lucide-react";

export function Hero() {
  const handleBookDemo = () => {
    // Mock HubSpot API call - replace with actual implementation
    console.log("Booking demo via HubSpot API");
    // In production, this would call HubSpot's API to book a demo
    alert("Demo booking would be processed via HubSpot API");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
            <Bot className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by Agentic AI</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Modern Tech Support for{" "}
            <span className="text-primary">Enterprise Teams</span>,{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Powered by Agentic AI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Automate ITSM, improve DEX/EX (Digital Employee Experience), and resolve employee issues instantly across chat, voice, email, and more.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={handleBookDemo}
            >
              Book Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
           
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Enterprise-Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>80% Faster Resolution</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              <span>24/7 AI Support</span>
            </div>
          </div>
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