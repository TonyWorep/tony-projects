export function getPosition(card: number) {
  const row = card % 3;
  const col = Math.floor(card / 3);

  return [row, col];
}

export function checkGrid(grid: string[]) {
  // Checking horizontally
  if (grid[0] === grid[1] && grid[1] === grid[2]) {
    return grid[0];
  } else if (grid[3] === grid[4] && grid[4] === grid[5]) {
    return grid[3];
  } else if (grid[6] === grid[7] && grid[7] === grid[8]) {
    return grid[6];
  }

  // Checking vertically
  if (grid[0] === grid[3] && grid[3] === grid[6]) {
    return grid[0];
  } else if (grid[1] === grid[4] && grid[4] === grid[7]) {
    return grid[1];
  } else if (grid[2] === grid[5] && grid[5] === grid[8]) {
    return grid[2];
  }

  // Checking horizontally
  if (grid[0] === grid[4] && grid[4] === grid[8]) {
    return grid[0];
  } else if (grid[2] === grid[4] && grid[4] === grid[6]) {
    return grid[2];
  }

  return "";
}
