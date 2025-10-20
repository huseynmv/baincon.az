"use client"
import { useParams } from "next/navigation";

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
  { label: "NEWS", href: "/news" },
  { label: "CONTACT", href: "/contact" },
];

export default function ServicePage() {
  const params = useParams();
  const serviceParam = params.service;

  const serviceSlug = Array.isArray(serviceParam)
    ? serviceParam[0].toLowerCase()
    : serviceParam?.toLowerCase();

  if (!serviceSlug) return <p>Service not found</p>;

  let serviceData: { label: string; href: string } | null = null;

  for (const item of MENU) {
    if (item.children) {
      const child = item.children.find(
        (c) => c.href.split("/").pop()?.toLowerCase() === serviceSlug
      );
      if (child) {
        serviceData = child;
        break;
      }
    }
  }

  if (!serviceData) return <p>Service not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{serviceData.label}</h1>
      <p>Content for {serviceData.label} goes here...</p>
    </div>
  );
}
