import type { SkillLevel } from "@/types/skill";
import { cn } from "@/lib/utils";

const LEVEL_META: Record<SkillLevel, { label: string; filled: number }> = {
  core: { label: "Core", filled: 3 },
  working: { label: "Working knowledge", filled: 2 },
  exploring: { label: "Exploring", filled: 1 },
};

export function ProficiencyIndicator({ level }: { level: SkillLevel }) {
  const meta = LEVEL_META[level];
  return (
    <span className="inline-flex items-center gap-2" title={meta.label}>
      <span className="sr-only">{meta.label}</span>
      <span aria-hidden className="flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              i < meta.filled ? "bg-accent-blue-2" : "bg-border-strong"
            )}
          />
        ))}
      </span>
      <span aria-hidden className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
        {meta.label}
      </span>
    </span>
  );
}
