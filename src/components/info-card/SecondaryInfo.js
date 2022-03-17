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
        <h4>
          <strong>
            <u>Speed:</u>
          </strong>{" "}
          {parseDOMText(monsterInfo.speed)}
        </h4>
      ) : (
        ""
      )}

      {monsterInfo ? (
        <h4>
          <strong>
            <u>Senses:</u>
          </strong>{" "}
          {parseDOMText(monsterInfo.senses)}
        </h4>
      ) : (
        ""
      )}

      {monsterInfo ? (
        <h4>
          <strong>
            <u>Alignment:</u>
          </strong>{" "}
          {monsterInfo.alignment}
        </h4>
      ) : (
        ""
      )}

      {monsterInfo ? (
        <h4>
          <strong>
            <u>Type:</u>
          </strong>{" "}
          {monsterInfo.type}
        </h4>
      ) : (
        ""
      )}

      {!monsterInfo.languages ? (
        <h4>Languages: None</h4>
      ) : (
        <h4>
          <strong>
            <u>Languages:</u>
          </strong>{" "}
          {monsterInfo.languages}
        </h4>
      )}

      {monsterInfo ? (
        <h4>
          <strong>
            <u>Size:</u>
          </strong>{" "}
          {monsterInfo.size}
        </h4>
      ) : (
        ""
      )}

      <h4>
        <strong>
          <u>Damage Immunities:</u>
        </strong>{" "}
        {parseDOMText(monsterInfo.damage_immunities)}
      </h4>

      <h4>
        <strong>
          <u>Resistances:</u>
        </strong>{" "}
        {parseDOMText(monsterInfo.damage_resistances)}
      </h4>

      <h4>
        <strong>
          <u>Vulnerabilities:</u>
        </strong>{" "}
        {parseDOMText(monsterInfo.damage_vulnerabilities)}
      </h4>

      {monsterInfo.condition_immunities.length > 0 ? (
        <>
          <h4>
            <strong>
              <u>Condition Immunities:</u>
            </strong>
          </h4>
          <ul>
            {monsterInfo.condition_immunities.map((immunity) => {
              return <li key={immunity.name}>{immunity.name}</li>;
            })}
          </ul>
        </>
      ) : (
        <h4>
          <strong>
            <u>Condition Immunities:</u>
          </strong>{" "}
          None
        </h4>
      )}

      {monsterInfo.proficiencies.length > 0 ? (
        <>
          <h4>
            <strong>
              <u>Proficiencies:</u>
            </strong>
          </h4>
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
        <h4>
          <strong>
            <u>Proficiencies:</u>
          </strong>{" "}
          None
        </h4>
      )}
    </article>
  );
}
