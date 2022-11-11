import addNewTile from "./addNewTile";

const startNewGame = (updateGame) => {
  const board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  updateGame((prevGameData) => ({
    ...prevGameData,
    replay: [],
    undo: undefined,
    redo: undefined,
    score: 0,
    hasWon: false,
    hasLost: false,
  }));
  addNewTile({ board, updateGame });
  addNewTile({ board, updateGame, addToReplay: true });
};

export default startNewGame;
