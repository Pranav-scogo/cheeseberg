import { Badge } from "./ui/badge";
import FeaturesSectionDemo from "./ui/features-section-demo-2";
import { Sparkles, Star, Zap, Globe } from "lucide-react";
import { ScrollReveal } from "./ui/scroll-reveal";

export function UseCases() {
  return (
    <section className="pt-10  bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        
        {/* Floating icons */}
        <div className="absolute top-32 left-1/4 text-primary/5 animate-float" style={{ animationDelay: '1s', animationDuration: '7s' }}>
          <Star className="w-6 h-6" />
        </div>
        <div className="absolute bottom-32 right-1/4 text-purple-400/5 animate-float" style={{ animationDelay: '3s', animationDuration: '9s' }}>
          <Zap className="w-8 h-8" />
        </div>
        <div className="absolute top-1/2 right-12 text-accent/10 animate-float" style={{ animationDelay: '5s', animationDuration: '6s' }}>
          <Globe className="w-4 h-4" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="fade" delay={100}>
            <Badge variant="outline" className="mb-6 text-primary border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Core Capabilities
            </Badge>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={300}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent p-2">
              What Iceberg Does
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={500}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Iceberg automates everyday IT support tasks, reduces ticket load, and gives employees instant help through secure, scalable AI.
            </p>
          </ScrollReveal>
        </div>

        {/* Features Grid */}
        <ScrollReveal direction="up" delay={700}>
          <FeaturesSectionDemo />
        </ScrollReveal>

        {/* Bottom CTA */}
   
      </div>
    </section>
  );
}