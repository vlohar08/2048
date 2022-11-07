import React, { useContext, useEffect, useState } from "react";

const GameContext = React.createContext();
const GameUpdateContext = React.createContext();

export const useGameContext = () => {
  return useContext(GameContext);
};

export const useGameUpdateContext = () => {
  return useContext(GameUpdateContext);
};

const GameContextProvider = ({ children }) => {
  const [gameData, setGameData] = useState({
    score: 0,
    bestScore: 0,
    board: [
      [0, 2, 0, 0],
      [0, 4, 0, 0],
      [0, 0, 4096, 0],
      [0, 8, 0, 0],
    ],
  });
  // useEffect(() => {
  //   const localGameData = JSON.parse(localStorage.getItem("2048"));

  //   localGameData && setGameData(localGameData);
  //   if (!localGameData?.tiles?.length) {
  //     const x1 = Math.round(Math.random() * (3 - 0) + 0);
  //     const y1 = Math.round(Math.random() * (3 - 0) + 0);
  //     const x2 = Math.round(Math.random() * (3 - 0) + 0);
  //     const y2 = Math.round(Math.random() * (3 - 0) + 0);
  //     setGameData({
  //       score: 0,
  //       bestScore: 0,
  //       tiles: [
  //         [0, 0, 0, 0],
  //         [0, 0, 0, 0],
  //         [0, 0, 0, 0],
  //         [0, 0, 0, 0],
  //       ],
  //     });
  //     // localStorage.setItem("2048", JSON.stringify(gameData));
  //   }
  // }, []);

  return (
    <GameContext.Provider value={gameData}>
      <GameUpdateContext.Provider value={setGameData}>
        {children}
      </GameUpdateContext.Provider>
    </GameContext.Provider>
  );
};

export default GameContextProvider;
