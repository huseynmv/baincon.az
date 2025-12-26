"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Globe2, Droplet } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import laser from "../../assets/laser.jpg";
import engineer from "../../assets/engineer.jpg";
import { useLocale } from "@/locales/LocaleProvider";

export default function InnovationSection() {
    const { t } = useLocale();
    const [count, setCount] = useState(1);
    const [countStarted, setCountStarted] = useState(false);
    const counterRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = counterRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !countStarted) setCountStarted(true);
                });
            },
            { threshold: 0.3 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [countStarted]);

    useEffect(() => {
        if (!countStarted) return;
        const TARGET = 70;
        const DURATION = 2000;

        let raf = 0
        const start = performance.now();

        const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(1, elapsed / DURATION);
            const eased = 1 - (1 - progress) ** 2;
            const value = Math.max(1, Math.round(1 + eased * (TARGET - 1)));
            setCount(value);
            if (progress < 1) raf = requestAnimationFrame(step);
            else setCount(TARGET);
        };

        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [countStarted]);

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col md:flex-row gap-6 justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                        ref={counterRef}
                    >
                        <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }} className="overflow-hidden rounded-lg shadow-lg">
                            <Image src={laser} alt="Laser Machine" width={350} height={500} className="object-cover w-[350px] h-[500px]" />
                        </motion.div>

                        <div className="absolute -bottom-10 left-0 bg-white rounded-lg shadow-md px-5 py-3 flex items-center gap-3">
                            <Factory className="text-orange-500 w-8 h-8" />
                            <div>
                                <span className="text-2xl font-bold text-blue-900">{count}+</span>
                                <p className="text-sm text-gray-600 leading-tight">{t("innovation.chains")}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                        <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }} className="overflow-hidden rounded-lg shadow-lg">
                            <Image src={engineer} alt="Engineer" width={350} height={500} className="object-cover w-[350px] h-[500px]" />
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                    <p className="text-orange-500 font-semibold uppercase tracking-wide mb-2">{t("innovation.subtitle")}</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">{t("innovation.title")}</h2>

                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-orange-100 p-3 rounded-full">
                                <Droplet className="text-orange-600 w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900">{t("innovation.items.petroleum.title")}</h4>
                                <p className="text-gray-600 text-sm">{t("innovation.items.petroleum.text")}</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-orange-100 p-3 rounded-full">
                                <Globe2 className="text-orange-600 w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900">{t("innovation.items.worldwide.title")}</h4>
                                <p className="text-gray-600 text-sm">{t("innovation.items.worldwide.text")}</p>
                            </div>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
