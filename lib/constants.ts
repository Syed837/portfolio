export const SITE_URL = "https://syedmujahid.dev";

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/certifications", label: "Certifications" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = {
  github: null as string | null, // TODO: add GitHub profile URL
  linkedin: "https://www.linkedin.com/in/syed-mohammad-mujahid",
  email: "sayedgulabjan7866@gmail.com",
} as const;
