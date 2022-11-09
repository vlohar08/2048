import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import addNewTile from "../utils/addNewTile";
import handleKeyPress from "../utils/handleKeyPress";

const GameContext = createContext();
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
    isReplaying: false,
    replay: [],
    undo: undefined,
    redo: undefined,
  });

  const gameDataRef = useRef(gameData);

  const handler = useCallback((e) => {
    e.stopImmediatePropagation();
    handleKeyPress(e.key, gameDataRef.current.board, setGameData);
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", handler);
  }, []);

  useEffect(() => {
    gameData.isReplaying && document.removeEventListener("keyup", handler);
    !gameData.isReplaying && document.addEventListener("keyup", handler);
  }, [gameData.isReplaying]);

  useEffect(() => {
    gameDataRef.current = gameData;
    if (!mounted.current) {
      const localGameData = JSON.parse(localStorage.getItem("2048"));
      if (localGameData) {
        setGameData({
          ...localGameData,
          board:
            localGameData?.replay[localGameData?.replay?.length - 1] ||
            localGameData.board,
          isReplaying: false,
        });
      } else {
        addNewTile({ board: gameData.board, updateGame: setGameData });
        addNewTile({
          board: gameData.board,
          updateGame: setGameData,
          replay: true,
        });
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
