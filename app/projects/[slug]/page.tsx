import TechBadge from "@/app/components/TechBadge";
import { projects } from "@/app/data/projects";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">This project does not exist.</p>
            <Link href="/projects" className="btn btn-primary">
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <article className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <TechBadge variant="primary">{project.status}</TechBadge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {project.longDescription}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} variant="secondary">{tech}</TechBadge>
            ))}
          </div>
        </div>

        {/* Sticky action area */}
        <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 mb-8 flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">Quick Links</span>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent transition-colors"
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
              className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          <Link
            href="/projects"
            className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </section>

            {/* Problem */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Problem</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Solution</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Architecture */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.architecture}
              </p>
            </section>

            {/* Challenges */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </section>

            {/* Learning */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.learning}
              </p>
            </section>

            {/* Future Plans */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Future Improvements</h2>
              <ul className="space-y-2">
                {project.futurePlans.map((plan) => (
                  <li key={plan} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground mt-2 shrink-0" />
                    {plan}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar - removed, action area is now sticky */}
        </div>
      </div>
    </article>
  );
}