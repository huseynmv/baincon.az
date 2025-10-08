"use client";

import { motion } from "framer-motion";
import { Factory, HardHat, Microscope, CircuitBoard } from "lucide-react";
import FeatureCard from "./FeatureCard";

const STAGGER = 0.12;

type Card = {
  id: number;
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const CARDS: Card[] = [
  { id: 1, title: "Latest Technology", Icon: CircuitBoard },
  { id: 2, title: "Latest Technology", Icon: Factory },
  { id: 3, title: "Latest Technology", Icon: HardHat },
  { id: 4, title: "Latest Technology", Icon: Microscope },
];

export default function FactoryFeatures() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-0.5 w-8 bg-violet-700" />
              <span className="text-xs sm:text-sm font-semibold text-orange-500">
                Erdunt Is The Industry Leaders
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Our Factory Produces <br className="hidden sm:block" />
              Reliable, Efficient, Safe <br className="hidden sm:block" />
              &amp; Sustainable Products.
            </h2>
          </div>
          <div className="flex flex-col justify-center mt-10    ">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              Incididunt ut labore et dolore magna aliqua. At enim ipsum dnim veniam, quis nos trud exercitation
              dolor ullamco laboris nisi ut aliquip ex ea comaody consequat duisaute irure dolor in reprehenderit
              in voluptate velit.
            </p>

            <ul className="mt-4 space-y-3">
              {[
                "Leading industrial solutions with best machinery",
                "Voluptatem acusantium doloremque laudantium totam",
                "Aperiam sed eafy que ipsa quae ab illo inventore veritatis",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-800">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-orange-500 text-orange-500 text-xs">
                    •
                  </span>
                  <span className="text-sm sm:text-base font-semibold">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <motion.ul
          className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {CARDS.map((card, i) => (
            <motion.li
              key={card.id}
              variants={{
                hidden: { opacity: 0, y: 36 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut", delay: i * STAGGER },
                },
              }}
            >
              <FeatureCard index={card.id} title={card.title} Icon={card.Icon} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

