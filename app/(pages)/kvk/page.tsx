import { Metadata } from "next";

import KvkHero from "./components/Hero";

export const metadata: Metadata = {
  title: "KVK",
  description:
    "Join our kingdom, connect with the community, make new allies, and embark on a new in-game adventure",
};

export default function Kvk() {
  return (
    <main>
      <KvkHero />
    </main>
  );
}
