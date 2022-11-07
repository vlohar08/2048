import React, { useEffect } from "react";
import { useGameData, useUpdateGame } from "../context/GameContext";
import handleKeyPress from "../utils/handleKeyPress";
import Tile from "./Tile";

const GameBoard = () => {
  const updateGame = useUpdateGame();
  const gameData = useGameData();

  useEffect(() => {
    const handler = (e) => {
      e.stopImmediatePropagation();
      handleKeyPress(e.key, gameData.board, updateGame);
    };
    document.addEventListener("keyup", handler);
    return () => document.removeEventListener("keyup", handler);
  }, [gameData, updateGame]);

  return (
    <div className="gameBoard">
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      {gameData.board.map((row, y) => {
        return row.map((tile, x) => {
          if (tile !== 0) {
            return <Tile key={`${x}-${y}`} x={x} y={y} number={tile} />;
          }
        });
      })}
    </div>
  );
};

export default GameBoard;
