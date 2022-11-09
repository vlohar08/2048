import addNewTile from "./addNewTile";
import handleSlide from "./handleSlide";

const slideRight = (board, updateGame) => {
  let isTheSame = true;
  for (let r = 0; r < board.length; r++) {
    let row = board[r];
    row.reverse();
    let slide = handleSlide(row, updateGame);
    row = slide.row;
    row.reverse();
    board[r] = row;
    isTheSame = isTheSame && slide.isTheSame;
  }
  if (!isTheSame) {
    addNewTile({ board, updateGame, undo: true, replay: true });
  }
};

export default slideRight;
