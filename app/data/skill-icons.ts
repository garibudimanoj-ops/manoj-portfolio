export const SkillIcons: Record<string, string> = {
  Python: "Python",
  JavaScript: "JavaScript",
  TypeScript: "TypeScript",
  HTML: "HTML",
  CSS: "CSS",
  React: "React",
  "Next.js": "Nextjs",
  "Responsive Design": "Layout",
  SQL: "Database",
  PostgreSQL: "Database",
  Supabase: "Supabase",
  Prisma: "Prisma",
  "Artificial Intelligence": "Brain",
  "AI APIs": "Zap",
  n8n: "Network",
  "Computer Vision": "Eye",
  "AI Automation": "Bot",
  Git: "GitBranch",
  GitHub: "Github",
  "VS Code": "Code",
  DSA: "GitFork",
  "Advanced Full-Stack Development": "Layers",
  "AI Engineering": "Cpu",
};

export function getSkillIcon(name: string) {
  const iconName = SkillIcons[name];
  return iconName || "Code";
}