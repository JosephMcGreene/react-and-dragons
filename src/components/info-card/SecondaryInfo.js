export default function SecondaryInfo({ monsterInfo, parseArray }) {
  return (
    <article>
      {monsterInfo ? <h4>Alignment: {monsterInfo.alignment}</h4> : ""}
      {monsterInfo ? <h4>Type: {monsterInfo.type}</h4> : ""}
      {monsterInfo.languages === "" ? (
        <h4>Languages: None</h4>
      ) : (
        <h4>Languages: {monsterInfo.languages}</h4>
      )}
      {monsterInfo ? <h4>Size: {monsterInfo.size}</h4> : ""}

      {/* {monsterInfo.condition_immunities === [] ? (
        <h4>Condition Immunities: None</h4>
      ) : (
        <h4>
          Condition Immunities: {monsterInfo.condition_immunities[0].name}
        </h4>
      )} */}
      {monsterInfo.damage_immunities === [] ? (
        <h4>Damage Immunities: None</h4>
      ) : (
        <h4>Damage Immunities: {monsterInfo.damage_immunities}</h4>
      )}
      {monsterInfo.damage_resistances === [] ? (
        <h4>Resistances: None</h4>
      ) : (
        <h4>Resistances: {parseArray(monsterInfo.damage_resistances)}</h4>
      )}
      {monsterInfo.damage_vulnerabiliites === [] ? (
        <h4>Vulnerabilities: None</h4>
      ) : (
        <h4>Vulnerabilities: {monsterInfo.damage_vulnerabiliites}</h4>
      )}
    </article>
  );
}
