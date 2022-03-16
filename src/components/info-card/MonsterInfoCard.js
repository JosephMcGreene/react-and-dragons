// TODO Figure out this component's layout
// TODO Render immunities, resistances, vulernabilities, etc. better, traits that are presented as arrays in the json, See SecondaryInfo.js
import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";
import ActionsInfo from "./ActionsInfo";

export default function MonsterInfoCard({ monsterInfo }) {
  return (
    <section className="monster-info">
      <div id="monsterScrollTo"></div>
      <h2 id="monster-name">{monsterInfo.name}</h2>
      {monsterInfo.index ? (
        <div className="main-info">
          <PrimaryInfo monsterInfo={monsterInfo} />
          <SecondaryInfo monsterInfo={monsterInfo} />
          <ActionsInfo monsterInfo={monsterInfo} />
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
