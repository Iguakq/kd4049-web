"use client";

import { motion } from "motion/react";

export default function RankingsHero() {
  return (
    <section className="flex flex-col items-center gap-10 py-20 md:gap-20 md:py-40 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-7xl font-bold text-black md:text-[12vw]"
      >
        Kingdom <br />
        Rankings
      </motion.h1>
    </section>
  );
}
