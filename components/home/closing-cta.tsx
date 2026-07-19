import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function ClosingCta() {
  return (
    <section className="container-page pb-24 pt-4 lg:pb-32">
      <Reveal className="glass-card relative overflow-hidden px-8 py-14 text-center sm:px-14">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-radial-glow" />
        <div className="relative">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Looking for someone who ships and explains their thinking?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            I'm open to software engineering and cybersecurity internships — happy to walk through any project in
            more depth.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
