import React from "react";

const GameFooter = () => {
  return (
    <div className="gameFooter">
      <figure>
        <img src="/assets/undo-btn.webp" alt="undo" />
        <figcaption>Undo</figcaption>
      </figure>
      <figure>
        <img src="/assets/play-btn.webp" alt="replay" />
        <figcaption>Replay</figcaption>
      </figure>
      <figure>
        <img src="/assets/redo-btn.webp" alt="redo" />
        <figcaption>Redo</figcaption>
      </figure>
    </div>
  );
};

export default GameFooter;
