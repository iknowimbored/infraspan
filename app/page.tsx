import { ContactUsCard } from "@/lib/components/contact-us-card";
import { PartnersSection } from "@/lib/components/partners-section";
import { PillarsSection } from "@/lib/components/pillars-section";
import { ServicesSection } from "@/lib/components/services-section";
import { VideoSection } from "@/lib/components/video-section";
import { createBlurUp } from "@mux/blurup";
import { Separator } from "@radix-ui/themes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Infrastructure Solutions | Infraspan Pty Ltd",
};

export default async function Page() {
  const MUX_PLAYBACK_ID = "sGxosZrxByBkZZ8Z4mDSSOWebE7bv5JQXR27Z8nuOgE";
  let muxBlurDataUrl = "/backgrounds/home_HEADER.jpeg";
  try {
    const { blurDataURL } = await createBlurUp(MUX_PLAYBACK_ID, {});
    muxBlurDataUrl = blurDataURL;
  } catch {}

  return (
    <>
      <VideoSection playbackId={MUX_PLAYBACK_ID} poster={muxBlurDataUrl} />
      <ServicesSection />
      <Separator style={{ width: "100%" }} />
      <PillarsSection />
      <Separator style={{ width: "100%" }} />
      <PartnersSection />
      <ContactUsCard
        heading="Looking to simplify the complex?"
        subheading="We're here to listen, guide, and solve — wherever you are in the journey."
      />
    </>
  );
}
