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
 * Rolls the specified number of dice with the specified number of sides on each die and returns the individual roll results.
 *
 * @param   {number}   numOfDice  The total number of dice to be rolled
 * @param   {number}   numOfSides The number of sides of each individual die
 * @returns {number[]}            Array containing the results of all dice rolls.
 */
export function rollDice(numOfDice, numOfSides) {
  const rollResults = [];

  for (let i = 0; i < numOfDice; i++) {
    rollResults.push(singleDieRoll(numOfSides));
  }

  return rollResults;
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
