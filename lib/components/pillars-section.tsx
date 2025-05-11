import { Box, Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import { PILLARS } from "../data/pillars";
import { CarouselCards } from "./carousel-cards";

export const PillarsSection = () => {
  return (
    <Section size="4" px="5">
      <Container size="3">
        <Flex direction="column" gap="4">
          <Heading as="h2" size={{ initial: "7", sm: "8" }} weight="medium">
            What You Can Expect
          </Heading>
          <Box>
            <Text as="p" mb="4" size="4" weight="light">
              Our approach is built on four layers that simplify complexity and
              drive meaningful results.
            </Text>
            <Text as="p" size="4" weight="medium">
              We focus on solving the right problems and creating long-term
              value.
            </Text>
          </Box>
          <CarouselCards items={PILLARS} />
        </Flex>
      </Container>
    </Section>
  );
};
