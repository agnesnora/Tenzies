import "./App.css";
import Dice from "../src/Components/Dice";
import { useState, useEffect } from "react";

/**
 * Challenge:
 *
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `allNewDice` function so it
 * loads all new dice as soon as the app loads)
 *
 * Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
 */

function App() {
  const [diceNumbers, setDiceNumbers] = useState(allNewDice());

  function allNewDice() {
    let diceArray = [];
    for (let i = 0; i < 10; i++) {
      const randomDice = Math.floor(Math.random() * 6) + 1;
      diceArray.push(randomDice);
    }

    return diceArray;
  }

  function roll() {
    setDiceNumbers(allNewDice());
  }

  const dieElement = diceNumbers.map((num) => <Dice key="" value={num} />);
  return (
    <>
      <main>
        <div className="dice--container">{dieElement}</div>
        <button className="roll--btn" onClick={roll}>
          Roll
        </button>
      </main>
    </>
  );
}

export default App;
