import { Metadata } from "next";

import RankingsHero from "./components/Hero";

export const metadata: Metadata = {
  title: "Rankings",
  description: "Check Kingdom rankings, top alliances and players",
};

export default function Rankings() {
  return (
    <main>
      <RankingsHero />

      {/* Alliances */}
      <section className="py-10 md:py-20 flex flex-col items-center bg-blue text-yellow">
        <h2 className="text-3xl md:text-6xl font-bold pb-4">
          Most powerfull alliances
        </h2>
        <ol className="list-decimal">
          <li className=" md:text-4xl">[#VAL] #VALHALLA - 2.2B</li>
          <li className=" md:text-4xl">[#VV] VALHALLA VANGUARD - 1.3B</li>
          <li className=" md:text-4xl">[RR-] ROYAL REBORN - 1.1B</li>
        </ol>
      </section>

      {/* Players */}
      <section className="py-10 md:py-20 flex flex-col items-center text-black">
        <h2 className="text-3xl md:text-6xl font-bold pb-4">
          Most powerfull players
        </h2>
        <ol className="list-decimal">
          <li className=" md:text-4xl">HerMan - 100M</li>
          <li className=" md:text-4xl">WARHAMMER - 60M</li>
          <li className=" md:text-4xl">Glady - 45M</li>
        </ol>
      </section>
    </main>
  );
}
