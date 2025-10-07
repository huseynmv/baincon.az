"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Search } from "lucide-react";

type MenuItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const MENU: MenuItem[] = [
  { label: "ABOUT US", href: "/about" },
  {
    label: "SERVICES",
    children: [
      { label: "Fabrication", href: "/services/fabrication" },
      { label: "Maintenance", href: "/services/maintenance" },
      { label: "Consulting", href: "/services/consulting" },
    ],
  },
  {
    label: "PAGES",
    children: [
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "NEWS", href: "/news" },
  { label: "CONTACT", href: "/contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 md:h-16 items-stretch">
          <div className="flex">
            <button
              className="md:hidden inline-flex items-center justify-center w-14 bg-orange-500 text-white"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-6 rounded bg-white" />
                <span className="block h-0.5 w-6 rounded bg-white" />
                <span className="block h-0.5 w-6 rounded bg-white" />
              </div>
            </button>

            <Link
              href="/"
              className="hidden md:inline-flex items-center px-4 bg-orange-500 text-white"
              aria-label="Home"
            >
              <Home className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex-1 bg-[#3e0097] text-white">
            <ul className="hidden md:flex h-full items-center gap-8 px-6">
              {MENU.map((item) => (
                <li key={item.label} className="relative group h-full inline-flex items-center">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-sm font-semibold tracking-wide hover:opacity-90"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className="text-sm font-semibold tracking-wide hover:opacity-90"
                      aria-haspopup="menu"
                    >
                      {item.label}
                    </button>
                  )}
                  {item.children?.length ? (
                    <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 absolute left-0 top-full mt-0 w-56 transition-all duration-150 z-50">
                      <div className="rounded-md border border-white/10 bg-[#2a006a] shadow-lg">
                        <ul className="py-2">
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                className="block px-4 py-2 text-sm hover:bg-white/10"
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
          <button
            className="inline-flex items-center justify-center w-12 border-l border-white/20 bg-[#33007f] text-white"
            aria-label="Search"
            title="Search"
          >
            <Search className="h-5 w-5" />
          </button>

          <Link
            href="/estimate"
            className="hidden md:inline-flex items-center px-5 bg-orange-500 text-white font-semibold"
          >
            GET AN ESTIMATE
          </Link>
        </div>
        {open && (
          <div className="md:hidden bg-[#3e0097] text-white border-t border-white/10">
            <ul className="divide-y divide-white/10 py-2">
              {MENU.map((item) => (
                <li key={item.label} className="py-1">
                  {item.children?.length ? (
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3">
                        <span className="text-sm font-semibold">{item.label}</span>
                        <span className="ml-2 text-white/80 group-open:rotate-180 transition-transform">▾</span>
                      </summary>
                      <ul className="mt-1 pl-4">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="block px-4 py-2 text-sm text-white/90 hover:text-white"
                              onClick={() => setOpen(false)}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={item.href ?? "#"}
                      className="block px-4 py-3 text-sm font-semibold"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
