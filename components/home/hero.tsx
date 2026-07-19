"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, FolderGit2, Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { Button } from "@/components/ui/button";
import { StatusDot } from "@/components/shared/status-dot";
import { StatChips } from "@/components/home/stat-chips";
import { TerminalCard } from "@/components/home/terminal-card";
import { NetworkMotif } from "@/components/shared/network-motif";

export function Hero() {
  const role = useTypingEffect({ words: [...profile.roles] });

  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pt-20 lg:pb-28 lg:pt-24">
      <div aria-hidden className="pointer-events-none absolute -right-24 top-0 h-[480px] w-[480px] opacity-[0.35] lg:opacity-60">
        <NetworkMotif />
      </div>

      <div className="container-page relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
        <div>
          <StatusDot label={profile.availability} />

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-3 h-8 font-mono text-lg text-accent-blue-2 sm:text-xl" aria-live="polite">
            {role}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 animate-blink bg-accent-blue-2" aria-hidden />
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.valueProposition}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={profile.resumeUrl} download>
                <Download /> Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                <FolderGit2 /> View Projects
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="Open LinkedIn profile">
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            </Button>
            {profile.githubUrl ? (
              <Button asChild variant="ghost" size="icon" aria-label="Open GitHub profile">
                <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
              </Button>
            ) : null}
            <Button asChild variant="ghost" size="icon" aria-label="Email Mujahid">
              <a href={`mailto:${profile.email}`}>
                <Mail />
              </a>
            </Button>
          </div>

          <div className="mt-10">
            <StatChips />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
          <div className="glass-card relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/profile/portrait-800.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 400px"
              className="object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -left-6 hidden sm:block">
            <TerminalCard />
          </div>
        </div>
      </div>

      <div className="container-page mt-16 hidden justify-center sm:flex">
        <a
          href="#quick-facts"
          className="flex flex-col items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Scroll to quick facts"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
