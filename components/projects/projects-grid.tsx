"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/types/project";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

const FILTERS: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "networking", label: "Networking" },
  { value: "security", label: "Security" },
  { value: "visualization", label: "Visualization" },
];

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category.includes(filter))),
    [projects, filter]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            aria-pressed={filter === f.value}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors",
              filter === f.value
                ? "border-accent-blue bg-accent-blue/15 text-accent-blue-2"
                : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-sm text-muted-foreground">No projects in this category yet.</p>
      )}
    </div>
  );
}
