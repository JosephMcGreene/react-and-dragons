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
        Vulnerabilities: {parseDOMText(monsterInfo.damage_vulnerabiliites)}
      </h4>
      <h4>
        Condition Immunities: {parseDOMText(monsterInfo.condition_immunities)}
      </h4>
    </article>
  );
}
