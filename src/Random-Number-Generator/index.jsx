import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function RandomNumberGenerator() {
  const [randomNumbers, setRandomNumbers] = useState([0, 0, 0, 0, 0]);
  const [guessedNumbers, setGuessedNumbers] = useState([]);
  const min = 1;
  const max = 250;

  const targetNumbers = [3, 9, 27, 81, 243];

  const rollNumbers = () => {
    if (guessedNumbers.length === targetNumbers.length) 
      return;
    const numbersSet = new Set();

    while (numbersSet.size < 5) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbersSet.add(randomNumber);
    }

    const newNumbers = Array.from(numbersSet);
    setRandomNumbers(newNumbers);

    const newGuesses = targetNumbers.filter(
      (num) => newNumbers.includes(num) && !guessedNumbers.includes(num)
    );

    setGuessedNumbers([...guessedNumbers, ...newGuesses]);
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.homeLink}>
        Home
      </Link>
      <h2>Guess correctly 5 random numbers between 1 and 250</h2>
      <div className={styles.results}>
        {randomNumbers.map((num, index) => (
          <div
            key={index}
            className={`${styles.resultBox} ${
              guessedNumbers.includes(num) ? styles.guessed : ""
            }`}
          >
            {num}
          </div>
        ))}
      </div>
      <button
        onClick={rollNumbers}
        disabled={guessedNumbers.length === targetNumbers.length}
        className={styles.rollButton}
      >
        Roll Numbers
      </button>
      <div className={styles.status}>
        {guessedNumbers.length === targetNumbers.length ? (
          <p className={styles.statussuccess}>You did it!🎉 You guessed all the numbers!</p>
        ) : (
          <p>
            Guessed Numbers: {guessedNumbers.join(", ")} (
            {targetNumbers.length - guessedNumbers.length} left)
          </p>
        )}
      </div>
    </div>
  );
}
