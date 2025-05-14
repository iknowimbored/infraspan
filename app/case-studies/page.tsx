import { CaseStudiesSection } from "@/lib/components/case-studies-section";
import { ContactUsCard } from "@/lib/components/contact-us-card";
import { HeroSection } from "@/lib/components/hero-section";
import { Heading } from "@radix-ui/themes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Infraspan Pty Ltd",
};

export default function Page() {
  return (
    <>
      <HeroSection
        backgroundUrl="https://fhtfe15dbahb2gme.public.blob.vercel-storage.com/background_case-studies_header-iclxpA1JWplrH3JscQjzO1TkhiYwkV.png"
        buttonLabel="Talk to a Consultant"
        heading="Solutions That Work. Outcomes That Matter."
        subheading="See how we solve real challenges across industries."
      >
        <Heading size={{ initial: "8", sm: "9" }} mb="4">
          Solutions That Work. <br /> Outcomes That Matter.
        </Heading>
      </HeroSection>
      <CaseStudiesSection />
      <ContactUsCard
        heading="Facing similar challenges?"
        subheading="Let's find the right approach for your business."
      />
    </>
  );
}
