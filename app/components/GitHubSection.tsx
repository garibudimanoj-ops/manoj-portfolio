"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Github } from "lucide-react";
import SectionHeading from "@/app/components/SectionHeading";

export default function GitHubSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Simulate API call - in a real app, this would fetch from GitHub API
  useEffect(() => {
    if (isInView) {
      queueMicrotask(() => setIsLoading(true));
      setTimeout(() => {
        setIsLoading(false);
        setHasError(true);
      }, 1000);
    }
  }, [isInView]);

  // Fallback UI when API is unavailable or fails
  if (hasError || !isLoading) {
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

              {/* Fallback message when GitHub stats unavailable */}
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  Explore My GitHub Activity
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

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

            {/* Loading state */}
            {isLoading && (
              <div className="grid sm:grid-cols-3 gap-4 mb-8 text-center py-8">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="animate-pulse h-8 w-8 mx-auto bg-muted/50 rounded-full"></div>
                  <div className="text-sm text-muted-foreground mt-2">Loading...</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="animate-pulse h-8 w-8 mx-auto bg-muted/50 rounded-full"></div>
                  <div className="text-sm text-muted-foreground mt-2">Loading...</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="animate-pulse h-8 w-8 mx-auto bg-muted/50 rounded-full"></div>
                  <div className="text-sm text-muted-foreground mt-2">Loading...</div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}