import "./App.css";
import Dice from "../src/Components/Dice";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

/**
 * Challenge: Update the `holdDice` function to flip
 * the `isHeld` property on the object in the array
 * that was clicked, based on the `id` prop passed
 * into the function.
 *
 * Hint: as usual, there's > 1 way to accomplish this.
 * I'll be using `dice.map()` and checking for the `id`
 * of the die to determine which one to flip `isHeld` on,
 * but you can do whichever way makes the most sense to you.
 */

function App() {
  const [diceNumbers, setDiceNumbers] = useState(allNewDice());

  function allNewDice() {
    let diceArray = [];
    for (let i = 0; i < 10; i++) {
      const randomDice = Math.floor(Math.random() * 6) + 1;
      diceArray.push({ value: randomDice, isHeld: true, id: nanoid() });
    }

    return diceArray;
  }

  function roll() {
    setDiceNumbers(allNewDice());
  }

  function holdDice(id) {
    setDiceNumbers((oldDice) =>
      oldDice.map((item) => {
        if (item.id === id) {
          return { ...item, isHeld: !item.isHeld };
        } else {
          return { ...item };
        }
      })
    );
  }

  const dieElement = diceNumbers.map((num) => (
    <Dice
      key={num.id}
      value={num.value}
      isHeld={num.isHeld}
      holdDice={() => holdDice(num.id)}
      id={num.id}
    />
  ));
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
