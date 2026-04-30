"use client";

import { Drawer } from "@base-ui/react/drawer";
import { motion } from "motion/react";

export default function Header() {
  return (
    <header className="fixed flex flex-row justify-between w-full p-6 z-10">
      {/* Logo */}
      <a href="/">
        <img src="logo.png" className="h-12" />
      </a>
      {/* Menu */}

      <Drawer.Root>
        <Drawer.Trigger>Open Menu</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className="fixed inset-0 bg-black/45" />
          <Drawer.Viewport className="fixed inset-0 flex items-end">
            <motion.div
              className="h-full w-full rounded-t-2xl bg-white"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <Drawer.Popup className="h-full w-full rounded-t-2xl bg-white">
                <Drawer.Content>navigation links here</Drawer.Content>
              </Drawer.Popup>
            </motion.div>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.Root>
    </header>
  );
}
