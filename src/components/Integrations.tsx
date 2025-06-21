import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Puzzle, ArrowRight } from "lucide-react";

const integrations = [
  { name: "ServiceNow", category: "ITSM" },
  { name: "Zendesk", category: "Support" },
  { name: "Jira", category: "Project Management" },
  { name: "Freshdesk", category: "Support" },
  { name: "Google Workspace", category: "Productivity" },
  { name: "Microsoft 365", category: "Productivity" },
  { name: "Slack", category: "Communication" },
  { name: "Microsoft Teams", category: "Communication" },
  { name: "Zoho", category: "Business Suite" },
  { name: "Nexus RMM", category: "Remote Management" },
  { name: "Active Directory", category: "Identity" },
  { name: "Okta", category: "Identity" },
  { name: "Salesforce", category: "CRM" },
  { name: "Confluence", category: "Knowledge Base" },
  { name: "SharePoint", category: "Document Management" },
  { name: "Splunk", category: "Monitoring" }
];

const integrationCategories = [
  { name: "ITSM & Ticketing", count: 4, color: "bg-blue-500/10 text-blue-700" },
  { name: "Communication", count: 3, color: "bg-green-500/10 text-green-700" },
  { name: "Identity & Access", count: 3, color: "bg-purple-500/10 text-purple-700" },
  { name: "Business Tools", count: 6, color: "bg-orange-500/10 text-orange-700" }
];

export function Integrations() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            <Puzzle className="w-4 h-4 mr-2" />
            Seamless Integration
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Works with Your Existing Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Iceberg integrates seamlessly with your current tech stack, requiring minimal setup and configuration
          </p>
        </div>

        {/* Integration Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {integrationCategories.map((category, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 ${category.color}`}>
                <span>{category.count}+ Tools</span>
              </div>
              <h3 className="font-semibold">{category.name}</h3>
            </Card>
          ))}
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {integrations.map((integration, index) => (
            <Card key={index} className="p-4 text-center hover:shadow-md transition-all duration-300 hover:scale-105 group">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/40 rounded"></div>
              </div>
              <div className="font-medium text-sm mb-1">{integration.name}</div>
              <div className="text-xs text-muted-foreground">{integration.category}</div>
            </Card>
          ))}
        </div>

        {/* Special Highlight: Nexus RMM */}
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/10 border-primary/20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Featured Integration: Nexus RMM
              </h3>
              <p className="text-muted-foreground">
                Advanced remote device management capabilities with full RMM integration for comprehensive IT support automation
              </p>
            </div>
            <div className="flex items-center gap-2 text-primary font-medium">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Card>

        {/* API & Custom Integrations */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don&apos;t see your tool? We offer custom integrations and a comprehensive API.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline">REST API</Badge>
            <Badge variant="outline">Webhooks</Badge>
            <Badge variant="outline">Custom Connectors</Badge>
            <Badge variant="outline">Enterprise SSO</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}