"use client";

import Image from "next/image";
import Link from "next/link";

const BROWSERS = [
  {
    key: "chrome",
    name: "Add to Chrome",
    min: "Minimum version 62",
    logo: "/logo-chrome.svg", 
    delay: "0ms",
  },
  {
    key: "firefox",
    name: "Add to Firefox",
    min: "Minimum version 55",
    logo: "/logo-firefox.svg",
    delay: "60ms",
  },
  {
    key: "opera",
    name: "Add to Opera",
    min: "Minimum version 46",
    logo: "/logo-opera.svg",
    delay: "120ms",
  },
];

export default function Download() {
  return (
    <section id="download" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
      {/* Lead */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold">
          Download the extension
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
        {BROWSERS.map((b, i) => (
          <article
            key={b.key}
            className={`rounded-xl bg-white p-8 text-center shadow-[0_20px_35px_rgba(0,0,0,0.08)] ring-1 ring-slate-100
              ${i === 1 ? "md:translate-y-6" : ""} ${i === 2 ? "md:translate-y-12" : ""}`}
            style={{ transitionDelay: b.delay }}
          >
            {/* Logo  */}
            {b.logo ? (
              <div className="mx-auto h-16 w-16">
                <Image
                  src={b.logo}
                  alt={`${b.key} logo`}
                  width={64}
                  height={64}
                  className="h-16 w-16"
                />
              </div>
            ) : (
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-slate-100 text-slate-600 font-semibold">
                {b.key[0].toUpperCase()}
              </div>
            )}

            <h3 className="mt-6 text-slate-900 font-semibold">{b.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{b.min}</p>

            {/* dotted divider */}
            <div className="my-6 h-[6px] w-full bg-[radial-gradient(circle,theme(colors.slate.200)_2px,transparent_3px)] bg-[length:16px_6px]" />

            <Link
              href="#"
              className="inline-block rounded-md bg-indigo-600 px-5 py-3 text-white text-sm font-semibold shadow-md hover:bg-indigo-700"
            >
              Add & Install Extension
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
