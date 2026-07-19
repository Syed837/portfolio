import type { Metadata } from "next";
import { GraduationCap, Briefcase, Users, Trophy, Sparkles, HeartHandshake } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { achievements } from "@/data/achievements";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import type { AchievementCategory } from "@/types/achievement";

export const metadata: Metadata = buildMetadata({
  title: "Achievements",
  description: `Academic, internship, and extracurricular achievements from ${profile.name}.`,
  path: "/achievements",
});

const CATEGORY_ICON: Record<AchievementCategory, typeof Trophy> = {
  Academic: GraduationCap,
  Internship: Briefcase,
  Leadership: Users,
  "Problem Solving": Trophy,
  Creative: Sparkles,
  Community: HeartHandshake,
};

const CATEGORY_VARIANT: Record<AchievementCategory, "blue" | "purple" | "cyan" | "success" | "outline"> = {
  Academic: "blue",
  Internship: "cyan",
  Leadership: "purple",
  "Problem Solving": "success",
  Creative: "outline",
  Community: "blue",
};

export default function AchievementsPage() {
  return (
    <div className="container-page py-16 lg:py-24">
      <SectionHeading
        eyebrow="Achievements"
        title="A timeline, not a highlight reel"
        description="Academics, an internship, competitions, and the ongoing habits — kept in the order the resume lists them rather than dressed up chronologically."
        className="max-w-2xl"
      />

      <ol className="relative mt-14 space-y-10 border-l border-border pl-8 sm:pl-10">
        {achievements.map((item, i) => {
          const Icon = CATEGORY_ICON[item.category];
          return (
            <Reveal key={item.id} as="li" delay={i * 0.05} className="relative">
              <span className="absolute -left-[calc(2rem+1px)] top-0.5 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-surface sm:-left-[calc(2.5rem+1px)]">
                <Icon className="h-3.5 w-3.5 text-accent-cyan" />
              </span>

              <div className="glass-card card-hover p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <Badge variant={CATEGORY_VARIANT[item.category]}>{item.category}</Badge>
                  <span className="font-mono text-xs text-subtle">{item.year}</span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-accent-blue-2">{item.org}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {item.tags.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}
