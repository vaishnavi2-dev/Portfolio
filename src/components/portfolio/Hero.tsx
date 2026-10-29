import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutText, profile, stats, typingWords } from "./data";
import { ProfilePhoto } from "./ProfilePhoto";
import { Reveal, SectionHeading } from "./Reveal";
import { SocialLinks } from "./SocialLinks";

function useTyping(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    let delay = deleting ? 45 : 90;
    if (!deleting && text === word) delay = 1600;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const typed = useTyping(typingWords);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero" aria-hidden="true" />
      <div
        className="absolute inset-0 dot-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        aria-hidden="true"
      />
     <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-5 pt-8 pb-16 md:flex-row md:justify-between md:px-8 md:pt-12 md:pb-24">
        <Reveal className="max-w-2xl text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-success-soft px-3 py-1 text-xs font-semibold text-success">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            Open to opportunities
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-gradient md:text-2xl">{profile.title}</p>
          <p className="mt-4 h-7 text-lg text-muted-foreground" aria-live="polite">
            Building <span className="font-semibold text-foreground">{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-0.5 translate-y-0.5 bg-primary animate-caret" />
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Full stack .NET developer with 3 years of experience building enterprise web
            applications, REST APIs and real-time dashboards.
          </p>
          <p className="mt-3 text-sm font-medium text-muted-foreground">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Button asChild variant="hero" size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="/resume.pdf" download>
                <Download /> Download Resume
              </a>
            </Button>
          </div>
          <SocialLinks className="mt-8 justify-center md:justify-start" />
        </Reveal>
        <Reveal delay={150}>
          <ProfilePhoto size="hero" />
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
   <section id="about" className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <SectionHeading eyebrow="About" title="A little about me" />
      <Reveal className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
        <ProfilePhoto size="about" />
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{aboutText}</p>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="card-lift rounded-2xl border border-border bg-card p-6">
              <p className="text-4xl font-extrabold tracking-tight text-gradient">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
