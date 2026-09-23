"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import HeroContent from "./hero/HeroContent";
import HeroFallback from "./hero/HeroFallback";

// Dedicated client-side boundary for the 3D Three.js scene with zero SSR impact
const DynamicHeroScene = dynamic(() => import("./hero/HeroScene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

export default function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-16 lg:py-24"
      aria-labelledby="hero-title"
    >
      {/* Background ambient lighting and subtle tech grid */}
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
        
        {/* Subtle geometric dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-dot-grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 flex justify-center lg:justify-start">
            <HeroContent />
          </div>

          {/* Right Column: Interactive 3D Technology Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-[440px] lg:max-w-[480px]">
              <DynamicHeroScene />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-muted-foreground/70 pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-primary animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}