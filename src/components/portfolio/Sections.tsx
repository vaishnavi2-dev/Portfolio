import {
  Activity,
  Briefcase,
  Check,
  Code,
  Database,
  Gauge,
  Github,
  GraduationCap,
  Layers,
  Server,
  Shield,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { education, experience, principles, profile, projects, services, skillGroups } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

const icons = {
  server: Server,
  activity: Activity,
  database: Database,
  layers: Layers,
  code: Code,
  shield: Shield,
  users: Users,
  gauge: Gauge,
};

function Chip({ children }: { children: string }) {
  return (
    <span className="inline-flex rounded-full bg-chip px-3 py-1 text-xs font-medium text-chip-foreground">
      {children}
    </span>
  );
}

const sectionClass = "mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16";

export function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-muted/40">
      <div className={sectionClass}>
        <SectionHeading eyebrow="Skills" title="Tools and technologies I work with" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 80}>
              <div className="card-lift h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-4 text-base font-semibold text-foreground">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className={sectionClass}>
      <SectionHeading eyebrow="Services" title="What I can help with" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal key={s.title} delay={i * 80}>
              <div className="card-lift h-full rounded-2xl border border-border bg-card p-6">
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-muted/40">
      <div className={sectionClass}>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <ol className="relative ml-3 border-l-2 border-border">
          {experience.map((job, i) => (
            <li key={job.company} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[13px] top-1 inline-flex size-6 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground ring-4 ring-background">
                <Briefcase className="size-3" />
              </span>
              <Reveal delay={i * 80}>
                <div className="card-lift rounded-2xl border border-border bg-card p-6 md:p-8">
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                    <span className="text-sm font-medium text-primary">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{job.company}</p>
                  <ul className="mt-5 space-y-3">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function HowIWork() {
  return (
    <section id="how-i-work" className={sectionClass}>
      <SectionHeading eyebrow="How I work" title="Principles I bring to every project" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, i) => {
          const Icon = icons[p.icon];
          return (
            <Reveal key={p.text} delay={i * 80}>
              <div className="card-lift flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6">
                <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm font-medium leading-relaxed text-foreground">{p.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-y border-border bg-muted/40">
      <div className={sectionClass}>
        <SectionHeading eyebrow="Projects" title="Selected work" />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-7 md:p-8">
                <h3 className="text-2xl font-bold tracking-tight text-foreground">{p.title}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{p.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
                <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Key highlights
                </h4>
                <ul className="mt-3 space-y-3">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github /> View GitHub Profile
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className={sectionClass}>
      <SectionHeading eyebrow="Education" title="Academic background" />
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 80}>
            <div className="card-lift flex h-full gap-5 rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{e.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                <p className="mt-3 text-sm font-medium text-foreground">
                  {e.score} <span className="text-muted-foreground">· {e.period}</span>
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
