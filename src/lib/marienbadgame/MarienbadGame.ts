import { randomNumber } from "../utils";

export function MarienbadGameComputerMove(platesAmount: number[], col: number) {
  if (col === 0 && platesAmount.reduce((x, y) => x + y) === 16) {
    return [randomNumber(1, 5), 1];
  }
}
