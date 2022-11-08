const compareRows = (prevRow, newRow) => {
  let isTheSame = true;
  for (let c = 0; c < prevRow.length; c++) {
    if (prevRow[c] !== newRow[c]) {
      isTheSame = false;
    }
  }
  return isTheSame;
};

export default compareRows;
