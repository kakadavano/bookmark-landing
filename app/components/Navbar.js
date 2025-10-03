"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">

          <img
            src="/logo-bookmark.svg"
            alt="Bookmark logo"
            className="h-5 w-30 md:w-32"
          />
          
          {/* <span className="grid h-6 w-6 place-items-center rounded-full bg-indigo-600 text-white text-[10px] font-bold">B</span>
          <span className="text-slate-900 font-semibold tracking-wide">BOOKMARK</span> */}
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-slate-600">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="uppercase text-sm tracking-wide hover:text-slate-900">{l.label}</Link>
            </li>
          ))}
          <li>
            <Link href="#login" className="rounded-md bg-rose-500 px-5 py-2 text-white text-sm font-semibold hover:bg-rose-600">
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex flex-col gap-1.5 p-2 text-slate-900"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <span className="block h-[2px] w-6 bg-current" />
          <span className="block h-[2px] w-6 bg-current" />
          <span className="block h-[2px] w-6 bg-current" />
        </button>
      </nav>

      {/* Backdrop */}
      <button
        onClick={() => setOpen(false)}
        aria-hidden={!open}
        tabIndex={-1}
        className={`fixed inset-0 z-40 bg-slate-900/80 backdrop-blur-sm transition-opacity md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        className={`fixed inset-0 z-50 mx-6 mt-4 md:hidden transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="rounded-xl p-5 text-white">
          {/* Top row: brand + close */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">

              <img
                src="/logo-bookmark.svg"
                class="invert"
                alt="Bookmark logo"
                className="h-5 w-24 md:w-32"
              />

              {/* <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-indigo-600 text-[10px] font-bold">B</span>
              <span className="font-semibold tracking-wide">BOOKMARK</span> */}
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-2xl leading-none text-white/80"
            >
              &times;
            </button>
          </div>

          {/* Divider */}
          <div className="my-4 h-px w-full bg-white/15" />

          {/* Links list with dividers */}
          <ul className="text-center uppercase tracking-[0.2em]">
            {links.map((l, i) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-8 text-sm"
                >
                  {l.label}
                </Link>
                {i < links.length - 1 && <div className="mx-auto h-px w-full bg-white/15" />}
              </li>
            ))}
          </ul>

          {/* Outlined LOGIN button */}
          <div className="mt-4">
            <Link
              href="#login"
              onClick={() => setOpen(false)}
              className="block rounded-lg border border-white px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em]"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Social icons under panel */}
        <div className="mt-80 flex items-center justify-center gap-8 text-white/90">
          <Link href="#" aria-label="Facebook" className="hover:text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M13 10h3V7h-3a3 3 0 0 0-3 3v2H7v3h3v6h3v-6h3l1-3h-4v-2a1 1 0 0 1 1-1z"/></svg>
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 5.3l-5.6 6.7L21 21h-3.3l-5.2-6.1L8 21H3l6.8-7.9L3 3h3.3l5 5.9L16 3h5l-5 5.9L20 5.3z"/></svg>
          </Link>
        </div>
      </div>

    </header>
  );
}
