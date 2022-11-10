import handleKeyPress from "./handleKeyPress";

let touchStartController;
let touchEndController;

const handleTouchSwipes = (board, updateGame) => {
  console.log("Event Added");
  let touchStartX = 0;
  let touchEndX = 0;
  let touchStartY = 0;
  let touchEndY = 0;
  let fingerCount = 0;
  touchStartController = new AbortController();
  touchEndController = new AbortController();

  const checkDirection = () => {
    const distance = 100;
    if (touchEndX < touchStartX && touchStartX - touchEndX > distance) {
      handleKeyPress("ArrowLeft", board, updateGame);
      console.log("Left!", board);
    } else if (touchEndX > touchStartX && touchEndX - touchStartX > distance) {
      handleKeyPress("ArrowRight", board, updateGame);
    } else if (touchEndY < touchStartY && touchStartY - touchEndY > distance) {
      handleKeyPress("ArrowUp", board, updateGame);
    } else if (touchEndY > touchStartY && touchEndY - touchStartY > distance) {
      handleKeyPress("ArrowDown", board, updateGame);
    }
  };

  const handleTouchStart = (e) => {
    fingerCount = e.touches.length;
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    if (fingerCount === 1) {
      checkDirection();
    }
  };

  const gameBoard = document.querySelector(".gameBoard");
  gameBoard.addEventListener("touchstart", handleTouchStart, {
    signal: touchStartController.signal,
  });
  gameBoard.addEventListener("touchend", handleTouchEnd, {
    signal: touchEndController.signal,
  });
};

export default handleTouchSwipes;

export const removeTouchSupport = () => {
  touchEndController.abort("Abort");
  touchStartController.abort("Abort");
};
