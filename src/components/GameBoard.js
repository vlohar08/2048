import React, { useEffect } from "react";
import { useGameContext, useGameUpdateContext } from "../context/GameContext";
import addNewTile from "../utils/addNewTile";
import Tile from "./Tile";

const GameBoard = () => {
  const updateGame = useGameUpdateContext();
  const game = useGameContext();

  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      e.stopImmediatePropagation();
      addNewTile(game.board, updateGame);
    });
  }, []);

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
      {game.board.map((row, y) => {
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
