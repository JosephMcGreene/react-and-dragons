// TODO Figure out this component's layout
// TODO Render immunities, resistances, vulernabilities, etc. better, traits that are presented as arrays in the json, See SecondaryInfo.js
import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";

function MonsterInfoCard({ monsterInfo }) {
  return (
    <>
      <div id="monsterScrollTo"></div>
      <section id="monster-info">
        {monsterInfo ? <h2 id="monster-name">{monsterInfo.name}</h2> : ""}
        <PrimaryInfo monsterInfo={monsterInfo} />
        <SecondaryInfo monsterInfo={monsterInfo} />
      </section>
    </>
  );
}

export default MonsterInfoCard;
