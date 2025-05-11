import { Box, Card, Flex, Heading, ScrollArea, Text } from "@radix-ui/themes";
import { PillarI } from "../data/pillars";

export const CarouselCards = ({ items }: { items: PillarI[] }) => {
  return (
    <ScrollArea
      type="auto"
      scrollbars="horizontal"
      style={{ paddingBlock: "2rem" }}
    >
      <Flex gap="4">
        {items.map((x: PillarI, i: number) => (
          <Box
            key={i}
            minWidth={{ initial: "300px", md: "0" }}
            flexGrow="1"
            flexShrink="1"
            flexBasis="0"
          >
            <Card style={{ height: "100%" }} size="2">
              <Flex direction="column" gap="5">
                <x.icon
                  width="2.25rem"
                  height="2.25rem"
                  style={{ color: "var(--violet-a11)" }}
                />
                <Box>
                  <Heading as="h3" size="4" mb="2">
                    {x.title}
                  </Heading>
                  <Text as="p" color="gray">
                    {x.description}
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
        ))}
      </Flex>
    </ScrollArea>
  );
};
