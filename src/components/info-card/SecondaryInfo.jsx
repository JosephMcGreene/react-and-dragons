import SkillsList from "./SkillsList";

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
        domText += `${newProp}, ${json[prop]}\n`;
      }
      return domText;
    }

    if (typeof json === "string") {
      let lineBreak = json.replaceAll(", ", "\n");
      domText = `${lineBreak}`;
      return domText;
    }

    for (let index in json) {
      domText += `${json[index]}\n`;
    }
    return domText;
  }

  return (
    <>
      <div className="info-block">
        <SkillsList monsterDetails={monsterDetails} />

        <span className="info-item">
          <dt className="info-heading">Alignment: </dt>
          <dd>{monsterDetails.alignment}</dd>
        </span>

        <span className="info-item-column">
          <dt className="info-heading">Speed </dt>
          <dd>{parseDOMText(monsterDetails.speed)}</dd>
        </span>

        <span className="info-item-column">
          <dt className="info-heading">Senses </dt>
          <dd>{parseDOMText(monsterDetails.senses)}</dd>
        </span>

        <span className="info-item">
          <dt className="info-heading">Type: </dt>
          <dd>{monsterDetails.type}</dd>
        </span>

        {monsterDetails.languages ? (
          <span className="info-item-column">
            <dt className="info-heading">Languages </dt>
            <dd>{parseDOMText(monsterDetails.languages)}</dd>
          </span>
        ) : (
          <span className="info-item">
            <dt className="info-heading">Languages: </dt> <dd>None</dd>
          </span>
        )}

        <span className="info-item">
          <dt className="info-heading">Size: </dt>
          <dd>{monsterDetails.size}</dd>
        </span>
      </div>

      <span className="info-item-column">
        <dt className="info-heading">Damage Immunities: </dt>
        <dd>{parseDOMText(monsterDetails.damage_immunities)}</dd>
      </span>

      <span className="info-item-column">
        <dt className="info-heading">Resistances: </dt>
        <dd>{parseDOMText(monsterDetails.damage_resistances)}</dd>
      </span>

      <span className="info-item-column">
        <dt className="info-heading">Vulnerabilities: </dt>
        <dd>{parseDOMText(monsterDetails.damage_vulnerabilities)}</dd>
      </span>

      {monsterDetails.condition_immunities.length > 0 ? (
        <span className="info-item-column">
          <dt className="info-heading">Condition Immunities: </dt>
          <dl>
            {monsterDetails.condition_immunities.map((immunity) => {
              return (
                <span key={immunity.name}>
                  <dd>{immunity.name}</dd>
                  <br />
                </span>
              );
            })}
          </dl>
        </span>
      ) : (
        <span className="info-item-column">
          <dt className="info-heading">Condition Immunities: </dt> <dd>None</dd>
        </span>
      )}

      {monsterDetails.proficiencies.length > 0 ? (
        <span className="info-item-column">
          <dt className="info-heading">Proficiences: </dt>
          <dl>
            {monsterDetails.proficiencies.map((pro) => {
              return (
                <span key={pro.proficiency.name}>
                  <dt>{pro.proficiency.name}: </dt>
                  <dd>+{pro.value}</dd>
                  <br />
                </span>
              );
            })}
          </dl>
        </span>
      ) : (
        <span className="info-item-column">
          <dt className="info-heading">Proficiences: </dt>
          <dd>None</dd>
        </span>
      )}
    </>
  );
}
