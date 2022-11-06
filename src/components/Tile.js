import React from "react";

const Tile = ({ x, y }) => {
  return (
    <div
      className="tile"
      style={{
        top: `calc(${y} * (var(--cell-size) + var(--cell-gap)) + var(--cell-gap))`,
        left: `calc(${x} * (var(--cell-size) + var(--cell-gap)) + var(--cell-gap))`,
      }}
    >
      Tile
    </div>
  );
};

export default Tile;
