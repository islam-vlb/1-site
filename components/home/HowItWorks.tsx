import Image from "next/image";
import Reveal from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Collect",
    desc: "Follow the private, at-home collection process included in your kit.",
  },
  {
    n: "02",
    title: "Follow the Instructions",
    desc: "Use the included step-by-step guide to process your sample.",
  },
  {
    n: "03",
    title: "Review Your Information",
    desc: "Review your results at home and share them with your physician if you choose.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white border-y border-navy/8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 h-[320px] w-[320px] rounded-full overflow-hidden opacity-[0.07]">
          <Image
            src="/images/medical-equipment.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <Reveal className="max-w-xl mb-16">
          <p className="text-xs font-body uppercase tracking-[0.2em] text-teal mb-4">Process</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy leading-tight text-balance">
            How It Works
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-10 sm:gap-6 relative">
          <div className="hidden sm:block absolute top-6 left-[16.5%] right-[16.5%] h-px bg-navy/10" />
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <div className="relative bg-offwhite sm:bg-transparent">
                <span className="font-heading text-5xl text-teal/25 block mb-4">{step.n}</span>
                <h3 className="font-heading text-xl text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-navy/55 font-body leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
