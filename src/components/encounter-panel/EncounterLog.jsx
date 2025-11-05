export default function EncounterLog({ encounterLogContent }) {
  return (
    <div className="encounter-log">
      {encounterLogContent.map((content, index) => (
        <article className="log-item" key={content.actionName + index}>
          <h4 key={content.toHit + index}>
            {content?.toHit === 20
              ? `${content.actionName}: Nat 20 to hit!`
              : `${content.actionName}: ${content.toHit} to hit`}
          </h4>

          {content.damage?.map(({ finalDamage, damageDice, damageType }) => (
            <p key={finalDamage + index}>
              {finalDamage} ({damageDice}) {damageType} damage
            </p>
          ))}
        </article>
      ))}
    </div>
  );
}
