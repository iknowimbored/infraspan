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
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const METADATA_DESCRIPTION =
  "Infraspan Pty Ltd is an Australian IT consulting firm delivering digital transformation, infrastructure, and architecture solutions that simplify tech and drive results.";

export const metadata: Metadata = {
  description: METADATA_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="apple-mobile-web-app-title" content="Infraspan" />
        <meta name="robots" content="all" />
        <meta
          property="og:title"
          content="Digital Infrastructure Solutions | Infraspan Pty Ltd"
        />
        <meta property="og:description" content={METADATA_DESCRIPTION} />
        <meta
          property="og:image"
          content="https://fhtfe15dbahb2gme.public.blob.vercel-storage.com/thumbnail-eGtua6K35UaX1vVsSc3YxK7kK2EzKo.png"
        />
        <meta property="og:image:alt" content="Infraspan Pty Ltd" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Digital Infrastructure Solutions | Infraspan Pty Ltd"
        />
        <meta name="twitter:description" content={METADATA_DESCRIPTION} />
        <meta
          name="twitter:image"
          content="https://fhtfe15dbahb2gme.public.blob.vercel-storage.com/thumbnail-eGtua6K35UaX1vVsSc3YxK7kK2EzKo.png"
        />
      </Head>
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
