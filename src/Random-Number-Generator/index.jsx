import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function RandomNumberGenerator() {
  const [randomNumbers, setRandomNumbers] = useState([0, 0, 0]);
  const min = 1;
  const max = 100;

  const rollNumbers = () => {
    const newNumbers = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * max) + min
    );
    setRandomNumbers(newNumbers);
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.homeLink}>
        Home
      </Link>
      <div className={styles.content}>
        <h2>Get 3 random numbers from 0 to 100</h2>
        <button onClick={rollNumbers} className={styles.myBtn}>
          Roll Numbers
        </button>
        <div className={styles.results}>
          {randomNumbers.map((num, index) => (
            <div key={index} className={styles.resultBox}>
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
