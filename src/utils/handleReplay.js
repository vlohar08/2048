const handleReplay = (gameData, updateGame) => {
  if (gameData.isReplaying) return;
  let i = 0;
  let totalReplays = gameData.replay.length - 1;
  let replay = setInterval(
    (function replayGame() {
      if (i === totalReplays) clearInterval(replay);
      updateGame((prevGameData) => {
        return {
          ...prevGameData,
          isReplaying: i === totalReplays ? false : true,
          board: gameData.replay[i],
        };
      });
      setTimeout(() => i++, 100);
      return replayGame;
    })(),
    2000
  );
};

export default handleReplay;
