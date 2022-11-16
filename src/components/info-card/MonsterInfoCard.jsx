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
            {/* Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="40"
              className="close-x"
            >
              <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
            </svg>
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
