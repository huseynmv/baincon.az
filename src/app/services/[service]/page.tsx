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
  // Existing
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

  // New icons for repair
  maintenance: <Settings className="w-14 h-14 text-orange-500" />,
  tools: <Hammer className="w-14 h-14 text-orange-500" />,
  protection: <ShieldCheck className="w-14 h-14 text-orange-500" />,
  mechanic: <Wrench className="w-14 h-14 text-orange-500" />,
  upgrade: <HardDrive className="w-14 h-14 text-orange-500" />,
  check: <ClipboardCheck className="w-14 h-14 text-orange-500" />,

  // Construction & industrial
  materials: <Factory className="w-14 h-14 text-orange-500" />,
  brick: <Hammer className="w-14 h-14 text-orange-500" />,
  cement: <Factory className="w-14 h-14 text-orange-500" />,
  truck: <Settings className="w-14 h-14 text-orange-500" />,
  steel: <Factory className="w-14 h-14 text-orange-500" />,
  warehouse: <Database className="w-14 h-14 text-orange-500" />,
  supply: <Gauge className="w-14 h-14 text-orange-500" />,

  // Oil equipment
  oil: <Gauge className="w-14 h-14 text-orange-500" />,
  pump: <Gauge className="w-14 h-14 text-orange-500" />,
  valve: <Settings className="w-14 h-14 text-orange-500" />,
  gear: <Settings className="w-14 h-14 text-orange-500" />,
  machine: <Factory className="w-14 h-14 text-orange-500" />,
  shield: <ShieldCheck className="w-14 h-14 text-orange-500" />,

  // Pipe insulation
  pipe: <Database className="w-14 h-14 text-orange-500" />,
  temperature: <Gauge className="w-14 h-14 text-orange-500" />,
  coating: <Settings className="w-14 h-14 text-orange-500" />,

  // High pressure pumps
  pressure: <Gauge className="w-14 h-14 text-orange-500" />,
  flow: <Gauge className="w-14 h-14 text-orange-500" />,
  power: <Zap className="w-14 h-14 text-orange-500" />,

  // Pipe cleaning
  clean: <Zap className="w-14 h-14 text-orange-500" />,
  water: <Gauge className="w-14 h-14 text-orange-500" />,
  camera: <HardDrive className="w-14 h-14 text-orange-500" />,

  // Oil pipes
  oilPipes: <Database className="w-14 h-14 text-orange-500" />,
};

