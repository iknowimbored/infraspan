import { PAGE_METADATA } from "@/lib/data/metadata";
import TermsAndConditionsPage from "@/lib/pages/terms-and-conditions-page";
import { Metadata } from "next";

export const metadata: Metadata = PAGE_METADATA.find(
  (x) => x.route === "terms-and-conditions"
)?.metadata as Metadata;

export default function Page() {
  return <TermsAndConditionsPage />;
}
