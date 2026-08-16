import Image from "next/image";
import Reveal from "@/components/Reveal";

const items = [
  {
    title: "Private",
    desc: "Designed around a discreet at-home experience.",
    icon: "M12 2a5 5 0 015 5v3h1a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2h1V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v3h6V7a3 3 0 00-3-3z",
  },
  {
    title: "Simple",
    desc: "Clear, straightforward testing guidance.",
    icon: "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11",
  },
  {
    title: "Convenient",
    desc: "Designed to fit naturally into your routine.",
    icon: "M12 8v4l3 3M12 22a10 10 0 100-20 10 10 0 000 20z",
  },
  {
    title: "Informative",
    desc: "Designed to provide useful fertility-related information.",
    icon: "M12 17h.01M12 13.5a1.5 1.5 0 011.5-1.5c.6-.5 1-1 1-1.75A2.25 2.25 0 0012.25 8h-.5A2.25 2.25 0 009.5 10.25M12 21a9 9 0 100-18 9 9 0 000 18z",
  },
];

export default function WhySection() {
  return (
    <section className="bg-white border-y border-navy/8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="max-w-xl">
            <p className="text-xs font-body uppercase tracking-[0.2em] text-teal mb-4">Our Philosophy</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-navy leading-tight text-balance">
              Why PrecisionFertilityLab
            </h2>
            <p className="mt-4 text-navy/60 font-body leading-relaxed">
              We built a private, precise, and approachable way to begin understanding your
              fertility — without stepping into a clinic.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-navy/10 shadow-sm">
              <Image
                src="/images/lab-microscope.jpg"
                alt="Laboratory microscope equipment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/10 to-transparent pointer-events-none" />
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full border border-navy/10 rounded-lg p-7 hover:border-teal/40 transition-colors">
                <div className="h-11 w-11 rounded-full bg-teal/8 flex items-center justify-center mb-5">
                  <svg className="h-5 w-5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-navy mb-2 tracking-wide uppercase text-sm">
                  {item.title}
                </h3>
                <p className="text-sm text-navy/55 font-body leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
