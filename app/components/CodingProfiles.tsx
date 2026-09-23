"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { codingProfiles } from "@/app/data/coding-profiles";

interface CodingProfileCardProps {
  profile: (typeof codingProfiles)[number];
  index: number;
}

export function CodingProfilesCard({
  profile,
  index,
}: CodingProfileCardProps) {
  const initials = profile.name
    .split(/\s+/)
    .map((word) => word[0])
    .join("");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <span className="text-xl font-bold text-primary">{initials}</span>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-1">{profile.name}</h3>
      <p className="text-sm text-primary mb-3">@{profile.username}</p>
      <p className="text-sm text-muted-foreground mb-6 flex-1">{profile.description}</p>

      <a
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary text-xs inline-flex items-center gap-1.5 self-start"
        aria-label={`View ${profile.name} profile`}
      >
        View Profile
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </motion.article>
  );
}

export default function CodingProfiles() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Code2 className="w-8 h-8 mx-auto text-primary mb-2" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Coding Profiles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            My coding practice and competitive programming profiles.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {codingProfiles.map((profile, index) => (
            <CodingProfilesCard key={profile.name} profile={profile} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}