"use client";

import SmoothScrollProvider from "../components/SmoothScrollContext";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { UseCases } from "../components/UseCases";
import { WhyITTeamsLove } from "../components/WhyITTeamsLove";
import { SecurityGuardrails } from "../components/SecurityGuardrails";
import { ComparisonTable } from "../components/ComparisonTable";
import { Footer } from "../components/Footer";
import { EnterpriseScale } from "../components/EnterpriseScale";
export default function App() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-background">
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
    </SmoothScrollProvider>
  );
}
