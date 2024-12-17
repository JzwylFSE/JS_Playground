import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function RockPaperScissors() {
  const choices = ["rock", "paper", "scissors"];
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const playGame = (playerSelection) => {
    const computerSelection =
      choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(playerSelection);
    setComputerChoice(computerSelection);

    let gameResult = "";
    if (playerSelection === computerSelection) {
      gameResult = "IT'S A TIE!";
    } else {
      switch (playerSelection) {
        case "rock":
          gameResult =
            computerSelection === "scissors" ? "YOU WIN!" : "YOU LOSE!";
          break;
        case "paper":
          gameResult = computerSelection === "rock" ? "YOU WIN!" : "YOU LOSE!";
          break;
        case "scissors":
          gameResult = computerSelection === "paper" ? "YOU WIN!" : "YOU LOSE!";
          break;
        default:
          break;
      }
    }

    setResult(gameResult);

    if (gameResult === "YOU WIN!") {
      setPlayerScore(playerScore + 1);
    } else if (gameResult === "YOU LOSE!") {
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <>
      <Link to="/" className={styles.homeLink}>
        Home
      </Link>
      
      <div className={styles.container}>
        <h1 className={styles.heading}>Rock-Paper-Scissors</h1>
        <p className={styles.description}>
          This is the Rock Paper Scissors game. Start playing now!
        </p>

        <div className={styles.choices}>
          {choices.map((choice) => (
            <button
              key={choice}
              className={styles.choiceButton}
              onClick={() => playGame(choice)}
            >
              {choice === "rock" ? "👊" : choice === "paper" ? "✋" : "✌️"}
            </button>
          ))}
        </div>

        <div id="playerDisplay" className={styles.display}>
          PLAYER: {playerChoice.toUpperCase()}
        </div>
        <div id="computerDisplay" className={styles.display}>
          COMPUTER: {computerChoice.toUpperCase()}
        </div>
        <div
          id="resultDisplay"
          className={`${styles.resultDisplay} ${
            result === "YOU WIN!"
              ? styles.greenText
              : result === "YOU LOSE!"
              ? styles.redText
              : ""
          }`}
        >
          {result}
        </div>

        <div className={styles.scoreDisplay}>
          Player Score:{" "}
          <span id="playerScoreDisplay" className={styles.greenText}>
            {playerScore}
          </span>
        </div>
        <div className={styles.scoreDisplay}>
          Computer Score:{" "}
          <span id="computerScoreDisplay" className={styles.redText}>
            {computerScore}
          </span>
        </div>
      </div>
    </>
  );
}
