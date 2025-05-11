import {
  Box,
  Card,
  Container,
  Flex,
  Heading,
  Section,
  Text,
  Grid,
} from "@radix-ui/themes";
import Link from "next/link";
import { ServiceI, SERVICES } from "../data/services";
import styles from "../styles/card.module.css";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const ServiceCard = ({ service }: { service: ServiceI }) => {
  return (
    <Box flexGrow="1" flexShrink="1" flexBasis="0">
      <Link href={`/services#${service.id}`}>
        <Card className={styles.card} size="2">
          <Flex height="100%" direction="column">
            <img
              src={service.imageUrl}
              alt={`${service.title} Image`}
              width="80%"
            />
            <Heading as="h3" mb="3" size="4">
              {service.title}
            </Heading>
            <Text as="p" color="gray" mb="5">
              {service.subtitle}
            </Text>
            <Flex justify="end" align="center" gap="2" mt="auto">
              <Text color="violet" size="2" weight="bold">
                Learn more
              </Text>
              <ArrowRightIcon color="var(--violet-11)" />
            </Flex>
          </Flex>
        </Card>
      </Link>
    </Box>
  );
};

export const ServicesSection = () => {
  return (
    <Section size="4" px="5">
      <Container size="3">
        <Flex direction="column" gap="4">
          <Heading as="h2" size={{ initial: "7", sm: "8" }} weight="medium">
            Our Core Services
          </Heading>
          <Text as="p" size="4">
            We design scalable technology solutions that evolve with your
            business.
          </Text>
          <Grid gap="4" columns={{ initial: "1", xs: "2", sm: "4" }}>
            {SERVICES.map((x: ServiceI, i: number) => (
              <ServiceCard key={i} service={x} />
            ))}
          </Grid>
          <Flex direction={{ initial: "column", sm: "row" }} gap="4"></Flex>
        </Flex>
      </Container>
    </Section>
  );
};
