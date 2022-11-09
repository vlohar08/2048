import handleSlide from "./handleSlide";
import addNewTile from "./addNewTile";

const slideLeft = (board, updateGame) => {
  let isTheSame = true;
  for (let r = 0; r < board.length; r++) {
    let row = board[r];
    let slide = handleSlide(row, updateGame);
    board[r] = slide.row;
    isTheSame = isTheSame && slide.isTheSame;
  }

  if (!isTheSame) {
    addNewTile({ board, updateGame, undo: true, replay: true });
  }
};

export default slideLeft;
