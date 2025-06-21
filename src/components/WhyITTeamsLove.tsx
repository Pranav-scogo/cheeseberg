import { Badge } from "./ui/badge";
import { Timeline, TimelineEntry } from "./ui/timeline";
import { 
  Monitor, 
  Clock, 
  Focus, 
  Sparkles,
  TrendingUp,
  Users,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Settings,
  Cpu,
  BarChart3
} from "lucide-react";

const timelineData: TimelineEntry[] = [
  {
    title: "Proactive Issue Resolution",
    date: "Real-time Monitoring",
    category: "Remote Management",
    status: "completed",
    icon: <Monitor className="w-4 h-4" />,
    content: (
      <div>
        <p className="mb-6 text-sm leading-relaxed">
          With built-in Nexus RMM, IT teams can monitor and troubleshoot devices remotely before users even notice issues. Proactive monitoring prevents problems and reduces support tickets.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-primary/5 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Device Health</span>
            </div>
            <p className="text-xs text-muted-foreground">24/7 system monitoring</p>
          </div>
          <div className="bg-green-500/5 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">Performance</span>
            </div>
            <p className="text-xs text-muted-foreground">70% faster resolution</p>
          </div>
        </div>

        <div className="space-y-2">
          {[
            "Automatic problem detection",
            "Remote device management",
            "Preventive maintenance alerts",
            "Real-time performance monitoring"
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Always-On AI Support",
    date: "24/7 Availability",
    category: "Continuous Service",
    status: "completed",
    icon: <Clock className="w-4 h-4" />,
    content: (
      <div>
        <p className="mb-6 text-sm leading-relaxed">
          Multilingual AI support means employees get help anytime, anywhere. This boosts digital employee experience (DEX) and eliminates support backlogs during off-hours.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-4 rounded-xl mb-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-xs text-muted-foreground">Languages</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">24/7</div>
              <div className="text-xs text-muted-foreground">Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">∞</div>
              <div className="text-xs text-muted-foreground">Capacity</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Globe, text: "Multi-channel support" },
            { icon: Zap, text: "Instant responses" },
            { icon: Users, text: "Unlimited users" },
            { icon: Settings, text: "Custom workflows" }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-xs text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Strategic IT Focus",
    date: "Workload Optimization",
    category: "Team Efficiency",
    status: "completed",
    icon: <Focus className="w-4 h-4" />,
    content: (
      <div>
        <p className="mb-6 text-sm leading-relaxed">
          By automating L0-L2 support tasks, Iceberg dramatically reduces ticket volume and resolution times (MTTR), allowing IT teams to focus on strategic initiatives instead of repetitive fixes.
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
            <span className="text-sm font-medium">Ticket Volume</span>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-green-600">-80%</span>
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <span className="text-sm font-medium">Resolution Time</span>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-blue-600">-70%</span>
              <TrendingUp className="w-4 h-4 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-card/50 p-4 rounded-lg border border-border/50">
          <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            What IT Teams Can Focus On Instead:
          </h4>
          <div className="space-y-2">
            {[
              "Digital transformation initiatives",
              "Security and compliance improvements",
              "Infrastructure optimization projects",
              "Strategic technology planning"
            ].map((focus, index) => (
              <div key={index} className="flex items-center gap-2 text-xs">
                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                <span className="text-muted-foreground">{focus}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export function WhyITTeamsLove() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-primary border-primary/20 bg-primary/5">
            <Sparkles className="w-4 h-4 mr-2" />
            Proven Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why IT Teams Love Iceberg
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how Iceberg transforms IT operations with measurable results that make both teams and employees happier
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <Timeline data={timelineData} />
        </div>
   
      </div>
    </section>
  );
}