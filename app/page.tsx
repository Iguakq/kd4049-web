import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Discover the kingdom, its community, and the latest updates. Check out the rankings and meet the players, watch upcoming MGE events, and get ready for KVK",
};

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="flex flex-col items-center">
        <img src="rok.jpg" className="object-cover w-full h-screen blur-xs" />
        <h1 className=" absolute pt-36 text-8xl text-center text-amber-300">
          Kingdom 4049
        </h1>
        <img src="49.png" className="absolute p-12 pt-96" />
      </section>

      {/* Information */}
      <section className="h-screen">
        <p className="pt-12 pl-2 pr-12 text-2xl md:text-6xl">
          This is our kingdom, a place where players come together to grow,
          organize, and fight side by side. Here, every member matters, and
          progress is achieved through teamwork and mutual support. Our goal is
          to strengthen ourselves as a kingdom and an alliance, improve day by
          day, and advance decisively on the battlefield. It’s not just about
          individual power, but about building something solid together.
        </p>

        <img src="kvk2.jpg" className="p-2 pt-12" />
        <a href="/rankings" className="pt-12 pl-2 text-2xl underline">
          Rankings
        </a>
      </section>

      {/* Links */}
      <div className="bg-blue-700 h-100 ">
        <h1>explora mas</h1>
        <div className="flex flex-col pt-12 pl-4 pr-8">
          <ul>
            <li className="text-7xl text-white">Discord</li>
            <hr className="border-white" />
            <li className="text-7xl text-white">inmigration</li>
            <hr className="border-white" />
            <li className="text-7xl text-white">kvk</li>
            <hr className="border-white" />
            <li className="text-7xl text-white">Rankings</li>
          </ul>
        </div>
      </div>

      {/* Call to action */}
      <section>
        <h1>join us!</h1>
      </section>
    </main>
  );
}
