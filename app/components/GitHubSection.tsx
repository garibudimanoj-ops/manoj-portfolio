"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Github, ArrowRight, Code2 } from "lucide-react";
import SectionHeading from "@/app/components/SectionHeading";

export default function GitHubSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 lg:py-28" id="github">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Building in Public"
          highlight="Public"
          description="I use GitHub to build projects, practice development, explore open source, and learn through implementation."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-lg p-8 lg:p-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Github className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    garibudimanoj-ops
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Software Developer & AI Enthusiast
                  </p>
                </div>
              </div>
              <a
                href="https://github.com/garibudimanoj-ops"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github className="w-4 h-4" />
                View GitHub
              </a>
            </div>

            {/* Profile summary */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-foreground">0</div>
                <div className="text-sm text-muted-foreground">Public Repos</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-foreground">0</div>
                <div className="text-sm text-muted-foreground">Followers</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-foreground">0</div>
                <div className="text-sm text-muted-foreground">Following</div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Featured Projects</h4>
              <div className="space-y-3 mb-8">
                {[
                  {
                    name: "TaskTally",
                    description: "AI-Powered Financial Management Platform",
                    lang: "TypeScript",
                  },
                  {
                    name: "AI Social Media Automation",
                    description: "Content creation and scheduling automation",
                    lang: "React",
                  },
                  {
                    name: "SafeSight AI",
                    description: "Industrial Safety Monitoring (Concept)",
                    lang: "Python",
                  },
                ].map((repo) => (
                  <a
                    key={repo.name}
                    href="https://github.com/garibudimanoj-ops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Code2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {repo.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {repo.description}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-xs text-muted-foreground">{repo.lang}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="btn btn-outline">
                  View Projects
                </Link>
                <a
                  href="https://github.com/garibudimanoj-ops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Github className="w-4 h-4" />
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}