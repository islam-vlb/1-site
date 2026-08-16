const points = [
  { title: "Discreet by Design", desc: "Plain, unmarked packaging on every order." },
  { title: "Straightforward Pricing", desc: "One transparent price — no hidden fees." },
  { title: "Direct Support", desc: "Reach our support team any time with questions." },
];

export default function TrustSection() {
  return (
    <div className="bg-navy rounded-2xl p-10 sm:p-14">
      <div className="grid sm:grid-cols-3 gap-8">
        {points.map((p) => (
          <div key={p.title}>
            <h3 className="font-heading text-white text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-white/55 font-body leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
