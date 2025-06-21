import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { 
  Clock, 
  Puzzle, 
  Globe,
  Zap
} from "lucide-react";

const integrations = [
  { name: "ServiceNow", category: "ITSM" },
  { name: "Jira", category: "Issue Tracking" },
  { name: "Freshdesk", category: "Help Desk" },
  { name: "Zendesk", category: "Customer Support" },
  { name: "Google Workspace", category: "Productivity" },
  { name: "Microsoft 365", category: "Productivity" },
  { name: "Slack", category: "Communication" },
  { name: "Zoho", category: "Business Suite" },
  { name: "Nexus RMM", category: "Device Management" },
  { name: "Nexus RMM", category: "Device Management" },
];

export function EnterpriseScale() {
  return (
    <section className="pt-10  bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
     

        {/* Benefits Grid */}
       

        {/* Integrations Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Seamless Integrations</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with your existing enterprise tools and workflows for unified operations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Card className="bg-card/80 backdrop-blur-sm border border-border hover:border-primary/20 transition-all duration-300 group text-center">
                  <CardContent className="p-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Puzzle className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                      {integration.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {integration.category}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Special callout for Nexus RMM */}
   
        </motion.div>

        {/* Bottom Stats */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-10">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <h3 className="text-3xl font-bold text-primary">50+</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Enterprise Integrations</p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Globe className="w-5 h-5 text-primary" />
                    <h3 className="text-3xl font-bold text-primary">24/7</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Global Support Coverage</p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="text-3xl font-bold text-primary">3 Weeks</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Implementation Time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}