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
  //Insert new tile if the existing tiles moved
  if (!isTheSame) {
    addNewTile({ board, updateGame, addToUndo: true, addToReplay: true });
  }
};

export default slideRight;
