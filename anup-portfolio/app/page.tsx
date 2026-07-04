import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { ExperienceSection } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { GithubActivity } from "@/components/sections/github-activity";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Journey />
      <ExperienceSection />
      <Skills />
      <Certifications />
      <FeaturedProjects />
      <GithubActivity />
      <Testimonials />
      <ContactCta />
    </>
  );
}
