const handleRedo = (latestMove, updateGame) => {
  updateGame((prevGameData) => ({
    ...prevGameData,
    board: latestMove,
    undo: prevGameData.board,
    redo: undefined,
  }));
};

export default handleRedo;
