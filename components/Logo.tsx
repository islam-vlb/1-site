import Link from "next/link";
import { BUSINESS } from "@/lib/config";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="16.5" fill="none" stroke="#0C6B6E" strokeWidth="1.1" />
      <circle cx="20" cy="20" r="9.5" fill="none" stroke="#0C6B6E" strokeWidth="1" opacity="0.55" />
      <line x1="20" y1="1.5" x2="20" y2="6" stroke="#0C6B6E" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="20" y1="34" x2="20" y2="38.5" stroke="#0C6B6E" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="1.5" y1="20" x2="6" y2="20" stroke="#0C6B6E" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="34" y1="20" x2="38.5" y2="20" stroke="#0C6B6E" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="23" cy="17" r="3.1" fill="#14181F" />
    </svg>
  );
}

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <LogoMark className="h-8 w-8" />
      <span
        className={`font-heading text-lg tracking-tight ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {BUSINESS.storeName}
      </span>
    </Link>
  );
}
