import { Reveal } from "@/components/shared/reveal";

interface ProjectSectionProps {
  index: number;
  title: string;
  children: React.ReactNode;
}

/** A numbered section in the case-study narrative — numbering reflects the real
 *  order of engineering reasoning (problem → motivation → architecture → …). */
export function ProjectSection({ index, title, children }: ProjectSectionProps) {
  return (
    <Reveal as="li" className="scroll-mt-24 border-t border-border py-10 first:border-t-0 first:pt-0">
      <div className="grid gap-4 lg:grid-cols-[100px_1fr] lg:gap-10">
        <div className="flex items-baseline gap-3 lg:flex-col lg:items-start lg:gap-1">
          <span className="font-mono text-sm text-accent-blue-2">{String(index).padStart(2, "0")}</span>
          <h2 className="text-lg font-semibold text-foreground lg:hidden">{title}</h2>
        </div>
        <div>
          <h2 className="hidden text-xl font-semibold text-foreground lg:block">{title}</h2>
          <div className="mt-3 text-[15px] leading-relaxed text-muted-foreground lg:mt-4">{children}</div>
        </div>
      </div>
    </Reveal>
  );
}
