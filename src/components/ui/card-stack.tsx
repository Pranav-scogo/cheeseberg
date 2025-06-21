"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 20;
  const SCALE_FACTOR = scaleFactor || 0.02;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create transforms for each card individually outside of any callback
  const card0Y = useTransform(scrollYProgress, [0, 0.25], [400, 0]);
  const card0Scale = useTransform(scrollYProgress, [0, 0.25], [0.85, 1]);
  const card0Opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const card0RotateZ = useTransform(scrollYProgress, [0, 0.25], [0, 0]);

  const card1Y = useTransform(scrollYProgress, [0.12, 0.37], [400, CARD_OFFSET]);
  const card1Scale = useTransform(scrollYProgress, [0.12, 0.37], [0.85, 1 + SCALE_FACTOR]);
  const card1Opacity = useTransform(scrollYProgress, [0.12, 0.27], [0, 1]);
  const card1RotateZ = useTransform(scrollYProgress, [0.12, 0.37], [-1.5, 0]);

  const card2Y = useTransform(scrollYProgress, [0.24, 0.49], [400, 2 * CARD_OFFSET]);
  const card2Scale = useTransform(scrollYProgress, [0.24, 0.49], [0.85, 1 + 2 * SCALE_FACTOR]);
  const card2Opacity = useTransform(scrollYProgress, [0.24, 0.39], [0, 1]);
  const card2RotateZ = useTransform(scrollYProgress, [0.24, 0.49], [-3, 0]);

  const card3Y = useTransform(scrollYProgress, [0.36, 0.61], [400, 3 * CARD_OFFSET]);
  const card3Scale = useTransform(scrollYProgress, [0.36, 0.61], [0.85, 1 + 3 * SCALE_FACTOR]);
  const card3Opacity = useTransform(scrollYProgress, [0.36, 0.51], [0, 1]);
  const card3RotateZ = useTransform(scrollYProgress, [0.36, 0.61], [-4.5, 0]);

  const card4Y = useTransform(scrollYProgress, [0.48, 0.73], [400, 4 * CARD_OFFSET]);
  const card4Scale = useTransform(scrollYProgress, [0.48, 0.73], [0.85, 1 + 4 * SCALE_FACTOR]);
  const card4Opacity = useTransform(scrollYProgress, [0.48, 0.63], [0, 1]);
  const card4RotateZ = useTransform(scrollYProgress, [0.48, 0.73], [-6, 0]);

  const cardTransforms = [
    { y: card0Y, scale: card0Scale, opacity: card0Opacity, rotateZ: card0RotateZ },
    { y: card1Y, scale: card1Scale, opacity: card1Opacity, rotateZ: card1RotateZ },
    { y: card2Y, scale: card2Scale, opacity: card2Opacity, rotateZ: card2RotateZ },
    { y: card3Y, scale: card3Scale, opacity: card3Opacity, rotateZ: card3RotateZ },
    { y: card4Y, scale: card4Scale, opacity: card4Opacity, rotateZ: card4RotateZ },
  ];

  return (
    <div ref={containerRef} className="relative min-h-[1000px] w-full max-w-4xl mx-auto px-4">
      {items.map((card, index) => {
        const transforms = cardTransforms[index] || cardTransforms[0];

        return (
          <motion.div
            key={card.id}
            className="absolute bg-card/95 backdrop-blur-xl border border-purple-200/60 dark:border-purple-700/60 w-full max-w-3xl left-1/2 rounded-3xl p-8 shadow-2xl flex flex-col justify-between hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all duration-500 min-h-[450px]"
            style={{
              transformOrigin: "center center",
              x: "-50%",
              y: transforms.y,
              scale: transforms.scale,
              opacity: transforms.opacity,
              rotateZ: transforms.rotateZ,
              zIndex: index + 1,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white/20 to-purple-100/20 dark:from-purple-900/20 dark:via-purple-800/10 dark:to-purple-700/15 rounded-3xl pointer-events-none"></div>
            
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-200/20 via-transparent to-purple-300/20 dark:from-purple-600/20 dark:via-transparent dark:to-purple-500/20 p-[1px]">
              <div className="w-full h-full bg-card/90 rounded-3xl"></div>
            </div>
            
            <div className="relative z-10 flex-1">
              <div className="text-card-foreground leading-relaxed text-base mb-8">
                {card.content}
              </div>
            </div>
            
            <div className="relative z-10 border-t border-purple-200/40 dark:border-purple-700/40 pt-6">
              <p className="text-card-foreground font-semibold text-lg mb-2">
                {card.name}
              </p>
              <p className="text-muted-foreground text-sm font-medium">
                {card.designation}
              </p>
            </div>

            <div className="absolute top-6 right-6 w-2 h-2 bg-purple-400/30 dark:bg-purple-500/40 rounded-full"></div>
            <div className="absolute top-6 right-10 w-1 h-1 bg-purple-300/40 dark:bg-purple-400/50 rounded-full"></div>
            
            <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-to-br from-purple-100/80 to-purple-200/80 dark:from-purple-800/80 dark:to-purple-700/80 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-300">{index + 1}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// Enhanced Highlight component with purple variants
export const Highlight = ({
  children,
  className,
  variant = "primary"
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "accent" | "success" | "warning" | "purple";
}) => {
  const variants = {
    primary: "bg-purple-100/80 text-purple-800 border border-purple-200/60 dark:bg-purple-800/30 dark:text-purple-200 dark:border-purple-600/40",
    accent: "bg-accent/15 text-accent-foreground border border-accent/20",
    success: "bg-green-100/80 text-green-800 border border-green-200/60 dark:bg-green-800/30 dark:text-green-200 dark:border-green-600/40",
    warning: "bg-yellow-100/80 text-yellow-800 border border-yellow-200/60 dark:bg-yellow-800/30 dark:text-yellow-200 dark:border-yellow-600/40",
    purple: "bg-gradient-to-r from-purple-100/90 to-purple-200/90 text-purple-900 border border-purple-300/60 dark:from-purple-800/40 dark:to-purple-700/40 dark:text-purple-100 dark:border-purple-500/40"
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-lg font-medium text-sm backdrop-blur-sm ${variants[variant]} ${className || ''}`}
    >
      {children}
    </span>
  );
};

// Demo component with enhanced purple-themed Iceberg security content
export default function CardStackDemo() {
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

  return (
    <div className="min-h-screen">
      {/* Card Stack Section */}
      <div className="min-h-[1400px] flex items-center justify-center bg-gradient-to-br from-background via-purple-50/20 to-background dark:from-background dark:via-purple-900/10 dark:to-background py-20">
        <CardStack items={SECURITY_CARDS} />
      </div>
    </div>
  );
}