"use client";

import { motion } from "motion/react";

export default function DiscordHero() {
  return (
    <section className="flex flex-col items-center gap-10 pt-20 md:gap-20 md:pt-40">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-7xl font-bold text-blue md:text-[10vw]"
      >
        Join our
        <br />
        discord!
      </motion.h1>

      <div className="relative w-full overflow-hidden md:px-40">
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
