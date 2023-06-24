import { useState } from "react";
//Components
import DamageModal from "./DamageModal";
import LegendaryActions from "./LegendaryActions";

export default function EncounterPanel({ monsterDetails }) {
  const [panelExtended, setPanelExtended] = useState(false);
  const [damageModalShown, setDamageModalShown] = useState(false);

  return (
    <>
      <div
        className={
          panelExtended ? "encounter-panel extended" : "encounter-panel"
        }
      >
        <h2 className="encounter-monster-name">{monsterDetails.name}</h2>

        <h3
          className="encounter-hit-points"
          onClick={() => setDamageModalShown(!damageModalShown)}
        >
          Hit Points: {monsterDetails.hit_points} / {monsterDetails.hit_points}
        </h3>
        {damageModalShown && <DamageModal />}

        <h3 className="encounter-actions-heading">Actions:</h3>
        <ul className="encounter-action-list">
          {monsterDetails.actions.map((action, index) => {
            return (
              <li key={action + index}>
                <button className="action-btn">Use {action.name}</button>
              </li>
            );
          })}
        </ul>

        {monsterDetails.legendary_actions.length > 0 && <LegendaryActions />}

        {console.log(monsterDetails)}
      </div>
      <button
        className={
          panelExtended ? "panel-extender extender-extended" : "panel-extender"
        }
        onClick={() => setPanelExtended(!panelExtended)}
      >
        {panelExtended ? "<<" : "Encounter >>"}
      </button>
    </>
  );
}
