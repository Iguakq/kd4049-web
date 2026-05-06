"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen bg-blue">
      <Image
        src="/hero.jpg"
        alt="Hero image"
        fill
        priority
        className="object-cover blur-xs"
      />

      <div className="absolute flex w-full flex-col items-center p-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pt-20 text-center text-8xl text-yellow md:text-[15vw]"
        >
          Kingdom 4049
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image src="/logo.png" width={500} height={500} alt="" />
        </motion.div>
      </div>
    </section>
  );
}
