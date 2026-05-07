"use client";
import Image from "next/image";
import { motion } from "motion/react";
import KvkCountdown from "./Countdown";

export default function KvkHero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/kvk.jpg"
        alt="Hero image"
        fill
        priority
        className="object-cover blur-xs"
      />

      <div className="absolute flex w-full flex-col items-center py-40">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center font-bold text-7xl text-yellow md:text-9xl"
        >
          Days until KVK 1
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <KvkCountdown />
        </motion.div>
      </div>
    </section>
  );
}
