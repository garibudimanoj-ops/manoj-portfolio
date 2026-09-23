import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import TechBadge from "./TechBadge";
import type { Project } from "@/app/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const statusColors: Record<string, "primary" | "secondary" | "default"> = {
    "active development": "primary",
    "built / experimental": "secondary",
    "concept / prototype": "default",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48 md:h-52 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-opacity duration-500 group-hover:opacity-80 hover:brightness-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl">{project.slug[0].toUpperCase()}</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-md-row">
        <div className="flex-1 flex flex-col md:flex-row gap-3 md:gap-4">
          <TechBadge variant={statusColors[project.status] || "default"}>
            {project.status}
          </TechBadge>

          <h3 className="text-lg font-semibold text-foreground flex-1 group-hover:text-primary transition-colors">
            <Link href={`/projects/${project.slug}`} className="underline underline-offset-2 hover:no-underline">
              {project.title}
            </Link>
          </h3>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-3 flex-1">
          {project.description}
        </p>
      </div>

      <div className="p-6 pt-0">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
          {project.technologies.length > 4 && (
            <TechBadge>+{project.technologies.length - 4}</TechBadge>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 btn btn-primary text-sm font-medium transition-colors"
          >
            View Details
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-accent transition-colors"
              aria-label={`GitHub repo for ${project.title}`}
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-accent transition-colors"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}