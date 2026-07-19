export interface SiteProfile {
  name: string;
  shortName: string;
  roles: string[];
  status: string;
  availability: string;
  location: string;
  email: string;
  academicEmail: string;
  phones: string[];
  linkedinUrl: string;
  githubUrl: string | null;
  resumeUrl: string;
  headline: string;
  valueProposition: string;
  bio: string[];
  languagesSpoken: string[];
  focusAreas: string[];
}
