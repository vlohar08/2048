const handleUndo = (lastMove, updateGame) => {
  updateGame((prevGameData) => ({
    ...prevGameData,
    board: lastMove,
    undo: undefined,
    redo: prevGameData.board,
  }));
};

export default handleUndo;
