const handleGameLost = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board?.[i]?.[j] === board?.[i]?.[j - 1]) {
        return false;
      } else if (board?.[i]?.[j] === board?.[i]?.[j + 1]) {
        return false;
      } else if (board?.[j]?.[i] === board?.[j - 1]?.[i]) {
        return false;
      } else if (board?.[j]?.[i] === board?.[j + 1]?.[i]) {
        return false;
      }
    }
  }
  return true;
};

export default handleGameLost;
