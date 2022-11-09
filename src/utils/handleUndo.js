const handleUndo = (gameData, updateGame) => {
  if (gameData.isReplaying) return;
  updateGame((prevGameData) => ({
    ...prevGameData,
    ...gameData.undo,
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
