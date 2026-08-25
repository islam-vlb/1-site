import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import WhySection from "@/components/home/WhySection";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import HowItWorks from "@/components/home/HowItWorks";
import BuiltAroundBetterInfo from "@/components/home/BuiltAroundBetterInfo";

export const metadata: Metadata = {
  title: "Private, At-Home Fertility Wellness",
  description:
    "NuressaIndividualInsight offers a private, at-home semen test kit and supporting wellness products for men.",
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <WhySection />
      <FeaturedProduct />
      <HowItWorks />
      <BuiltAroundBetterInfo />
    </div>
  );
}
