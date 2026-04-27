"use client";

import { useState } from "react";
import { navItems } from "@/lib/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-green-950/15 bg-white/70 text-charcoal-green"
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span className="text-xl font-black">{open ? "x" : "="}</span>
      </button>
      {open ? (
        <div className="absolute inset-x-4 top-18 rounded-3xl border border-green-950/10 bg-cream p-4 shadow-2xl shadow-green-950/15">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-2xl px-4 py-3 text-base font-bold text-charcoal-green hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
