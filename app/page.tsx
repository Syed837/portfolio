import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { profile } from "@/data/profile";
import { Hero } from "@/components/home/hero";
import { QuickFacts } from "@/components/home/quick-facts";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsPreview } from "@/components/home/skills-preview";
import { GithubStatsPanel } from "@/components/home/github-stats-panel";
import { ClosingCta } from "@/components/home/closing-cta";

export const metadata: Metadata = buildMetadata({
  title: `${profile.name} — Software Engineer`,
  description: profile.valueProposition,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickFacts />
      <FeaturedProjects />
      <SkillsPreview />
      <GithubStatsPanel />
      <ClosingCta />
    </>
  );
}
