import type { Metadata } from "next";
import WebinarHub from "@/components/sections/WebinarHub";

export const metadata: Metadata = {
  title: "Webinars | PhysioNeeds Academy",
  description: "Live conversations, clinical masterclasses and practical learning sessions from PhysioNeeds Academy.",
};

export default function WebinarsPage() {
  return <WebinarHub />;
}
