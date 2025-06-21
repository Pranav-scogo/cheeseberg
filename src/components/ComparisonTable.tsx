import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, X, Zap } from "lucide-react";

const comparisonData = [
  {
    feature: "Real-time decisioning",
    iceberg: true,
    traditional: false,
    description: "Make intelligent decisions based on context and real-time data"
  },
  {
    feature: "System actions (RMM)",
    iceberg: true,
    traditional: false,
    description: "Directly execute system commands and remote management tasks"
  },
  {
    feature: "Contextual conversation",
    iceberg: true,
    traditional: "Limited",
    description: "Maintain full conversation context across sessions and channels"
  },
  {
    feature: "Custom SOP learning",
    iceberg: true,
    traditional: "Rule-based",
    description: "Learn from your specific procedures and organizational knowledge"
  },
  {
    feature: "Multi-system integration",
    iceberg: true,
    traditional: false,
    description: "Connect and orchestrate actions across multiple enterprise systems"
  },
  {
    feature: "Proactive issue resolution",
    iceberg: true,
    traditional: false,
    description: "Identify and resolve issues before they impact users"
  },
  {
    feature: "Natural language understanding",
    iceberg: true,
    traditional: "Basic",
    description: "Understand complex queries and technical language"
  },
  {
    feature: "Automated escalation",
    iceberg: true,
    traditional: "Manual",
    description: "Intelligent escalation with full context preservation"
  }
];

export function ComparisonTable() {
  return (
    <section className="pt-20 pb-10 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            <Zap className="w-4 h-4 mr-2" />
            Category Leadership
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Agentic AI vs Traditional Chatbots
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Iceberg's agentic AI approach surpasses traditional chatbot limitations
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-6 font-semibold">Feature</th>
                  <th className="text-center p-6 font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary-foreground" />
                      </div>
                      Iceberg
                    </div>
                  </th>
                  <th className="text-center p-6 font-semibold text-muted-foreground">
                    Traditional Chatbot
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-t hover:bg-muted/20 transition-colors">
                    <td className="p-6">
                      <div>
                        <div className="font-medium mb-1">{row.feature}</div>
                        <div className="text-sm text-muted-foreground">
                          {row.description}
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      {row.iceberg === true ? (
                        <div className="inline-flex items-center gap-2 text-primary">
                          <Check className="w-5 h-5" />
                          <span className="font-medium">Yes</span>
                        </div>
                      ) : (
                        <span className="font-medium text-primary">{row.iceberg}</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {row.traditional === false ? (
                        <div className="inline-flex items-center gap-2 text-muted-foreground">
                          <X className="w-5 h-5" />
                          <span>No</span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">{row.traditional}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Experience the difference with intelligent, context-aware AI that actually understands your enterprise needs
          </p>
        </div>
      </div>
    </section>
  );
}