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
  //Insert new tile if the existing tiles moved
  if (!isTheSame) {
    addNewTile({ board, updateGame, addToUndo: true, addToReplay: true });
  }
};

export default slideLeft;
