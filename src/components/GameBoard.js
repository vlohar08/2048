import React from "react";
import { useGameData } from "../context/GameContext";
import GameOver from "./GameOver";
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
      <GameOver />
    </div>
  );
};

export default GameBoard;
