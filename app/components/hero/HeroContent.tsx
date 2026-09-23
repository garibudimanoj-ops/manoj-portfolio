"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Terminal, Sparkles, Layers, Cpu } from "lucide-react";

export default function HeroContent() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start text-left max-w-2xl"
    >
      {/* Eyebrow Badge */}
      <motion.div variants={itemVariants} className="mb-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-primary text-xs sm:text-sm font-medium tracking-wide shadow-sm">
          <Terminal className="w-3.5 h-3.5" />
          <span>B.Tech Computer Science Student</span>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        variants={itemVariants}
        id="hero-title"
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-4"
      >
        Hi, I&apos;m <span className="text-gradient">Manoj</span>
      </motion.h1>

      {/* Secondary Headline */}
      <motion.div
        variants={itemVariants}
        className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground/90 tracking-tight mb-5 flex flex-wrap items-center gap-2"
      >
        <span className="text-primary font-bold">Software Development</span>
        <span className="text-muted-foreground/60">•</span>
        <span className="text-cyan-500 font-bold">AI</span>
        <span className="text-muted-foreground/60">•</span>
        <span className="text-indigo-400 font-bold">Automation</span>
      </motion.div>

      {/* Short Professional Statement */}
      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl"
      >
        Focused on building high-performance web applications, intelligent AI workflows,
        and scalable automation pipelines with modern engineering practices.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto"
      >
        <Link
          href="/projects"
          className="btn btn-primary group px-6 py-2.5 rounded-full text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all duration-200"
        >
          <span>View Projects</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>

        <Link
          href="/contact"
          className="btn btn-outline px-6 py-2.5 rounded-full text-sm sm:text-base font-medium border-border/80 hover:bg-accent/60 transition-all duration-200"
        >
          Let&apos;s Connect
        </Link>
      </motion.div>

      {/* Technical Focus Chips */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-border/50 w-full"
      >
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mr-1">
          Specialization:
        </span>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-muted/60 border border-border/50 text-xs font-medium text-foreground">
          <Layers className="w-3 h-3 text-primary" />
          <span>Full-Stack & APIs</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-muted/60 border border-border/50 text-xs font-medium text-foreground">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>AI & Computer Vision</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-muted/60 border border-border/50 text-xs font-medium text-foreground">
          <Cpu className="w-3 h-3 text-indigo-400" />
          <span>Automation (n8n)</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
