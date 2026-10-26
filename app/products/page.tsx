import type { Metadata } from "next";
import DigitalProducts from "@/components/sections/DigitalProducts";

export const metadata: Metadata = {
  title: "Digital Products | PhysioNeeds Academy",
  description: "Free digital products, clinical resources and practical guides from PhysioNeeds Academy.",
};

export default function ProductsPage() {
  return <DigitalProducts />;
}
