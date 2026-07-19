import type { Achievement } from "@/types/achievement";

/**
 * Sourced from the resume's "Academic Achievements" and "Extra-Curricular" sections.
 * Several entries had no year listed on the resume — those are marked explicitly
 * as "Year not specified" rather than guessed, and the array order otherwise
 * follows the resume's own ordering.
 */
export const achievements: Achievement[] = [
  {
    id: "cisco-internship",
    year: "2025",
    category: "Internship",
    title: "Cisco Online Internship — Networking Fundamentals",
    org: "Cisco",
    description:
      "Completed an online internship focused on core networking fundamentals, later applied directly in the Network Control Plane Dashboard project.",
    tags: ["Networking", "Internship"],
  },
  {
    id: "aimex-av",
    year: "2025",
    category: "Creative",
    title: "Audio-Visual Production for AIMEX",
    org: "AIMEX",
    description: "Produced an audio-visual piece for the AIMEX 2025 event.",
    tags: ["Creative", "Production"],
  },
  {
    id: "project-expo",
    year: "Year not specified",
    category: "Academic",
    title: "Project Expo Participant",
    org: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai",
    description: "Presented engineering project work at an inter-institutional project expo.",
    tags: ["Academic", "Showcase"],
  },
  {
    id: "leetcode",
    year: "Ongoing",
    category: "Problem Solving",
    title: "50+ LeetCode Problems Solved",
    org: "LeetCode",
    description: "Consistent, ongoing practice on data structures and algorithms problems.",
    tags: ["DSA", "Problem Solving"],
  },
  {
    id: "school-leader",
    year: "Year not specified",
    category: "Leadership",
    title: "School Leader",
    org: "School",
    description: "Held a student leadership position — coordinating peers and representing the student body.",
    tags: ["Leadership"],
  },
  {
    id: "community-service",
    year: "Ongoing",
    category: "Community",
    title: "Club Social Service & Community Welfare",
    org: "College Club",
    description: "Participated in club-organized social service and community welfare activities.",
    tags: ["Community", "Service"],
  },
  {
    id: "ssc-perfect-score",
    year: "2021",
    category: "Academic",
    title: "100% in SSC (Matriculation)",
    org: "Vijaya Bharathi English Medium High School",
    description: "Completed secondary school with a perfect percentage score.",
    tags: ["Academic"],
  },
];
