import { useState } from "react";

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

    if (damageModifiers.isImmune) return;

    if (damageModifiers.isResistant) {
      return setCurrentHitPoints(
        (prevHitPoints) => prevHitPoints - Math.ceil(damageInfo.damage / 2)
      );
    }
    if (damageModifiers.isVulnerable) {
      return setCurrentHitPoints(
        (prevHitPoints) => prevHitPoints - damageInfo.damage * 2
      );
    }

    return setCurrentHitPoints(
      (prevHitPoints) => prevHitPoints - damageInfo.damage
    );
  }

  return [currentHitPoints, setCurrentHitPoints, dealDamage];
}
