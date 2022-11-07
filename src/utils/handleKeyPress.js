import slideDown from "./slideDown";
import slideLeft from "./slideLeft";
import slideRight from "./slideRight";
import slideUp from "./slideUp";

const handleKeyPress = (keyType, board, updateGame) => {
  switch (keyType) {
    case "ArrowUp":
      slideUp(board, updateGame);
      break;
    case "ArrowDown":
      slideDown(board, updateGame);
      break;
    case "ArrowLeft":
      slideLeft(board, updateGame);
      break;
    case "ArrowRight":
      slideRight(board, updateGame);
      break;
    default:
      break;
  }
};

export default handleKeyPress;
