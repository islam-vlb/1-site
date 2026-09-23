import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import WhySection from "@/components/home/WhySection";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import HowItWorks from "@/components/home/HowItWorks";
import BuiltAroundBetterInfo from "@/components/home/BuiltAroundBetterInfo";
import SecondaryProduct from "@/components/home/SecondaryProduct";

export const metadata: Metadata = {
  title: "Private, At-Home Fertility Wellness",
  description:
    "NuressaIndividualInsight offers a private, at-home basal body thermometer and fertility tracking journal for daily cycle-awareness tracking.",
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <WhySection />
      <FeaturedProduct />
      <HowItWorks />
      <BuiltAroundBetterInfo />
      <SecondaryProduct />
    </div>
  );
}
