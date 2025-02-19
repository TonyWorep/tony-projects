import { randomNumber } from "../utils";

export function MarienbadGameComputerMove(platesAmount: number[], col: number) {
  const nims = [];

  if (col === 0 && platesAmount.reduce((x, y) => x + y) === 16) {
    return [randomNumber(0, 4), 1];
  }

  for (let i = 0; i < 4; i++) {
    const platesCol = [];
    while (platesAmount[i] > 0) {
      if (platesAmount[i] - 4 >= 0) {
        platesCol.push(4);
        platesAmount[i] -= 4;
      } else if (platesAmount[i] - 2 >= 0) {
        platesCol.push(2);
        platesAmount[i] -= 2;
      } else if (platesAmount[i] - 1 >= 0) {
        platesCol.push(1);
        platesAmount[i] -= 1;
      }
    }
    nims.push(platesCol);
  }

  console.log(nims);
}
