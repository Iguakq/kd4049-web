export default function Rules() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 flex flex-col items-center gap-6">
        <h1 className="text-center text-6xl font-bold text-amber-300">
          Welcome to Kingdom Rules!
        </h1>
        <h2 className="text-2xl">Please take a moment to read</h2>
      </section>

      <section className="p-12 flex flex-col items-center">
        <ol className="list-decimal">
          <h1 className="text-2xl">Basic Kingdom Rules</h1>
          <li>
            <strong>Respect between players</strong>
            <p>No insults, toxicity, or personal conflicts in chat.</p>
          </li>
          <li>
            <strong>No attacks between allies (no "friendly fire")</strong>
            <p>
              Attacking cities of players from the same kingdom without
              permission is prohibited.
            </p>
          </li>
          <li>
            <strong>Gathering rules</strong>
            <p>
              Do not steal resource nodes from other alliances / do not attack
              other players' gatherers within the kingdom.
            </p>
          </li>

          <h1 className="pt-4 text-2xl">War and PvP Rules</h1>
          <li>
            <strong>Authorized wars only</strong>
            <p>
              Major attacks or wars must be organized by leadership (king or
              council).
            </p>
          </li>
          <li>
            <strong>Do not sabotage rallies or flags</strong>
            <p>Do not interfere with kingdom structures or attacks.</p>
          </li>

          <h1 className="pt-4 text-2xl">Kingdom Organization</h1>
          <li>
            <strong>Main and secondary alliances</strong>
            <p>
              Only certain alliances have access to important areas (such as
              sanctuaries or temples).
            </p>
          </li>
          <li>
            <strong>Reward rotation</strong>
            <p>
              Fair distribution of rewards (such as MGE or events) according to
              kingdom agreements.
            </p>
          </li>
          <li>
            <strong>Meet recommended power levels</strong>
            <p>
              Highly inactive players or those with low growth may be removed
              from top alliances.
            </p>
          </li>

          <h1 className="pt-4 text-2xl">Activity and Growth</h1>
          <li>
            <strong>Stay active</strong>
            <p>If you will be inactive for a long time, please notify.</p>
          </li>
          <li>
            <strong>Mandatory participation in events</strong>
            <p>Important events require minimum participation.</p>
          </li>

          <h1 className="pt-4 text-2xl">Punishments</h1>
          <li>
            <strong>Clear penalties</strong>
            <h1>
              Rule breakers may receive:
              <ul className="list-disc">
                <li>Warning</li>
                <li>Coordinated attack (zeroing)</li>
                <li>Expulsion from the alliance or the kingdom</li>
              </ul>
            </h1>
          </li>

          <h1 className="pt-4 text-2xl">Diplomacy</h1>
          <li>
            <strong>Respect agreements</strong>
            <p>Do not break pacts without the king's authorization.</p>
          </li>
        </ol>
      </section>
    </>
  );
}
