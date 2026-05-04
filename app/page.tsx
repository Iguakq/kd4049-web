import type { Metadata } from "next";

import { Button } from "@base-ui/react/button";
import Hero from "./components/Hero";
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
      <section className="h-screen md:h-fit bg-white">
        <div className="m-4 p-2 w-fit h-fit rounded-4xl border border-black">
          <h3 className="md:text-2xl">Introduction</h3>
        </div>

        <p className="pt-18 md:pt-36 pl-4 pr-16 text-2xl md:text-7xl">
          This is our kingdom, a place where players come together to grow,
          organize, and fight side by side. Here, every member matters, and
          progress is achieved through teamwork and mutual support. Our goal is
          to strengthen ourselves as a kingdom and an alliance, improve day by
          day, and advance decisively on the battlefield. It’s not just about
          individual power, but about building something solid together.
        </p>

        <div className="p-4 md:pt-48 flex flex-col md:flex-row gap-4">
          <img src="kvk2.jpg" className="md:w-320" />
          <a href="/rankings" className="text-2xl underline">
            Rankings
          </a>
        </div>
      </section>

      <Links />

      {/* CTA */}
      <section className="pt-12 flex flex-col items-center gap-4">
        <h2 className="text-5xl">Want to join us?</h2>
        <p className="text-2xl">Dont wait more</p>
        <Button className="p-2 border rounded-3xl border-black">
          Inmigration 🡥
        </Button>
      </section>
    </main>
  );
}

/*

<section className="flex flex-col items-center">
  <img src="rok.jpg" className="object-cover w-full h-screen blur-xs" />
  <h1 className=" absolute pt-36 text-8xl text-center text-yellow font-bold ">
    Kingdom 4049
  </h1>
  <img src="49.png" className="absolute p-12 pt-96" />
</section>


<section>
  <h2>Introduction</h2>
  <p className="pt-52 pl-2 pr-16 text-2xl md:text-6xl">
    This is our kingdom, a place where players come together to grow,
    organize, and fight side by side. Here, every member matters, and
    progress is achieved through teamwork and mutual support. Our goal is
    to strengthen ourselves as a kingdom and an alliance, improve day by
    day, and advance decisively on the battlefield. It’s not just about
    individual power, but about building something solid together.
  </p>

  <div className="p-2 md:pt-52 flex flex-col md:flex-row items-stretch">
    <img src="kvk2.jpg" className="md:w-200" />
    <a href="/rankings" className="text-2xl underline">
      Rankings
    </a>
  </div>
</section>


<div className="bg-blue-700 h-100 ">
  <h1>Explore more</h1>
  <div className="flex flex-col pt-12 pl-4 pr-8">
    <ul>
      <li className="text-7xl text-white">Discord</li>
      <hr className="border-white" />
      <li className="text-7xl text-white">Inmigration</li>
      <hr className="border-white" />
      <li className="text-7xl text-white">Kvk</li>
      <hr className="border-white" />
      <li className="text-7xl text-white">Rankings</li>
    </ul>
  </div>
</div>


<section>
  <h1>join us!</h1>
</section>*/
