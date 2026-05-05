"use client";

import { motion } from "motion/react";

export default function InmigrationHero() {
  return (
    <section className="flex flex-col items-center gap-10 pt-20 px-4 md:gap-20 md:pt-40">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-7xl font-bold text-black md:text-[10vw]"
      >
        Join our
        <br />
        Kingdom!
      </motion.h1>
      <p className="text-center">
        Join our kingdom and become part of an active, close-knit community
        where you’ll grow faster and enjoy every battle. We fight together, we
        win together, and we always support each other to go further.
      </p>

      <img src="information.png" />
    </section>
  );
}
