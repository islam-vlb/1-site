export type LegalSectionData = { heading: string; body: string[] };

export default function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSectionData[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading text-3xl font-bold text-navy mb-2">{title}</h1>
      <p className="text-sm text-navy/50 font-body mb-10">Last updated: {updated}</p>
      <div className="space-y-8">
        {sections.map((section, i) => (
          <section key={section.heading}>
            <h2 className="font-heading font-semibold text-navy text-lg mb-2">
              {i + 1}. {section.heading}
            </h2>
            {section.body.map((p, j) => (
              <p key={j} className="text-navy/70 font-body leading-relaxed mb-2">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
