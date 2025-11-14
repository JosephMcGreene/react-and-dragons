export default function EncounterLog({
  encounterLogContent,
  setEncounterLogContent,
}) {
  return (
    <>
      <button
        type="button"
        onClick={setEncounterLogContent}
        className="clear-btn"
      >
        Clear log
      </button>

      <div className="encounter-log">
        {encounterLogContent.map((action, index) => (
          <article className="log-item" key={action.name + index}>
            <h4 key={action.finalToHit + index}>
              {action?.nakedAttackRoll === 20
                ? `${action.name}: Nat 20 to hit!`
                : `${action.name}: ${action.finalToHit} to hit`}{" "}
              {action.finalToHit !== "Saving throw" &&
                `(${action.nakedAttackRoll} + ${action.attackBonus})`}
            </h4>

            {action.damage?.map(({ finalDamage, damageDice, damageType }) => (
              <p key={finalDamage + index}>
                {finalDamage} ({damageDice}) {damageType} damage
              </p>
            ))}
          </article>
        ))}
      </div>
    </>
  );
}
