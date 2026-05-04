"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Drawer } from "@base-ui/react";
import { usePathname } from "next/navigation";

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
      {/* Header */}
      <div className="flex justify-between p-2 md:p-4">
        <a href="/">
          <img src="logo.png" className="w-10" alt="Logo" />
        </a>

        {/* Menu */}
        <Drawer.Root open={open} onOpenChange={() => {}}>
          <Drawer.Trigger
            onClick={handleOpen}
            className={`text-2xl text-${routeColor} cursor-pointer`}
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
                    <Drawer.Popup>
                      <Drawer.Content>
                        <div className="flex flex-row justify-between">
                          <h1>KD49</h1>

                          <Drawer.Close
                            onClick={handleClose}
                            className="text-2xl cursor-pointer"
                          >
                            × <strong>Close</strong>
                          </Drawer.Close>
                        </div>
                        <div className="flex flex-col pt-12 bottom-0">
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
