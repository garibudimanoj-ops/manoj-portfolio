"use client";

import SectionHeading from "@/app/components/SectionHeading";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";

export default function EducationPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 lg:py-28" id="education">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          highlight="Education"
          description="My academic background and institutions."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Bachelor of Technology — Computer Science
                </h3>
                <p className="text-muted-foreground mt-1">
                  Vignan Institute of Technology and Management
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="w-4 h-4" />
                <span>Computer Science & Engineering</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="w-4 h-4" />
                <span>Undergraduate Degree</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Pursuing a B.Tech in Computer Science with coursework in programming, data structures, algorithms, databases, software engineering, and computer systems. Building practical skills alongside academic learning through hands-on projects and continuous practice.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-lg font-semibold text-foreground">CS Core</div>
              <p className="text-xs text-muted-foreground mt-1">Programming, DS, Algorithms</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-lg font-semibold text-foreground">Web Dev</div>
              <p className="text-xs text-muted-foreground mt-1">React, Next.js, TypeScript</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-lg font-semibold text-foreground">AI & ML</div>
              <p className="text-xs text-muted-foreground mt-1">Python, OpenCV, YOLO</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}