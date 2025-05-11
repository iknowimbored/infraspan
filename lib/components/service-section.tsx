import { Box, Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import { ServiceI } from "../data/services";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export const ServiceSection = ({
  service,
  align,
}: {
  service: ServiceI;
  align: "left" | "right";
}) => {
  return (
    <Section id={service.id} size="4" px="5">
      <Container size="3">
        <Flex
          direction={{ initial: "column", md: "row" }}
          gap={{ initial: "4", md: "9" }}
          justify="between"
        >
          <Flex display={{ md: "none" }} justify="center">
            <img
              src={service.imageUrl}
              alt={`${service.title} Image`}
              width="auto"
              height="300px"
            />
          </Flex>
          <Box
            display={{ initial: "none", md: "block" }}
            style={{
              order: align === "right" ? "0" : "1",
              marginTop: "-3rem",
            }}
          >
            <img
              src={service.imageUrl}
              alt={`${service.title} Image`}
              width="auto"
              height="400px"
            />
          </Box>
          <Box flexGrow="1" flexShrink="1" flexBasis="0">
            <Heading
              as="h2"
              weight="medium"
              size={{ initial: "7", sm: "8" }}
              mb="4"
              style={{
                backgroundClip: "text",
                backgroundImage:
                  "linear-gradient(var(--violet-12), var(--violet-11))",
                color: "#0000",
              }}
            >
              {service.title}
            </Heading>
            <Text as="p" color="gray" mb="4">
              {service.description}
            </Text>
            <Box role="list">
              {service.solutions.map((x: string, i: number) => (
                <Flex key={i} role="listitem" gap="2" align="start" my="3">
                  <Box>
                    <CheckCircledIcon width="1.5rem" height="1.5rem" />
                  </Box>
                  <Text size="4">{x}</Text>
                </Flex>
              ))}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};
