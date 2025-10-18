import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";
import TertiaryInfo from "./TertiaryInfo";
import Resistances from "./Resistances";
import ActionsInfo from "./ActionsInfo";
import EncounterPanel from "../encounter-panel/EncounterPanel";

export default function MonsterInfoCard({ monsterDetails, closeMonsterCard }) {
  return (
    <div className="modal">
      <article className="modal-content">
        <header className="modal-header">
          <h2 className="monster-name">{monsterDetails.name}</h2>
          <span className="close-x" onClick={closeMonsterCard}>
            &times;
          </span>
        </header>

        <div className="modal-body">
          <PrimaryInfo monsterDetails={monsterDetails} />
          <SecondaryInfo monsterDetails={monsterDetails} />
          <TertiaryInfo monsterDetails={monsterDetails} />
          {/* <Resistances monsterDetails={monsterDetails} /> */}

          <ActionsInfo monsterDetails={monsterDetails} />
        </div>
      </article>

      <EncounterPanel monsterDetails={monsterDetails} />
    </div>
  );
}
