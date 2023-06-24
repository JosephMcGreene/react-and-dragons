import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";
import ActionsInfo from "./ActionsInfo";
import EncounterPanel from "../encounter-panel/EncounterPanel";

export default function MonsterInfoCard({ monsterDetails, closeMonsterCard }) {
  return (
    <div className="modal">
      <section className="modal-content">
        <header className="modal-header">
          <h2 className="monster-name">{monsterDetails.name}</h2>
          <span className="close-x" onClick={() => closeMonsterCard()}>
            &times;
          </span>
        </header>
        <dl className="modal-body">
          <PrimaryInfo monsterDetails={monsterDetails} />
          <SecondaryInfo monsterDetails={monsterDetails} />
          <ActionsInfo monsterDetails={monsterDetails} />
        </dl>
      </section>

      <EncounterPanel monsterDetails={monsterDetails} />
    </div>
  );
}
