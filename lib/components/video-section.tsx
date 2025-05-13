"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Section,
  Text,
} from "@radix-ui/themes";
import MuxPlayer from "@mux/mux-player-react";
import { useEffect, useState } from "react";

export const VideoSection = ({
  playbackId,
  poster,
}: {
  playbackId: string;
  poster: string;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (window) {
      setIsMounted(true);
    }
  }, []);

  return (
    <Section size="4" px="5" position="relative" overflow="hidden">
      {isMounted && (
        <MuxPlayer
          playbackId={playbackId}
          metadata={{
            video_title: "AdobeStock_277972844",
          }}
          poster={poster}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            opacity: 0.5,
          }}
          autoPlay="muted"
          loop
          muted
          nohotkeys
          playsInline
          preload="auto"
        />
      )}

      <Container size={{ initial: "3", xl: "4" }} position="relative">
        <Flex maxWidth="800px" direction="column">
          <Heading size={{ initial: "8", sm: "9" }} mb="4">
            Focused Strategy. <br />
            Real Business Impact.
          </Heading>
          <Text as="p" size={{ initial: "5", sm: "6" }}>
            We bring clarity to complexity and drive the momentum where it
            matters most.
          </Text>
          <Box mt="8">
            <Button asChild size="4">
              <Link href="/contact-us">Talk to a Consultant</Link>
            </Button>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};
