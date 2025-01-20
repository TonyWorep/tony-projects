export function getPosition(card: number) {
  const row = card % 3;
  const col = Math.floor(card / 3);

  return [row, col];
}

export function checkGrid(grid: string[]) {
  // Checking horizontally
  if (grid[0] === grid[1] && grid[1] === grid[2] && grid[0] !== "") {
    return grid[0];
  }
  if (grid[3] === grid[4] && grid[4] === grid[5] && grid[3] !== "") {
    return grid[3];
  }
  if (grid[6] === grid[7] && grid[7] === grid[8] && grid[6] !== "") {
    return grid[6];
  }

  // Checking vertically
  if (grid[0] === grid[3] && grid[3] === grid[6] && grid[0] !== "") {
    return grid[0];
  }
  if (grid[1] === grid[4] && grid[4] === grid[7] && grid[1] !== "") {
    return grid[1];
  }
  if (grid[2] === grid[5] && grid[5] === grid[8] && grid[2] !== "") {
    return grid[2];
  }

  // Checking diagonally
  if (grid[0] === grid[4] && grid[4] === grid[8] && grid[0] !== "") {
    return grid[0];
  }
  if (grid[2] === grid[4] && grid[4] === grid[6] && grid[2] !== "") {
    return grid[2];
  }

  return "";
}
