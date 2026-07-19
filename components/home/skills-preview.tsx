import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function SkillsPreview() {
  const preview = skillCategories.filter((c) => c.skills.length > 0).slice(0, 6);

  return (
    <section className="container-page py-20 lg:py-28">
      <SectionHeading
        eyebrow="Capabilities"
        title="What I bring to a team"
        description="Grouped honestly by depth — core skills I've shipped with, working knowledge, and areas I'm actively growing into."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((category, i) => (
          <Reveal key={category.id} delay={i * 0.06} className="glass-card p-5">
            <p className="text-sm font-semibold text-foreground">{category.title}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {category.skills.slice(0, 5).map((skill) => (
                <Badge key={skill.name} variant={skill.level === "core" ? "blue" : "default"}>
                  {skill.name}
                </Badge>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8">
        <Button asChild variant="link">
          <Link href="/skills">
            See the full skill breakdown <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
