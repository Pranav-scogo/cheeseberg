"use client";

import { useEffect, useState } from "react";
import SmoothScrollProvider from "../components/SmoothScrollContext";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { UseCases } from "../components/UseCases";
import { WhyITTeamsLove } from "../components/WhyITTeamsLove";
import { SecurityGuardrails } from "../components/SecurityGuardrails";
import { ComparisonTable } from "../components/ComparisonTable";
import { Footer } from "../components/Footer";
import { EnterpriseScale } from "../components/EnterpriseScale";
import { AnimatedBackground, FloatingElements, GradientOrbs } from "../components/ui/animated-background";
import { ScrollParticles, ScrollProgressBar } from "../components/ui/scroll-particles";

export default function App() {
  const [shouldRenderAnimations, setShouldRenderAnimations] = useState(false);

  useEffect(() => {
    // Check device capabilities and user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isHighPerformanceDevice = navigator.hardwareConcurrency >= 4;
    const isLargeScreen = window.innerWidth > 768;
    
    // Only render heavy animations on capable devices
    setShouldRenderAnimations(!prefersReducedMotion && isHighPerformanceDevice && isLargeScreen);
  }, []);

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-background relative">
        {/* Always show progress bar as it's lightweight */}
        <ScrollProgressBar />
        
        {/* Conditionally render heavy animations */}
        {shouldRenderAnimations && (
          <>
            <ScrollParticles />
            <AnimatedBackground />
            <FloatingElements />
            <GradientOrbs />
          </>
        )}
        
        {/* Main content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <UseCases />
            <WhyITTeamsLove />
            <SecurityGuardrails />
            <EnterpriseScale />
            <ComparisonTable />
            <Footer />
          </main>
        </div>
      </div>
    </SmoothScrollProvider>
  );
}
