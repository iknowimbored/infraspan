"use client";

import { ContactUsCard } from "@/lib/components/contact-us-card";
import { Heading, Separator } from "@radix-ui/themes";
import { ServicesSection } from "@/lib/components/services-section";
import { PillarsSection } from "@/lib/components/pillars-section";
import { PartnersSection } from "@/lib/components/partners-section";
import { HeroSection } from "@/lib/components/hero-section";

export default function HomePage() {
  return (
    <>
      <HeroSection
        backgroundUrl="/backgrounds/Home_HEADER.jpeg"
        buttonLabel="Talk to a Consultant"
        subheading="We bring clarity to complexity and drive the momentum where it matters most."
      >
        <Heading size={{ initial: "8", sm: "9" }} mb="4">
          Focused Strategy. <br />
          Real Business Impact.
        </Heading>
      </HeroSection>
      <ServicesSection />
      <Separator style={{ width: "100%" }} />
      <PillarsSection />
      <Separator style={{ width: "100%" }} />
      <PartnersSection />
      <ContactUsCard
        heading="Looking to simplify the complex?"
        subheading="We're here to listen, guide, and solve — wherever you are in the journey."
      />
    </>
  );
}
