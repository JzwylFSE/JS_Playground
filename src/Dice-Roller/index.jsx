import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function DiceRoller() {
  const [numOfDice, setNumOfDice] = useState(1);
  const [diceValues, setDiceValues] = useState([]);

  const rollDice = () => {
    const values = [];

    for (let i = 0; i < numOfDice; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
    }

    setDiceValues(values);
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.homeLink}>Home</Link>
      <h1>Dice Roller</h1>

      <label htmlFor="numOfDice">Number of Dice:</label>
      <input
        type="number"
        id="numOfDice"
        value={numOfDice}
        min="1"
        onChange={(e) => setNumOfDice(Number(e.target.value))}
        className={styles.input}
      />

      <button onClick={rollDice} className={styles.button}>Roll Dice</button>

      <div id="diceResult" className={styles.diceResult}>
        Dice: {diceValues.join(", ")}
      </div>

      <div id="diceImages" className={styles.diceImages}>
        {diceValues.map((value, index) => (
          <img
            key={index}
            src={`dice_images/${value}.png`}
            alt={`Dice showing ${value}`}
            className={styles.diceImage}
          />
        ))}
      </div>
    </div>
  );
}
