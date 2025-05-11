import HomePage from "@/lib/pages/home-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infraspan",
};

export default function Page() {
  return <HomePage />;
}
