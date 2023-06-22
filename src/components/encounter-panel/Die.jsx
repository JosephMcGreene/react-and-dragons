import { useState } from "react";
import { rollDice, sumOfDiceRolls } from "../../dice-logic/rolls";

export default function Die({ dieType }) {
  const [rollTotal, setRollTotal] = useState(0);
  const [diceNumber, setDiceNumber] = useState(1);
  const [sidesOnDice, setSidesOnDice] = useState(20);

  function handleDiceRolls() {
    setRollTotal(sumOfDiceRolls(rollDice(diceNumber, sidesOnDice)));
  }

  return (
    <>
      <h3>{dieType}</h3>
      <form className="encounter-form">
        <label htmlFor={dieType}>Number of dice: </label>
        <input
          type="number"
          name={dieType}
          min="1"
          max="100"
          value={diceNumber}
          onChange={(e) => {
            setDiceNumber(parseInt(e.target.value));
          }}
        />

        <button onClick={() => handleDiceRolls()}>Roll</button>
      </form>
      <p>[Results go Here]</p>
    </>
  );
}
