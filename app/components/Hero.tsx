"use client";

import { motion } from "motion/react";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/hero.jpg"
        alt="Hero image"
        fill
        className="blur-xs object-cover"
      />
      <div className="absolute flex w-full flex-col items-center p-12">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-24 text-center text-8xl text-yellow md:text-[15vw]"
        >
          Kingdom 4049
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/logo.png" width={500} height={500} alt="" />
        </motion.div>
      </div>
    </section>
  );
}
