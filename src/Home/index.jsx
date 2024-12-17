import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import FirstComponent from "../Components/FirstComponent";

export default function RockPaperScissors() {
  return (
    <div>
      <h1>Welcome to my Home🏡 of function-based JavaScript Projects</h1>
      <p>Pick a project to see:</p>
      <ol>
        <li>
          <Link to="/Rock-Paper-Scissors">Rock Paper Scissors</Link>
        </li>
        <br />
        <li>
          <Link to="/Counter-Program">Counter Program</Link>
        </li>
        <br />
        <li>
          <Link to="/Random-Number-Generator">Random Number Generator</Link>
        </li>
        <br />
        <li>
          <Link to="/Dice-Roller">Dice Roller Program</Link>
        </li>
        <br />
        <li>
          <Link to="/Digital-Clock">Digital Clock</Link>
        </li>
        <br />
        <li>
          <Link to="/Stopwatch">Stopwatch Program</Link>
        </li>
        <br />
        <li>
          <Link to="/Weather-App">Weather App</Link>
        </li>
        <br />
        <li>
          <Link to="/Calculator">Calculator Program</Link>
        </li>
      </ol>
    </div>
  );
}
