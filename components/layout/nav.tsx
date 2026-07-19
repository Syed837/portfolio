"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Command, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { CommandPalette } from "@/components/layout/command-palette";
import { useCommandPalette } from "@/hooks/use-command-palette";
import { profile } from "@/data/profile";

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open, setOpen } = useCommandPalette();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          <Terminal className="h-4 w-4 text-accent-blue-2" aria-hidden />
          <span>
            {profile.shortName}
            <span className="text-accent-blue-2">.</span>dev
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpen(true)}
            className="hidden items-center gap-2 text-muted-foreground sm:flex"
            aria-label="Open command palette"
          >
            <Command className="h-3.5 w-3.5" />
            <span className="text-xs">Search</span>
            <kbd className="ml-1 rounded border border-border px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
            className="sm:hidden"
            aria-label="Open command palette"
          >
            <Command className="h-[18px] w-[18px]" />
          </Button>

          <ThemeToggle />

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-1">
              <SheetTitle className="mb-4 font-mono text-sm text-muted-foreground">Menu</SheetTitle>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground",
                    pathname === link.href && "bg-surface-2 text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <CommandPalette open={open} onOpenChange={setOpen} />
    </header>
  );
}
