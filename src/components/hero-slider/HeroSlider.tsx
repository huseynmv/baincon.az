"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import hero1 from '../../assets/hero-1.jpeg'
import hero2 from '../../assets/hero-2.jpg'
type Slide = {
  id: string;
  image: any;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  helpLabel?: string;
};

const SLIDES: Slide[] = [
  {
    id: "s1",
    image: hero1,
    eyebrow: "WELCOME TO ERDUNT FACTORY AREA",
    title: "Build Quality Products",
    subtitle: "For The Industry’s Future",
    ctaLabel: "LEARN MORE",
    ctaHref: "/about",
    helpLabel: "HOW WE HELP",
  },
    {
    id: "s2",
    image: hero2,
    eyebrow: "WELCOME TO ERDUNT FACTORY AREA",
    title: "Build Quality Products",
    subtitle: "For The Industry’s Future",
    ctaLabel: "LEARN MORE",
    ctaHref: "/about",
    helpLabel: "HOW WE HELP",
  },
];

const AUTOPLAY_MS = 6500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const current = useMemo(() => SLIDES[index], [index]);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIndex((i) => (i + 1) % SLIDES.length);

  return (
    <section className="relative isolate">
      <div className="relative h-[72vh] min-h-[540px] w-full md:h-[78vh] lg:h-[86vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.2, scale: 1.01 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image src={current.image} alt="" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1440px] flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center text-white">
            {current.eyebrow ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={`eyebrow-${current.id}`}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/80 md:text-sm"
                >
                  {current.eyebrow}
                </motion.div>
              </AnimatePresence>
            ) : null}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${current.id}`}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 18, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl"
              >
                {current.title}
                {current.subtitle ? (
                  <>
                    <br />
                    {current.subtitle}
                  </>
                ) : null}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={`ctas-${current.id}`}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 18, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                className="mt-8 flex items-center gap-5"
              >
                {current.ctaHref && current.ctaLabel ? (
                  <a
                    href={current.ctaHref}
                    className="inline-flex items-center justify-center bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600"
                  >
                    {current.ctaLabel}
                  </a>
                ) : null}

                <button type="button" className="group inline-flex items-center gap-3" aria-label="Play">
                  <span className="inline-grid h-16 w-16 place-items-center rounded-full border-2 border-white/70 transition group-hover:border-white">
                    <Play className="h-6 w-6 text-white" />
                  </span>
                  {current.helpLabel ? (
                    <span className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">
                      {current.helpLabel}
                    </span>
                  ) : null}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full border border-white/60 p-4 text-white/90 backdrop-blur-sm transition hover:text-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full border border-white/60 p-4 text-white/90 backdrop-blur-sm transition hover:text-white"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
