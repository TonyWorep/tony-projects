const keyNumbers = [12, 23, 34, 45, 56, 67, 78, 89, 100];

export function computerMove(you: number, sum: number, randomNumber: number) {
  const currentSum = you + sum;
  let currentKey = 0;

  for (let i = 0; i < 10; i++) {
    if (keyNumbers[i] - currentSum <= 11) {
      currentKey = keyNumbers[i];
    }
  }

  let computerNumber = 0;
  if (currentSum === 1) {
    computerNumber = randomNumber;
  } else {
    computerNumber = currentKey - currentSum;

    computerNumber > 10 ? (computerNumber = randomNumber) : computerNumber;
  }

  return computerNumber;
}