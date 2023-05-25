import "./App.css";
import Dice from "../src/Components/Dice";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [diceNumbers, setDiceNumbers] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = diceNumbers.every((die) => die.isHeld);
    const firstValue = diceNumbers[0].value;
    const allSameValue = diceNumbers.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [diceNumbers]);

  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  }
  function allNewDice() {
    let diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(generateNewDie());
    }

    return diceArray;
  }

  function roll() {
    if (!tenzies) {
      setDiceNumbers((oldDice) =>
        oldDice.map((item) => (item.isHeld ? item : generateNewDie()))
      );
    } else {
      setTenzies(false);
      setDiceNumbers(allNewDice);
    }
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
        {tenzies ? <Confetti /> : ""}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice--container">{dieElement}</div>
        <button className="roll--btn" onClick={roll}>
          {tenzies ? "New Game" : "Roll"}
        </button>
      </main>
    </>
  );
}

export default App;
