import type { SkillCategory } from "@/types/skill";

/**
 * Proficiency uses three honest tiers instead of invented percentages:
 *  - core:      used across multiple shipped projects
 *  - working:   used in coursework/one project, or a listed technical competency
 *  - exploring: a stated interest not yet backed by a shipped project
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "What I actually write code in day to day.",
    skills: [
      { name: "Java", level: "core" },
      { name: "JavaScript", level: "core" },
      { name: "Python", level: "core" },
      { name: "HTML5", level: "core" },
      { name: "CSS3", level: "core" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Building interfaces that make dense data legible.",
    skills: [
      { name: "HTML5 & Semantic Markup", level: "core" },
      { name: "CSS3 (incl. 3D Transforms)", level: "core" },
      { name: "JavaScript (DOM & Events)", level: "core" },
      { name: "Responsive / Interactive UI", level: "working" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Service and data logic behind the dashboards I build.",
    skills: [
      { name: "Java (application & service logic)", level: "core" },
      { name: "Data modeling for dashboards", level: "working" },
    ],
  },
  {
    id: "networking",
    title: "Networking",
    description: "Grounded in Cisco fundamentals, tested through my own dashboard.",
    skills: [
      { name: "Network Fundamentals (Cisco)", level: "working" },
      { name: "Routing & Control-Plane Concepts", level: "working" },
      { name: "Network Monitoring & Status Visualization", level: "working" },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Zero Trust and access-control concepts, implemented — not just read about.",
    skills: [
      { name: "Zero Trust Network Access (ZTNA) Concepts", level: "working" },
      { name: "Policy- & Identity-Based Access Control", level: "working" },
      { name: "Core Cybersecurity Concepts (Cisco)", level: "working" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    description: "Actively building toward this, not yet backed by a shipped project.",
    skills: [{ name: "Cloud Computing Fundamentals", level: "exploring" }],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "MySQL", level: "working" },
      { name: "MS Access", level: "working" },
    ],
    description: "Relational data handling for coursework and dashboard projects.",
  },
  {
    id: "dev-tools",
    title: "Developer Tools",
    description: "Day-to-day toolchain across every project — version control, editor, and environment.",
    skills: [
      { name: "Git & GitHub", level: "core" },
      { name: "VS Code", level: "core" },
      { name: "IntelliJ IDEA", level: "working" },
      { name: "Chrome DevTools", level: "working" },
      { name: "Cisco Packet Tracer", level: "working" },
      { name: "Wireshark", level: "working" },
      { name: "Postman", level: "working" },
      { name: "Command Prompt / PowerShell", level: "working" },
    ],
  },
  {
    id: "operating-systems",
    title: "Operating Systems",
    description: "Primary development environment for every project listed here.",
    skills: [{ name: "Windows", level: "core" }],
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    description: "Demonstrated through school and club leadership, not just claimed.",
    skills: [
      { name: "Team Leadership", level: "core" },
      { name: "Management & Coordination", level: "core" },
      { name: "Speaking & Writing", level: "core" },
      { name: "Negotiation", level: "working" },
    ],
  },
];
