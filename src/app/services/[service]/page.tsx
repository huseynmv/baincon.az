"use client";
import { useParams } from "next/navigation";
import { useLocale } from "@/locales/LocaleProvider";
import {
  Factory,
  Wrench,
  Hammer,
  Cpu,
  ShieldCheck,
  Gauge,
  Settings,
  AlertTriangle,
  ClipboardCheck,
  HardDrive,
  Headphones,
  Zap,
  BookOpen,
  BarChart3,
  Leaf,
  Database,
} from "lucide-react";
import { JSX } from "react";

const ICONS: Record<string, JSX.Element> = {
  metalWorks: <Factory className="w-14 h-14 text-orange-500" />,
  welding: <Wrench className="w-14 h-14 text-orange-500" />,
  design: <Hammer className="w-14 h-14 text-orange-500" />,
  automation: <Cpu className="w-14 h-14 text-orange-500" />,
  quality: <ShieldCheck className="w-14 h-14 text-orange-500" />,
  assembly: <Gauge className="w-14 h-14 text-orange-500" />,

  servicing: <Settings className="w-14 h-14 text-orange-500" />,
  inspection: <ClipboardCheck className="w-14 h-14 text-orange-500" />,
  upgrades: <HardDrive className="w-14 h-14 text-orange-500" />,
  emergency: <AlertTriangle className="w-14 h-14 text-orange-500" />,
  support: <Headphones className="w-14 h-14 text-orange-500" />,
  training: <BookOpen className="w-14 h-14 text-orange-500" />,

  planning: <BarChart3 className="w-14 h-14 text-orange-500" />,
  innovation: <Cpu className="w-14 h-14 text-orange-500" />,
  technicalTraining: <BookOpen className="w-14 h-14 text-orange-500" />,
  audits: <ShieldCheck className="w-14 h-14 text-orange-500" />,
  sustainability: <Leaf className="w-14 h-14 text-orange-500" />,
  digital: <Database className="w-14 h-14 text-orange-500" />,
};

export default function ServiceDetailPage() {
  const { service } = useParams();
  const { locale, t } = useLocale();

  const key = service?.toString().toLowerCase();
  if (!key) return <p className="text-center mt-10">{t("service.notFound")}</p>;

  const serviceCardKeys: Record<string, string[]> = {
    fabrication: ["metalWorks", "welding", "design", "automation", "quality", "assembly"],
    maintenance: ["servicing", "inspection", "upgrades", "emergency", "support", "training"],
    consulting: ["planning", "innovation", "technicalTraining", "audits", "sustainability", "digital"],
  };

  const cards = serviceCardKeys[key];
  if (!cards) return <p className="text-center mt-10">{t("service.notFound")}</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-2">{t(`services.${key}.title`)}</h1>
      <h2 className="text-xl text-orange-500 font-semibold mb-6">
        {t(`services.${key}.subtitle`)}
      </h2>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
        {t(`services.${key}.description`)}
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <div
            key={i}
            className="border rounded-2xl shadow-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{ICONS[c]}</div>
            <h3 className="text-lg font-bold mb-3">{t(`services.${key}.cards.${c}.title`)}</h3>
            <p className="text-gray-600 text-sm mb-4">{t(`services.${key}.cards.${c}.text`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
