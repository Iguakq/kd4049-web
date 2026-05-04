"use client";

import TextBox from "@/components/TextBox";

export default function DiscordIntroduction() {
  return (
    <section>
      <TextBox color="text-blue" text="Why join" withMargin={true} />
      <p className="pt-18 md:pt-36 pl-4 pr-16 text-2xl md:text-7xl font-bold text-blue">
        Join our Discord and take your gaming experience to the next level.
        Here, you can share strategies, learn from other players, and
        participate in matches and events with an active community. If you enjoy
        planning, competing, and improving, this is the place for you.
      </p>

      {/* Benefits */}
      <section className="p-12 flex flex-col items-center gap-8">
        <h1 className="text-blue-700 text-4xl text-center">
          Here`s what you can
          <br /> do once you join:
        </h1>
        <section className="flex flex-col md:flex-row gap-4">
          {/* Connect */}
          <div>
            <h1 className="text-2xl font-bold text-blue-700">Connect</h1>
            <p className="text-2xl text-blue-700">
              Join other kingdom citicens
            </p>
          </div>
          <hr className="border-t border-blue-700" />
          {/* Guides */}
          <div>
            <h1 className="text-2xl font-bold text-blue-700">Guides</h1>
            <p className="text-2xl text-blue-700">
              Leran more with our guides, ascend to the top
            </p>
          </div>
          <hr className="border-t border-blue-700" />
          {/* Events */}
          <div>
            <h1 className="text-2xl font-bold text-blue-700">Events</h1>
            <p className="text-2xl text-blue-700">
              Participate in events and win
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}
