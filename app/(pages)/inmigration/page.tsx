export default function Inmigration() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center pt-28 gap-2">
        <h1 className="text-7xl md:text-9xl text-center text-black">
          Join us!
        </h1>
        <p>unete y crecer con nosotros</p>
      </section>

      {/* Collage 1 */}
      <section className="pt-12">
        <img src="discord.png" />
      </section>

      {/* Information */}
      <section className="pt-12 flex flex-col items-center">
        <h1 className="text-3xl">Como unirse?</h1>
        <div className="pt-6 flex flex-row gap-4">
          <div>
            <h1 className="text-2xl">
              Unete al discord <br />
              de migracion
            </h1>
            <a href="https://discord.gg/4mbS7rMw">Discord</a>
          </div>
          <div className="h-28 w-px bg-black"></div>
          <div>
            <h1 className="text-2xl">
              Completa este <br />
              formulario
            </h1>
            <a href="https://discord.gg/4mbS7rMw">Formulario</a>
          </div>
        </div>
      </section>

      {/* Collage 2 */}
      <section className="pt-12">
        <img src="kvk2.jpg" />
      </section>
    </>
  );
}
