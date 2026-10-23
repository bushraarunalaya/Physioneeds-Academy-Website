import type { Metadata } from "next";
import EligibilityGuide from "@/components/sections/EligibilityGuide";

export const metadata: Metadata = {
  title: "Find your right course | PhysioNeeds Academy",
  description: "Choose your qualification and discover the PhysioNeeds Academy programmes you can join.",
};

export default function EligibilityPage() {
  return <EligibilityGuide />;
}
