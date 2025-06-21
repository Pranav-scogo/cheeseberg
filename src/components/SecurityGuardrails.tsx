import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { CardStack, Highlight } from "./ui/card-stack";
import { 
  Shield, 
  Eye, 
  Lock, 
  AlertTriangle, 
  FileText, 
  Users,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Star,
  Layers
} from "lucide-react";

const SECURITY_CARDS = [
  {
    id: 0,
    name: "Foundation Layer: Data Protection",
    designation: "Military-Grade Encryption & Compliance",
    content: (
      <div>
        <h3 className="text-xl font-bold mb-4 text-card-foreground">Enterprise Data Protection</h3>
        <p className="mb-4">
          All data is protected with <Highlight variant="purple">AES-256 encryption</Highlight> at rest 
          and <Highlight variant="primary">TLS 1.3 encryption</Highlight> in transit. Your sensitive 
          information never leaves your secure environment without proper authorization.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• End-to-end encryption for all communications</li>
          <li>• Zero-knowledge architecture ensures data privacy</li>
          <li>• Hardware security module (HSM) key management</li>
          <li>• Regular security audits and penetration testing</li>
        </ul>
      </div>
    ),
  },
  {
    id: 1,
    name: "Access Layer: Zero Trust Architecture", 
    designation: "Role-Based Controls & Identity Verification",
    content: (
      <div>
        <h3 className="text-xl font-bold mb-4 text-card-foreground">Comprehensive Access Control</h3>
        <p className="mb-4">
          Iceberg implements <Highlight variant="purple">zero trust security principles</Highlight> with 
          comprehensive role-based access control. Every user, device, and application 
          is verified before gaining access to <Highlight variant="success">any system resources</Highlight>.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Multi-factor authentication (MFA) required</li>
          <li>• Continuous identity verification</li>
          <li>• Principle of least privilege access</li>
          <li>• Real-time threat detection and response</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    name: "Processing Layer: Privacy-First AI",
    designation: "PII Protection & Local Processing",
    content: (
      <div>
        <h3 className="text-xl font-bold mb-4 text-card-foreground">Intelligent Data Protection</h3>
        <p className="mb-4">
          Our AI automatically <Highlight variant="warning">redacts sensitive PII data</Highlight> and 
          processes requests locally when possible. We never share your data with 
          external LLMs, ensuring <Highlight variant="purple">complete privacy compliance</Highlight>.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Automatic PII detection and redaction</li>
          <li>• Local processing minimizes data exposure</li>
          <li>• No data sharing with third-party AI services</li>
          <li>• GDPR, CCPA, and HIPAA compliant processing</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    name: "Compliance Layer: Audit Readiness",
    designation: "SOC 2, GDPR & Enterprise Standards",
    content: (
      <div>
        <h3 className="text-xl font-bold mb-4 text-card-foreground">Enterprise Compliance Standards</h3>
        <p className="mb-4">
          Built for enterprise compliance with <Highlight variant="purple">SOC 2 Type II certification</Highlight>, 
          GDPR compliance, and CCPA adherence. Every action is logged and auditable for 
          complete <Highlight variant="success">regulatory transparency</Highlight>.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• SOC 2 Type II certified infrastructure</li>
          <li>• Comprehensive audit trails and logging</li>
          <li>• Regular compliance assessments</li>
          <li>• Data residency controls and governance</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    name: "Transparency Layer: Explainable AI",
    designation: "Source Attribution & Decision Tracking",
    content: (
      <div>
        <h3 className="text-xl font-bold mb-4 text-card-foreground">Transparent AI Operations</h3>
        <p className="mb-4">
          Every AI response includes <Highlight variant="purple">verifiable source links</Highlight> and 
          clear explanations of decision-making processes. No black box AI - you always 
          know <Highlight variant="primary">why and how</Highlight> Iceberg reached its conclusions.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Source attribution for every response</li>
          <li>• Confidence scores and reasoning paths</li>
          <li>• Decision audit trails for compliance</li>
          <li>• Human-readable AI explanation summaries</li>
        </ul>
      </div>
    ),
  },
];

const securityFeatures = [
  {
    icon: Eye,
    title: "Answers you can trust",
    description: "Every response is source-linked and explainable so you know where the information comes from and why it was suggested.",
    category: "Transparency",
    color: "purple"
  },
  {
    icon: Lock,
    title: "Enterprise-level data security",
    description: "All data is protected with AES-256 encryption at rest and TLS encryption in transit, following the highest global standards.",
    category: "Data Protection",
    color: "blue"
  },
  {
    icon: AlertTriangle,
    title: "AI that knows its limits",
    description: "Built-in safeguards prevent hallucinations, off-topic responses, or prompt injection attacks.",
    category: "AI Safety",
    color: "amber"
  },
  {
    icon: FileText,
    title: "Privacy-first design", 
    description: "Iceberg automatically redacts PII (like names, IDs, and emails) and does not share your data with any external LLMs.",
    category: "Privacy",
    color: "green"
  },
  {
    icon: Users,
    title: "Controlled access for every user",
    description: "Role-based permissions and integration with IAM/SSO systems ensure the right people see the right data and nothing more.",
    category: "Access Control",
    color: "violet"
  },
  {
    icon: Users,
    title: "Controlled access for every user",
    description: "Role-based permissions and integration with IAM/SSO systems ensure the right people see the right data and nothing more.",
    category: "Access Control",
    color: "violet"
  }
];

const complianceStandards = [
  { name: "SOC 2 Type II", status: "Compliant", icon: Shield, color: "purple" },
  { name: "GDPR Compliant", status: "Certified", icon: Lock, color: "blue" },
  { name: "CCPA Compliant", status: "Certified", icon: FileText, color: "green" },
  { name: "ISO 27001", status: "Certified", icon: Star, color: "violet" }
];

const additionalFeatures = [
  { text: "Source-linked responses", icon: "•", color: "purple" },
  { text: "Zero hallucinations", icon: "•", color: "blue" },
  { text: "Automatic PII redaction", icon: "•", color: "green" },
  { text: "No external data sharing", icon: "•", color: "amber" },
  { text: "Role-based access control", icon: "•", color: "violet" }
];

export function SecurityGuardrails() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-background via-purple-50/30 to-background dark:from-background dark:via-purple-900/20 dark:to-background relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-purple-300/30 dark:from-purple-800/20 dark:to-purple-700/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-100/25 to-purple-200/35 dark:from-purple-700/25 dark:to-purple-600/35 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-purple-300/15 to-purple-400/25 dark:from-purple-600/15 dark:to-purple-500/25 rounded-full blur-2xl"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          style={{ y: textY }}
        >
          <Badge variant="outline" className="mb-6 text-purple-700 dark:text-purple-300 border-purple-200/60 dark:border-purple-600/60 bg-purple-50/80 dark:bg-purple-900/40 backdrop-blur-sm p-3">
            <Layers className="w-4 h-4 mr-2" />
            Enterprise Security
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-purple-600 to-foreground bg-clip-text text-transparent">
            Enterprise-Grade Trust, Built In
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Iceberg is designed with security, privacy, and control at its core so that IT teams can confidently deploy AI without compromising compliance or user trust.
          </p>
        </motion.div>

        {/* Card Stack Section */}
        <div className="">
          <div className="text-center mb-16">
            <motion.h3 
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Layered Security Architecture
            </motion.h3>
            <motion.p 
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Scroll to see our security layers stack up in your favor
            </motion.p>
          </div>
          
          <CardStack items={SECURITY_CARDS} />
        </div>

        {/* Enhanced Features Grid */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Security Features Overview</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="bg-card/90 backdrop-blur-sm border border-purple-200/40 dark:border-purple-700/40 hover:border-purple-400/60 dark:hover:border-purple-500/60 transition-all duration-300 hover:shadow-2xl group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-transparent dark:from-purple-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-100/80 to-purple-200/80 dark:from-purple-800/60 dark:to-purple-700/60 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-purple-200/90 group-hover:to-purple-300/90 dark:group-hover:from-purple-700/70 dark:group-hover:to-purple-600/70 transition-all duration-300">
                          <Icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-3 text-xs bg-purple-100/60 text-purple-700 dark:bg-purple-800/40 dark:text-purple-300">
                            {feature.category}
                          </Badge>
                          <h4 className="font-bold text-lg mb-3 text-card-foreground group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                            {feature.title}
                          </h4>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced Two Column Layout */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Security Features List */}
          <Card className="bg-gradient-to-br from-card/90 to-purple-50/40 dark:from-card/90 dark:to-purple-900/20 backdrop-blur-lg border border-purple-200/50 dark:border-purple-700/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100/80 to-purple-200/80 dark:from-purple-800/60 dark:to-purple-700/60 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold">Security Features</h3>
              </div>
              
              <div className="space-y-4">
                {additionalFeatures.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 group hover:bg-purple-50/50 dark:hover:bg-purple-900/30 p-3 rounded-lg transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {feature.text}
                    </span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-purple-600 dark:text-purple-400" />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Compliance Standards */}
          <Card className="bg-gradient-to-br from-purple-50/60 via-card/80 to-purple-100/40 dark:from-purple-900/40 dark:via-card/80 dark:to-purple-800/30 backdrop-blur-lg border border-purple-200/50 dark:border-purple-700/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100/80 to-purple-200/80 dark:from-purple-800/60 dark:to-purple-700/60 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold">Compliance &amp; Standards</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {complianceStandards.map((standard, index) => {
                  const Icon = standard.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="bg-card/90 backdrop-blur-sm p-5 rounded-xl border border-purple-200/40 dark:border-purple-700/40 hover:border-purple-400/60 dark:hover:border-purple-500/60 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-transparent dark:from-purple-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                          <div className="font-semibold text-sm group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                            {standard.name}
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {standard.status}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built to meet the most stringent enterprise security and compliance requirements with continuous monitoring and improvement.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-purple-100/50 via-purple-50/80 to-purple-200/50 dark:from-purple-900/40 dark:via-purple-800/30 dark:to-purple-700/40 border border-purple-300/40 dark:border-purple-600/40 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-white/20 to-purple-200/30 dark:from-purple-800/20 dark:via-purple-900/10 dark:to-purple-700/20"></div>
            <CardContent className="p-10 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-purple-600 bg-clip-text text-transparent">Deploy with Confidence</h3>
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Enterprise-ready security that doesn't compromise on functionality or user experience. Get started with Iceberg today.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                {[
                  { label: "Zero Trust Architecture", color: "bg-purple-500" },
                  { label: "End-to-End Encryption", color: "bg-blue-500" },
                  { label: "Audit Ready", color: "bg-green-500" },
                  { label: "SOC 2 Compliant", color: "bg-violet-500" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-2 bg-card/70 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200/50 dark:border-purple-700/50"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-2 h-2 ${item.color} rounded-full`}></div>
                    <span className="text-muted-foreground font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}