import React from "react";

const GameOver = ({ message }) => {
  return (
    <div className="gameOver">
      <h2>Game Over</h2>
      <h3>{message}</h3>
    </div>
  );
};

export default GameOver;
