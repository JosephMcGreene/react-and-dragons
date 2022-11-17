import InfoHeader from "./InfoHeader";

export default function SecondaryInfo({ monsterDetails }) {
  /**
   * takes an array or object from a nested key/value pair in the monsterDetails object and parses its info to be rendered to the user.
   * @param  {Object} json Detailed info about the monster that is nested as an item in the monsterDetails object
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
    <>
      <InfoHeader title="Speed:" />
      <dd>{parseDOMText(monsterDetails.speed)}</dd>

      <InfoHeader title="Senses:" />
      <dd>{parseDOMText(monsterDetails.senses)}</dd>

      <InfoHeader title="Alignment:" />
      <dd>{monsterDetails.alignment}</dd>

      <InfoHeader title="Type:" />
      <dd>{monsterDetails.type}</dd>

      {monsterDetails.languages ? (
        <>
          <InfoHeader title="Languages:" />
          <dd>{monsterDetails.languages}</dd>
        </>
      ) : (
        <>
          <InfoHeader title="Languages:" />
          <dd>"None"</dd>
        </>
      )}

      <InfoHeader title="Size:" />
      <dd>{monsterDetails.size}</dd>

      <InfoHeader title="Damage Immunities:" />
      <dd>{parseDOMText(monsterDetails.damage_immunities)}</dd>

      <InfoHeader title="Resistances:" />
      <dd>{parseDOMText(monsterDetails.damage_resistances)}</dd>

      <InfoHeader title="Vulnerabilities:" />
      <dd>{parseDOMText(monsterDetails.damage_vulnerabilities)}</dd>

      {monsterDetails.condition_immunities.length > 0 ? (
        <>
          <InfoHeader title="Condition Immunities:" />
          <ul>
            {monsterDetails.condition_immunities.map((immunity) => {
              return <dd key={immunity.name}>{immunity.name}</dd>;
            })}
          </ul>
        </>
      ) : (
        <>
          <InfoHeader title="Condition Immunities:" />
          <dd>"None"</dd>
        </>
      )}

      {monsterDetails.proficiencies.length > 0 ? (
        <>
          <InfoHeader title="Proficiencies:" />
          <ul>
            {monsterDetails.proficiencies.map((pro) => {
              return (
                <dd key={pro.proficiency.index}>
                  {pro.proficiency.name} +{pro.value}
                </dd>
              );
            })}
          </ul>
        </>
      ) : (
        <>
          <InfoHeader title="Proficiencies:" />
          <dd>"None"</dd>
        </>
      )}
    </>
  );
}
