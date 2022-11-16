import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";
import ActionsInfo from "./ActionsInfo";

export default function MonsterInfoCard({ monsterDetails, closeModal }) {
  return (
    <div className="modal">
      <section className="monster-info-card">
        <div className="modal-header">
          <h2 className="monster-name">{monsterDetails.name}</h2>
          <div className="close-x" onClick={() => closeModal()}>
            &times;
          </div>
        </div>
        <div className="modal-content">
          <div className="core-info">
            <PrimaryInfo monsterDetails={monsterDetails} />
            <SecondaryInfo monsterDetails={monsterDetails} />
            {/* <ActionsInfo monsterInfo={monsterDetails} /> */}
          </div>
          {console.log(monsterDetails)}
        </div>
      </section>
    </div>
  );
}
