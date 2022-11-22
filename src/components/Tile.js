import React from "react";

const Tile = ({ x, y, number }) => {
  return (
    <div
      className="tile"
      style={{
        top: `calc(${y} * (var(--cell-size) + var(--cell-gap)) + var(--cell-gap))`,
        left: `calc(${x} * (var(--cell-size) + var(--cell-gap)) + var(--cell-gap))`,
        transition: number === 0 ? "none" : "100ms ease-in-out",
        animation: number === 0 ? "none" : "popup 100ms",
      }}
    >
      {number !== 0 && number !== 2048 && (
        <img src={`assets/${number}.gif`} alt="tile" />
      )}
    </div>
  );
};

export default Tile;
