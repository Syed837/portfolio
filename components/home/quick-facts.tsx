import { MapPin, GraduationCap, Languages, Gauge } from "lucide-react";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { Reveal } from "@/components/shared/reveal";

export function QuickFacts() {
  const btech = education[0];

  const facts = [
    { icon: MapPin, label: "Based in", value: profile.location },
    { icon: GraduationCap, label: "Batch", value: btech ? btech.session : "—" },
    { icon: Gauge, label: "CGPA", value: btech ? `${btech.score} / 10` : "—" },
    { icon: Languages, label: "Languages", value: profile.languagesSpoken.join(", ") },
  ];

  return (
    <section id="quick-facts" className="border-y border-border/70 bg-surface/30">
      <div className="container-page grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {facts.map((fact, i) => (
          <Reveal key={fact.label} delay={i * 0.05} className="flex items-start gap-3">
            <fact.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue-2" aria-hidden />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">{fact.label}</p>
              <p className="mt-1 text-sm font-medium text-foreground">{fact.value}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
