import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "./data";

export function SocialLinks({ className }: { className?: string }) {
  const linkClass =
    "inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary";
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={linkClass}
      >
        <Github className="size-[18px]" />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={linkClass}
      >
        <Linkedin className="size-[18px]" />
      </a>
      <a href={`mailto:${profile.email}`} aria-label="Email" className={linkClass}>
        <Mail className="size-[18px]" />
      </a>
    </div>
  );
}
