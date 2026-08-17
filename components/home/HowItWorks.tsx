import Reveal from "@/components/Reveal";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white border-y border-navy/8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 h-[320px] w-[320px] rounded-full overflow-hidden opacity-[0.07]">
          {/* Background medical image removed for cleanliness */}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-body uppercase tracking-[0.2em] text-teal mb-4">Process</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy leading-tight text-balance mb-6">
            How It Works
          </h2>
          <p className="text-navy/60 font-body leading-relaxed text-lg">
            The At-Home Semen Test Kit includes easy-to-follow, step-by-step instructions for the
            at-home collection process. Complete the process in the comfort of your own space.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
