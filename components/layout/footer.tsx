import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { profile } from "@/data/profile";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-surface/30">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-mono text-sm font-semibold text-foreground">{profile.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {profile.valueProposition}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Site</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                {profile.githubUrl ? (
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-3.5 w-3.5" /> GitHub <ArrowUpRight className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm text-subtle">
                    <Github className="h-3.5 w-3.5" /> GitHub — coming soon
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-subtle">
            © {year} {profile.name}. Built from scratch with Next.js.
          </p>
          <p className="font-mono text-xs text-subtle">{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
