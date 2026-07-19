import type { Metadata } from "next";
import { Mail, Phone, MapPin, Linkedin, Github, FileDown, ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { StatusDot } from "@/components/shared/status-dot";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: `Get in touch with ${profile.name} — email, LinkedIn, or the form below.`,
  path: "/contact",
});

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phones[0] || "",
    href: profile.phones[0] ? `tel:${profile.phones[0].replace(/\s+/g, "")}` : null,
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "syed-mohammad-mujahid",
    href: profile.linkedinUrl,
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <div className="container-page py-16 lg:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        description="Open to software engineering and cybersecurity internships. The fastest way to reach me is email — the form below routes there too."
        className="max-w-2xl"
      />

      <div className="mt-8">
        <StatusDot label={profile.availability} />
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <Reveal className="space-y-4">
          <ul className="space-y-3">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue-2">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-subtle">{item.label}</span>
                    <span className="block truncate text-sm text-foreground">{item.value}</span>
                  </span>
                  {item.external ? <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-subtle" /> : null}
                </>
              );

              return (
                <li key={item.label} className="glass-card card-hover">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4">{content}</div>
                  )}
                </li>
              );
            })}

            <li className="glass-card p-4">
              {profile.githubUrl ? (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 card-hover"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue-2">
                    <Github className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-subtle">GitHub</span>
                    <span className="block truncate text-sm text-foreground">
                      {profile.githubUrl.replace("https://github.com/", "")}
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-subtle" />
                </a>
              ) : (
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-subtle">
                    <Github className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-subtle">GitHub</span>
                    <span className="block text-sm text-subtle">Coming soon</span>
                  </span>
                </div>
              )}
            </li>
          </ul>

          <Button asChild variant="outline" className="w-full">
            <a href={profile.resumeUrl} download>
              <FileDown className="h-4 w-4" /> Download résumé (PDF)
            </a>
          </Button>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
