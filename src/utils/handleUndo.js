const handleUndo = (gameData, updateGame) => {
  if (gameData.isReplaying || gameData.hasWon) return;
  updateGame((prevGameData) => ({
    ...prevGameData,
    ...gameData.undo,
    undo: undefined,
    redo: {
      board: prevGameData.board,
      score: prevGameData.score,
      bestScore: prevGameData.bestScore,
      replay: prevGameData.replay,
      hasLost: prevGameData.hasLost,
    },
  }));
};

export default handleUndo;
