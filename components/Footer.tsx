import Link from "next/link";
import Logo from "./Logo";
import PaymentIcons from "./PaymentIcons";
import { BUSINESS, FOOTER_LINKS } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-navy text-white font-body">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Logo dark />
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Private, at-home fertility wellness products from {BUSINESS.legalName}.
            </p>
            <div className="mt-5">
              <PaymentIcons size="h-8" />
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wide text-white/90 mb-4">
              Links
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label + link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-teal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wide text-white/90 mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-teal transition-colors">
                  {BUSINESS.email}
                </a>
              </li>
              <li>Phone: {BUSINESS.phone}</li>
              <li>
                {BUSINESS.legalName}, {BUSINESS.address.line1}, {BUSINESS.address.city},{" "}
                {BUSINESS.address.state} {BUSINESS.address.zip}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 space-y-3">
          <p className="text-sm font-bold text-white/90">
            Charges appear as PrecisionFertilityLab on your statement.
          </p>
          <p className="text-sm font-semibold text-white/90">
            Personal information will not be shared with Third Parties.
          </p>
          <p className="text-sm font-bold text-red-400">
            ⚠️ Individuals under 18 are not permitted to purchase.
          </p>
          <p className="text-xs text-white/50 leading-relaxed">
            These statements have not been evaluated by the FDA. Products are not intended to
            diagnose, treat, cure, or prevent any disease.
          </p>
          <p className="text-xs text-white/50 pt-2">
            © {BUSINESS.copyrightYear} {BUSINESS.legalName} — {BUSINESS.storeName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
