import { Metadata } from "next";

import KvkHero from "./components/Hero";

export const metadata: Metadata = {
  title: "KVK",
  description: "Check future KVKs",
};

export default function Kvk() {
  return (
    <main>
      <KvkHero />
    </main>
  );
}
