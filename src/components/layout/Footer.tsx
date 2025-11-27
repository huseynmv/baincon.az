"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  MapPin,
  Mail,
  Clock,
} from "lucide-react";
import { useLocale } from "@/locales/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer id="contact" className="text-gray-700 text-sm w-full">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="bg-[#f3f4fa] px-10 py-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-md" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{t("footer.company")}</h2>
                <p className="text-xs text-gray-500">{t("footer.tagline")}</p>
              </div>
            </div>

            <p className="text-gray-500 leading-relaxed mb-6 max-w-xs">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <p className="font-medium mb-3 text-gray-800">{t("footer.connectWithUs")}</p>
            <div className="flex space-x-3 text-gray-400">
              <a href="#"><Facebook className="w-5 h-5 hover:text-blue-500" /></a>
              <a href="#"><Twitter className="w-5 h-5 hover:text-sky-400" /></a>
              <a href="#"><Linkedin className="w-5 h-5 hover:text-blue-600" /></a>
              <a href="#"><Instagram className="w-5 h-5 hover:text-pink-500" /></a>
            </div>
          </div>
        </div>

        <div className="bg-white px-10 py-12 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">{t("footer.industry")}</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">{t("footer.industry.oilGas")}</a></li>
              <li><a href="#">{t("footer.industry.chemical")}</a></li>
              <li><a href="#">{t("footer.industry.equipment")}</a></li>
              <li><a href="#">{t("footer.industry.building")}</a></li>
              <li><a href="#">{t("footer.industry.energy")}</a></li>
              <li><a href="#">{t("footer.industry.agriculture")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">{t("footer.about")}</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">{t("footer.about.companyInfo")}</a></li>
              <li><a href="#">{t("footer.about.factories")}</a></li>
              <li><a href="#">{t("footer.about.workforce")}</a></li>
              <li><a href="#">{t("footer.about.sitemap")}</a></li>
              <li><a href="#">{t("footer.about.opportunities")}</a></li>
              <li><a href="#">{t("footer.about.history")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">{t("footer.contact")}</h3>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 text-orange-500" />
                <span>+1 (934) 256 7850</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-orange-500" />
                <span>
                  950 Alpaca, Virginia <br /> 32809 - United States
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 text-orange-500" />
                <span>info@example.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1 text-orange-500" />
                <span>{t("footer.hours")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border-t text-center py-4 text-gray-400 text-xs">
        © 2021 <span className="font-semibold text-gray-600">Baincon</span>. {t("footer.rights")}&nbsp;|&nbsp;
        <a href="#">{t("footer.investors")}</a>&nbsp;|&nbsp;
        <a href="#">{t("footer.careers")}</a>&nbsp;|&nbsp;
        <a href="#">{t("footer.downloads")}</a>
      </div>
    </footer>
  );
}
