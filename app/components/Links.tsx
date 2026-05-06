"use client";

import { motion } from "motion/react";
import TextBox from "@/components/TextBox";
import Link from "next/link";

export default function Links() {
  return (
    <section className="flex flex-col p-4 bg-blue gap-4">
      <TextBox color="text-yellow" text="Explore more" />

      <p className="md:text-2xl text-white">
        From here, you can explore the different areas of the kingdom, meet its
        inhabitants, and discover everything it has to offer.
      </p>

      {/* Discord */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Link
          href="/discord"
          className="text-7xl text-yellow md:text-[10vw] font-bold"
        >
          Discord
        </Link>
      </motion.div>
      <hr className="border-white" />

      {/* Inmigration */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Link
          href="/inmigration"
          className="text-7xl text-yellow md:text-[10vw] font-bold"
        >
          Inmigration
        </Link>
      </motion.div>
      <hr className="border-white" />

      {/* Kvk */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link
          href="/kvk"
          className="text-7xl text-yellow md:text-[10vw] font-bold"
        >
          Kvk
        </Link>
      </motion.div>
      <hr className="border-white" />

      {/* Rules */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link
          href="/rules"
          className="text-7xl text-yellow md:text-[10vw] font-bold"
        >
          Rules
        </Link>
      </motion.div>
    </section>
  );
}
