"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type HeroSlide = {
  title: string;
  subtitle: string;
};

const INTERVAL_MS = 7000;
const SLIDE_ENTER_DELAY_S = 1;

const lineClass = (index: number, total: number) => {
  if (index === total - 1 && total > 1) {
    return "block md:whitespace-nowrap";
  }
  return "block";
};

function HeroTitle({ title }: { title: string }) {
  const lines = title.split("\n");

  return (
    <h1 className="w-full min-w-0 max-w-4xl text-balance text-display-lg text-ink-50 md:text-display-xl">
      {lines.map((line, index) => (
        <span key={index} className={lineClass(index, lines.length)}>
          {line}
        </span>
      ))}
    </h1>
  );
}

export function HeroRotator({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const slide = slides[active] ?? slides[0];

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div aria-live="polite" aria-atomic="true" className="relative w-full min-w-0 max-w-full">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 14 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.55,
              delay: SLIDE_ENTER_DELAY_S,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          exit={{
            opacity: 0,
            y: -10,
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          }}
          className="w-full min-w-0"
        >
          <HeroTitle title={slide.title} />
          <p className="mt-6 w-full min-w-0 max-w-xl text-base leading-relaxed text-ink-300 md:text-lg">
            {slide.subtitle}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
