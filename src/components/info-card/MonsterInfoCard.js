// TODO Render immunities, resistances, vulernabilities, etc. better, traits that are presented as arrays in the json, See SecondaryInfo.js
import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";
import ActionsInfo from "./ActionsInfo";

export default function MonsterInfoCard({ monsterInfo }) {
  function parseObject(object) {
    let domText = "";
    for (let prop in object) {
      domText += ` ${prop}, ${object[prop]};`;
    }
    return domText;
  }

  function parseArray(array) {
    let domText = "";
    for (let index in array) {
      domText += ` ${array[index]};`;
    }
    return domText;
  }

  return (
    <section className="monster-info">
      <div id="monsterScrollTo"></div>
      <h2 id="monster-name">{monsterInfo.name}</h2>
      {monsterInfo.index ? (
        <div className="main-info">
          <PrimaryInfo
            monsterInfo={monsterInfo}
            parseObject={parseObject}
            parseArray={parseArray}
          />
          <SecondaryInfo monsterInfo={monsterInfo} parseArray={parseArray} />
          <ActionsInfo monsterInfo={monsterInfo} parseArray={parseArray} />
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
