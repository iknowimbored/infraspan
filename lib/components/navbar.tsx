"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Box, Button, DropdownMenu, Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <Box height="48px">
      <Box
        style={{
          background: "var(--background)",
          boxShadow: "0 1px var(--gray-a4)",
          zIndex: "2",
        }}
        position="fixed"
        height="inherit"
        top="0"
        left="0"
        right="0"
      >
        <Flex
          position="absolute"
          height="inherit"
          top="0"
          left="0"
          right="0"
          justify="between"
          align="center"
          p="4"
        >
          <Box mt="2">
            <Link href="/">
              <Image
                src="https://fhtfe15dbahb2gme.public.blob.vercel-storage.com/company_infraspan-bizoCWDGVpvWINqpPWszun575caN09.png"
                alt="Infraspan Logo"
                width="160"
                height="32"
              />
            </Link>
          </Box>
          <Flex gap={{ initial: "2", sm: "5" }}>
            <Flex
              display={{ initial: "none", sm: "flex" }}
              align="center"
              gap="5"
            >
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/about-us">About Us</Link>
            </Flex>
            <Button asChild variant="surface">
              <Link href="/contact-us">Contact Us</Link>
            </Button>
            <Box display={{ sm: "none" }}>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft">
                    <HamburgerMenuIcon />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item asChild>
                    <Link href="/">Home</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <Link href="/services">Services</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <Link href="/case-studies">Case Studies</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <Link href="/about-us">About Us</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
