"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import hero1 from "../../assets/hero-1.jpeg";
import hero2 from "../../assets/hero-2.jpg";
import { useLocale } from "@/locales/LocaleProvider";

type Slide = {
  id: string;
  videoUrl: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  helpLabel?: string;
};

const AUTOPLAY_MS = 6500;

export default function HeroSlider() {
  const { t } = useLocale();
  const [index, setIndex] = useState(0);

  const SLIDES: Slide[] = [
    {
      id: "s1",
      videoUrl: "/images/herovideo1.mp4",
      eyebrow: t("hero.eyebrow"),
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      ctaLabel: t("hero.ctaLabel"),
      ctaHref: "/about",
      helpLabel: t("hero.helpLabel"),
    },
    {
      id: "s2",
      videoUrl: "/images/herovideo2.mp4",
      eyebrow: t("hero.eyebrow"),
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      ctaLabel: t("hero.ctaLabel"),
      ctaHref: "/about",
      helpLabel: t("hero.helpLabel"),
    },
    {
      id: "s3",
      videoUrl: "/images/herovideo3.mp4",
      eyebrow: t("hero.eyebrow"),
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      ctaLabel: t("hero.ctaLabel"),
      ctaHref: "/about",
      helpLabel: t("hero.helpLabel"),
    },
    {
      id: "s4",
      videoUrl: "/images/herovideo4.mp4",
      eyebrow: t("hero.eyebrow"),
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      ctaLabel: t("hero.ctaLabel"),
      ctaHref: "/about",
      helpLabel: t("hero.helpLabel"),
    },
  ];

  const current = useMemo(() => SLIDES[index], [index, t]);

  useEffect(() => {
    const tId = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => clearInterval(tId);
  }, [SLIDES.length]);

  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIndex((i) => (i + 1) % SLIDES.length);

  return (
    <section className="relative isolate">
      <div className="relative h-[72vh] min-h-[540px] w-full md:h-[78vh] lg:h-[86vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.2, scale: 1.01 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <video
              src={current.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1440px] flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center text-white">
            {current.eyebrow && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={`eyebrow-${current.id}`}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-3 text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.15em] md:tracking-[0.2em] text-white/80"
                >
                  {current.eyebrow}
                </motion.div>
              </AnimatePresence>
            )}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${current.id}`}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 18, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold leading-[1.25] sm:leading-[1.2] md:leading-[1.15] max-w-[18ch] md:max-w-[22ch]"
              >
                {current.subtitle && (
                  <>
                    {current.subtitle}
                    <br className="hidden sm:block" />
                  </>
                )}
                {current.title}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={`ctas-${current.id}`}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 18, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-5"
              >
                {/* {current.ctaHref && current.ctaLabel && (
                  <a
                    href={current.ctaHref}
                    className="inline-flex items-center justify-center rounded bg-orange-500 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600"
                  >
                    {current.ctaLabel}
                  </a>
                )}

                <button
                  type="button"
                  className="group inline-flex items-center gap-3"
                  aria-label="Play"
                >
                  <span className="inline-grid h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 place-items-center rounded-full border-2 border-white/70 transition group-hover:border-white">
                    <Play className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </span>
                  {current.helpLabel && (
                    <span className="text-[9px] sm:text-xs md:text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">
                      {current.helpLabel}
                    </span>
                  )}
                </button> */}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 rounded-full border border-white/60 p-3 sm:p-4 text-white/90 backdrop-blur-sm transition hover:text-white"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 rounded-full border border-white/60 p-3 sm:p-4 text-white/90 backdrop-blur-sm transition hover:text-white"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </section>
  );
}
