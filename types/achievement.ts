export type AchievementCategory =
  | "Academic"
  | "Internship"
  | "Leadership"
  | "Problem Solving"
  | "Creative"
  | "Community";

export interface Achievement {
  id: string;
  year: string;
  category: AchievementCategory;
  title: string;
  org: string;
  description: string;
  tags: string[];
}
