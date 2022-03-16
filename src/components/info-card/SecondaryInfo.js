export default function SecondaryInfo({ monsterInfo, parseDOMText }) {
  return (
    <article>
      {monsterInfo ? <h4>Speed: {parseDOMText(monsterInfo.speed)}</h4> : ""}

      {monsterInfo ? <h4>Senses: {parseDOMText(monsterInfo.senses)}</h4> : ""}

      {monsterInfo ? <h4>Alignment: {monsterInfo.alignment}</h4> : ""}

      {monsterInfo ? <h4>Type: {monsterInfo.type}</h4> : ""}

      {!monsterInfo.languages ? (
        <h4>Languages: None</h4>
      ) : (
        <h4>Languages: {monsterInfo.languages}</h4>
      )}

      {monsterInfo ? <h4>Size: {monsterInfo.size}</h4> : ""}

      <h4>Damage Immunities: {parseDOMText(monsterInfo.damage_immunities)}</h4>

      <h4>Resistances: {parseDOMText(monsterInfo.damage_resistances)}</h4>

      <h4>
        Vulnerabilities: {parseDOMText(monsterInfo.damage_vulnerabilities)}
      </h4>

      {monsterInfo.condition_immunities.length > 0 ? (
        <>
          <h4>Condition Immunities:</h4>
          <ul>
            {monsterInfo.condition_immunities.map((immunity) => {
              return <li key={immunity.name}>{immunity.name}</li>;
            })}
          </ul>
        </>
      ) : (
        <h4>Condition Immunities: None</h4>
      )}

      {monsterInfo.proficiencies.length > 0 ? (
        <>
          <h4>Proficiencies:</h4>
          <ul>
            {monsterInfo.proficiencies.map((pro) => {
              return (
                <li key={pro.proficiency.index}>
                  {pro.proficiency.name} +{pro.value}
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <h4>Proficiencies: None</h4>
      )}
    </article>
  );
}