export default function ServiceDetailPage() {
  const { service } = useParams();
  const { locale, t } = useLocale();



  const serviceCardKeys: Record<string, { icons: string[]; title: string; text: string }[]> = {
    repair: [
      {
        icons: ["repair", "inspection"],
        title: "services.repair.cards.group1.title",
        text: "services.repair.cards.group1.text",
      },
      {
        icons: ["maintenance", "tools"],
        title: "services.repair.cards.group2.title",
        text: "services.repair.cards.group2.text",
      },
      {
        icons: ["welding", "quality"],
        title: "services.repair.cards.group3.title",
        text: "services.repair.cards.group3.text",
      },
      {
        icons: ["support", "protection"],
        title: "services.repair.cards.group4.title",
        text: "services.repair.cards.group4.text",
      },
      {
        icons: ["mechanic", "upgrade"],
        title: "services.repair.cards.group5.title",
        text: "services.repair.cards.group5.text",
      },
      {
        icons: ["assembly", "check"],
        title: "services.repair.cards.group6.title",
        text: "services.repair.cards.group6.text",
      },
    ],

    oilEquipment: [
      {
        icons: ["oil", "tools"],
        title: "services.oilEquipment.cards.group1.title",
        text: "services.oilEquipment.cards.group1.text",
      },
      {
        icons: ["pump", "inspection"],
        title: "services.oilEquipment.cards.group2.title",
        text: "services.oilEquipment.cards.group2.text",
      },
      {
        icons: ["valve", "quality"],
        title: "services.oilEquipment.cards.group3.title",
        text: "services.oilEquipment.cards.group3.text",
      },
      {
        icons: ["gear", "maintenance"],
        title: "services.oilEquipment.cards.group4.title",
        text: "services.oilEquipment.cards.group4.text",
      },
      {
        icons: ["machine", "upgrade"],
        title: "services.oilEquipment.cards.group5.title",
        text: "services.oilEquipment.cards.group5.text",
      },
      {
        icons: ["shield", "support"],
        title: "services.oilEquipment.cards.group6.title",
        text: "services.oilEquipment.cards.group6.text",
      },
    ],

    pipeInsulation: [
      {
        icons: ["pipe", "temperature"],
        title: "services.pipeInsulation.cards.group1.title",
        text: "services.pipeInsulation.cards.group1.text",
      },
      {
        icons: ["shield", "protection"],
        title: "services.pipeInsulation.cards.group2.title",
        text: "services.pipeInsulation.cards.group2.text",
      },
      {
        icons: ["tools", "inspection"],
        title: "services.pipeInsulation.cards.group3.title",
        text: "services.pipeInsulation.cards.group3.text",
      },
      {
        icons: ["coating", "quality"],
        title: "services.pipeInsulation.cards.group4.title",
        text: "services.pipeInsulation.cards.group4.text",
      },
      {
        icons: ["maintenance", "upgrade"],
        title: "services.pipeInsulation.cards.group5.title",
        text: "services.pipeInsulation.cards.group5.text",
      },
      {
        icons: ["check", "support"],
        title: "services.pipeInsulation.cards.group6.title",
        text: "services.pipeInsulation.cards.group6.text",
      },
    ],

    constructionMaterials: [
      {
        icons: ["materials", "brick"],
        title: "services.constructionMaterials.cards.group1.title",
        text: "services.constructionMaterials.cards.group1.text",
      },
      {
        icons: ["cement", "truck"],
        title: "services.constructionMaterials.cards.group2.title",
        text: "services.constructionMaterials.cards.group2.text",
      },
      {
        icons: ["steel", "quality"],
        title: "services.constructionMaterials.cards.group3.title",
        text: "services.constructionMaterials.cards.group3.text",
      },
      {
        icons: ["tools", "warehouse"],
        title: "services.constructionMaterials.cards.group4.title",
        text: "services.constructionMaterials.cards.group4.text",
      },
      {
        icons: ["protection", "inspection"],
        title: "services.constructionMaterials.cards.group5.title",
        text: "services.constructionMaterials.cards.group5.text",
      },
      {
        icons: ["support", "supply"],
        title: "services.constructionMaterials.cards.group6.title",
        text: "services.constructionMaterials.cards.group6.text",
      },
    ],

    highPressurePumps: [
      {
        icons: ["pump", "pressure"],
        title: "services.highPressurePumps.cards.group1.title",
        text: "services.highPressurePumps.cards.group1.text",
      },
      {
        icons: ["valve", "flow"],
        title: "services.highPressurePumps.cards.group2.title",
        text: "services.highPressurePumps.cards.group2.text",
      },
      {
        icons: ["maintenance", "repair"],
        title: "services.highPressurePumps.cards.group3.title",
        text: "services.highPressurePumps.cards.group3.text",
      },
      {
        icons: ["inspection", "quality"],
        title: "services.highPressurePumps.cards.group4.title",
        text: "services.highPressurePumps.cards.group4.text",
      },
      {
        icons: ["support", "upgrade"],
        title: "services.highPressurePumps.cards.group5.title",
        text: "services.highPressurePumps.cards.group5.text",
      },
      {
        icons: ["tools", "power"],
        title: "services.highPressurePumps.cards.group6.title",
        text: "services.highPressurePumps.cards.group6.text",
      },
    ],

    pipeCleaning: [
      {
        icons: ["pipe", "clean"],
        title: "services.pipeCleaning.cards.group1.title",
        text: "services.pipeCleaning.cards.group1.text",
      },
      {
        icons: ["pressure", "water"],
        title: "services.pipeCleaning.cards.group2.title",
        text: "services.pipeCleaning.cards.group2.text",
      },
      {
        icons: ["inspection", "camera"],
        title: "services.pipeCleaning.cards.group3.title",
        text: "services.pipeCleaning.cards.group3.text",
      },
      {
        icons: ["tools", "repair"],
        title: "services.pipeCleaning.cards.group4.title",
        text: "services.pipeCleaning.cards.group4.text",
      },
      {
        icons: ["maintenance", "support"],
        title: "services.pipeCleaning.cards.group5.title",
        text: "services.pipeCleaning.cards.group5.text",
      },
      {
        icons: ["quality", "protection"],
        title: "services.pipeCleaning.cards.group6.title",
        text: "services.pipeCleaning.cards.group6.text",
      },
    ],

    oilPipes: [
      {
        icons: ["pipe", "oil"],
        title: "services.oilPipes.cards.group1.title",
        text: "services.oilPipes.cards.group1.text",
      },
      {
        icons: ["valve", "pressure"],
        title: "services.oilPipes.cards.group2.title",
        text: "services.oilPipes.cards.group2.text",
      },
      {
        icons: ["welding", "repair"],
        title: "services.oilPipes.cards.group3.title",
        text: "services.oilPipes.cards.group3.text",
      },
      {
        icons: ["inspection", "quality"],
        title: "services.oilPipes.cards.group4.title",
        text: "services.oilPipes.cards.group4.text",
      },
      {
        icons: ["maintenance", "support"],
        title: "services.oilPipes.cards.group5.title",
        text: "services.oilPipes.cards.group5.text",
      },
      {
        icons: ["tools", "upgrade"],
        title: "services.oilPipes.cards.group6.title",
        text: "services.oilPipes.cards.group6.text",
      },
    ],
  };


  const urlToKey: Record<string, string> = {
    fabrication: "fabrication",
    maintenance: "maintenance",
    consulting: "consulting",
    repair: "repair",
    "oil-equipment": "oilEquipment",
    "pipe-insulation": "pipeInsulation",
    "construction-materials": "constructionMaterials",
    "high-pressure-pumps": "highPressurePumps",
    "oil-pipes": "oilPipes",
    "pipe-cleaning": "pipeCleaning",
  };

  const serviceParam = service?.toString();
  const key = serviceParam ? urlToKey[serviceParam] : undefined;

  if (!key) return <p className="text-center mt-10">{t("service.notFound")}</p>;

  const cards = serviceCardKeys[key];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-2">{t(`services.${key}.title`)}</h1>
      <h2 className="text-xl text-orange-500 font-semibold mb-6">
        {t(`services.${key}.subtitle`)}
      </h2>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
        {t(`services.${key}.description`)}
      </p>

      {/* <div className="grid md:grid-cols-3 gap-8">
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
      </div> */}
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="border rounded-2xl shadow-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-center gap-4 mb-4">
              {card.icons.map((iconKey, idx) => (
                <div key={idx}>{ICONS[iconKey]}</div>
              ))}
            </div>

            <h3 className="text-lg font-bold mb-3">{t(card.title)}</h3>
            <p className="text-gray-600 text-sm mb-4">{t(card.text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
