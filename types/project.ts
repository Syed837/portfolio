export type ProjectCategory = "networking" | "security" | "visualization" | "web";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory[];
  duration: string;
  role: string;
  teamSize: string;
  environment: string;
  year: string;
  overview: string;
  problem: string;
  motivation: string;
  architecture: string;
  features: string[];
  technicalDecisions: string[];
  challenges: string[];
  solutions: string[];
  lessonsLearned: string[];
  techStack: string[];
  futureImprovements: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  /** Path to a real screenshot, once available. Null falls back to generated cover art. */
  coverImage: string | null;
  featured: boolean;
}
