import type { Metadata } from "next";

import ImmigrationHero from "./components/Hero";
import TextBox from "@/components/TextBox";

export const metadata: Metadata = {
  title: "Immgration",
  description:
    "Join our kingdom, connect with the community, make new allies, and embark on a new in-game adventure",
};

export default function Inmigration() {
  return (
    <main>
      <ImmigrationHero />

      {/* Information */}
      <section className="p-4">
        <TextBox color="text-black" text="Join us" />

        <div className="flex flex-col items-center gap-4 py-20 md:py-40 md:gap-10 md:flex-col">
          <h2 className="text-3xl text-center md:text-8xl">How to join</h2>

          <p className="text-center md:text-4xl">
            You&apos;re welcome to join if you have less than 10M power.
            <br />
            If you have more, DM SJ (221306415) or join this migration Discord
          </p>

          <a
            href="https://discord.gg/4mbS7rMw"
            className="text-2xl underline md:text-4xl"
          >
            Discord 🡥
          </a>
        </div>
      </section>
    </main>
  );
}
