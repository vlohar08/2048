import React from "react";

const Tile = ({ x, y, number }) => {
  return (
    <div
      className={`tile x${number}`}
      style={{
        top: `calc(${y} * (var(--cell-size) + var(--cell-gap)) + var(--cell-gap))`,
        left: `calc(${x} * (var(--cell-size) + var(--cell-gap)) + var(--cell-gap))`,
      }}
    >
      {number !== 0 && number}
    </div>
  );
};

export default Tile;
