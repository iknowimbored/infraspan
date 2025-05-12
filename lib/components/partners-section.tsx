import { Button, Container, Flex, Heading, Section } from "@radix-ui/themes";
import { PartnerI, PARTNERS } from "../data/partners";
import Link from "next/link";

export const PartnersSection = () => {
  return (
    <Section size="4" px="5">
      <Container size={{ initial: "3", xl: "4" }}>
        <Flex direction="column" gap="8">
          <Heading as="h2" size={{ initial: "7", sm: "8" }} weight="medium">
            Our Partners
          </Heading>
          <Flex
            direction={{ initial: "column", sm: "row" }}
            gap="9"
            p="2"
            justify="center"
            align="center"
          >
            {PARTNERS.map((x: PartnerI, i: number) => (
              <a key={i} href={x.websiteUrl} target="_blank" rel="noreferrer">
                <img
                  src={x.imageUrl}
                  alt={x.name + " Logo"}
                  width="240px"
                  height="60"
                />
              </a>
            ))}
          </Flex>
          <Flex justify="center">
            <Button asChild size={{ initial: "2", sm: "3" }} variant="outline">
              <Link href="/case-studies">Case Studies</Link>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};
