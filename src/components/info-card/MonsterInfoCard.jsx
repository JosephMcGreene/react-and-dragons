import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";
import ActionsInfo from "./ActionsInfo";

export default function MonsterInfoCard({ monsterDetails, closeMonsterCard }) {
  return (
    <div className="modal">
      <section className="monster-info-card">
        <header className="modal-header">
          <h2 className="monster-name">{monsterDetails.name}</h2>
          <span className="close-x" onClick={() => closeMonsterCard()}>
            &times;
          </span>
        </header>
        <dl className="modal-content">
          <PrimaryInfo monsterDetails={monsterDetails} />
          <SecondaryInfo monsterDetails={monsterDetails} />
          <ActionsInfo monsterDetails={monsterDetails} />
        </dl>
        {console.log(monsterDetails)}
      </section>
    </div>
  );
}
