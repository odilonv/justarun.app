"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import ProblemSection from "./components/ProblemSection";
import BentoSection from "./components/BentoSection";
import PersonaSection from "./components/PersonaSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <VideoSection />
      <ProblemSection />
      <BentoSection />
      <PersonaSection />
    </main>
  );
}
