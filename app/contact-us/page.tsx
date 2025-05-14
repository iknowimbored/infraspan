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
        backgroundUrl="https://fhtfe15dbahb2gme.public.blob.vercel-storage.com/background_contact-us_header-JSJJ9e4QhNhjbWmABbq0ohWbRgiY3C.jpeg"
        heading="Strategy starts with a conversation"
        subheading="Let's talk about what's next for your business"
      />
      <ContactUsCard />
    </>
  );
}
