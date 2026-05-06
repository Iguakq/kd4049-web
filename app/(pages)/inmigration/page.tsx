import InmigrationHero from "./components/Hero";
import TextBox from "@/components/TextBox";

export default function Inmigration() {
  return (
    <main>
      <InmigrationHero />

      {/* Information */}
      <section>
        <TextBox color="text-black" text="Join us" />
        <h1 className="pt-20 text-3xl text-center">How to join</h1>

        <div className="pt-10 flex flex-row gap-4">
          <div className="text-center">
            <h1 className="text-2xl">Join migration discord</h1>
            <a href="https://discord.gg/4mbS7rMw">Discord</a>
          </div>

          <div className="h-28 w-px bg-black"></div>

          <div className="text-center">
            <h1 className="text-2xl">Complete this form</h1>
            <a href="https://discord.gg/4mbS7rMw">Form</a>
          </div>
        </div>
      </section>

      {/* Collage 2 */}
      <section className="pt-12">
        <img src="kvk2.jpg" />
      </section>
    </main>
  );
}
