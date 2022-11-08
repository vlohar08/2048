const handleUndo = (lastMove, updateGame) => {
  updateGame((prevGameData) => ({
    ...prevGameData,
    board: lastMove,
    undo: undefined,
  }));
};

export default handleUndo;
