import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import addNewTile from "../utils/addNewTile";

export const GameContext = createContext();
const GameUpdateContext = createContext();

export const useGameData = () => {
  return useContext(GameContext);
};

export const useUpdateGame = () => {
  return useContext(GameUpdateContext);
};

const GameContextProvider = ({ children }) => {
  const mounted = useRef(false);
  const [gameData, setGameData] = useState({
    score: 0,
    bestScore: 0,
    board: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    undo: [],
  });

  useEffect(() => {
    if (!mounted.current) {
      const localGameData = JSON.parse(localStorage.getItem("2048"));
      if (localGameData) {
        setGameData(localGameData);
      } else {
        addNewTile(gameData.board, setGameData);
        addNewTile(gameData.board, setGameData);
      }
      mounted.current = true;
    } else {
      localStorage.setItem("2048", JSON.stringify(gameData));
    }
  }, [gameData]);

  return (
    <GameContext.Provider value={gameData}>
      <GameUpdateContext.Provider value={setGameData}>
        {children}
      </GameUpdateContext.Provider>
    </GameContext.Provider>
  );
};

export default GameContextProvider;
