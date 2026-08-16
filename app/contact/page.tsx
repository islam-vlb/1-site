"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/config";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading text-3xl font-bold text-navy mb-8">Contact Us</h1>

      <div className="grid sm:grid-cols-2 gap-10 mb-12">
        <div>
          <h2 className="font-heading font-semibold text-navy mb-2">Email</h2>
          <a href={`mailto:${BUSINESS.email}`} className="text-teal font-body hover:underline">
            {BUSINESS.email}
          </a>
        </div>
        <div>
          <h2 className="font-heading font-semibold text-navy mb-2">Phone</h2>
          <p className="text-navy/70 font-body">{BUSINESS.phone}</p>
        </div>
        <div className="sm:col-span-2">
          <h2 className="font-heading font-semibold text-navy mb-2">Mailing Address</h2>
          <p className="text-navy/70 font-body">
            {BUSINESS.legalName}
            <br />
            {BUSINESS.address.line1}
            <br />
            {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
          </p>
        </div>
      </div>

      {sent ? (
        <p className="text-teal font-body font-medium">
          Thank you — your message has been sent. We&apos;ll get back to you soon.
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4 max-w-lg"
        >
          <input required type="text" placeholder="Your name" className="w-full border border-teal/30 rounded-md px-4 py-3 font-body text-sm" />
          <input required type="email" placeholder="Your email" className="w-full border border-teal/30 rounded-md px-4 py-3 font-body text-sm" />
          <textarea required placeholder="Your message" rows={5} className="w-full border border-teal/30 rounded-md px-4 py-3 font-body text-sm" />
          <button
            type="submit"
            className="bg-accent text-white font-body font-semibold rounded-md py-3 px-8 hover:bg-accent/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
