import { Badge } from "./ui/badge";
import FeaturesSectionDemo from "./ui/features-section-demo-2";
import { Sparkles } from "lucide-react";

export function UseCases() {
  return (
    <section className=" bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-primary border-primary/20 bg-primary/5">
            <Sparkles className="w-4 h-4 mr-2" />
            Core Capabilities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Iceberg Does
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Iceberg automates everyday IT support tasks, reduces ticket load, and gives employees instant help through secure, scalable AI.
          </p>
        </div>

        {/* Features Grid */}
        <FeaturesSectionDemo />

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-3 rounded-full border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Ready to see Iceberg in action?</span>
          </div>
        </div>
      </div>
    </section>
  );
}