"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Sparkles, Network } from "lucide-react";

export default function HeroFallback() {
  return (
    <div
      className="relative w-full max-w-[420px] aspect-square mx-auto flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* Ambient gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-cyan-500/10 to-transparent rounded-full blur-3xl -z-10" />

      {/* Outer cyber ring */}
      <div className="absolute inset-4 rounded-full border border-primary/20 border-dashed animate-[spin_60s_linear_infinite]" />

      {/* Middle orbital ring */}
      <div className="absolute inset-14 rounded-full border border-cyan-400/25" />

      {/* Inner tech container */}
      <div className="relative z-10 w-44 h-44 rounded-2xl bg-gradient-to-br from-background/90 via-card to-background border border-primary/30 shadow-2xl flex flex-col items-center justify-center p-6 backdrop-blur-md">
        <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-3 shadow-inner">
          <Cpu className="w-7 h-7" />
        </div>
        <div className="text-xs font-mono font-semibold tracking-wider text-primary uppercase">
          AI & Systems
        </div>
        <div className="text-[11px] text-muted-foreground mt-1 text-center font-mono">
          Interactive Core
        </div>
      </div>

      {/* Orbiting Satellite Node 1 - AI / ML */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/85 border border-primary/30 shadow-md backdrop-blur-sm text-xs font-mono text-foreground"
      >
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>AI Models</span>
      </motion.div>

      {/* Orbiting Satellite Node 2 - Full Stack */}
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/85 border border-primary/30 shadow-md backdrop-blur-sm text-xs font-mono text-foreground"
      >
        <Terminal className="w-3.5 h-3.5 text-primary" />
        <span>Full-Stack</span>
      </motion.div>

      {/* Orbiting Satellite Node 3 - Automation */}
      <motion.div
        animate={{ x: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 right-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/85 border border-border/80 shadow-md backdrop-blur-sm text-xs font-mono text-muted-foreground"
      >
        <Network className="w-3.5 h-3.5 text-blue-400" />
        <span>Automation</span>
      </motion.div>
    </div>
  );
}
