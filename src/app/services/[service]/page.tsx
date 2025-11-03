// "use client";
// import { useParams } from "next/navigation";
// import {
//   Factory,
//   Wrench,
//   Hammer,
//   Cpu,
//   ShieldCheck,
//   Gauge,
//   Settings,
//   AlertTriangle,
//   ClipboardCheck,
//   HardDrive,
//   Headphones,
//   Zap,
//   BookOpen,
//   BarChart3,
//   Leaf,
//   Database,
// } from "lucide-react";

// const SERVICE_CONTENT = {
//   fabrication: {
//     title: "Fabrication Solutions",
//     subtitle: 'Innovating with “Smart Industry” standards',
//     description:
//       "Our fabrication services use the latest automated technologies to ensure precision, safety, and efficiency across all industrial projects.",
//     cards: [
//       {
//         icon: <Factory className="w-14 h-14 text-orange-500" />,
//         title: "Metal Works",
//         text: "High-quality metal fabrication using modern techniques and durable materials.",
//       },
//       {
//         icon: <Wrench className="w-14 h-14 text-orange-500" />,
//         title: "Welding Services",
//         text: "Expert welding for large and small structures with certified professionals.",
//       },
//       {
//         icon: <Hammer className="w-14 h-14 text-orange-500" />,
//         title: "Custom Design",
//         text: "Tailored fabrication designs to meet your specific industrial needs.",
//       },
//       {
//         icon: <Cpu className="w-14 h-14 text-orange-500" />,
//         title: "Automation Integration",
//         text: "Smart automation systems to improve production accuracy and reduce costs.",
//       },
//       {
//         icon: <ShieldCheck className="w-14 h-14 text-orange-500" />,
//         title: "Quality Control",
//         text: "Rigorous quality testing ensures every product meets international standards.",
//       },
//       {
//         icon: <Gauge className="w-14 h-14 text-orange-500" />,
//         title: "Assembly & Installation",
//         text: "Complete assembly and on-site installation for industrial and commercial projects.",
//       },
//     ],
//   },

//   maintenance: {
//     title: "Maintenance & Support",
//     subtitle: "Keeping your systems reliable & efficient",
//     description:
//       "We offer preventive and corrective maintenance services that maximize equipment life and reduce downtime.",
//     cards: [
//       {
//         icon: <Settings className="w-14 h-14 text-orange-500" />,
//         title: "Equipment Servicing",
//         text: "Comprehensive support to ensure your machinery runs at peak performance.",
//       },
//       {
//         icon: <ClipboardCheck className="w-14 h-14 text-orange-500" />,
//         title: "Regular Inspection",
//         text: "Proactive inspection and diagnostics to avoid unexpected failures.",
//       },
//       {
//         icon: <HardDrive className="w-14 h-14 text-orange-500" />,
//         title: "System Upgrades",
//         text: "Modernizing your systems with the latest technology and compliance standards.",
//       },
//       {
//         icon: <AlertTriangle className="w-14 h-14 text-orange-500" />,
//         title: "Emergency Repair",
//         text: "24/7 on-call maintenance response for critical breakdowns.",
//       },
//       {
//         icon: <Headphones className="w-14 h-14 text-orange-500" />,
//         title: "Support & Consultation",
//         text: "Expert advice and on-demand maintenance support for your team.",
//       },
//       {
//         icon: <BookOpen className="w-14 h-14 text-orange-500" />,
//         title: "Training Programs",
//         text: "Upskilling your team to perform daily maintenance and troubleshooting tasks.",
//       },
//     ],
//   },

//   consulting: {
//     title: "Consulting Services",
//     subtitle: "Your partner in strategic industrial growth",
//     description:
//       "We provide expert guidance on smart technology integration, cost optimization, and industrial digitalization.",
//     cards: [
//       {
//         icon: <BarChart3 className="w-14 h-14 text-orange-500" />,
//         title: "Strategic Planning",
//         text: "Helping you align technology with long-term business goals.",
//       },
//       {
//         icon: <Cpu className="w-14 h-14 text-orange-500" />,
//         title: "Innovation Advisory",
//         text: "Guiding you through adopting cutting-edge solutions for industry transformation.",
//       },
//       {
//         icon: <BookOpen className="w-14 h-14 text-orange-500" />,
//         title: "Technical Training",
//         text: "Upskilling your workforce with hands-on training and expert mentorship.",
//       },
//       {
//         icon: <ShieldCheck className="w-14 h-14 text-orange-500" />,
//         title: "Industrial Audits",
//         text: "Comprehensive performance and safety audits for optimized production systems.",
//       },
//       {
//         icon: <Leaf className="w-14 h-14 text-orange-500" />,
//         title: "Sustainability Consulting",
//         text: "Helping your company adopt eco-friendly and energy-efficient practices.",
//       },
//       {
//         icon: <Database className="w-14 h-14 text-orange-500" />,
//         title: "Digital Transformation",
//         text: "Enabling smart factory systems through IoT, data analytics, and AI.",
//       },
//     ],
//   },
// };

// export default function ServiceDetailPage() {
//   const { service } = useParams();
//   const serviceData =
//     SERVICE_CONTENT[service?.toString().toLowerCase() as keyof typeof SERVICE_CONTENT];

//   if (!serviceData) return <p className="text-center mt-10">Service not found.</p>;

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12 text-center">
//       <h1 className="text-4xl font-bold mb-2">{serviceData.title}</h1>
//       <h2 className="text-xl text-orange-500 font-semibold mb-6">
//         {serviceData.subtitle}
//       </h2>
//       <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
//         {serviceData.description}
//       </p>

//       <div className="grid md:grid-cols-3 gap-8">
//         {serviceData.cards.map((card, i) => (
//           <div
//             key={i}
//             className="border rounded-2xl shadow-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
//           >
//             <div className="flex justify-center mb-4">{card.icon}</div>
//             <h3 className="text-lg font-bold mb-3">{card.title}</h3>
//             <p className="text-gray-600 text-sm mb-4">{card.text}</p>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


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

// Map icons for cards
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

  // Define card keys per service
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
