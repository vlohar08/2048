const findEmptyCell = (gameBoard) => {
  //0,0//0,1//0,2//0,3
  //1,0//1,1,//1,2//1,3
  //2,0//2,1//2,2//2,3
  //3,0//3,1//3,2//3,3
  let emptyGameTiles = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (gameBoard[r][c] === 0) {
        emptyGameTiles.push([r, c]);
      }
    }
  }

  let randomEmptyTile =
    emptyGameTiles[
      Math.round(Math.random() * (emptyGameTiles.length - 1 - 0) + 0)
    ];
  return randomEmptyTile;
};

export default findEmptyCell;
