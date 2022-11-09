import React from "react";
import { useGameData } from "../context/GameContext";
import Tile from "./Tile";

const GameBoard = () => {
  const gameData = useGameData();

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
