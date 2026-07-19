export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  tags: string[];
  credentialUrl: string | null;
}
