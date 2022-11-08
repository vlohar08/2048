const updateScores = (score, updateGame) => {
  updateGame((prevGameData) => ({
    ...prevGameData,
    score: prevGameData.score + score,
    bestScore:
      prevGameData.bestScore > prevGameData.score + score
        ? prevGameData.bestScore
        : prevGameData.score + score,
  }));
};

export default updateScores;
