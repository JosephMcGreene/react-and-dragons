import { useState } from "react";
//Components
import Actions from "./Actions";
import EncounterHitPoints from "./EncounterHitPoints";
import EncounterLog from "./EncounterLog";
import ExtenderButton from "./ExtenderButton";
import LegendaryActions from "./LegendaryActions";
//Hooks
import useEncounterFeatures from "../../hooks/useEncounterFeatures";

export default function EncounterPanel({ monsterDetails }) {
  const [panelExtended, setPanelExtended] = useState(false);
  const [damageModalShown, setDamageModalShown] = useState(false);
  const [, , , monsterAction, encounterLogContent, setEncounterLogContent] =
    useEncounterFeatures(monsterDetails);

  return (
    <div>
      <ExtenderButton
        panelExtended={panelExtended}
        setPanelExtended={setPanelExtended}
      />

      <aside
        // prettier-ignore
        className={panelExtended ? "encounter-panel extended" : "encounter-panel"}
      >
        <h2 className="encounter-monster-name">{monsterDetails.name}</h2>

        <EncounterHitPoints
          monsterDetails={monsterDetails}
          damageModalShown={damageModalShown}
          setDamageModalShown={setDamageModalShown}
        />

        <Actions
          monsterDetails={monsterDetails}
          monsterAction={monsterAction}
        />

        {monsterDetails.legendary_actions.length > 0 && (
          <LegendaryActions monsterDetails={monsterDetails} />
        )}

        <EncounterLog
          encounterLogContent={encounterLogContent}
          setEncounterLogContent={() => setEncounterLogContent([])}
        />
      </aside>
    </div>
  );
}
