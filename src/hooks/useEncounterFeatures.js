import { useState } from "react";
import { singleDieRoll } from "../dice-logic/rolls";

export default function useEncounterFeatures(monsterDetails) {
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
    const { damage_immunities, damage_resistances, damage_vulnerabilities } =
      monsterDetails;
    const { damage, damageType, weaponIsMagical } = damageInfo;

    // prettier-ignore
    const damageModifiers = {
      isImmune: isDamageModified(damage_immunities, damageType, weaponIsMagical),
      isResistant: isDamageModified(damage_resistances, damageType, weaponIsMagical),
      isVulnerable: isDamageModified(damage_vulnerabilities, damageType, weaponIsMagical),
    };

    if (damageModifiers.isImmune) return;

    // prettier-ignore
    if (damageModifiers.isResistant) {
      return setCurrentHitPoints((prevHitPoints) => prevHitPoints - Math.ceil(damage / 2));
    }
    // prettier-ignore
    if (damageModifiers.isVulnerable) {
      return setCurrentHitPoints((prevHitPoints) => prevHitPoints - damage * 2);
    }
    // prettier-ignore
    return setCurrentHitPoints((prevHitPoints) => prevHitPoints - damageInfo.damage);
  }

  function monsterAction(action) {
    if (action.attack_bonus) {
      const rollResult = singleDieRoll(20);
      const rollFinal = rollResult + action.attack_bonus;

      console.log(
        `${rollFinal} (${rollResult} + ${action.attack_bonus}) to hit`
      );
    }

    if (action.damage.length > 0) {
      for (const damageType of action.damage) {
        console.log(damageType.damage_dice);
      }
    } else {
      console.log("no damage");
    }
  }

  return [currentHitPoints, setCurrentHitPoints, dealDamage, monsterAction];
}
