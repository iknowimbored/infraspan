import { ContactUsCard } from "@/lib/components/contact-us-card";
import { HeroSection } from "@/lib/components/hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Infraspan Pty Ltd",
};

export default function Page() {
  return (
    <>
      <HeroSection
        backgroundUrl="/backgrounds/Contact-Us_HEADER.jpeg"
        heading="Strategy starts with a conversation"
        subheading="Let's talk about what's next for your business"
      />
      <ContactUsCard />
    </>
  );
}
