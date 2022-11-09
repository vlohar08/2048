const handleUndo = (lastMove, updateGame) => {
  updateGame((prevGameData) => ({
    ...prevGameData,
    ...lastMove,
    undo: undefined,
    redo: {
      board: prevGameData.board,
      score: prevGameData.score,
      bestScore: prevGameData.bestScore,
      replay: prevGameData.replay,
    },
  }));
};

export default handleUndo;
