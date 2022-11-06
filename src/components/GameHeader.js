import React from "react";

const GameHeader = () => {
  return (
    <div className="gameHeader">
      <div>
        <h1>2048</h1>
        <div>
          <h4>SCORE</h4>
          <h5>25008</h5>
        </div>
        <div>
          <h4>BEST</h4>
          <h5>25008</h5>
        </div>
      </div>
      <p>
        Join the numbers and get to the <strong>2048</strong> tile!
      </p>
    </div>
  );
};

export default GameHeader;
