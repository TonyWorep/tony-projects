const keyNumbers = [1, 5, 9, 13, 17];

export function boxesGameComputerMove(boxes: number, randomNumber: number) {
  let currentKey = 0;

  for (let i = 0; i < 5; i++) {
    if (boxes - keyNumbers[i] < 4 && boxes - keyNumbers[i] > 0) {
      currentKey = keyNumbers[i];
    }
  }

  let computerNumber = 0;
  if (currentKey === 0 && boxes > 0) {
    computerNumber = randomNumber;
  } else {
    computerNumber = boxes - currentKey;
  }
  return computerNumber;
}
