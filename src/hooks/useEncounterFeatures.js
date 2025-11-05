import { useState } from "react";
import { singleDieRoll, rollDice, sumOfDiceRolls } from "../helpers";

export default function useEncounterFeatures(monsterDetails) {
  const [currentHitPoints, setCurrentHitPoints] = useState(
    monsterDetails.hit_points
  );
  const [encounterLogContent, setEncounterLogContent] = useState([]);

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

    if (damageModifiers.isImmune)
      return setCurrentHitPoints((prevHitPoints) => prevHitPoints);

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

  /**
   * Parses a statement of the number and type of dice to roll for a monster's action's damage and returns the component parts.
   *
   * @param {string} damageDice A string like "3d12+4" or "2d6" to be parsed into component dice parts (3, 6, and 4 in that first example)
   * @returns {Object}
   */
  function parseDamageDice(damageDice) {
    // example damageDice: "3d12+4"
    const damageDiceSplit = damageDice.split("d"); // "3d12+4" --> ["3", "12+4"]
    const damageDieSides = parseInt(damageDiceSplit[1].split("+")[0]); // "12+4" --> 12
    const damageMod = parseInt(damageDiceSplit[1]?.split("+")[1]) || 0; // "12+4" --> 4  OR  0 if no "+"

    return { damageDiceSplit, damageDieSides, damageMod };
  }

  /**
   * Rolls the necessary dice to calculate the damage a monster's action deals.
   *
   * @param {Object[]} actionDamageArray An array of objects, each object containing information concerning the amount and type of damage a monster's action is capable of.
   * @returns {Object[]} An array of objects, each object containing (1) the final damage the action deals, (2) the dice rolled to find that damage and, (3) the in-game type of damage it deals (ie, piercing, bludgeoning)
   */
  function rollActionDamage(actionDamageArray) {
    const damageArray = [];

    // Sometimes a monster's action deals more than one type of damage, so we need to iterate over all of them
    for (const damageType of actionDamageArray) {
      const damageDice = parseDamageDice(damageType.damage_dice);

      // Make an array of dice rolls
      const rollResults = rollDice(
        parseInt(damageDice.damageDiceSplit[0]), // "3" --> 3
        damageDice.damageDieSides
      );

      // Add up the damage of the dice rolls
      const finalResult = sumOfDiceRolls(rollResults) + damageDice.damageMod;

      // Add all the dice rolling info above to the list of existing damage info
      damageArray.push({
        finalDamage: finalResult,
        damageDice: damageType.damage_dice,
        damageType: damageType.damage_type.index,
      });
    }

    return damageArray;
  }

  /**
   * Takes a monster's action object, executes the necessary die rolls to represent the results as if in a real DnD game, and sets the state of the encounter log of the encounter panel to reflect the new action the monster took (ie, which button the user pressed).
   *
   * @param {{number, number | string, string}} action A destructured action object that matches the shape of the API's action monster attribute, destructured because we only need the attack bonus, damage, and name of the action.
   */
  function monsterAction({ attack_bonus, damage, name }) {
    setEncounterLogContent((prevContent) => [
      ...prevContent,
      {
        actionName: name,
        toHit: singleDieRoll(20) + attack_bonus || "Guaranteed", // Might return NaN
        damage: rollActionDamage(damage),
      },
    ]);
  }

  return [
    currentHitPoints,
    setCurrentHitPoints,
    dealDamage,
    monsterAction,
    encounterLogContent,
  ];
}
