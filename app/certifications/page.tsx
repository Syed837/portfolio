import type { Metadata } from "next";
import { Award, ExternalLink } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { certifications } from "@/data/certifications";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata: Metadata = buildMetadata({
  title: "Certifications",
  description: `Professional certifications and training completed by ${profile.name}.`,
  path: "/certifications",
});

export default function CertificationsPage() {
  return (
    <div className="container-page py-16 lg:py-24">
      <SectionHeading
        eyebrow="Certifications"
        title="Training that backs the projects"
        description="Each one maps directly to something built — not a standalone badge."
        className="max-w-2xl"
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.id} delay={i * 0.06}>
            <Card className="card-hover flex h-full flex-col">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue-2">
                  <Award className="h-5 w-5" />
                </div>
                <CardTitle className="mt-3 text-base">{cert.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="font-mono text-xs text-subtle">{cert.date}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-4">
                <p className="text-sm leading-relaxed text-muted-foreground">{cert.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-accent-blue-2 hover:underline"
                    >
                      Verify <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
