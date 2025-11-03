"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useLocale } from "@/locales/LocaleProvider";

const FactorySlider = () => {
    const { t } = useLocale();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const projects = [
        {
            id: 1,
            category: t("projects.oil.category"),
            title: t("projects.oil.title"),
            description: t("projects.oil.description"),
            image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
            date: "30-11-2020",
        },
        {
            id: 2,
            category: t("projects.engineering.category"),
            title: t("projects.engineering.title"),
            description: t("projects.engineering.description"),
            image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
            date: "30-11-2020",
        },
        {
            id: 3,
            category: t("projects.manufacturing.category"),
            title: t("projects.manufacturing.title"),
            description: t("projects.manufacturing.description"),
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
            date: "30-11-2020",
        },
        {
            id: 4,
            category: t("projects.power.category"),
            title: t("projects.power.title"),
            description: t("projects.power.description"),
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
            date: "30-11-2020",
        },
        {
            id: 5,
            category: t("projects.automotive.category"),
            title: t("projects.automotive.title"),
            description: t("projects.automotive.description"),
            image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
            date: "30-11-2020",
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) setItemsPerPage(1);
            else if (width < 1024) setItemsPerPage(2);
            else setItemsPerPage(3);
            setCurrentSlide(0);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxSlide = Math.max(0, projects.length - itemsPerPage);
    const canGoPrev = currentSlide > 0;
    const canGoNext = currentSlide < maxSlide;

    const nextSlide = () => canGoNext && setCurrentSlide((prev) => prev + 1);
    const prevSlide = () => canGoPrev && setCurrentSlide((prev) => prev - 1);
    const goToSlide = (index: number) => setCurrentSlide(index);

    const getGapSize = () => (itemsPerPage === 1 ? 16 : itemsPerPage === 2 ? 24 : 32);

    return (
        <div className="w-full bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-12 h-px bg-orange-500"></div>
                        <span className="text-orange-500 text-sm font-medium tracking-wider">
                            {t("projects.sectionEyebrow")}
                        </span>
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">{t("projects.sectionTitle")}</h1>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("projects.sectionDescription")}</p>
                </div>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(calc(-${currentSlide * (100 / itemsPerPage)}% - ${currentSlide * getGapSize()
                                    }px))`,
                                gap: `${getGapSize()}px`,
                            }}
                        >
                            {projects.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex-shrink-0"
                                    style={{
                                        width: `calc(${100 / itemsPerPage}% - ${(getGapSize() * (itemsPerPage - 1)) / itemsPerPage}px)`,
                                    }}
                                >
                                    <div className="group relative bg-white shadow-lg overflow-hidden h-full">
                                        <div className="relative h-80 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        </div>

                                        <div className="relative -mt-20 mx-6 bg-white p-8 shadow-xl">
                                            <span className="text-orange-500 text-sm font-medium tracking-wider uppercase">
                                                {item.category}
                                            </span>
                                            <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">{item.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.description}</p>

                                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                                <button className="w-12 h-12 bg-blue-900 text-white flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                                                    <Plus className="w-5 h-5" />
                                                </button>
                                                <div className="text-right">
                                                    <div className="text-xs text-gray-500 mb-1">{t("projects.launchDate")}</div>
                                                    <div className="text-sm font-semibold text-blue-900">{item.date}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {projects.length > itemsPerPage && (
                        <>
                            <button
                                onClick={prevSlide}
                                disabled={!canGoPrev}
                                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 shadow-lg rounded-full flex items-center justify-center transition-colors duration-300 z-10 ${canGoPrev
                                    ? "bg-white hover:bg-orange-500 hover:text-white cursor-pointer"
                                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    }`}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                disabled={!canGoNext}
                                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 shadow-lg rounded-full flex items-center justify-center transition-colors duration-300 z-10 ${canGoNext
                                    ? "bg-white hover:bg-orange-500 hover:text-white cursor-pointer"
                                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    }`}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}
                </div>

                {projects.length > itemsPerPage && (
                    <div className="flex items-center justify-center gap-3 mt-12">
                        {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 transition-all duration-300 ${currentSlide === index ? "w-8 bg-gray-900" : "w-2 bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FactorySlider;
