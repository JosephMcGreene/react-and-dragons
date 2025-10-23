/**
 * calculates and returns the modifier for each of the monster's skills.
 *
 * @param  {number} skillValue An integer corresponding to the value of the skill in question, arguments derived from API data.
 *
 * @return {string} A positive or negative integer (or 0) corresponding to the modifier indicated by the raw skill number, represented as a string in case a plus sign needs to be visually added to the number.
 */
export function modifierFor(skillValue) {
  let modifier = Math.floor((skillValue - 10) / 2);

  if (modifier > 0) {
    return `+${modifier}`;
  }
  if (modifier <= 0) {
    return `${modifier}`;
  }
}
