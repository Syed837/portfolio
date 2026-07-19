import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { skillCategories } from "@/data/skills";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ProficiencyIndicator } from "@/components/shared/proficiency-indicator";

export const metadata: Metadata = buildMetadata({
  title: "Skills",
  description: `A category-by-category, honestly leveled breakdown of ${profile.name}'s technical skills.`,
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <div className="container-page py-16 lg:py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Leveled honestly, not inflated"
        description="Core = used across shipped projects. Working knowledge = used in one project or coursework. Exploring = a real interest, not yet backed by a shipped project."
        className="max-w-2xl"
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <Reveal key={category.id} delay={i * 0.04} className="glass-card p-6">
            <h2 className="text-base font-semibold text-foreground">{category.title}</h2>
            {category.description ? (
              <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
            ) : null}

            {category.skills.length > 0 ? (
              <ul className="mt-5 space-y-3.5">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between gap-3">
                    <span className="text-sm text-foreground">{skill.name}</span>
                    <ProficiencyIndicator level={skill.level} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 rounded-lg border border-dashed border-border-strong px-3 py-3 text-xs text-subtle">
                {category.note}
              </p>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  );
}
