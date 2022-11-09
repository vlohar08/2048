import findEmptyCell from "./findEmptyCell";

const addNewTile = ({ board, updateGame, undo = false, replay = false }) => {
  const emptyCell = findEmptyCell(board);
  const localGameData = JSON.parse(localStorage.getItem("2048"));
  const prevBoard = localGameData?.board;
  const prevScore = localGameData?.score;
  const prevBestScore = localGameData?.bestScore;
  const prevReplay = localGameData?.replay;

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
    undo: undo
      ? {
          board: prevBoard,
          score: prevScore,
          bestScore: prevBestScore,
          replay: prevReplay,
        }
      : prevGameData.undo,
    redo: undefined,
  }));
};

export default addNewTile;
