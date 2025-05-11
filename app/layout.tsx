import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import {
  Flex,
  Link as ThemeLink,
  Text,
  Theme,
  Separator,
} from "@radix-ui/themes";
import styles from "./page.module.css";
import Link from "next/link";
import { Navbar } from "@/lib/components/navbar";
import { SocialIcon } from "react-social-icons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description:
    "Infraspan helps organisations thrive in a digital-first world by combining deep technical expertise with practical, hands-on delivery. We work alongside our clients to architect modern infrastructure and solutions that drive sustainable growth and real-world outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${styles.page}`}>
        <Theme
          accentColor="violet"
          grayColor="mauve"
          radius="full"
          appearance="dark"
        >
          <Navbar />
          {children}
          <footer
            style={{
              borderTop: "1px solid var(--mauve-5)",
            }}
          >
            <Flex direction="column" align="center" gap="8" py="8">
              <Flex gap="4">
                <ThemeLink asChild size="2">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </ThemeLink>
                <Separator orientation="vertical" />
                <ThemeLink asChild size="2">
                  <Link href="/terms-and-conditions">Terms and Conditions</Link>
                </ThemeLink>
              </Flex>
              <Flex>
                <SocialIcon
                  url="https://au.linkedin.com/company/infraspanptyltd"
                  className="custom-class"
                  bgColor="transparent"
                  fgColor="currentColor"
                />
                <SocialIcon
                  url="https://instagram.com/infraspan"
                  className="custom-class"
                  bgColor="transparent"
                  fgColor="currentColor"
                />
              </Flex>
              <Text size="1">© 2025 Infraspan. All right reserved.</Text>
            </Flex>
          </footer>
        </Theme>
      </body>
    </html>
  );
}
