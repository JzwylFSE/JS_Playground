import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const appendToDisplay = (input) => {
    setDisplay((prev) => prev + input);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <>
      <Link to="/" className={styles.homeLink}>
        Home
      </Link>
      <div className={styles.calculator}>
        <input className={styles.display} value={display} readOnly />
        <div className={styles.keys}>
          {["+", "-", "*", "/"].map((op) => (
            <button
              key={op}
              onClick={() => appendToDisplay(op)}
              className={styles.operatorBtn}
            >
              {op}
            </button>
          ))}
          {Array.from({ length: 10 }, (_, i) => i).map((num) => (
            <button key={num} onClick={() => appendToDisplay(num.toString())}>
              {num}
            </button>
          ))}
          <button onClick={() => appendToDisplay(".")}>.</button>
          <button onClick={calculate} className={styles.equalsBtn}>
            =
          </button>
          <button onClick={clearDisplay} className={styles.clearBtn}>
            C
          </button>
        </div>
      </div>
    </>
  );
}
