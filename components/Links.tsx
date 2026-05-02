"use client";

import { motion } from "motion/react";

export default function Links() {
  return (
    <section className="p-4 h-fit bg-blue">
      <div className="p-1.5 w-fit h-fit rounded-4xl border border-yellow">
        <h2 className="md:text-2xl text-yellow">Explore more</h2>
      </div>

      <p className="pt-4 md:pt-8 md:text-2xl text-white">
        Check others parts of the kingdom!
      </p>

      <div className="flex flex-col pt-12">
        <ul>
          <motion.li
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-7xl text-yellow"
          >
            Discord
          </motion.li>
          <hr className="border-white" />
          <motion.li
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-7xl text-yellow"
          >
            Inmigration
          </motion.li>
          <hr className="border-white" />
          <motion.li
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-7xl text-yellow"
          >
            Kvk
          </motion.li>
          <hr className="border-white" />
          <motion.li
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-7xl text-yellow"
          >
            Rankings
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
