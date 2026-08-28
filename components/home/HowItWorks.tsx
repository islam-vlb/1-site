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
        <Reveal className="max-w-3xl">
          <p className="text-xs font-body uppercase tracking-[0.2em] text-teal mb-4">Process</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy leading-tight text-balance mb-6">
            Your At-Home Semen Test Kit, Made Simple
          </h2>
          <p className="text-navy/60 font-body leading-relaxed text-lg">
            Simple testing. Convenient results. All from the comfort of home.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {[
            {
              number: "1",
              title: "Order & Receive Your Test Kit",
              description: "Order the At-Home Semen Test Kit and receive everything you need in discreet packaging.",
            },
            {
              number: "2",
              title: "Test at Home",
              description: "Follow the simple instructions to complete your at-home semen sample collection in your own space.",
            },
            {
              number: "3",
              title: "Get Your Results at Home",
              description: "Complete the included steps and review your informational results at home when they are ready.",
            },
          ].map((step) => (
            <Reveal key={step.number} className="border-t-2 border-teal pt-6">
              <span className="text-sm font-body font-semibold tracking-[0.2em] text-teal">0{step.number}</span>
              <h3 className="font-heading text-xl text-navy leading-tight mt-4 mb-3">{step.title}</h3>
              <p className="text-sm text-navy/60 font-body leading-relaxed">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
