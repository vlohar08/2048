import findEmptyCell from "./findEmptyCell";

const addNewTile = (gameBoard, updateGame) => {
  const emptyCell = findEmptyCell(gameBoard);
  const prevGameBoard = JSON.parse(localStorage.getItem("2048"))?.board;
  if (!emptyCell) return;
  const emptyCellX = emptyCell[0];
  const emptyCellY = emptyCell[1];
  gameBoard[emptyCellX][emptyCellY] = 2;
  updateGame((prevGameData) => ({
    ...prevGameData,
    board: gameBoard,
    undo: prevGameBoard,
  }));
};

export default addNewTile;
