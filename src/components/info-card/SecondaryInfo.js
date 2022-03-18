import InfoHeader from "./InfoHeader";

export default function SecondaryInfo({ monsterInfo }) {
  /**
   * takes an array or object from a nested key/value pair in the monsterInfo object and parses its info to be rendered to the user.
   * @param  {Object} json Detailed info about the monster that is nested as an item in the monsterInfo object
   * @return {String} The text to be rendered
   */
  function parseDOMText(json) {
    let domText = "";

    if (!json || json.length === 0) {
      domText = "None";
      return domText;
    }
    // Speed and Senses are presented as objects, not arrays:
    if (!json.length) {
      for (let prop in json) {
        let newProp = prop.replaceAll("_", " ");
        domText += ` ${newProp}, ${json[prop]};`;
      }
      return domText;
    }

    for (let index in json) {
      domText += ` ${json[index]};`;
    }
    return domText;
  }

  return (
    <article className="info-block">
      {monsterInfo ? (
        <InfoHeader title="Speed:" text={parseDOMText(monsterInfo.speed)} />
      ) : (
        ""
      )}

      {monsterInfo ? (
        <InfoHeader title="Senses:" text={parseDOMText(monsterInfo.senses)} />
      ) : (
        ""
      )}

      {monsterInfo ? (
        <InfoHeader title="Alignment:" text={monsterInfo.alignment} />
      ) : (
        ""
      )}

      {monsterInfo ? <InfoHeader title="Type:" text={monsterInfo.type} /> : ""}

      {monsterInfo.languages ? (
        <InfoHeader title="Languages:" text={monsterInfo.languages} />
      ) : (
        <InfoHeader title="Languages:" text="None" />
      )}

      {monsterInfo ? <InfoHeader title="Size:" text={monsterInfo.size} /> : ""}

      <InfoHeader
        title="Damage Immunities:"
        text={parseDOMText(monsterInfo.damage_immunities)}
      />

      <InfoHeader
        title="Resistances:"
        text={parseDOMText(monsterInfo.damage_resistances)}
      />

      <InfoHeader
        title="Vulnerabilities:"
        text={parseDOMText(monsterInfo.damage_vulnerabilities)}
      />

      {monsterInfo.condition_immunities.length > 0 ? (
        <>
          <InfoHeader title="Condition Immunities:" text="" />
          <ul>
            {monsterInfo.condition_immunities.map((immunity) => {
              return <li key={immunity.name}>{immunity.name}</li>;
            })}
          </ul>
        </>
      ) : (
        <InfoHeader title="Condition Immunities:" text="None" />
      )}

      {monsterInfo.proficiencies.length > 0 ? (
        <>
          <InfoHeader title="Proficiencies:" text="" />
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
        <InfoHeader title="Proficiencies:" text="None" />
      )}
    </article>
  );
}
