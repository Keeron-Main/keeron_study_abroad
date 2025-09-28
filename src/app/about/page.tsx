import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Keeron Study Abroad"
        description="At Keeron, we believe education has no borders. While Keeron already supports learners across skills, careers, and professional development, our expansion into Keeron Study Abroad reflects our deeper commitment to help ambitious students in Bangladesh reach world-class universities, build global networks, and unlock a future beyond limits. We help students take each step with confidence, from choosing the right course and university to applying for scholarships, securing visas, and preparing for life abroad. Our mission is simple: to make studying overseas more accessible, affordable, and achievable for every ambitious learner."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
