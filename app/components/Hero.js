"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto max-w-6xl grid items-center gap-10 px-6 pt-28 pb-10 md:grid-cols-2 md:gap-16"
    >
      {/* LEFT — copy */}
      <div>
        <h1 className="text-slate-900 text-center md:text-left text-3xl md:text-4xl font-extrabold leading-tight">
          A Simple Bookmark Manager
        </h1>

        <p className="mt-5 text-slate-600 text-center md:text-left leading-relaxed max-w-prose">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="#download"
            className="rounded-md bg-indigo-600 px-5 py-3 text-white text-sm font-semibold shadow-md hover:bg-indigo-700"
          >
            Get it on Chrome
          </Link>
          <Link
            href="#download"
            className="rounded-md bg-slate-100 px-5 py-3 text-slate-700 text-sm font-semibold shadow-sm hover:bg-slate-200"
          >
            Get it on Firefox
          </Link>
        </div>
      </div>

      {/* RIGHT — illustration */}
      <div className="relative">
        {/* blob */}
        <div className="pointer-events-none absolute right-[-40%] top-[65%] md:h-[320px] md:w-[560px] -translate-y-1/2 rounded-l-full bg-indigo-500" />

        {/* card */}
        <div className="relative z-10 mx-auto w-full max-w-[520px]">
          <Image
            src="/illustration-hero.svg"
            alt="Bookmark app preview"
            width={1040}
            height={720}
            priority
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
