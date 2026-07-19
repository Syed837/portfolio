import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";

export function ProjectNavLinks({ prev, next }: { prev: Project | null; next: Project | null }) {
  if (!prev && !next) return null;

  return (
    <nav className="mt-16 grid gap-3 border-t border-border pt-10 sm:grid-cols-2" aria-label="More projects">
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="glass-card card-hover group flex flex-col gap-1 p-5"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-subtle">
            <ArrowLeft className="h-3.5 w-3.5" /> Previous
          </span>
          <span className="font-medium text-foreground group-hover:text-accent-blue-2">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="glass-card card-hover group flex flex-col items-end gap-1 p-5 text-right"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-subtle">
            Next <ArrowRight className="h-3.5 w-3.5" />
          </span>
          <span className="font-medium text-foreground group-hover:text-accent-blue-2">{next.title}</span>
        </Link>
      ) : null}
    </nav>
  );
}
