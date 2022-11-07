import findEmptyCell from "./findEmptyCell";

const addNewTile = (gameBoard, updateGame) => {
  const emptyCell = findEmptyCell(gameBoard);
  if (!emptyCell) return;
  const emptyCellX = emptyCell[0];
  const emptyCellY = emptyCell[1];
  const newGameBoard = [...gameBoard];
  newGameBoard[emptyCellX][emptyCellY] = 2;
  updateGame((prevGameData) => ({ ...prevGameData, board: newGameBoard }));
};

export default addNewTile;
