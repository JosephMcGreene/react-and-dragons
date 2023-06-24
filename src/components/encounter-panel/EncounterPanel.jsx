import { useState } from "react";

export default function EncounterPanel({ monsterDetails }) {
  const [panelExtended, setPanelExtended] = useState(false);
  const [availableLegendaryActions, setAvailableLegendaryActions] = useState(3);

  return (
    <div
      className={panelExtended ? "encounter-panel extended" : "encounter-panel"}
    >
      <h2 className="encounter-monster-name">{monsterDetails.name}</h2>

      <h3 className="encounter-hit-points">
        Hit Points: {monsterDetails.hit_points} / {monsterDetails.hit_points}
      </h3>

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

      <h3 className="encounter-actions-heading">Special Abilities:</h3>
      <ul className="encounter-action-list">
        {monsterDetails.special_abilities.map((ability, index) => {
          return (
            <li key={ability + index}>
              <button className="action-btn">Use {ability.name}</button>
            </li>
          );
        })}
      </ul>

      {monsterDetails.legendary_actions.length > 0 && (
        <div className="encounter-legendary-actions">
          <h3
            className="leg-actions-heading"
            onClick={() => setAvailableLegendaryActions(3)}
          >
            Legendary Actions Available:{" "}
          </h3>
          <h3
            className="leg-actions-number"
            onClick={() =>
              setAvailableLegendaryActions((prevCount) =>
                prevCount > 0 ? prevCount - 1 : prevCount
              )
            }
          >
            {availableLegendaryActions}
            {console.log(availableLegendaryActions)}
          </h3>
        </div>
      )}

      <button
        className="panel-extender"
        onClick={() => setPanelExtended(!panelExtended)}
      >
        {panelExtended ? "<<" : "Encounter >>"}
      </button>

      {console.log(monsterDetails)}
    </div>
  );
}
