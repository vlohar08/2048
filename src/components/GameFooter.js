import React from "react";
import { useGameData, useUpdateGame } from "../context/GameContext";
import handleRedo from "../utils/handleRedo";
import handleReplay from "../utils/handleReplay";
import handleUndo from "../utils/handleUndo";

const GameFooter = () => {
  const gameData = useGameData();
  const updateGame = useUpdateGame();
  return (
    <div className="gameFooter">
      <figure
        style={{ pointerEvents: gameData.undo ? "all" : "none" }}
        onClick={() => handleUndo(gameData, updateGame)}
      >
        <img src="/assets/undo-btn.webp" alt="undo" />
        <figcaption>Undo</figcaption>
      </figure>
      <figure
        style={{ pointerEvents: gameData.replay.length > 1 ? "all" : "none" }}
        onClick={() => handleReplay(gameData, updateGame)}
      >
        <img src="/assets/play-btn.webp" alt="replay" />
        <figcaption>Replay</figcaption>
      </figure>
      <figure
        style={{ pointerEvents: gameData.redo ? "all" : "none" }}
        onClick={() => handleRedo(gameData, updateGame)}
      >
        <img src="/assets/redo-btn.webp" alt="redo" />
        <figcaption>Redo</figcaption>
      </figure>
    </div>
  );
};

export default GameFooter;
