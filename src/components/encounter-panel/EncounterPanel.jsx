import { useState } from "react";
//Components
import DamageModal from "./DamageModal";
import LegendaryActions from "./LegendaryActions";

export default function EncounterPanel({ monsterDetails }) {
  const [panelExtended, setPanelExtended] = useState(false);
  const [damageModalShown, setDamageModalShown] = useState(false);
  const [currentHitPoints, setCurrentHitPoints] = useState(
    monsterDetails.hit_points
  );

  function isDamageModified(modifierType, damageType, weaponIsMagical) {
    for (let i = 0; i < modifierType.length; i++) {
      if (!weaponIsMagical && modifierType[i].includes(damageType)) {
        return true;
      }

      if (weaponIsMagical && modifierType[i].includes("from nonmagical")) {
        if (modifierType[i].includes(damageType)) {
          return false;
        }
      }

      if (modifierType[i].includes(damageType)) return true;
    }

    return false;
  }

  function dealDamage(damageInfo) {
    const damageModifiers = {
      isImmune: isDamageModified(
        monsterDetails.damage_immunities,
        damageInfo.damageType,
        damageInfo.weaponIsMagical
      ),
      isResistant: isDamageModified(
        monsterDetails.damage_resistances,
        damageInfo.damageType,
        damageInfo.weaponIsMagical
      ),
      isVulnerable: isDamageModified(
        monsterDetails.damage_vulnerabilities,
        damageInfo.damageType,
        damageInfo.weaponIsMagical
      ),
    };

    if (damageModifiers.isImmune) {
      return;
    }
    if (damageModifiers.isResistant) {
      return setCurrentHitPoints(
        (prevHitPoints) => prevHitPoints - Math.floor(damageInfo.damage / 2 + 1)
      );
    }
    if (damageModifiers.isVulnerable) {
      return setCurrentHitPoints(
        (prevHitPoints) => prevHitPoints - damageInfo.damage * 2
      );
    }
  }

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
          Hit Points: {currentHitPoints} / {monsterDetails.hit_points}
        </h3>
        {damageModalShown && (
          <DamageModal onDamage={(damageInfo) => dealDamage(damageInfo)} />
        )}

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
