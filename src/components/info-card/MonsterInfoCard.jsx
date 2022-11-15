import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";
import ActionsInfo from "./ActionsInfo";

export default function MonsterInfoCard({ monsterDetails, closeModal }) {
  return (
    <div className="modal">
      <section className="monster-info-card">
        <div className="modal-header">
          <div className="close-x" onClick={() => closeModal()}>
            &times;
          </div>
        </div>
        <article className="modal-content">
          <h2 className="monster-name">{monsterDetails.name}</h2>
          <div className="core-info">
            {console.log(monsterDetails)}
            {/* <PrimaryInfo monsterInfo={monsterDetails} />
          <SecondaryInfo monsterInfo={monsterDetails} />
          <ActionsInfo monsterInfo={monsterDetails} /> */}
          </div>
        </article>
      </section>
    </div>
  );
}
