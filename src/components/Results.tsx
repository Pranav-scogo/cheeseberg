import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Clock, 
  Globe, 
  DollarSign, 
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const impactMetrics = [
  {
    icon: TrendingUp,
    metric: "80%",
    description: "Increase in productivity/efficiency",
    detail: "Employees spend less time waiting for IT support and more time on core work"
  },
  {
    icon: Clock,
    metric: "70%",
    description: "Faster resolution time",
    detail: "Dramatically reduced MTTR through intelligent automation and context preservation"
  },
  {
    icon: Globe,
    metric: "24/7",
    description: "50+ multilingual availability",
    detail: "Round-the-clock support in over 50 languages across all time zones"
  },
  {
    icon: DollarSign,
    metric: "Pay-per-use",
    description: "with enterprise controls",
    detail: "Flexible pricing model that scales with your usage while maintaining enterprise governance"
  }
];

const additionalBenefits = [
  "Reduce support ticket volume by up to 70%",
  "Improve employee satisfaction scores (CSAT)",
  "Lower total cost of ownership (TCO)",
  "Accelerate onboarding and training",
  "Enhance security posture and compliance",
  "Scale support without increasing headcount"
];

const customerSuccessStories = [
  {
    company: "Global Tech Corp",
    size: "50,000+ employees",
    result: "65% reduction in L1 tickets",
    quote: "Iceberg transformed how our employees experience IT support"
  },
  {
    company: "Financial Services Inc",
    size: "25,000+ employees", 
    result: "80% faster resolution",
    quote: "The AI understands our processes better than some human agents"
  },
  {
    company: "Healthcare Systems",
    size: "15,000+ employees",
    result: "95% employee satisfaction",
    quote: "24/7 multilingual support was a game-changer for our global team"
  }
];

export function Results() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            <Zap className="w-4 h-4 mr-2" />
            Proven Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You Can Expect with Iceberg
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from enterprises who&apos;ve transformed their IT support with Iceberg
          </p>
        </div>

        {/* Main Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) => {
            const Icon = metric.icon;
            
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {metric.metric}
                </div>
                <div className="font-medium mb-2">
                  {metric.description}
                </div>
                <p className="text-sm text-muted-foreground">
                  {metric.detail}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Additional Benefits */}
          <Card className="p-8">
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Additional Benefits
            </h3>
            <div className="space-y-4">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* ROI Calculator Preview */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/10">
            <h3 className="font-semibold text-lg mb-4">
              Calculate Your ROI
            </h3>
            <p className="text-muted-foreground mb-6">
              See how much time and money Iceberg can save your organization
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Current IT tickets/month:</span>
                <span className="font-medium">~5,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Potential automation:</span>
                <span className="font-medium text-primary">70%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Estimated monthly savings:</span>
                <span className="font-medium text-primary">$45,000</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="font-medium">Get Your Custom ROI Report</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </div>
          </Card>
        </div>

        {/* Customer Success Stories */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-8">
            Trusted by Leading Enterprises
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {customerSuccessStories.map((story, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <div className="font-medium text-primary">{story.company}</div>
                  <div className="text-sm text-muted-foreground">{story.size}</div>
                </div>
                <div className="text-2xl font-semibold text-primary mb-3">
                  {story.result}
                </div>
                <p className="text-sm text-muted-foreground italic">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Implementation Timeline */}
        <Card className="p-8 text-center bg-muted/30">
          <h3 className="font-semibold text-lg mb-4">
            Implementation Timeline
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-medium">1</span>
              </div>
              <span>Week 1: Setup &amp; Integration</span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-medium">2</span>
              </div>
              <span>Week 2: Training &amp; Testing</span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-medium">3</span>
              </div>
              <span>Week 3: Go Live</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}