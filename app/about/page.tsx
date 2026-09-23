"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Building2, UserCheck } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Code2,
    title: "Learning",
    description:
      "Continuously improving technical and problem-solving skills through projects and hands-on experience.",
  },
  {
    icon: Lightbulb,
    title: "Building",
    description:
      "Creating practical software and AI projects that solve real-world problems.",
  },
  {
    icon: Building2,
    title: "Growing",
    description:
      "Preparing for internships, open source contributions, and real-world development work.",
  },
  {
    icon: UserCheck,
    title: "Professional",
    description:
      "Developing into a strong software engineer with deep expertise in AI and automation.",
  },
];

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);
  useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 lg:py-28" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              About <span className="text-primary">Me</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m a B.Tech Computer Science student with a strong interest in software development,
              artificial intelligence, automation, and problem solving.
            </p>
          </div>

          {/* Main description */}
          <div className="space-y-6 text-muted-foreground mb-16">
            <p className="text-base leading-relaxed">
              I’m currently strengthening my skills in <span className="font-medium text-foreground">Python, JavaScript, React, Next.js, SQL, AI, automation, and DSA</span> through
              practical projects and continuous practice.
            </p>
            <p className="text-base leading-relaxed">
              I enjoy turning ideas into practical projects and continuously improving through hands-on learning.
              My goal is to become a strong software engineer and gradually build deeper expertise in AI engineering.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Values */}
          <div className="mt-20">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Core <span className="text-primary">Values</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-medium">Quick learner</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-medium">Problem solver</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-medium">Curious about technology</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-medium">Team-oriented</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-medium">Practical project builder</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-medium">Continuous learner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-20 bg-accent/30 rounded-lg p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Learning Philosophy</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg italic text-foreground/80 mb-4">
                I believe the fastest way to grow as a developer is to keep learning, build real projects,
                understand mistakes, and improve consistently.
              </p>
              <div className="flex justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>Learn</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>Build</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  <span>Improve</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}