import TermsAndConditionsPage from "@/lib/pages/terms-and-conditions-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Infraspan",
};

export default function Page() {
  return <TermsAndConditionsPage />;
}
