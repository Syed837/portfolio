import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectSection } from "@/components/projects/project-section";
import { ProjectList } from "@/components/projects/project-list";
import { ProjectNavLinks } from "@/components/projects/project-nav-links";
import { Badge } from "@/components/ui/badge";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    description: project.tagline,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <div className="container-page py-16 lg:py-24">
      <ProjectHero project={project} />

      <ol className="mt-4">
        <ProjectSection index={1} title="Overview">
          <p>{project.overview}</p>
        </ProjectSection>

        <ProjectSection index={2} title="Problem Statement">
          <p>{project.problem}</p>
        </ProjectSection>

        <ProjectSection index={3} title="Motivation">
          <p>{project.motivation}</p>
        </ProjectSection>

        <ProjectSection index={4} title="Architecture">
          <p>{project.architecture}</p>
        </ProjectSection>

        <ProjectSection index={5} title="Features">
          <ProjectList items={project.features} />
        </ProjectSection>

        <ProjectSection index={6} title="Technical Decisions">
          <ProjectList items={project.technicalDecisions} />
        </ProjectSection>

        <ProjectSection index={7} title="Challenges & Solutions">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-wide text-subtle">Challenges</p>
              <ProjectList items={project.challenges} />
            </div>
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-wide text-subtle">Solutions</p>
              <ProjectList items={project.solutions} />
            </div>
          </div>
        </ProjectSection>

        <ProjectSection index={8} title="Lessons Learned">
          <ProjectList items={project.lessonsLearned} />
        </ProjectSection>

        <ProjectSection index={9} title="Tech Stack">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="blue">
                {tech}
              </Badge>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection index={10} title="Future Improvements">
          <ProjectList items={project.futureImprovements} />
        </ProjectSection>
      </ol>

      <ProjectNavLinks prev={prev} next={next} />
    </div>
  );
}
