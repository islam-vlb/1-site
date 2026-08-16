import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm font-body text-navy/50">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-navy/25">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-teal transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-navy/70">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
