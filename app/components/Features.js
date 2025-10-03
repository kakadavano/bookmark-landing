"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TABS = [
  {
    key: "tab1",
    label: "Simple Bookmarking",
    heading: "Bookmark in one click",
    body:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    img: "/illustration-features-tab-1.svg",
  },
  {
    key: "tab2",
    label: "Speedy Searching",
    heading: "Intelligent search",
    body:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    img: "/illustration-features-tab-2.svg",
  },
  {
    key: "tab3",
    label: "Easy Sharing",
    heading: "Share your bookmarks",
    body:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    img: "/illustration-features-tab-3.svg",
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const tabRef = useRef(null);

  const tab = useMemo(() => TABS[active], [active]);

  // keyboard support: left/right to switch tabs
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % TABS.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + TABS.length) % TABS.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-5 md:py-28">
      {/* Lead */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-slate-900 text-center text-3xl md:text-4xl font-extrabold">
          Features
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-10">
        <div className="relative mx-auto max-w-3xl">
          <ul
            ref={tabRef}
            role="tablist"
            className="flex items-center justify-center gap-10 border-b border-slate-200"
          >
            {TABS.map((t, i) => (
              <li key={t.key} role="presentation">
                <button
                  role="tab"
                  aria-selected={active === i}
                  aria-controls={`panel-${t.key}`}
                  id={`tab-${t.key}`}
                  onClick={() => setActive(i)}
                  className={`pb-4 text-slate-600 hover:text-slate-900 ${
                    active === i ? "text-slate-900 font-semibold" : ""
                  }`}
                >
                  {t.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Active underline */}
          <div className="relative h-[2px] bg-slate-200">
            <span
              className="absolute -top-[2px] block h-[3px] w-28 bg-rose-400 transition-all duration-300"
              style={{
                left:
                  active === 0 ? "calc(50% - 210px)" : active === 1 ? "calc(50% - 32px)" : "calc(50% + 123px)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Panel */}
      <div
        id={`panel-${tab.key}`}
        role="tabpanel"
        aria-labelledby={`tab-${tab.key}`}
        className="mt-16 grid items-center gap-12 md:grid-cols-2 md:gap-20"
      >
        {/* Illustration with purple blob */}
        <div className="relative order-2 md:order-1">
          <div className="pointer-events-none absolute -left-20 top-10 hidden h-[340px] w-[520px] rounded-r-full bg-indigo-500 md:block" />
          <div className="relative z-10 mx-auto w-full max-w-[520px]">
            <Image
              src={tab.img}
              alt=""
              width={1040}
              height={780}
              className="w-full h-auto drop-shadow-xl"
              priority={active === 0}
            />
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 md:order-2">
          <h3 className="text-slate-900 text-2xl md:text-3xl font-extrabold">
            {tab.heading}
          </h3>
          <p className="mt-4 text-slate-600 leading-relaxed">
            {tab.body}
          </p>
          <Link
            href="#more-info"
            className="mt-6 inline-block rounded-md bg-indigo-600 px-5 py-3 text-white text-sm font-semibold shadow-md hover:bg-indigo-700"
          >
            More Info
          </Link>
        </div>
      </div>
    </section>
  );
}
