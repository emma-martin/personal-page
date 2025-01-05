import { ThemeToggle } from "@/components/theme-toggle";
import { Code, Github, Mail } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-1 bg-background px-2 py-4 flex justify-between items-center border-b border-border">
      <Link
        href="/"
        className="font-mono text-primary hover:accent-hover transition-colors underline flex items-center gap-2"
      >
        <Code size={20} className="icon-hover" />
        Emma Martín
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/emma-martin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:accent-hover transition-colors flex items-center gap-2"
        >
          <Github size={16} className="icon-hover" />
          Github
        </Link>
        <Link
          href="mailto:emmamartinalvarez@gmail.com"
          className="text-primary hover:accent-hover transition-colors flex items-center gap-2"
        >
          <Mail size={16} className="icon-hover" />
          Email
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
