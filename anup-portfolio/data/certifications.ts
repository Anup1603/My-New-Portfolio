export interface Certification {
  title: string;
  issuer: string;
  year: string;
  level: "Professional" | "Associate";
  verifyUrl: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    title: "Professional Cloud Architect",
    issuer: "Google Cloud Certified",
    year: "2026",
    level: "Professional",
    verifyUrl:
      "https://www.credly.com/badges/5ca22ea4-7764-4a86-a9b2-15255b3d6eca",
    description:
      "Designing, developing, and managing robust, secure, scalable, and dynamic solutions on Google Cloud.",
  },
  {
    title: "Professional Machine Learning Engineer",
    issuer: "Google Cloud Certified",
    year: "2026",
    level: "Professional",
    verifyUrl:
      "https://www.credly.com/badges/aae4a72b-08e8-48ad-8d95-045973c082ca",
    description:
      "Designing, building, and productionizing ML models and pipelines on Google Cloud, from data to deployment.",
  },
  {
    title: "Professional Cloud Database Engineer",
    issuer: "Google Cloud Certified",
    year: "2025",
    level: "Professional",
    verifyUrl:
      "https://www.credly.com/badges/978ad0de-3a05-40af-9f02-2e6f09e2fe3d",
    description:
      "Designing, managing, and troubleshooting scalable, highly available cloud database solutions on Google Cloud.",
  },
  {
    title: "Associate Cloud Engineer",
    issuer: "Google Cloud Certified",
    year: "2024",
    level: "Associate",
    verifyUrl:
      "https://www.credly.com/badges/4a13f939-b2c2-4841-8163-bda7fcf6e74b/public_url",
    description:
      "Deploying applications, monitoring operations, and managing enterprise solutions on Google Cloud.",
  },
];
