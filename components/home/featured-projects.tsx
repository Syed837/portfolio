import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="container-page py-20 lg:py-28">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Selected work"
          title="Case studies, not just a project list"
          description="Three individual builds spanning system visualization, network control-plane monitoring, and Zero Trust access."
        />
        <Button asChild variant="outline" className="shrink-0">
          <Link href="/projects">
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
