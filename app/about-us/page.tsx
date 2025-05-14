import { CarouselCards } from "@/lib/components/carousel-cards";
import { ContactUsCard } from "@/lib/components/contact-us-card";
import { HeroSection } from "@/lib/components/hero-section";
import { ABOUT } from "@/lib/data/about";
import {
  Box,
  Container,
  Flex,
  Heading,
  Section,
  Strong,
  Text,
} from "@radix-ui/themes";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Infraspan Pty Ltd",
};

export default function Page() {
  function addProductJsonLd() {
    return {
      __html: `{
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "Infraspan Pty Ltd",
  "alternateName": "Infraspan",
  "url": "https://www.infraspan.com.au/about-us",
  "logo": "https://www.infraspan.com.au/icon1.png",
  "sameAs": [
    "https://au.linkedin.com/company/infraspanptyltd",
    "https://instagram.com/infraspan"
  ]
}
  `,
    };
  }
  return (
    <>
      <HeroSection
        backgroundUrl="https://fhtfe15dbahb2gme.public.blob.vercel-storage.com/background_about-us_header-aP8khUdQ3WgW8dunlseE6Z8bRW9BRh.jpeg"
        subheading="We bring collaboration, clarity, and capability to every stage of your journey."
      >
        <Heading size={{ initial: "8", sm: "9" }} mb="4">
          Practical Thinkers. <br /> Purposeful Builders.
        </Heading>
      </HeroSection>
      <Section
        size="1"
        pt="9"
        px="5"
        style={{
          backgroundImage:
            "url(https://fhtfe15dbahb2gme.public.blob.vercel-storage.com/background_about-us_body-aUAXUJfsBHSuNlS7tvk13eIrSOufq1.png)",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "450px",
        }}
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          style={{ background: "rgba(17,17,17,0.7)" }}
        ></Box>
        <Container size={{ initial: "3", xl: "4" }} position="relative">
          <Flex
            direction={{ initial: "column", sm: "row" }}
            align="center"
            gap="5"
          >
            <Box>
              <Text as="p" color="gray" mb="5">
                <Strong>We are partners in progress.</Strong> Infraspan helps
                organisations thrive in a digital first world by combining deep
                technical expertise with practical, hands on delivery. We work
                alongside our clients to architect modern infrastructure and
                solutions that drive sustainable growth and tangible results.
              </Text>
              <Text as="p" color="gray" mb="5">
                As an Australian IT consulting firm, we go beyond advice by
                delivering tailored solutions and strategic alignment across
                every stage of the journey. Our clients gain clear visibility
                and control over their digital environments, supported by proven
                methods and measurable impact.
              </Text>
              <Text as="p" color="gray" mb="5">
                With engagements across New South Wales, Victoria and Tasmania,
                our reach spans a wide range of industries, helping businesses
                of all sizes modernise systems, reduce complexity and improve
                performance.
              </Text>
            </Box>
            <Image
              src="https://fhtfe15dbahb2gme.public.blob.vercel-storage.com/about-us-lyQvFXg6LeUuIRU5TSx7McjGzYL1Ld.svg"
              alt="Team Image"
              width="300"
              height="300"
            />
          </Flex>
        </Container>
      </Section>
      <Section size="4" px="5">
        <Container size={{ initial: "3", xl: "4" }}>
          <Heading as="h2" mb="4">
            We're not just consultants. We're your technology partner for
            progress.
          </Heading>
          <Text as="p">
            Our approach is grounded in four core commitments. These principles
            shape how we engage, deliver and support every step of your
            technology journey.
          </Text>
          <CarouselCards items={ABOUT} />
        </Container>
      </Section>
      <ContactUsCard
        heading="That's our story. What's yours?"
        subheading="Book a Free Consultation"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addProductJsonLd()}
        key="product-jsonld"
      />
    </>
  );
}
