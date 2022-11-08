import addNewTile from "./addNewTile";

const startNewGame = (updateGame) => {
  const board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  addNewTile(board, updateGame);
  addNewTile(board, updateGame);
};

export default startNewGame;
