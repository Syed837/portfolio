import { Github, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/shared/section-heading";
import { EmptyState } from "@/components/shared/empty-state";
import { Reveal } from "@/components/shared/reveal";

export function GithubStatsPanel() {
  return (
    <section className="container-page py-20 lg:py-28">
      <SectionHeading eyebrow="Open source" title="GitHub activity" align="center" />

      <Reveal className="mx-auto mt-10 max-w-2xl">
        {profile.githubUrl ? (
          <div className="glass-card overflow-hidden p-6 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${profile.githubUrl.split("/").pop()}&show_icons=true&theme=transparent&hide_border=true&title_color=60a5fa&icon_color=8b5cf6&text_color=94a3b8`}
              alt={`GitHub stats for ${profile.name}`}
              loading="lazy"
              className="mx-auto w-full max-w-md"
            />
          </div>
        ) : (
          <EmptyState
            icon={Github}
            title="GitHub isn't linked yet"
            description="Once a public GitHub profile is added, this panel will show live contribution stats instead of this placeholder."
          />
        )}
      </Reveal>

      {profile.githubUrl ? (
        <div className="mt-6 text-center">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent-blue-2 hover:underline"
          >
            View full profile <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      ) : null}
    </section>
  );
}
