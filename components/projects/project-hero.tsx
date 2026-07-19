import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Clock, User, Monitor, Calendar } from "lucide-react";
import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectCover } from "@/components/projects/project-cover";

export function ProjectHero({ project }: { project: Project }) {
  const meta = [
    { icon: Clock, label: project.duration },
    { icon: User, label: `${project.role} · ${project.teamSize}` },
    { icon: Monitor, label: project.environment },
    { icon: Calendar, label: project.year },
  ];

  return (
    <div>
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All projects
      </Link>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.category.map((cat) => (
          <Badge key={cat} variant="cyan">
            {cat}
          </Badge>
        ))}
      </div>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{project.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        {meta.map((m) => (
          <span key={m.label} className="inline-flex items-center gap-1.5 font-mono text-xs text-subtle">
            <m.icon className="h-3.5 w-3.5" /> {m.label}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.githubUrl ? (
          <Button asChild variant="outline">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github /> View code
            </a>
          </Button>
        ) : (
          <Button variant="outline" disabled title="Repository not public yet">
            <Github /> Code not public yet
          </Button>
        )}
        {project.demoUrl ? (
          <Button asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink /> Live demo
            </a>
          </Button>
        ) : (
          <Button disabled title="No live demo available yet">
            <ExternalLink /> Demo not available
          </Button>
        )}
      </div>

      <div className="mt-10">
        <ProjectCover category={project.category} className="rounded-2xl border" />
      </div>
    </div>
  );
}
