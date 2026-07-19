import type { SiteProfile } from "@/types/site";

/**
 * Single source of truth for personal/contact content, sourced from the resume.
 * ASSUMPTIONS (flagged for review — see README "Content assumptions"):
 *  - `status` assumes final (4th) year given the 2023–2027 batch and July 2026 date.
 *  - `githubUrl` is null: no GitHub profile was listed on the resume. Add it here
 *    once available and the GitHub stats panel + project repo links will activate.
 */
export const profile: SiteProfile = {
  name: "Syed Mohammad Mujahid",
  shortName: "Mujahid",
  roles: [
    "Software Engineering Student",
    "Network & Security Enthusiast",
    "Full-Stack Builder",
  ],
  status: "Final-year B.Tech CSE Student · Batch 2023–2027",
  availability: "Open to Software Engineering & Cybersecurity Internships",
  location: "Madanapalle, Andhra Pradesh, India",
  email: "syedmujahid.dev@gmail.com",
  academicEmail: "23691a4031@mits.ac.in",
  phones: ["+91 97418 84173", "+91 90001 59480"],
  linkedinUrl: "https://www.linkedin.com/in/syed-mohammad-mujahid",
  githubUrl: "https://github.com/Syed837",
  resumeUrl: "/Syed_Mohammad_Mujahid_Resume.pdf",
  headline: "I build systems that make networks visible and access provable.",
  valueProposition:
    "CSE student who ships working dashboards and simulators for how networks route, authenticate, and defend traffic — not just how they're diagrammed on a whiteboard.",
  bio: [
    "I started out the way most engineers do: curious about what's actually happening underneath the interfaces I used every day. That curiosity turned into a habit of building small, working systems instead of just reading about how they work — a 3-D visualizer to see system components interact, a dashboard to watch a network's control plane make decisions, a simulator to walk through what Zero Trust access actually looks like step by step.",
    "Networking and security are where I spend most of my attention. I like that both fields reward precision — a routing table either resolves correctly or it doesn't, an access policy either enforces the right boundary or it quietly fails open. Building the ZTNA simulator taught me more about identity- and policy-based access than any slide deck could have, because I had to make the auth/authz flow actually run.",
    "My problem-solving style is to get something ugly working end-to-end first, then go back and make it correct and legible. I'd rather have a rough dashboard that renders real control-plane data than a polished mockup that renders nothing. That's also why I've worked through 50+ LeetCode problems — not for the badge, but to get faster at the part of engineering that's just clear thinking under constraints.",
    "I learn best by rebuilding things I don't fully understand yet. Cisco's networking fundamentals internship gave me the vocabulary; my own projects are where I actually stress-tested it. I'm currently deepening that with cloud computing and automation, since most of the network and security systems I care about now run on infrastructure I don't control directly.",
    "Longer term, I want to work where networking, security, and software engineering overlap — building the tools that make distributed systems observable and access decisions auditable, rather than just theoretical.",
  ],
  languagesSpoken: ["English", "Telugu", "Urdu", "Hindi"],
  focusAreas: ["Network Systems", "Zero Trust Security", "Full-Stack Development", "Cloud Fundamentals"],
};
