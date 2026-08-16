import Reveal from "@/components/Reveal";

export default function Highlights({
  items,
}: {
  items: { title: string; desc: string }[];
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.07}>
          <div className="h-full border border-navy/10 rounded-lg p-6 bg-white hover:border-teal/40 transition-colors">
            <span className="font-heading text-2xl text-teal/40 block mb-3">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading text-navy mb-2">{item.title}</h3>
            <p className="text-sm text-navy/55 font-body leading-relaxed">{item.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
