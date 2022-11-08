import addNewTile from "./addNewTile";
import handleSlide from "./handleSlide";

const slideDown = (board, updateGame) => {
  for (let c = 0; c < board.length; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row.reverse();
    row = handleSlide(row, updateGame);
    row.reverse();
    board[0][c] = row[0];
    board[1][c] = row[1];
    board[2][c] = row[2];
    board[3][c] = row[3];
  }
  addNewTile(board, updateGame);
};

export default slideDown;
