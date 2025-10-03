"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = /^\S+@\S+\.\S+$/.test(email);

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    // handle submit here (e.g., fetch to API)
    alert("Thanks! You’re subscribed.");
    setEmail("");
    setTouched(false);
  };

  return (
    <section
      id="newsletter"
      className="relative bg-indigo-600"
      aria-label="Newsletter sign up"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 text-center text-white md:py-20">
        <p className="text-xs uppercase tracking-[0.35em] text-indigo-200">
          35,000+ already joined
        </p>
        <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">
          Stay up-to-date with what we’re doing
        </h2>

        <form
          onSubmit={onSubmit}
          noValidate
          className="mx-auto mt-6 flex max-w-xl flex-col items-stretch gap-3 sm:flex-row"
        >
          <div className="relative grow bg-white rounded-md">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched(true)}
              placeholder="Enter your email address"
              aria-label="Email address"
              aria-invalid={touched && !isValid}
              className={`w-full rounded-md px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                touched && !isValid
                  ? "ring-2 ring-rose-400"
                  : "ring-0 focus:ring-white/70"
              }`}
            />
            {touched && !isValid && (
              <span className="absolute left-0 top-full mt-1 block rounded-md bg-rose-500 px-2 py-1 text-left text-[12px] font-medium text-white">
                Whoops, make sure it’s an email
              </span>
            )}
          </div>

          <button
            type="submit"
            className="rounded-md bg-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-rose-600"
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
}
