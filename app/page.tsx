import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import WhySection from "@/components/home/WhySection";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import HowItWorks from "@/components/home/HowItWorks";
import BeyondTesting from "@/components/home/BeyondTesting";

export const metadata: Metadata = {
  title: "Private, At-Home Fertility Wellness",
  description:
    "PrecisionFertilityLab offers a private, at-home semen test kit and supporting wellness products for men.",
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <WhySection />
      <FeaturedProduct />
      <HowItWorks />
      <BeyondTesting />
    </div>
  );
}
