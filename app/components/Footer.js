import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-8 md:flex-row md:justify-between">
        {/* Left: brand + nav */}
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2">

            {/* logo */}
            <img
                src="/logo-bookmark.svg"
                class="invert"
                alt="Bookmark logo"
                className="h-5 w-24 md:w-32"
            />  
            {/* <span className="grid h-6 w-6 place-items-center rounded-full bg-indigo-500 text-white text-[10px] font-bold">
              B
            </span>
            <span className="font-semibold tracking-wide">BOOKMARK</span> */}
          </Link>

          <ul className="flex items-center gap-6 text-sm text-slate-300">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="uppercase tracking-wide hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: social icons (simple SVGs) */}
        <div className="flex items-center gap-6">
          <Link href="#" aria-label="Visit us on Facebook" className="hover:text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13 10h3V7h-3a3 3 0 0 0-3 3v2H7v3h3v6h3v-6h3l1-3h-4v-2a1 1 0 0 1 1-1z"/>
            </svg>
          </Link>
          <Link href="#" aria-label="Visit us on Twitter/X" className="hover:text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 5.3l-5.6 6.7L21 21h-3.3l-5.2-6.1L8 21H3l6.8-7.9L3 3h3.3l5 5.9L16 3h5l-5 5.9L20 5.3z"/>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
