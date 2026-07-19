import type { Metadata } from "next";
import { GraduationCap, Languages, Target } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: `The engineering philosophy, background, and focus areas of ${profile.name}.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container-page py-16 lg:py-24">
      <SectionHeading eyebrow="About" title="How I got here, and where I'm headed" className="max-w-3xl" />

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          {profile.bio.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-[17px]">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <aside className="space-y-8">
          <Reveal className="glass-card p-6">
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-accent-blue-2" />
              <p className="eyebrow">Education</p>
            </div>
            <ol className="space-y-5">
              {education.map((entry) => (
                <li key={entry.id}>
                  <p className="text-sm font-medium text-foreground">{entry.degree}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{entry.institution}</p>
                  <div className="mt-1.5 flex items-center justify-between font-mono text-xs text-subtle">
                    <span>{entry.session}</span>
                    <span>
                      {entry.score} {entry.scoreLabel}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1} className="glass-card p-6">
            <div className="mb-4 flex items-center gap-2">
              <Target className="h-4 w-4 text-accent-purple" />
              <p className="eyebrow">Focus areas</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.focusAreas.map((area) => (
                <Badge key={area} variant="purple">
                  {area}
                </Badge>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="glass-card p-6">
            <div className="mb-4 flex items-center gap-2">
              <Languages className="h-4 w-4 text-accent-cyan" />
              <p className="eyebrow">Languages</p>
            </div>
            <p className="text-sm text-muted-foreground">{profile.languagesSpoken.join(" · ")}</p>
          </Reveal>
        </aside>
      </div>

      <Separator className="my-16" />

      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
          "I'd rather have a rough dashboard that renders real data than a polished mockup that renders nothing."
        </p>
        <p className="mt-4 font-mono text-sm text-subtle">— my working philosophy, so far</p>
      </Reveal>
    </div>
  );
}
