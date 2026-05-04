"use client";

import { motion } from "motion/react";

export default function DiscordHero() {
  return (
    <section className="py-20 flex flex-col items-center gap-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-7xl font-bold text-blue-700 md:text-9xl"
      >
        Join our
        <br />
        discord!
      </motion.h1>

      <div className="relative overflow-hidden w-full md:px-40">
        <img
          src="discord.png"
          alt="Discord"
          className="w-full h-full object-cover"
        />

        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-0 left-0 w-full h-full bg-white origin-bottom"
        />
      </div>
    </section>
  );
}
