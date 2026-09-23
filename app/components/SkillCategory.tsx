"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";

interface SkillItem {
  name: string;
  level: string;
}

interface SkillCategoryData {
  title: string;
  icon: typeof Code;
  skills: SkillItem[];
}

export default function SkillCategory({ category }: { category: SkillCategoryData }) {
  const { title, icon: Icon, skills } = category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5 }}
      className="h-[300px] bg-card border border-border rounded-lg p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-primary" />
        <span className="text-sm font-medium text-foreground">{title}</span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted/50"
          >
            <span className="text-muted-foreground">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}