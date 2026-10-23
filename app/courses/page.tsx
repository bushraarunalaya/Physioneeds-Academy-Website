import type { Metadata } from "next";
import CoursesStore from "@/components/sections/CoursesStore";

export const metadata: Metadata = {
  title: "Courses | PhysioNeeds Academy",
  description: "Explore PhysioNeeds Academy certifications, fellowships, PG diplomas and hands-on physiotherapy programmes.",
};

export default function CoursesPage() {
  return <CoursesStore />;
}
