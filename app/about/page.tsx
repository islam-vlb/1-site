import { BUSINESS } from "@/lib/config";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading text-3xl font-bold text-navy mb-8">About Us</h1>
      <div className="space-y-5 text-navy/70 font-body leading-relaxed">
        <p>
          {BUSINESS.storeName} is operated by {BUSINESS.legalName}, a company focused on making
          private, accessible at-home wellness products available directly to consumers.
        </p>
        <p>
          We believe that taking a first step toward understanding your fertility health
          shouldn&apos;t require an immediate clinic visit. Our At-Home Semen Test Kit and Male
          Fertility Support Formula are designed to give men a private, convenient way to start
          that process from home.
        </p>
        <p>
          Our products are intended for general wellness and informational purposes and are not
          a substitute for professional medical advice, diagnosis, or treatment. We encourage
          anyone with health concerns to consult a qualified healthcare provider.
        </p>
        <p>
          {BUSINESS.legalName} is based in Tulsa, Oklahoma, and ships orders discreetly across
          the United States.
        </p>
      </div>
    </div>
  );
}
