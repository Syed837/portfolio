import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCover } from "@/components/projects/project-cover";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="card-hover group flex h-full flex-col">
      <Link href={`/projects/${project.slug}`} className="flex h-full flex-col" aria-label={`View ${project.title} case study`}>
        <ProjectCover category={project.category} />
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-blue-2" />
          </div>
          <CardDescription>{project.tagline}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto flex flex-wrap gap-1.5 pt-0">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </CardContent>
      </Link>
    </Card>
  );
}
