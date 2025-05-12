import { CarouselCards } from "@/lib/components/carousel-cards";
import { ContactUsCard } from "@/lib/components/contact-us-card";
import { HeroSection } from "@/lib/components/hero-section";
import { ABOUT } from "@/lib/data/about";
import { Box, Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Infraspan",
};

export default function Page() {
  return (
    <>
      <HeroSection
        backgroundUrl="/backgrounds/About-Us_HEADER.jpeg"
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
          backgroundImage: "url(/backgrounds/logo.png)",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "500px",
        }}
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          style={{ background: "rgba(0,0,0,0.7)" }}
        ></Box>
        <Container size={{ initial: "3", xl: "4" }} position="relative">
          <Flex
            direction={{ initial: "column", sm: "row" }}
            align="center"
            gap="5"
          >
            <Box>
              <Text as="p" color="gray" mb="5">
                We are partners in progress. Infraspan helps organisations
                thrive in a digital-first world by combining deep technical
                expertise with practical, hands-on delivery. We work alongside
                our clients to architect modern infrastructure and solutions
                that drive sustainable growth and real-world outcomes.
              </Text>
              <Text as="p" color="gray" mb="5">
                As an Australian IT consulting firm, we go beyond advice —
                delivering tailored solutions and strategic alignment across
                every stage of the journey. Our clients gain clear visibility
                and control over their digital environments, supported by proven
                methods and measurable outcomes.
              </Text>
              <Text as="p" color="gray" mb="5">
                With engagements across New South Wales, Victoria, and Tasmania,
                our impact spans a wide range of industries — helping businesses
                of all sizes modernise systems, reduce complexity, and improve
                performance.
              </Text>
            </Box>
            <img
              src="/vectors/team.svg"
              alt="Team Image"
              width="300"
              height="300"
              style={{ marginTop: "-2rem" }}
            />
          </Flex>
        </Container>
      </Section>
      <Section size="4" px="5">
        <Container size={{ initial: "3", xl: "4" }}>
          <Heading as="h2">
            We're not just consultants — we're your technology partner for
            progress.
          </Heading>
          <CarouselCards items={ABOUT} />
        </Container>
      </Section>
      <ContactUsCard
        heading="That's our story. What's yours?"
        subheading="Book a Free Consultation"
      />
    </>
  );
}
