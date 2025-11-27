"use client";

import { useLocale } from "@/locales/LocaleProvider";
import { motion } from "framer-motion";
import Image from "next/image";


const PARTNERS = [
    { name: "Partner 1", src: "/images/partner1.svg", href: "#" },
    { name: "Partner 2", src: "/images/partner2.svg", href: "#" },
    { name: "Partner 3", src: "/images/partner3.jpg", href: "#" },
    { name: "Partner 4", src: "/images/partner4.png", href: "#" },
    { name: "Partner 5", src: "/images/partner5.svg", href: "#" },
    { name: "Partner 6", src: "/images/partner6.png", href: "#" },
    { name: "Partner 7", src: "/images/partner7.svg", href: "#" },
    { name: "Partner 8", src: "/images/partner8.png", href: "#" },
    { name: "Partner 9", src: "/images/partner9.png", href: "#" },
    { name: "Partner 10", src: "/images/partner10.png", href: "#" },
];

export default function PartnersSection() {
    const { t } = useLocale();
    return (

        <section className="py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    className="text-3xl font-bold mb-10 text-black"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {t("partners.title")} {/* translated title */}
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-stretch">
                    {PARTNERS.map((partner, idx) => (
                        <motion.a
                            key={idx}
                            href={partner.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition h-24"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="relative w-full h-full flex justify-center items-center">
                                <Image
                                    src={partner.src}
                                    alt={partner.name}
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
