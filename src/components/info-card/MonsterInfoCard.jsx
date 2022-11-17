import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";
import ActionsInfo from "./ActionsInfo";

export default function MonsterInfoCard({ monsterDetails, closeModal }) {
  return (
    <div className="modal">
      <section className="monster-info-card">
        <header className="modal-header">
          <h2 className="monster-name">{monsterDetails.name}</h2>
          <span className="close-x" onClick={() => closeModal()}>
            &times;
          </span>
        </header>
        <article className="modal-content">
          <dl className="core-info">
            <PrimaryInfo monsterDetails={monsterDetails} />
            <SecondaryInfo monsterDetails={monsterDetails} />
            <ActionsInfo monsterDetails={monsterDetails} />
          </dl>
          {console.log(monsterDetails)}
        </article>
      </section>
    </div>
  );
}
