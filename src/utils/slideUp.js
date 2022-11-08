import addNewTile from "./addNewTile";
import handleSlide from "./handleSlide";

const slideUp = (board, updateGame) => {
  let isTheSame = true;
  for (let c = 0; c < board.length; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    let slide = handleSlide(row, updateGame);
    row = slide.row;
    board[0][c] = row[0];
    board[1][c] = row[1];
    board[2][c] = row[2];
    board[3][c] = row[3];
    isTheSame = isTheSame && slide.isTheSame;
  }
  if (!isTheSame) {
    addNewTile(board, updateGame);
  }
};

export default slideUp;
