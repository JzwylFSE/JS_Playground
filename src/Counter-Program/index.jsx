import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function CounterProgram() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <Link to="/" className={styles.homeLink}>
        Home
      </Link>
      <div>
        {/* <label className={styles.countLabel}>{count}</label> */}
        <label
          className={`${styles.countLabel} ${
            count > 0
              ? styles.positive
              : count < 0
              ? styles.negative
              : styles.zero
          }`}
        >
          {count}
        </label>

        <br />
        <div className={styles.btnContainer}>
          <button onClick={decrease} className={styles.btns}>
            Decrease
          </button>
          <button onClick={reset} className={styles.btns}>
            Reset
          </button>
          <button onClick={increase} className={styles.btns}>
            Increase
          </button>
        </div>
      </div>
    </>
  );
}
