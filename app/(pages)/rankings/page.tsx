export default function Rankings() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 flex flex-col items-center gap-12">
        <h1 className="text-center text-7xl font-bold text-amber-300">
          Kingdom rankings
        </h1>
      </section>

      {/* Alliances */}
      <section className="mt-12 h-50 bg-blue-700 flex flex-col items-center">
        <h1 className="text-white">Most powerfull alliances</h1>
        <ol className="list-decimal">
          <li>[#VAL] #VALHALLA - 1.8B</li>
          <li>[#VV] VALHALLA VANGUARD - 1.2B</li>
          <li>[RR-] ROYAL REBORN - 1B</li>
        </ol>
      </section>

      {/* Players */}
      <section className="pt-12">
        <h1 className="text-amber-300">Most powerfull players</h1>
        <ol className="list-decimal">
          <li>[#VAL] #VALHALLA - 1.8B</li>
          <li>[#VV] VALHALLA VANGUARD - 1.2B</li>
          <li>[RR-] ROYAL REBORN - 1B</li>
        </ol>
      </section>
    </>
  );
}
