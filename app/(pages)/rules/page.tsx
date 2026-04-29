import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rules",
  description: "Kingdom rules! Be sure to read!",
};

export default function Rules() {
  return (
    <main>
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 pt-24">
        <h1 className="text-center text-6xl md:text-8xl font-bold text-amber-300">
          Welcome to Kingdom Rules!
        </h1>
        <h2 className="text-3xl md:text-5xl">Please take a moment to read</h2>
      </section>

      {/* Rules */}
      <section className="flex flex-col items-center p-12">
        <ol>
          {/* Basic Kingdom Rules */}
          <h2 className="rule-section">Basic Kingdom Rules</h2>
          <li>
            <h3 className="rule-title">
              <strong>1. </strong>Respect between players
            </h3>
            <p className="rule-description">
              No insults, toxicity, or personal conflicts in chat.
            </p>
          </li>
          <li>
            <h3 className="rule-title">
              <strong>2. </strong>No attacks between allies
            </h3>
            <p className="rule-description">
              Attacking cities of players from the same kingdom without
              permission is prohibited.
            </p>
          </li>
          <li>
            <h3 className="rule-title">
              <strong>3. </strong>Gathering rules
            </h3>
            <p className="rule-description">
              Do not steal resource nodes from other alliances / do not attack
              other players' gatherers within the kingdom.
            </p>
          </li>

          {/* War and PvP Rules */}
          <h2 className="rule-section">War and PvP Rules</h2>
          <li>
            <h3 className="rule-title">
              <strong>4. </strong>Authorized wars only
            </h3>
            <p className="rule-description">
              Major attacks or wars must be organized by leadership (king or
              council).
            </p>
          </li>
          <li>
            <h3 className="rule-title">
              <strong>5. </strong>Do not sabotage rallies or flags
            </h3>
            <p className="rule-description">
              Do not interfere with kingdom structures or attacks.
            </p>
          </li>

          {/* Kingdom Organization */}
          <h2 className="rule-section">Kingdom Organization</h2>
          <li>
            <h3 className="rule-title">
              <strong>6. </strong>Main and secondary alliances
            </h3>
            <p className="rule-description">
              Only certain alliances have access to important areas (such as
              sanctuaries or temples).
            </p>
          </li>
          <li>
            <h3 className="rule-title">
              <strong>7. </strong>Reward rotation
            </h3>
            <p className="rule-description">
              Fair distribution of rewards (such as MGE or events) according to
              kingdom agreements.
            </p>
          </li>
          <li>
            <h3 className="rule-title">
              <strong>8. </strong>Meet recommended power levels
            </h3>
            <p className="rule-description">
              Highly inactive players or those with low growth may be removed
              from top alliances.
            </p>
          </li>

          {/* Activity and Growth */}
          <h2 className="rule-section">Activity and Growth</h2>
          <li>
            <h3 className="rule-title">
              <strong>9. </strong>Stay active
            </h3>
            <p className="rule-description">
              If you will be inactive for a long time, please notify.
            </p>
          </li>
          <li>
            <h3 className="rule-title">
              <strong>10. </strong>Mandatory participation in events
            </h3>
            <p className="rule-description">
              Important events require minimum participation.
            </p>
          </li>

          {/* Punishments */}
          <h2 className="rule-section">Punishments</h2>
          <li>
            <h3 className="rule-title">
              <strong>11. </strong>Clear penalties
            </h3>
            <p className="rule-description">Rule breakers may receive:</p>
            <ul className="list-disc pl-12">
              <li>Warning</li>
              <li>Coordinated attack (zeroing)</li>
              <li>Expulsion from the alliance or the kingdom</li>
            </ul>
          </li>

          {/* Diplomacy */}
          <h2 className="rule-section">Diplomacy</h2>
          <li>
            <h3 className="rule-title">
              <strong>12. </strong>Respect agreements
            </h3>
            <p className="rule-description">
              Do not break pacts without the king authorization.
            </p>
          </li>
        </ol>
      </section>
    </main>
  );
}
