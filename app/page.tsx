import type { Metadata } from "next";

import Hero from "./components/Hero";
import TextBox from "@/components/TextBox";
import Links from "./components/Links";

export const metadata: Metadata = {
  description:
    "Discover the kingdom, its community, and the latest updates. Check out the rankings and meet the players, watch upcoming MGE events, and get ready for KVK",
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Information */}
      <section>
        <TextBox color="text-black" text="Introduction" withMargin={true} />
        <p className="pt-20 pl-4 pr-16 text-2xl font-bold md:pt-40 md:text-7xl">
          This is our kingdom, a place where players come together to grow,
          organize, and fight side by side. Here, every member matters, and
          progress is achieved through teamwork and mutual support. Our goal is
          to strengthen ourselves as a kingdom and an alliance, improve day by
          day, and advance decisively on the battlefield. It's not just about
          individual power, but about building something solid together.
        </p>
        <div className="flex flex-col gap-4 p-4 md:flex-row md:pt-40">
          <img src="information.png" className="md:w-300" />
          <div className="w-1 bg-black" />
          <div className="flex flex-col justify-between gap-2">
            <TextBox
              color="text-black"
              text="Kingdom Tops"
              withMargin={false}
            />
            <div>
              <p className="md:text-2xl">
                Explore the kingdom power rankings and find out who rules the
                realm. This list shows you the most influential players and
                alliances and where they stand on the power map. Stay up to date
                with the latest updates and see who is shaping the kingdom
                history.
              </p>
              <a href="/rankings" className="text-3xl underline">
                Rankings 🡥
              </a>
            </div>
          </div>
        </div>
      </section>
      <Links />
      {/* CTA */}
      <section className="p-4">
        <TextBox color="text-black" text="Join us" withMargin={false} />
        <div className="flex flex-col items-center gap-2 py-20">
          <p className="text-5xl">Want to join us?</p>
          <p className="text-2xl">Dont wait more</p>
          <a href="/inmigration" className="text-3xl underline">
            Inmigration 🡥
          </a>
        </div>
      </section>
    </main>
  );
}
