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

/**
 * Rolls the specified number of dice with the specified number of sides on each die and returns the individual roll results.
 *
 * @param   {number | string}   numOfDice  The total number of dice to be rolled
 * @param   {number | string}   numOfSides The number of sides of each individual die
 * @returns {number[]}                     Array containing the results of all dice rolls.
 */
export function rollDice(numOfDice, numOfSides) {
  const rollResults = [];

  for (let i = 0; i < parseInt(numOfDice); i++) {
    rollResults.push(singleDieRoll(parseInt(numOfSides)));
  }

  return rollResults;
}

/**
 * Returns a random number representing the result a single roll of a single die.
 *
 * @param   {number} numOfSides The number of sides of the specified die to roll.
 * @returns {number}            A randomly generated integer representing the roll of the die.
 */
export function singleDieRoll(numOfSides) {
  return Math.floor(Math.random() * numOfSides) + 1;
}

/**
 * Returns the sum of the results of a specified group of dice rolls
 *
 * @param   {number[]} rolls The dice rolls to be summed up
 * @returns {number}         The sum of the specified dice rolls
 */
export function sumOfDiceRolls(rolls) {
  return rolls.reduce((rollTotal, currentRoll) => rollTotal + currentRoll);
}
