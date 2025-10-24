export default function Resistances({ monsterDetails }) {
  const {
    condition_immunities,
    damage_immunities,
    damage_resistances,
    damage_vulnerabilities,
  } = monsterDetails;

  /**
   * Returns appropriate JSX concerning the monster's immunities, resistances, and vulnerabilities.
   *
   * @param {object[] || string[]} resistanceType The immunities, resistances, or vulnerabilities in question.
   *
   * @returns JSX <dd> element whose content is appropriate for the monster's immunities, resistances, or vulnerabilities.
   */
  function displayResistance(resistanceType) {
    if (resistanceType.length > 0) {
      return resistanceType.map((resistance, index) => (
        <dd key={resistance + index}>{resistance?.name || resistance}</dd>
      ));
    }

    return <dd>None</dd>;
  }

  return (
    <div className="immunities-resistances">
      <div>
        <dt className="info-term">Condition Immunities:</dt>
        {displayResistance(condition_immunities)}
      </div>

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
    </div>
  );
}
