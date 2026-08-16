import Link from "next/link";
import { BUSINESS } from "@/lib/config";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <svg
        viewBox="0 0 40 40"
        className="h-8 w-8"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="19" fill="#0E7C86" stroke="#0A5F67" strokeWidth="1" />
        <path
          d="M20 10v20M10 20h20"
          stroke="#FAFBFC"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`font-heading font-semibold text-lg tracking-tight ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {BUSINESS.storeName}
      </span>
    </Link>
  );
}
