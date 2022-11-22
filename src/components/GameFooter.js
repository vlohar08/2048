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
      <div>
        <svg
          style={{ pointerEvents: gameData.undo ? "all" : "none" }}
          onClick={() => handleUndo(gameData, updateGame)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.222 18.917c5.666-5.905-.629-10.828-5.011-7.706l1.789 1.789h-6v-6l1.832 1.832c7.846-6.07 16.212 4.479 7.39 10.085z" />
        </svg>
        <p>Undo</p>
      </div>
      <div>
        <svg
          style={{ pointerEvents: gameData.replay.length > 1 ? "all" : "none" }}
          onClick={() => handleReplay(gameData, updateGame)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
        </svg>
        <p>Replay</p>
      </div>
      <div>
        <svg
          style={{ pointerEvents: gameData.redo ? "all" : "none" }}
          onClick={() => handleRedo(gameData, updateGame)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M22 12c0 5.514-4.486 10-10 10s-10-4.486-10-10 4.486-10 10-10 10 4.486 10 10zm-22 0c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm16.168-3.168l1.832-1.832v6h-6l1.789-1.789c-4.382-3.121-10.677 1.802-5.011 7.706-8.822-5.606-.456-16.155 7.39-10.085z" />
        </svg>
        <p>Redo</p>
      </div>
    </div>
  );
};

export default GameFooter;
