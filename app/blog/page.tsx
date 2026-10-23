import type { Metadata } from "next";
import BlogHub from "@/components/sections/BlogHub";

export const metadata: Metadata = {
  title: "Journal | PhysioNeeds Academy",
  description: "Clinical ideas, practical reasoning and fresh perspective for physiotherapists.",
};

export default function BlogPage() {
  return <BlogHub />;
}
