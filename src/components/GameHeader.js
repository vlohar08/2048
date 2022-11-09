import React from "react";
import { useGameData, useUpdateGame } from "../context/GameContext";
import startNewGame from "../utils/startNewGame";

const GameHeader = () => {
  const gameData = useGameData();
  const updateGame = useUpdateGame();

  return (
    <div className="gameHeader">
      <div>
        <h1>2048</h1>
        <div>
          <h4>SCORE</h4>
          <h5>{gameData.score}</h5>
        </div>
        <div>
          <h4>BEST</h4>
          <h5>{gameData.bestScore}</h5>
        </div>
      </div>
      <p>
        Join the numbers and get to the <strong>2048</strong> tile!
      </p>
      <button
        disabled={gameData.isReplaying}
        type="button"
        onClick={() => startNewGame(updateGame)}
      >
        New Game
      </button>
    </div>
  );
};

export default GameHeader;
