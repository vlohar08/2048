import updateScores from "./updateScores";

const handleSlide = (row, updateGame) => {
  //Get rid of zeros
  row = row.filter((tileNo) => tileNo !== 0);
  for (let c = 0; c < row.length - 1; c++) {
    if (row[c] === row[c + 1]) {
      updateScores(row[c] * 2, updateGame);
      row[c] *= 2;
      row[c + 1] = 0;
    }
  }
  //Get rid of zeros again
  row = row.filter((tileNo) => tileNo !== 0);
  //Add zeros at the end
  while (row.length < 4) {
    row.push(0);
  }
  return row;
};

export default handleSlide;
