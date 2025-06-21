import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Gauge, 
  Puzzle, 
  Shield, 
  Heart, 
  TrendingUp 
} from "lucide-react";

const enterpriseFeatures = [
  {
    icon: Heart,
    title: "Enhances Digital Employee Experience (DEX)",
    description: "Transform how employees interact with IT support through intuitive, instant assistance that feels natural and helpful."
  },
  {
    icon: Gauge,
    title: "Cuts Ticket Volume and Resolution Time (MTTR)",
    description: "Dramatically reduce support ticket volumes by up to 70% while accelerating mean time to resolution for complex issues."
  },
  {
    icon: Puzzle,
    title: "Integrates with ServiceNow, Jira, and Freshdesk",
    description: "Seamless integration with your existing ITSM stack, maintaining workflow continuity and data consistency."
  },
  {
    icon: Shield,
    title: "Delivers Secure, Scalable Support from Launch",
    description: "Enterprise-ready from day one with robust security, compliance, and scalability built into every interaction."
  }
];

const benefits = [
  {
    icon: Users,
    metric: "10,000+",
    description: "Employees supported simultaneously"
  },
  {
    icon: TrendingUp,
    metric: "99.9%",
    description: "Platform uptime SLA"
  },
  {
    icon: Gauge,
    metric: "&lt;30s",
    description: "Average response time"
  }
];

export function EnterpriseFeatures() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Enterprise Scale
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for IT Teams. Loved by Employees.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Designed specifically for enterprise-scale ITSM and digital employee experience optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {enterpriseFeatures.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <Card key={index} className="p-8 hover:shadow-md transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Enterprise Scale Metrics */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/10 rounded-2xl p-8">
          <h3 className="text-center font-semibold text-lg mb-8">
            Enterprise Scale Performance
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2" dangerouslySetInnerHTML={{ __html: benefit.metric }}></div>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Nexus RMM Integration Highlight */}
    
      </div>
    </section>
  );
}