"use client";

import Image from "next/image";
import { Phone, Clock3, MapPin } from "lucide-react";
import logo from "../../assets/new_logo_resized__1_-removebg-preview.png";
import { useLocale } from "@/locales/LocaleProvider";

function InfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  href?: string;
}) {
  const Content = (
    <div className="flex items-center gap-3">
      <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-orange-500/80">
        <span className="text-orange-500">{icon}</span>
      </div>
      <div className="leading-5">
        <div className="text-sm text-gray-500">{label}</div>
        <div className="font-semibold text-gray-900">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="group block">{Content}</a> : Content;
}

export default function HeaderTop() {
  const { locale, setLocale, t } = useLocale();

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center md:hidden mt-[16px] mb-[8px]">
          <Image src={logo} alt="Logo" width={256} height={86} priority className="h-[86px] object-cover" />
        </div>
        <div className="hidden md:grid md:grid-cols-5 md:items-center md:gap-4 py-4">
          <div className="flex items-center">
            <Image src={logo} alt="Logo" width={256} height={86} priority className="h-[86px] w-[256px] object-cover" />
          </div>

          <div className="md:border-l md:border-gray-200 md:pl-6">
            <InfoItem
              icon={<Phone className="h-4 w-4" aria-hidden="true" />}
              label={t("header.callLabel")}
              value={
                <span className="space-x-2">
                  {/* <a
                    href="https://wa.me/994552068989"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    (+994) 55 206 89 89
                  </a>
                  <br /> */}
                  <a
                    href="https://wa.me/994516717193"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    (+994) 50 671 71 93
                  </a>
                </span>
              }
            />
          </div>

          <div className="md:border-l md:border-gray-200 md:pl-6">
            <InfoItem
              icon={<Clock3 className="h-4 w-4" aria-hidden="true" />}
              label={t("header.hoursLabel")}
              value={<span>{t("header.hoursValue")}</span>}
            />
          </div>

          <div className="md:border-l md:border-gray-200 md:pl-6">
            <InfoItem
              icon={<MapPin className="h-4 w-4" aria-hidden="true" />}
              label={t("header.addressLabel")}
              value={<span>{t("header.addressValue")}</span>}
            />
          </div>
          <div className="md:flex md:items-center md:justify-end md:pl-6 space-x-2">
            {["en", "az", "ru"].map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l as any)}
                className={`px-3 py-1 rounded ${locale === l ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700"
                  }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
