import addNewTile from "./addNewTile";
import handleSlide from "./handleSlide";

const slideRight = (board, updateGame) => {
  for (let r = 0; r < board.length; r++) {
    let row = board[r];
    row.reverse();
    row = handleSlide(row, updateGame);
    row.reverse();
    board[r] = row;
  }
  addNewTile(board, updateGame);
};

export default slideRight;
