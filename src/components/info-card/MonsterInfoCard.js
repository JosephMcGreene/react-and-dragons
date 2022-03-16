// TODO Render immunities, resistances, vulernabilities, etc. better, traits that are presented as arrays in the json
import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";
import ActionsInfo from "./ActionsInfo";

export default function MonsterInfoCard({ monsterInfo }) {
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
    <section className="monster-info">
      <div id="monsterScrollTo"></div>
      <h2 id="monster-name">{monsterInfo.name}</h2>
      {monsterInfo.index ? (
        <div className="main-info">
          <PrimaryInfo monsterInfo={monsterInfo} parseDOMText={parseDOMText} />
          <SecondaryInfo
            monsterInfo={monsterInfo}
            parseDOMText={parseDOMText}
          />
          <ActionsInfo monsterInfo={monsterInfo} parseDOMText={parseDOMText} />
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
