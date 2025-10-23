export default function Resistances({ monsterDetails }) {
  const {
    damage_immunities,
    damage_resistances,
    damage_vulnerabilities,
    condition_immunities,
  } = monsterDetails;

  function displayResistance(resistanceType) {
    if (resistanceType.length > 0) {
      return resistanceType.map((resistance, index) => (
        <dd key={`${resistance}${index}`}>{resistance}</dd>
      ));
    }

    return <dd>None</dd>;
  }

  return (
    <div className="immunities-resistances">
      <div>
        <dt className="info-term">Damage Immunities:</dt>
        {displayResistance(damage_immunities)}
      </div>

      <div>
        <dt className="info-term">Resistances:</dt>
        {displayResistance(damage_resistances)}
      </div>

      <div>
        <dt className="info-term">Vulnerabilities:</dt>
        {displayResistance(damage_vulnerabilities)}
      </div>

      <div>
        <dt className="info-term">Condition Immunities:</dt>
        {displayResistance(condition_immunities)}
      </div>
    </div>
  );
}
