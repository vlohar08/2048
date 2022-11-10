import handleGameLost from "./handleGameLost";

const findEmptyCell = (board, updateGame) => {
  let emptyGameTiles = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c] === 0) {
        emptyGameTiles.push([r, c]);
      }
    }
  }
  let randomEmptyTile =
    emptyGameTiles[
      Math.round(Math.random() * (emptyGameTiles.length - 1 - 0) + 0)
    ];
  if (emptyGameTiles.length === 1) {
    let newBoard = JSON.parse(JSON.stringify(board));
    newBoard[emptyGameTiles[0][0]][emptyGameTiles[0][1]] = 2;
    if (handleGameLost(newBoard)) {
      updateGame((prevGameData) => ({ ...prevGameData, hasLost: true }));
    }
  }
  return randomEmptyTile;
};

export default findEmptyCell;
