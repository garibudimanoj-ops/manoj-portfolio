"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/app/components/SectionHeading";

interface TimelineItem {
  year: string;
  events: string[];
}

const timeline: TimelineItem[] = [
  {
    year: "2024",
    events: [
      "Started B.Tech Computer Science",
      "Began learning web development fundamentals",
      "Explored HTML, CSS, and basic JavaScript",
    ],
  },
  {
    year: "2025",
    events: [
      "Deepened web development skills (React, Next.js)",
      "Built practical projects to solidify concepts",
      "Started exploring AI and automation technologies",
      "Built TaskTally — AI-Powered Financial Management Platform",
      "Built AI Social Media Automation Platform",
    ],
  },
  {
    year: "2026",
    events: [
      "Learning Python, SQL, and advanced programming concepts",
      "Exploring AI & Automation (n8n, AI APIs, Computer Vision)",
      "Working on SafeSight AI — Industrial Safety Monitoring concept",
      "Building full-stack applications with Next.js, Supabase, Prisma",
      "Preparing for internships and real-world development roles",
      "Practicing DSA and system design fundamentals",
    ],
  },
];

export default function JourneyPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28" id="journey">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Journey"
          highlight="Journey"
          description="A timeline of my learning path as a B.Tech Computer Science student exploring software development, AI, and automation."
        />

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative mb-12 pl-8 md:pl-0"
            >
              {/* Year label */}
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
                <h2 className="text-2xl font-bold text-foreground md:w-32 shrink-0">
                  {item.year}
                </h2>
                <div className="hidden md:block h-px bg-border flex-1" />
              </div>

              {/* Events */}
              <div className="md:ml-36 space-y-3">
                {item.events.map((event, i) => (
                  <motion.div
                    key={event}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.15 + i * 0.05,
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Connector line (desktop) */}
              {index < timeline.length - 1 && (
                <div className="hidden md:block absolute left-36 top-full h-8 w-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}