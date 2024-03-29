import { useState } from "react";

export default function LegendaryActions() {
  const [availableLegendaryActions, setAvailableLegendaryActions] = useState(3);

  return (
    <div className="encounter-legendary-actions">
      <h3
        className="leg-actions-heading"
        onClick={() => setAvailableLegendaryActions(3)}
      >
        Legendary Actions Available:{" "}
      </h3>
      <button
        className="action-btn"
        onClick={() =>
          setAvailableLegendaryActions((prevCount) =>
            prevCount > 0 ? prevCount - 1 : prevCount
          )
        }
      >
        {availableLegendaryActions}
      </button>
    </div>
  );
}
