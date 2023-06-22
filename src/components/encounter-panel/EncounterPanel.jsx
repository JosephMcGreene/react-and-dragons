import { useState } from "react";
import Die from "./Die";

export default function EncounterPanel({ monsterDetails }) {
  const [panelExtended, setPanelExtended] = useState(true);

  return (
    <div
      className={panelExtended ? "encounter-panel extended" : "encounter-panel"}
    >
      {console.log(monsterDetails)}
      <Die />
      <button
        className="panel-extender"
        onClick={() => setPanelExtended(!panelExtended)}
      >
        {panelExtended ? "<<" : "Encounter Panel >>"}
      </button>
    </div>
  );
}
