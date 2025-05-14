import { ContactUsCard } from "@/lib/components/contact-us-card";
import { HeroSection } from "@/lib/components/hero-section";
import { ServiceSection } from "@/lib/components/service-section";
import { ServiceI, SERVICES } from "@/lib/data/services";
import { Box, Heading, Separator } from "@radix-ui/themes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Infraspan Pty Ltd",
};

export default function Page() {
  return (
    <>
      <HeroSection
        backgroundUrl="https://fhtfe15dbahb2gme.public.blob.vercel-storage.com/background_services_header-3tsqxrDaXVFhaWxu9R2BFoHCGcuPRG.jpeg"
        buttonLabel="Talk to a Consultant"
        heading="Engineering impact through modern infrastructure and intelligent design"
        subheading=" Built around your goals — tailored architecture that drives tangible outcomes."
      >
        <Heading size={{ initial: "8", sm: "9" }} mb="4">
          Modern Infrastructure. <br /> Strategically Engineered.
        </Heading>
      </HeroSection>
      {SERVICES.map((x: ServiceI, i: number) => (
        <Box key={i}>
          {i > 0 && <Separator style={{ width: "100%" }} />}
          <ServiceSection service={x} align={i % 2 === 0 ? "right" : "left"} />
        </Box>
      ))}
      <ContactUsCard
        heading="Need something more specific?"
        subheading="We tailor solutions to fit complex environments and unique challenges."
      />
    </>
  );
}
