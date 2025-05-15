import { PAGE_METADATA } from "@/lib/data/metadata";
import PrivacyPolicyPage from "@/lib/pages/privacy-policy-page";
import { Metadata } from "next";

export const metadata: Metadata = PAGE_METADATA.find(
  (x) => x.route === "privacy-policy"
)?.metadata as Metadata;

export default function Page() {
  return <PrivacyPolicyPage />;
}
