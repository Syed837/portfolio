import { ShieldCheck, Network, Boxes, Globe } from "lucide-react";
import type { ProjectCategory } from "@/types/project";
import { cn } from "@/lib/utils";

const CATEGORY_META: Record<ProjectCategory, { icon: typeof ShieldCheck; tint: string; label: string }> = {
  security: { icon: ShieldCheck, tint: "text-accent-purple", label: "Security" },
  networking: { icon: Network, tint: "text-accent-cyan", label: "Networking" },
  visualization: { icon: Boxes, tint: "text-accent-blue-2", label: "Visualization" },
  web: { icon: Globe, tint: "text-accent-blue-2", label: "Web" },
};

/**
 * Generated cover art for a project card/detail hero, based on category.
 * Used until a real screenshot is available (see public/images/projects/README.md).
 */
export function ProjectCover({ category, className }: { category: ProjectCategory[]; className?: string }) {
  const primary = category[0] ?? "web";
  const meta = CATEGORY_META[primary];
  const Icon = meta.icon;

  return (
    <div
      className={cn(
        "relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-t-2xl border-b border-border bg-surface-2",
        className
      )}
      aria-hidden
    >
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-brand-soft" />
      <Icon className={cn("relative h-14 w-14 drop-shadow-[0_0_24px_currentColor]", meta.tint)} strokeWidth={1.4} />
    </div>
  );
}
