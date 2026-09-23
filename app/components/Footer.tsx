import Link from "next/link";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-12" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-foreground hover:text-primary transition-colors">
              <Code2 className="w-6 h-6 text-primary" />
              <span>Manoj</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              B.Tech Computer Science Student
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Learn. Build. Improve.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/journey" className="hover:text-primary transition-colors">Journey</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:garibudimanoj@gmail.com" className="hover:text-primary transition-colors">garibudimanoj@gmail.com</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/manoj-garibudi-9959b6327/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/garibudimanoj-ops" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">Social</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/garibudimanoj-ops"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/manoj-garibudi-9959b6327/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:garibudimanoj@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Manoj. Built with curiosity and code.
          </p>
          <p className="text-sm text-muted-foreground">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}