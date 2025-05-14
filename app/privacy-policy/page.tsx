import PrivacyPolicyPage from "@/lib/pages/privacy-policy-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Infraspan Pty Ltd",
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
