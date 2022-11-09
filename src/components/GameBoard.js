import React from "react";
import { useGameData } from "../context/GameContext";
import Tile from "./Tile";

const GameBoard = () => {
  const gameData = useGameData();

  return (
    <div className="gameBoard">
      {gameData.board.map((row, y) => {
        return row.map((tile, x) => {
          return <Tile key={`${x}-${y}`} x={x} y={y} number={tile} />;
        });
      })}
    </div>
  );
};

export default GameBoard;
