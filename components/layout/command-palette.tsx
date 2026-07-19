"use client";

import { useRouter } from "next/navigation";
import {
  Home,
  User,
  FolderGit2,
  Sparkles,
  Award,
  Trophy,
  Mail,
  Github,
  Linkedin,
  Download,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  const go = (href: string) => {
    router.push(href);
    onOpenChange(false);
  };

  const openExternal = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    onOpenChange(false);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search pages, projects, actions…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigate">
          <CommandItem onSelect={() => go("/")}>
            <Home className="h-4 w-4" /> Home
          </CommandItem>
          <CommandItem onSelect={() => go("/about")}>
            <User className="h-4 w-4" /> About
          </CommandItem>
          <CommandItem onSelect={() => go("/projects")}>
            <FolderGit2 className="h-4 w-4" /> Projects
          </CommandItem>
          <CommandItem onSelect={() => go("/skills")}>
            <Sparkles className="h-4 w-4" /> Skills
          </CommandItem>
          <CommandItem onSelect={() => go("/certifications")}>
            <Award className="h-4 w-4" /> Certifications
          </CommandItem>
          <CommandItem onSelect={() => go("/achievements")}>
            <Trophy className="h-4 w-4" /> Achievements
          </CommandItem>
          <CommandItem onSelect={() => go("/contact")}>
            <Mail className="h-4 w-4" /> Contact
          </CommandItem>
        </CommandGroup>

        <CommandGroup heading="Projects">
          {projects.map((project) => (
            <CommandItem key={project.slug} onSelect={() => go(`/projects/${project.slug}`)}>
              <FolderGit2 className="h-4 w-4" /> {project.title}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => openExternal(profile.resumeUrl)}>
            <Download className="h-4 w-4" /> Download Resume
          </CommandItem>
          <CommandItem onSelect={() => openExternal(profile.linkedinUrl)}>
            <Linkedin className="h-4 w-4" /> Open LinkedIn
          </CommandItem>
          {profile.githubUrl ? (
            <CommandItem onSelect={() => openExternal(profile.githubUrl as string)}>
              <Github className="h-4 w-4" /> Open GitHub
            </CommandItem>
          ) : null}
          <CommandItem onSelect={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            Toggle theme
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
