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
import React from "react";
import styles from "../styles/hero.module.css";
import MuxPlayer from "@mux/mux-player-react";

export const HeroSection = ({
  backgroundUrl,
  buttonLabel,
  children,
  heading,
  subheading,
  isVideo,
}: {
  backgroundUrl: string;
  buttonLabel?: string;
  children?: React.ReactNode;
  heading?: string;
  subheading: string;
  isVideo?: boolean;
}) => {
  return (
    <Section
      size="4"
      px="5"
      style={{
        backgroundImage: isVideo ? undefined : `url(${backgroundUrl})`,
      }}
      className={styles.background}
      position="relative"
    >
      {isVideo ? (
        <MuxPlayer
          playbackId="eWKmsawoRcqEPeKgeImp3EIKZuM6Zz9xgGJ0000qmlMHM"
          metadata={{
            video_title: "AdobeStock_277972844",
          }}
          poster={backgroundUrl}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            opacity: "0.5",
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      ) : (
        <Box
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          style={{ background: "rgba(0,0,0,0.7)" }}
        ></Box>
      )}
      <Container size={{ initial: "3", xl: "4" }} position="relative">
        <Flex maxWidth="800px" direction="column">
          {children ? (
            children
          ) : (
            <Heading size={{ initial: "8", sm: "9" }} mb="4">
              {heading}
            </Heading>
          )}
          <Text as="p" size={{ initial: "5", sm: "6" }}>
            {subheading}
          </Text>
          {buttonLabel && (
            <Box mt="8">
              <Button asChild size="4">
                <Link href="/contact-us">{buttonLabel}</Link>
              </Button>
            </Box>
          )}
        </Flex>
      </Container>
    </Section>
  );
};
