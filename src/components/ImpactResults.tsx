import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import {
  TrendingUp,
  Clock,
  Globe,
  Languages,
  Target,
  Users,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

const results = [
  {
    icon: TrendingUp,
    value: 80,
    suffix: "%",
    label: "Increase in productivity/efficiency",
    description:
      "Teams report significant productivity gains with automated support resolution",
    color: "text-green-600",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Clock,
    value: 70,
    suffix: "%",
    label: "Faster resolution time",
    description:
      "Average reduction in Mean Time to Resolution (MTTR) across all support categories",
    color: "text-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Globe,
    value: 24,
    suffix: "/7",
    label: "Multichannel availability",
    description:
      "Round-the-clock support across chat, voice, email, and mobile channels",
    color: "text-purple-600",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Languages,
    value: 50,
    suffix: "+",
    label: "Multilingual capability",
    description:
      "Comprehensive language support with cultural context and localization",
    color: "text-amber-600",
    bgColor: "bg-amber-500/10",
  },
];

function AnimatedNumber({
  value,
  suffix = "",
  duration = 2000,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOutCubic * value);

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

export function ImpactResults() {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-purple-50/20 dark:from-muted/30 dark:via-background dark:to-purple-900/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-200/20 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/25 to-amber-200/35 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}