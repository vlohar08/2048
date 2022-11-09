const handleReplay = (replayData, updateGame) => {
  let i = 0;
  let totalReplays = replayData.length - 1;
  let replay = setInterval(() => {
    if (i === totalReplays) clearInterval(replay);
    updateGame((prevGameData) => {
      return {
        ...prevGameData,
        isReplaying: i === totalReplays ? false : true,
        board: replayData[i],
      };
    });
    setTimeout(() => i++, 100);
  }, 1000);
};

export default handleReplay;
