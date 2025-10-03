"use client";

import { useId, useState } from "react";
import Link from "next/link";

const FAQS = [
  {
    q: "What is Bookmark?",
    a: "Bookmark is a simple manager to save and organize your favourite sites. It syncs across devices so you can access them anywhere.",
  },
  {
    q: "How can I request a new browser?",
    a: "Tell us which browser you’d like supported via the contact form and we’ll prioritise based on demand.",
  },
  {
    q: "Is there a mobile app?",
    a: "We’re exploring iOS and Android. Sign up to the newsletter to get notified when mobile releases are ready.",
  },
  {
    q: "What about other Chromium browsers?",
    a: "Most Chromium-based browsers work out of the box if they support Chrome extensions.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const base = useId();

  const toggle = (i) => setOpen((cur) => (cur === i ? -1 : i));

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24 md:py-28">
      {/* Lead */}
      <div className="text-center">
        <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      {/* Accordion */}
      <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        {FAQS.map((item, i) => {
          const panelId = `${base}-panel-${i}`;
          const btnId = `${base}-btn-${i}`;
          const expanded = open === i;

          return (
            <div key={i} className="px-4 sm:px-6">
              <h3 className="sr-only">{item.q}</h3>
              <button
                id={btnId}
                aria-controls={panelId}
                aria-expanded={expanded}
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between py-5 text-left text-slate-900 hover:text-indigo-600 focus:outline-none"
              >
                <span className="font-medium">{item.q}</span>
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${
                    expanded ? "rotate-180 text-indigo-600" : "rotate-0 text-slate-400"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.116l3.71-2.885a.75.75 0 11.92 1.172l-4.25 3.31a.75.75 0 01-.92 0l-4.25-3.31a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className={`grid overflow-hidden transition-all duration-300 ${
                  expanded ? "grid-rows-[1fr] py-0 pb-5" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0">
                  <p className="pr-2 text-slate-600 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA button below list */}
      <div className="mt-8 text-center">
        <Link
          href="#more-info"
          className="inline-block rounded-md bg-indigo-600 px-5 py-3 text-white text-sm font-semibold shadow-md hover:bg-indigo-700"
        >
          More Info
        </Link>
      </div>
    </section>
  );
}
