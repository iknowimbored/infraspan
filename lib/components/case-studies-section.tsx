import {
  Badge,
  Box,
  Card,
  Container,
  Flex,
  Heading,
  Section,
  Separator,
  Text,
} from "@radix-ui/themes";
import {
  CASE_STUDIES,
  CaseStudyClientI,
  CaseStudyI,
} from "../data/case-studies";

export const CaseStudiesSection = () => {
  return (
    <Section size="4" px="3">
      <Container size="3">
        <Flex direction="column" gap="9">
          {CASE_STUDIES.map((x: CaseStudyI, i: number) => (
            <Box key={i}>
              {i > 0 && <Separator mb="9" style={{ width: "100%" }} />}
              <Flex direction="column" gap="5">
                <Box>
                  <Badge>CLIENT CASE STUDY</Badge>
                </Box>
                <Box>
                  <Heading as="h2" size="8" weight="medium">
                    {x.client}
                  </Heading>
                </Box>
                <Flex
                  align="center"
                  direction={{ initial: "column", sm: "row" }}
                  gap="9"
                  my="5"
                >
                  {x.logos.map((y: CaseStudyClientI, j: number) => (
                    <a
                      key={j}
                      aria-label={"Go to " + y.name + "'s Website"}
                      href={y.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={y.logoUrl}
                        alt={y.name + " Logo"}
                        width="200px"
                        height="auto"
                      />
                    </a>
                  ))}
                </Flex>
                <Text as="p" color="gray">
                  {x.about}
                </Text>
                <Flex gap="5" direction={{ initial: "column", sm: "row" }}>
                  <Box flexGrow="1" flexShrink="1" flexBasis="0">
                    <Card
                      size="3"
                      style={{
                        height: "100%",
                      }}
                    >
                      <Heading as="h3" size="6" weight="regular" mb="3">
                        The Challenge
                      </Heading>
                      <Text as="p" color="gray">
                        {x.problem}
                      </Text>
                    </Card>
                  </Box>
                  <Box flexGrow="1" flexShrink="1" flexBasis="0">
                    <Card
                      size="3"
                      style={{
                        background: "var(--violet-a3)",
                      }}
                    >
                      <Heading as="h3" size="6" weight="regular" mb="3">
                        How Infraspan Delivered
                      </Heading>
                      {x.solution.map((y: string, j: number) => (
                        <Text
                          as="div"
                          mt={j === 0 ? "0" : "2"}
                          key={j}
                          color="gray"
                        >
                          <Box dangerouslySetInnerHTML={{ __html: y }}></Box>
                        </Text>
                      ))}
                    </Card>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Container>
    </Section>
  );
};
