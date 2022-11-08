import React from "react";
import { useGameData, useUpdateGame } from "../context/GameContext";
import handleRedo from "../utils/handleRedo";
import handleUndo from "../utils/handleUndo";

const GameFooter = () => {
  const gameData = useGameData();
  const updateGame = useUpdateGame();
  return (
    <div className="gameFooter">
      {gameData.undo && (
        <figure onClick={() => handleUndo(gameData.undo, updateGame)}>
          <img src="/assets/undo-btn.webp" alt="undo" />
          <figcaption>Undo</figcaption>
        </figure>
      )}
      <figure>
        <img src="/assets/play-btn.webp" alt="replay" />
        <figcaption>Replay</figcaption>
      </figure>
      {gameData.redo && (
        <figure onClick={() => handleRedo(gameData.redo, updateGame)}>
          <img src="/assets/redo-btn.webp" alt="redo" />
          <figcaption>Redo</figcaption>
        </figure>
      )}
    </div>
  );
};

export default GameFooter;
