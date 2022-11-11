import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import addNewTile from "../utils/addNewTile";
import handleKeyPress from "../utils/handleKeyPress";

//Context
const GameContext = createContext();
const GameUpdateContext = createContext();

//Custom Hooks
export const useGameData = () => {
  return useContext(GameContext);
};

export const useUpdateGame = () => {
  return useContext(GameUpdateContext);
};

//Variables for Touch Support Functions
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;
let fingerCount = 0;

//ContextProvider
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
    hasWon: false,
    hasLost: false,
  });

  const gameDataRef = useRef(gameData);

  //Keyboard Handler
  const keyboardHandler = useCallback((e) => {
    handleKeyPress(e.key, gameDataRef.current.board, setGameData);
  }, []);

  //Touch Handlers
  const handleTouchStart = useCallback((e) => {
    fingerCount = e.touches.length;
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    if (fingerCount === 1) {
      checkDirection();
    }
  }, []);

  const addTouchSupport = () => {
    const gameBoard = document.querySelector(".gameBoard");
    gameBoard.addEventListener("touchstart", handleTouchStart);
    gameBoard.addEventListener("touchend", handleTouchEnd);
  };

  const removeTouchSupport = () => {
    const gameBoard = document.querySelector(".gameBoard");
    gameBoard.removeEventListener("touchstart", handleTouchStart);
    gameBoard.removeEventListener("touchend", handleTouchEnd);
  };

  //Detects Touch Swipe Direction
  const checkDirection = () => {
    const distance = 100;
    if (touchEndX < touchStartX && touchStartX - touchEndX > distance) {
      handleKeyPress("ArrowLeft", gameDataRef.current.board, setGameData);
    } else if (touchEndX > touchStartX && touchEndX - touchStartX > distance) {
      handleKeyPress("ArrowRight", gameDataRef.current.board, setGameData);
    } else if (touchEndY < touchStartY && touchStartY - touchEndY > distance) {
      handleKeyPress("ArrowUp", gameDataRef.current.board, setGameData);
    } else if (touchEndY > touchStartY && touchEndY - touchStartY > distance) {
      handleKeyPress("ArrowDown", gameDataRef.current.board, setGameData);
    }
  };

  //Remove event listeners when user won, lost or replaying the game.
  useEffect(() => {
    const condition =
      gameData.isReplaying || gameData.hasWon || gameData.hasLost;

    //Remove or Add Keyboard Support
    condition
      ? document.removeEventListener("keyup", keyboardHandler)
      : document.addEventListener("keyup", keyboardHandler);

    //Remove or Add Touch Support
    condition ? removeTouchSupport() : addTouchSupport();
  }, [gameData.isReplaying, gameData.hasWon, gameData.hasLost]);

  useEffect(() => {
    gameDataRef.current = gameData;

    if (!mounted.current) {
      //Get localGameData from browser local storage
      const localGameData = JSON.parse(localStorage.getItem("2048"));
      if (localGameData) {
        //Replace current gameData with localGameData if it exists.
        setGameData({
          ...localGameData,
          board:
            localGameData?.replay[localGameData?.replay?.length - 1] ||
            localGameData.board, //Add last move if reloaded during replay or the last board
          hasWon: localGameData?.hasWon || false,
          hasLost: localGameData?.hasLost || false,
          isReplaying: false,
        });
      } else {
        //Add two new tiles if localGameData not found
        addNewTile({ board: gameData.board, updateGame: setGameData });
        addNewTile({
          board: gameData.board,
          updateGame: setGameData,
          addToReplay: true,
        });
      }
      mounted.current = true;
    } else {
      //Update localStorage if state changes
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
