import Link from "next/link";
import { Compass, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow mb-4">
        <Compass className="h-3.5 w-3.5" /> 404
      </span>
      <h1 className="text-gradient-brand text-6xl font-bold tracking-tight sm:text-7xl">Lost route</h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
        This page doesn't resolve — like a request hitting a route with no matching handler.
        Let's get you back to a known path.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">
          <Home className="h-4 w-4" /> Back to home
        </Link>
      </Button>
    </div>
  );
}
