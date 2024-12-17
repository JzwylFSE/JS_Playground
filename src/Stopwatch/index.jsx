import React, { useState, useRef } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function Stopwatch() {
  const [time, setTime] = useState("00:00:00:00");
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);
  const startTimeRef = useRef(0);
  const elapsedTimeRef = useRef(0);

  const start = () => {
    if (!isRunning) {
      startTimeRef.current = Date.now() - elapsedTimeRef.current;
      timerRef.current = setInterval(update, 10); // Update every 10ms
      setIsRunning(true);
    }
  };

  const stop = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      elapsedTimeRef.current = Date.now() - startTimeRef.current;
      setIsRunning(false);
    }
  };

  const reset = () => {
    clearInterval(timerRef.current);
    startTimeRef.current = 0;
    elapsedTimeRef.current = 0;
    setTime("00:00:00:00");
    setIsRunning(false);
  };

  const update = () => {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTimeRef.current;

    const hours = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((elapsedTime / (1000 * 60)) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(2, "0");
    const milliseconds = String(Math.floor((elapsedTime % 1000) / 10)).padStart(2, "0");

    setTime(`${hours}:${minutes}:${seconds}:${milliseconds}`);
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.homeLink}>
        Home
      </Link>
      <h1 id="h1">Stopwatch</h1>
      <div id="container" className={styles.clockContainer}>
        <div id="display" className={styles.display}>
          {time}
        </div>
        <div id="controls" className={styles.controls}>
          <button id="startBtn" onClick={start} className={styles.button}>
            Start
          </button>
          <button id="stopBtn" onClick={stop} className={styles.button}>
            Stop
          </button>
          <button id="resetBtn" onClick={reset} className={styles.button}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
