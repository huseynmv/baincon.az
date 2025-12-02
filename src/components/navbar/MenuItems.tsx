
"use client";

import { useState, KeyboardEvent, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home } from "lucide-react";
import { useLocale } from "@/locales/LocaleProvider";

type MenuItem = {
  key: string;
  href?: string;
  children?: { key: string; href: string }[];
};

//   { key: "menu.about", href: "#about" },
//   {
//     key: "menu.services",
//     children: [
//       { key: "menu.services.repair", href: "/services/repair" },
//       { key: "menu.services.oilEquipment", href: "/services/oil-equipment" },
//       { key: "menu.services.pipeInsulation", href: "/services/pipe-insulation" },
//       { key: "menu.services.constructionMaterials", href: "/services/construction-materials" },
//       { key: "menu.services.highPressurePumps", href: "/services/high-pressure-pumps" },
//       { key: "menu.services.oilPipes", href: "/services/oil-pipes" },
//       { key: "menu.services.pipeCleaning", href: "/services/pipe-cleaning" },
//     ],
//   },
//   { key: "menu.projects", href: "#projects" },
//   { key: "menu.contact", href: "#contact" },
// ];
export const MENU: MenuItem[] = [
  { key: "menu.about", href: "#about" },
  {
    key: "menu.services",
    children: [
      { key: "menu.services.repair", href: "/services/temir-tikinti" },
      { key: "menu.services.oilEquipment", href: "/services/neft-avadanliqlar" },
      { key: "menu.services.pipeInsulation", href: "/services/borularin-izolyasiyasi" },
      { key: "menu.services.constructionMaterials", href: "/services/tikinti-materiallari" },
      { key: "menu.services.highPressurePumps", href: "/services/yuksek-tezyiqli-nasoslar" },
      { key: "menu.services.oilPipes", href: "/services/neft-borulari" },
      { key: "menu.services.pipeCleaning", href: "/services/borularin-yuyulmasi" },
    ],
  },
  { key: "menu.projects", href: "#projects" },
  { key: "menu.contact", href: "#contact" },
];
export default function MenuItems() {
  const [open, setOpen] = useState(false);
  const { t, locale, setLocale } = useLocale();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const onKeyOpen = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      const el = (e.currentTarget.nextSibling as HTMLElement) ?? null;
      el?.classList.add("visible", "opacity-100", "translate-y-0");
    }
  };

  const isActive = (href?: string) =>
    !!href && (pathname === href || pathname.startsWith(href + "/"));

  const handleClick = (href?: string) => {
    if (!href) return;

    if (href.startsWith("#")) {
      if (pathname !== "/") {
        router.push("/" + href);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }

    setOpen(false);
  };

  return (
    <nav className="relative">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 md:h-16 items-stretch">
          {/* Logo & Hamburger */}
          <div className="flex">
            <button
              className="md:hidden inline-flex items-center justify-center w-14 bg-orange-500 text-white"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-6 rounded bg-white" />
                <span className="block h-0.5 w-6 rounded bg-white" />
                <span className="block h-0.5 w-6 rounded bg-white" />
              </div>
            </button>

            <button
              onClick={() => handleClick("/")}
              className="hidden md:inline-flex items-center px-4 bg-orange-500 text-white"
              aria-label="Home"
              title="Home"
            >
              <Home className="h-5 w-5" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="flex-1 bg-[#3e0097] text-white">
            <ul className="hidden md:flex h-full items-center justify-center gap-6 lg:gap-8 px-4 lg:px-6">
              {MENU.map((item) => (
                <li
                  key={item.key}
                  className="relative h-full inline-flex items-center"
                  onMouseEnter={() => item.children && setOpenSubmenu(item.key)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  {item.href ? (
                    <button
                      onClick={() => handleClick(item.href)}
                      className={`block px-4 py-2 text-[13px] sm:text-sm hover:bg-white/10 ${isActive(item.href) ? "bg-white/10" : ""}`}
                    >
                      {t(item.key)}
                    </button>
                  ) : (
                    <button
                      className="text-[13px] sm:text-sm md:text-[15px] font-semibold tracking-wide hover:opacity-90"
                      aria-haspopup="menu"
                      aria-expanded={openSubmenu === item.key}
                    >
                      {t(item.key)}
                    </button>
                  )}

                  {item.children?.length && openSubmenu === item.key && (
                    <div className="absolute left-0 top-full mt-0 w-56 rounded-md border border-white/10 bg-[#2a006a] shadow-lg z-50">
                      <ul className="py-2 m-0">
                        {item.children.map((c) => (
                          <li key={c.href} className="list-none">
                            <button
                              onClick={() => {
                                handleClick(c.href);
                                setOpenSubmenu(null); // close submenu after click
                              }}
                              className={`block w-full text-left px-4 py-2 text-[13px] sm:text-sm hover:bg-white/10 ${isActive(c.href) ? "bg-white/10" : ""}`}
                            >
                              {t(c.key)}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Estimate Button */}
          <button
            onClick={() => handleClick('/#contact')}
            className="hidden md:inline-flex items-center px-5 bg-orange-500 text-white font-semibold"
          >
            {t("menu.getEstimate")}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-[#3e0097] text-white border-t border-white/10">
            <ul className="divide-y divide-white/10 py-2">
              {MENU.map((item) => (
                <li key={item.key} className="py-1">
                  {item.children?.length ? (
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3">
                        <span className="text-sm sm:text-base font-semibold">{t(item.key)}</span>
                        <span className="ml-2 text-white/80 group-open:rotate-180 transition-transform">▾</span>
                      </summary>
                      <ul className="mt-1 pl-0"> {/* remove extra padding */}
                        {item.children.map((c) => (
                          <li key={c.href} className="list-none">
                            <button
                              onClick={() => handleClick(c.href)}
                              className={`block w-full text-left px-4 py-2 text-sm sm:text-base text-white/90 hover:text-white ${isActive(c.href) ? "underline underline-offset-4" : ""
                                }`}
                            >
                              {t(c.key)}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <button
                      onClick={() => handleClick(item.href)}
                      className={`block px-4 py-3 text-sm sm:text-base font-semibold ${isActive(item.href) ? "underline underline-offset-4" : ""
                        }`}
                    >
                      {t(item.key)}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            {/* Language Switch */}
            <div className="flex justify-center gap-4 py-4 border-t border-white/10">
              {["en", "az", "ru"].map((code) => (
                <button
                  key={code}
                  onClick={() => {
                    setLocale(code as "en" | "az" | "ru");
                    setOpen(false);
                  }}
                  className={`px-3 py-1 rounded border ${locale === code
                    ? "border-white bg-white/20 text-white"
                    : "border-white/40 text-white/70 hover:bg-white/10"
                    } text-sm font-semibold transition`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
