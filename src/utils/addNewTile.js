import findEmptyCell from "./findEmptyCell";

const addNewTile = ({
  board,
  updateGame,
  addToUndo = false,
  addToReplay = false,
}) => {
  const emptyCell = findEmptyCell(board, updateGame);
  if (!emptyCell) return;

  const localGameData = JSON.parse(localStorage.getItem("2048"));
  const prevBoard = localGameData?.board;
  const prevScore = localGameData?.score;
  const prevBestScore = localGameData?.bestScore;
  const prevReplay = localGameData?.replay;

  const emptyCellX = emptyCell[0];
  const emptyCellY = emptyCell[1];
  board[emptyCellX][emptyCellY] = 2;

  updateGame((prevGameData) => ({
    ...prevGameData,
    board,
    replay: addToReplay
      ? [...prevGameData?.replay, JSON.parse(JSON.stringify(board))]
      : prevGameData.replay,
    undo: addToUndo
      ? {
          board: prevBoard,
          score: prevScore,
          bestScore: prevBestScore,
          replay: prevReplay,
          hasLost: false,
        }
      : prevGameData.undo,
    redo: undefined,
  }));
};

export default addNewTile;
