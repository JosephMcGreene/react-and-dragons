import { useState } from "react";
//Hooks
import useEncounterFeatures from "../../hooks/useEncounterFeatures";
//Components
import DamageModal from "./DamageModal";
import LegendaryActions from "./LegendaryActions";

export default function EncounterPanel({ monsterDetails }) {
  const [panelExtended, setPanelExtended] = useState(false);
  const [damageModalShown, setDamageModalShown] = useState(false);
  const [currentHitPoints, setCurrentHitPoints, dealDamage, monsterAction] =
    useEncounterFeatures(monsterDetails);

  const filteredActions = monsterDetails.actions.filter(
    (action) => action.attack_bonus
  );

  return (
    <aside>
      {/* prettier-ignore */}
      <button
        className={panelExtended ? "panel-extender extender-extended" : "panel-extender"}
        onClick={() => setPanelExtended(!panelExtended)}
      >
        {panelExtended ? "<<" : "Encounter >>"}
      </button>

      {/* prettier-ignore */}
      <div className={panelExtended ? "encounter-panel extended" : "encounter-panel"}>
        <h2 className="encounter-monster-name">
          {monsterDetails.name}
        </h2>

        <h3
          className="encounter-hit-points"
          onClick={() => setDamageModalShown(!damageModalShown)}
        >
          Hit Points: {currentHitPoints} / {monsterDetails.hit_points}
        </h3>

        {damageModalShown && (
          <DamageModal
            onDamage={(damageInfo) => {
              dealDamage(damageInfo);
              setDamageModalShown(!damageModalShown);
            }}
            onResetHP={() => {
              setCurrentHitPoints(monsterDetails.hit_points);
              setDamageModalShown(!damageModalShown);
            }}
          />
        )}

        <h3 className="encounter-actions-heading">
          Action Rolls:
        </h3>
        <ul className="encounter-action-list">
          {filteredActions.map((action, index) => (
            <li key={action + index}>
              {action.name !== "Multiattack" && (
                <button
                  className="action-btn"
                  onClick={() => monsterAction(action)}
                >
                  Use {action.name}
                </button>
              )}
            </li>
          ))}
        </ul>

        {monsterDetails.legendary_actions.length > 0 && <LegendaryActions />}
      </div>
    </aside>
  );
}
