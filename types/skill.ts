export type SkillLevel = "core" | "working" | "exploring";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
  /** Shown when a category is intentionally thin/placeholder rather than fabricated. */
  note?: string;
}
