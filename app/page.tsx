import type { Metadata } from "next";

import Hero from "./components/Hero";
import TextBox from "@/components/TextBox";
import Link from "next/link";
import Links from "./components/Links";

export const metadata: Metadata = {
  description:
    "Discover the kingdom, its community, and the latest updates. Check out the rankings and meet the players, join the Discord, and get ready for KVK",
};

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Information */}
      <section className="p-4">
        <TextBox color="text-black" text="Introduction" />

        <p className="pt-20 pr-12 text-2xl font-bold md:pt-40 md:text-7xl">
          This is our kingdom, a place where we grow, organize, and fight side
          by side. Here, every member matters, and progress is achieved through
          teamwork and mutual support. Our goal is to strengthen ourselves as a
          kingdom, improve day by day, and advance decisively on the
          battlefield. It&apos;s not just about individual power, but about
          building something solid together.
        </p>
      </section>

      {/* Rankings */}
      <section className="flex flex-col gap-4 p-4 pt-0 md:pt-40 2xl:flex-row">
        <img src="/map.png" alt="Kingdom map" className="2xl:w-300" />

        <div className="hidden w-1 bg-black 2xl:block" />

        <div className="flex flex-col justify-between">
          <TextBox color="text-black" text="Kingdom Tops" />

          <div className="pt-20">
            <p className="md:text-2xl">
              Explore the kingdom power rankings and find out who rules the
              realm. This list shows you the most influential players and
              alliances and where they stand on the power map. Stay up to date
              with the latest updates and see who is shaping the kingdom
              history.
            </p>

            <Link href="/rankings" className="text-3xl underline">
              Rankings 🡥
            </Link>
          </div>
        </div>
      </section>

      <Links />

      {/* CTA */}
      <section className="p-4">
        <TextBox color="text-black" text="Join us" />

        <div className="flex flex-col items-center gap-4 py-20">
          <p className="text-center text-5xl md:text-8xl">Want to join us?</p>

          <p className="text-2xl md:text-7xl">Don&apos;t wait any longer</p>

          <Link href="/inmigration" className="text-3xl underline">
            Immigration 🡥
          </Link>
        </div>
      </section>
    </main>
  );
}
