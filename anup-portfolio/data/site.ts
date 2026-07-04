/**
 * Single source of truth for personal/site data.
 */
export const site = {
  name: "Anup Kumar Shaw",
  firstName: "Anup",
  initials: "AKS",
  headline: "Building Enterprise-Grade Software & AI-Powered Digital Experiences",
  roles: [
    "Full-Stack Developer",
    "Cloud Engineer",
    "AI Application Builder",
    "Multi-Tenant SaaS Architect",
  ],
  summary:
    "Full-Stack Developer (NestJS, Next.js, GCP) who has shipped multi-tenant SaaS to 10+ enterprise clients and cut core transaction latency by 300ms. 4× Google Cloud–certified, specializing in secure multi-tenant backends, POS/SAP synchronization, RBAC, and AI/LLM-integrated platforms across retail, healthcare, and finance.",
  shortBio:
    "Full-stack developer and cloud engineer shipping multi-tenant SaaS and AI-integrated platforms for retail, healthcare, and finance.",
  // Update this to the production domain before deploying.
  url: "https://anup-portfolio.vercel.app",
  email: "anupshaw1603@gmail.com",
  phone: "+91 84820 22122",
  phoneHref: "tel:+918482022122",
  location: "Howrah, West Bengal, India",
  availability: "Open to opportunities",
  resumeUrl: "/resume.pdf",
  // Real portrait (café photo). The illustrated fallback lives at
  // /images/avatar.svg if a stylized look is ever wanted instead.
  profileImage: "/images/profile.jpg",
  // Used by the GitHub activity section (contribution calendar + stats).
  githubUsername: "Anup1603",
  social: {
    github: "https://github.com/Anup1603",
    linkedin: "https://www.linkedin.com/in/anupkumarshaw/",
    leetcode: "https://leetcode.com/u/anupshaw1603/",
  },
  company: {
    name: "Anocloud",
    url: "https://www.anocloud.in/",
  },
  // Flip to true once real testimonials are added in data/testimonials.ts.
  showTestimonials: true,
  heroBadges: ["NestJS", "Next.js", "GCP", "PostgreSQL", "Docker", "Gemini AI"],
  heroStats: [
    { value: 10, suffix: "+", label: "Enterprise Clients" },
    { value: 5000, suffix: "+", label: "Daily Records Processed" },
    { value: 300, suffix: "ms", label: "Latency Reduced" },
    { value: 4, suffix: "×", label: "Google Cloud Certified" },
  ],
};

export type SiteConfig = typeof site;
