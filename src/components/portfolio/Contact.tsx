import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Loader2, MapPin, Send, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sendContact, validateContact, type ContactErrors, type ContactInput } from "@/lib/contact";
import { profile } from "./data";
import { Reveal } from "./Reveal";
import { SocialLinks } from "./SocialLinks";

const empty: ContactInput = { name: "", email: "", subject: "", message: "", botcheck: false };

const inputClass =
  "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30";

export function Contact() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (key: keyof ContactInput) => (v: string | boolean) =>
    setValues((prev) => ({ ...prev, [key]: v }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    const errs = validateContact(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    try {
      const ok = await sendContact(values);
      if (ok) {
        setStatus("success");
        setValues(empty);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Let's work together
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Open to new .NET and full stack opportunities
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground">
            <li className="flex items-center gap-3">
              <Clock className="size-4 text-primary" /> Notice period: {profile.noticePeriod}
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-primary" /> Location: Pune, Maharashtra
            </li>
          </ul>
          <SocialLinks className="mt-8" />
        </Reveal>

        <Reveal delay={120}>
          <form
            noValidate
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8"
          >
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              checked={values.botcheck}
              onChange={(e) => set("botcheck")(e.target.checked)}
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" id="name" required error={errors.name}>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(e) => set("name")(e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={inputClass}
                />
              </Field>
              <Field label="Email" id="email" required error={errors.email}>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => set("email")(e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputClass}
                />
              </Field>
            </div>
            <Field label="Subject" id="subject" className="mt-5">
              <input
                id="subject"
                type="text"
                value={values.subject}
                onChange={(e) => set("subject")(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Message" id="message" required error={errors.message} className="mt-5">
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => set("message")(e.target.value)}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={cn(inputClass, "resize-y")}
              />
            </Field>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              disabled={status === "sending"}
              className="mt-6 w-full sm:w-auto"
            >
              {status === "sending" ? <Loader2 className="animate-spin" /> : <Send />}
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>

            <div aria-live="polite">
              {status === "success" && (
                <p className="mt-5 flex items-center gap-2 rounded-lg bg-success-soft px-4 py-3 text-sm font-medium text-success">
                  <CheckCircle2 className="size-4 shrink-0" /> Thanks! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <div className="mt-5 flex gap-2 rounded-lg bg-destructive-soft px-4 py-3 text-sm font-medium text-destructive">
                  <XCircle className="mt-0.5 size-4 shrink-0" />
                  <div>
                    <p>Something went wrong and your message wasn't sent.</p>
                    <p className="mt-1">
                      Or email me directly at{" "}
                      <a href={`mailto:${profile.email}`} className="underline">
                        {profile.email}
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  required,
  error,
  className,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  error?: string | undefined;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required ? (
          <span className="ml-0.5 text-destructive">*</span>
        ) : (
          <span className="ml-1 text-xs font-normal text-muted-foreground">(optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row md:px-8">
        <p className="text-sm text-muted-foreground">© 2026 {profile.name}</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
