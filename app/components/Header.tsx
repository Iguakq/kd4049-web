"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Drawer } from "@base-ui/react";
import Link from "next/link";

export default function Header() {
  // Hidden scroll
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Drawer animation
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Colors
  const pathname = usePathname();

  // Calculate scroll
  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(current > previous && current > 150);
  });

  // Handle drawer
  const handleOpen = () => {
    setOpen(true);
    setAnimating(true);
  };
  const handleClose = () => {
    setAnimating(false);
    setTimeout(() => setOpen(false), 300);
  };

  // Colors
  const routeColor =
    pathname === "/" ? "yellow" : pathname === "/discord" ? "blue" : "black";

  return (
    <motion.header
      animate={{ y: hidden ? -140 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed z-10 w-full px-2"
    >
      <div className="flex justify-between p-2 md:p-4">
        <a href="/">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </a>

        {/* Menu */}
        <Drawer.Root open={open} onOpenChange={() => {}}>
          <Drawer.Trigger
            onClick={handleOpen}
            className={`cursor-pointer text-2xl text-${routeColor}`}
          >
            + <strong>Menu</strong>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Viewport className="fixed inset-0 z-20">
              <AnimatePresence>
                {animating && (
                  <motion.div
                    className="h-full w-full bg-blue"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{
                      type: "tween",
                      duration: 0.3,
                      ease: "easeIn",
                    }}
                  >
                    <Drawer.Popup className="h-full">
                      <Drawer.Content className="flex h-full flex-col">
                        {/* Navigation */}
                        <div className="flex flex-row justify-between p-5">
                          <Link
                            onClick={handleClose}
                            href="/"
                            className="text-2xl text-yellow"
                          >
                            KD49
                          </Link>

                          <Drawer.Close
                            onClick={handleClose}
                            className="cursor-pointer text-2xl text-yellow"
                          >
                            × <strong>Close</strong>
                          </Drawer.Close>
                        </div>

                        {/* Links */}
                        <div className="flex flex-1 flex-col justify-end p-4">
                          {/* Discord */}
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Link
                              href="/discord"
                              onClick={handleClose}
                              className="text-7xl font-bold text-yellow md:text-[8vw]"
                            >
                              Discord
                            </Link>
                          </motion.div>
                          <hr className="border-white" />

                          {/* Immigration */}
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <Link
                              href="/immigration"
                              onClick={handleClose}
                              className="text-7xl font-bold text-yellow md:text-[8vw]"
                            >
                              Immigration
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
                              onClick={handleClose}
                              className="text-7xl font-bold text-yellow md:text-[8vw]"
                            >
                              Kvk
                            </Link>
                          </motion.div>
                          <hr className="border-white" />

                          {/* Rankings */}
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.4 }}
                            viewport={{ once: true }}
                          >
                            <Link
                              href="/rankings"
                              onClick={handleClose}
                              className="text-7xl font-bold text-yellow md:text-[8vw]"
                            >
                              Rankings
                            </Link>
                          </motion.div>
                          <hr className="border-white" />

                          {/* Rules */}
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <Link
                              href="/rules"
                              onClick={handleClose}
                              className="text-7xl font-bold text-yellow md:text-[8vw]"
                            >
                              Rules
                            </Link>
                          </motion.div>
                        </div>
                      </Drawer.Content>
                    </Drawer.Popup>
                  </motion.div>
                )}
              </AnimatePresence>
            </Drawer.Viewport>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
      <hr className={`text-${routeColor}`} />
    </motion.header>
  );
}
