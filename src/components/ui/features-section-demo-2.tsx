import { cn } from "@/lib/utils";
import {
  MessageSquare,
  Settings,
  Globe,
  BookOpen,
  Users,
  Clock,
} from "lucide-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Handles common IT issues on its own",
      description:
        "Iceberg autonomously resolves routine IT problems without human intervention, reducing ticket volume significantly.",
      icon: <MessageSquare />,
      tag: "Support Assistant",
    },
    {
      title: "Works with your existing helpdesk tools",
      description:
        "Seamlessly integrates with your current IT infrastructure and ticketing systems for unified operations.",
      icon: <Settings />,
      tag: "Integration",
    },
    {
      title: "Supports multilingual, multi-channel resolution",
      description:
        "Provides support across multiple languages and communication channels for global enterprise needs.",
      icon: <Globe />,
      tag: "Multilingual & Channel",
    },
    {
      title: "Trained on your SOPs, policies, and knowledge base",
      description:
        "Leverages your organization's specific documentation and procedures for accurate, contextual responses.",
      icon: <BookOpen />,
      tag: "KB Trained",
    },
    {
      title: "Switches to a human when needed, with context",
      description:
        "Intelligently escalates complex issues to human agents while preserving conversation context and history.",
      icon: <Users />,
      tag: "AI to Human Handoff",
    },
    {
      title: "Solves issues faster and makes employees happier",
      description:
        "Dramatically reduces resolution times while improving overall employee satisfaction and productivity.",
      icon: <Clock />,
      tag: "Reduced Time Spent",
    },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto gap-6">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  tag,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col p-8 relative group/feature bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        "min-h-[280px]"
      )}
    >
      {/* Hover gradient overlay */}
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl pointer-events-none" />
      
      {/* Icon */}
      <div className="mb-6 relative z-10">
        <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center text-muted-foreground group-hover/feature:bg-primary/10 group-hover/feature:text-primary transition-all duration-300">
          <div className="w-8 h-8">
            {icon}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 relative z-10">
        <h3 className="text-lg font-bold mb-4 text-card-foreground group-hover/feature:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
      </div>
      
      {/* Tag */}
      <div className="relative z-10 mt-auto">
        <span className="inline-flex items-center px-3 py-1.5 bg-muted text-muted-foreground text-xs font-medium rounded-full group-hover/feature:bg-primary/10 group-hover/feature:text-primary transition-all duration-300">
          {tag}
        </span>
      </div>
    </div>
  );
};