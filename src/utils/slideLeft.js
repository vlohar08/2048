import addNewTile from "./addNewTile";
import handleSlide from "./handleSlide";

const slideLeft = (board, updateGame) => {
  for (let r = 0; r < board.length; r++) {
    let row = board[r];
    row = handleSlide(row, updateGame);
    board[r] = row;
  }
  addNewTile(board, updateGame);
};

export default slideLeft;
