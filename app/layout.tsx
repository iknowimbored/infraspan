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
    "Infraspan Pty Ltd is an Australian IT consulting firm delivering digital transformation, infrastructure, and architecture solutions that simplify tech and drive results.",
  robots: "all",
  openGraph: {
    type: "website",
    url: "https://www.infraspan.com.au",
    title: "Infraspan Pty Ltd",
    description:
      "Infraspan Pty Ltd is an Australian IT consulting firm delivering digital transformation, infrastructure, and architecture solutions that simplify tech and drive results.",
    images: {
      url: "https://fhtfe15dbahb2gme.public.blob.vercel-storage.com/thumbnail-eGtua6K35UaX1vVsSc3YxK7kK2EzKo.png",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Infraspan Pty Ltd",
    description:
      "Infraspan Pty Ltd is an Australian IT consulting firm delivering digital transformation, infrastructure, and architecture solutions that simplify tech and drive results.",
    images: {
      url: "https://fhtfe15dbahb2gme.public.blob.vercel-storage.com/thumbnail-eGtua6K35UaX1vVsSc3YxK7kK2EzKo.png",
    },
  },
  verification: {
    google: "eMxsEvatJ87VGpgfDHQA8MO8XijVpnT9_ysWAjozDZs",
  },
  appleWebApp: {
    title: "Infraspan",
  },
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
