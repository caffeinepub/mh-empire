import { Footer } from "./components/Footer";
import { GlowTrail } from "./components/GlowTrail";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProposalSection } from "./components/ProposalSection";
import { ServicesSection } from "./components/ServicesSection";
import { StarField } from "./components/StarField";

export default function App() {
  return (
    <div
      style={{
        background: "#070A12",
        minHeight: "100vh",
        color: "#F2F4F7",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Background */}
      <StarField />

      {/* Mouse glow trail */}
      <GlowTrail />

      {/* Fixed header */}
      <Header />

      {/* Main content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <ProposalSection />
      </main>

      <Footer />
    </div>
  );
}
