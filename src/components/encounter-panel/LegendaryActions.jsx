import { useState } from "react";

export default function LegendaryActions({ monsterDetails }) {
  const { legendary_actions } = monsterDetails;

  const [availableLAs, setAvailableLAs] = useState(legendary_actions.length);

  return (
    <div className="encounter-legendary-actions">
      <h3 className="leg-actions-heading">Legendary Actions:</h3>

      <button
        className="action-btn"
        onClick={() =>
          setAvailableLAs((prevCount) =>
            prevCount > 0 ? prevCount - 1 : legendary_actions.length
          )
        }
      >
        {availableLAs}/{legendary_actions.length}
      </button>
    </div>
  );
}
