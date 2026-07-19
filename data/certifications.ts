import type { Certification } from "@/types/certification";

/**
 * Titles are taken verbatim (or near-verbatim) from the resume. Where the resume
 * didn't specify an issuer or exact date, that field is an explicit, visible
 * placeholder rather than a guessed organization name — update once confirmed.
 */
export const certifications: Certification[] = [
  {
    id: "cisco-aicte-internship",
    title: "Cisco AICTE Virtual Internship Program",
    issuer: "Cisco · AICTE",
    date: "2025",
    description:
      "A virtual internship program covering networking fundamentals, run jointly by Cisco and AICTE (All India Council for Technical Education). Directly informed the routing and control-plane concepts behind the Network Control Plane Dashboard project.",
    tags: ["Networking", "Cisco", "AICTE"],
    credentialUrl: null,
  },
  {
    id: "cybersecurity-concepts",
    title: "Describe the Concepts of Cybersecurity",
    issuer: "Issuer not specified — confirm & update",
    date: "Date not specified",
    description:
      "Coursework covering foundational cybersecurity concepts — the same grounding drawn on for the ZTNA Simulator Dashboard's access-control and policy-validation logic.",
    tags: ["Cybersecurity", "Fundamentals"],
    credentialUrl: null,
  },
  {
    id: "effective-speaking-listening",
    title: "Effective Speaking and Listening Skills",
    issuer: "Issuer not specified — confirm & update",
    date: "Date not specified",
    description:
      "Applied communication training, complementing the coordination and negotiation skills developed through school leadership and club activities.",
    tags: ["Communication", "Professional Skills"],
    credentialUrl: null,
  },
];
