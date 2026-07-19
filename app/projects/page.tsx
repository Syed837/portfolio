import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description: "Engineering case studies in network systems, security, and system visualization.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="container-page py-16 lg:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Three builds, three engineering problems"
        description="Each one started from a concept that was hard to picture in the abstract — a control plane, a Zero Trust decision, a system's structure — so I built the thing instead."
        className="max-w-2xl"
      />
      <div className="mt-12">
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
}
