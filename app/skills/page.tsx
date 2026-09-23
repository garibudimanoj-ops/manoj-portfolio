"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Terminal, Layers, Zap, Database, Settings } from "lucide-react";
import SkillCategory from "@/app/components/SkillCategory";

export default function SkillsPage() {
  const ref = useRef<HTMLDivElement>(null);
  useInView(ref, { once: true, margin: "-50px" });

  const categories = [
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "Python", level: "learning" },
        { name: "JavaScript", level: "learning" },
        { name: "TypeScript", level: "learning" },
      ],
    },
    {
      title: "Frontend",
      icon: Layers,
      skills: [
        { name: "HTML", level: "learning" },
        { name: "CSS", level: "learning" },
        { name: "React", level: "building" },
        { name: "Next.js", level: "building" },
        { name: "Responsive Design", level: "building" },
      ],
    },
    {
      title: "Backend / Data",
      icon: Database,
      skills: [
        { name: "SQL", level: "learning" },
        { name: "PostgreSQL", level: "learning" },
        { name: "Supabase", level: "building" },
        { name: "Prisma", level: "learning" },
      ],
    },
    {
      title: "AI & Automation",
      icon: Zap,
      skills: [
        { name: "Artificial Intelligence", level: "learning" },
        { name: "AI APIs", level: "building" },
        { name: "n8n", level: "building" },
        { name: "Computer Vision", level: "exploring" },
        { name: "AI Automation", level: "learning" },
      ],
    },
    {
      title: "Tools",
      icon: Terminal,
      skills: [
        { name: "Git", level: "building" },
        { name: "GitHub", level: "building" },
        { name: "VS Code", level: "building" },
      ],
    },
    {
      title: "Currently Learning",
      icon: Settings,
      skills: [
        { name: "DSA", level: "learning" },
        { name: "Advanced Full-Stack Development", level: "learning" },
        { name: "AI Engineering", level: "learning" },
      ],
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28" id="skills">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Technical <span className="text-primary">Skills</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m actively developing my technical foundation across these areas through hands-on projects and continuous learning.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="animate-in"
              >
                <SkillCategory category={category} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}