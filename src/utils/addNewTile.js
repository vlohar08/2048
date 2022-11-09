import findEmptyCell from "./findEmptyCell";

const addNewTile = ({ board, updateGame, undo = false, replay = false }) => {
  const emptyCell = findEmptyCell(board);
  const prevBoard = JSON.parse(localStorage.getItem("2048"))?.board;
  if (!emptyCell) return;
  const emptyCellX = emptyCell[0];
  const emptyCellY = emptyCell[1];
  board[emptyCellX][emptyCellY] = 2;
  updateGame((prevGameData) => ({
    ...prevGameData,
    board,
    replay: replay
      ? [...prevGameData?.replay, JSON.parse(JSON.stringify(board))]
      : prevGameData.replay,
    undo: undo ? prevBoard : prevGameData.undo,
  }));
};

export default addNewTile;
