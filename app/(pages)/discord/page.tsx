import type { Metadata } from "next";

import DiscordHero from "./components/Hero";
import TextBox from "@/components/TextBox";

export const metadata: Metadata = {
  title: "Discord",
  description:
    "Join our Kingdom Discord to connect with the community, make new friends, and be part of the adventure!",
};

export default function Discord() {
  return (
    <main>
      {/* Hero */}
      <DiscordHero />

      {/* Introduction */}
      <section className="p-4">
        <TextBox color="text-blue" text="Why join" />
        <p className="pr-12 py-20 text-2xl font-bold text-blue md:py-40 md:text-7xl">
          Join our Discord and take your gaming experience to the next level.
          Here, you can share strategies, learn from other players, and
          participate in matches and events with an active community. If you
          enjoy planning, competing, and improving, this is the place for you.
        </p>
      </section>

      {/* Benefits */}
      <section className="flex flex-col items-center gap-10 p-4 md:gap-20">
        <h3 className="text-center text-4xl text-blue md:text-7xl">
          Here`s what you can
          <br /> do once you join:
        </h3>
        <section className="flex w-full flex-col justify-between gap-4 pb-20 lg:flex-row">
          {/* Connect */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-blue md:text-7xl">
              Connect
            </h3>
            <p className="pt-10 text-2xl text-blue md:text-5xl">
              Join the Kingdom&apos;s Discord to connect with the community, get
              exclusive updates, and be part of the Kingdom&apos;s adventure.
            </p>
          </div>
          <hr className="border-t border-blue md:hidden" />
          <div className="hidden w-1 bg-blue md:block" />

          {/* Guides */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-blue md:text-7xl">Guides</h3>
            <p className="pt-10 text-2xl text-blue md:text-5xl">
              Join the Kingdom&apos;s Discord to access helpful game guides,
              tips, and strategies shared by the community.
            </p>
          </div>
          <hr className="border-t border-blue md:hidden" />
          <div className="hidden w-1 bg-blue md:block" />

          {/* Events */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-blue md:text-7xl">Events</h3>
            <p className="pt-10 text-2xl text-blue md:text-5xl">
              Join the Kingdom&apos;s Discord to participate in exclusive
              events, challenges, and community activities.
            </p>
          </div>
        </section>
      </section>

      {/* Link */}
      <section className="flex w-full flex-col items-center bg-blue p-4">
        <h1 className="text-4xl text-white md:text-8xl">Join now!</h1>
        <a href="https://discord.gg/wc23bTbuMb">
          <svg
            viewBox="0 0 256 199"
            preserveAspectRatio="xMidYMid"
            className="h-[26vw] w-[26vw] animate-pulse"
          >
            <path
              d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
              fill="#fff"
            />
          </svg>
        </a>
      </section>
    </main>
  );
}
