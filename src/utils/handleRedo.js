const handleRedo = (latestMove, updateGame) => {
  updateGame((prevGameData) => ({
    ...prevGameData,
    ...latestMove,
    undo: {
      board: prevGameData.board,
      score: prevGameData.score,
      bestScore: prevGameData.bestScore,
      replay: prevGameData.replay,
    },
    redo: undefined,
  }));
};

export default handleRedo;
