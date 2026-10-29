import { createFileRoute } from "@tanstack/react-router";
import { Navbar, ScrollProgress } from "@/components/portfolio/Chrome";
import { About, Hero } from "@/components/portfolio/Hero";
import {
  Education,
  Experience,
  HowIWork,
  Projects,
  Services,
  Skills,
} from "@/components/portfolio/Sections";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Vaishnavi Kolhe | Full Stack .NET Developer";
const description =
  "Full stack .NET developer in Pune with 3 years of experience building enterprise web apps, REST APIs, microservices and real-time dashboards with C#, ASP.NET Core, SQL Server and React.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <HowIWork />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
