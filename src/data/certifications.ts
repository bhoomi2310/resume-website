export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  skills?: string[];
}

/**
 * Add your certifications here whenever you'd like!
 * Format:
 * {
 *   id: "aws-saa",
 *   name: "AWS Certified Solutions Architect",
 *   issuer: "Amazon Web Services",
 *   issueDate: "2026",
 *   credentialUrl: "https://...",
 *   skills: ["AWS", "Cloud Architecture"]
 * }
 */
export const certificationsData: CertificationItem[] = [];
