import { useGameData, useUpdateGame } from "../context/GameContext";
import startNewGame from "../utils/startNewGame";

const GameOver = () => {
  const gameData = useGameData();
  const updateGame = useUpdateGame();
  return (
    <>
      {gameData.hasWon && !gameData.isReplaying && (
        <img className="gameOver" src="assets/2048.gif" alt="win" />
      )}
      {gameData.hasLost && !gameData.isReplaying && (
        <>
          <img className="gameOver" src="assets/game-over.gif" alt="win" />
          <img
            onClick={() => startNewGame(updateGame)}
            style={{ cursor: "pointer" }}
            className="gameOver"
            src="assets/try-again.gif"
            alt="win"
          />
        </>
      )}
    </>
  );
};

export default GameOver;
