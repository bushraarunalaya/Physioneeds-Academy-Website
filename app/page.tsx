import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import { Guidance, Problems, Doors, Why } from "@/components/sections/Pathways";
import Specialties from "@/components/sections/Specialties";
import Catalogue from "@/components/sections/Catalogue";
import Offers from "@/components/sections/Offers";
import { Callback, FreeHandbook, Masterclass, SkillsReview, FinalCta } from "@/components/sections/Lead";
import { Founders, ClassVideo, Change, VideoTestimonials, Credentials } from "@/components/sections/Proof";
import Testimonials from "@/components/sections/Testimonials3D";
import { Books, Faq } from "@/components/sections/Resources";
import StudyJourney from "@/components/sections/StudyJourney";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Guidance />
      <Problems />
      <Doors />
      <Why />
      <Specialties />
      <Catalogue />
      <Callback />
      <Offers />
      <FreeHandbook />
      <Founders />
      <ClassVideo />
      <Change />
      <Testimonials />
      <VideoTestimonials />
      <Masterclass />
      <Credentials />
      <Books />
      <StudyJourney />
      <SkillsReview />
      <Faq />
      <FinalCta />
    </>
  );
}
