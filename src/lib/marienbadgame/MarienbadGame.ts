export function MarienbadGameComputerMove(plates: number[]): [number, number] {
  const totalPlates = plates.reduce((sum, count) => sum + count, 0);

  // Immediately handle terminal cases
  if (totalPlates === 0) return [0, 0]; // Invalid game state
  if (totalPlates === 1) return findAndTakeLastPlate(plates);

  // Try strategic endgame moves first
  const endgameMove = findEndgameMove(plates, totalPlates);
  if (endgameMove) return endgameMove;

  // Apply Nim strategy with misère adjustments
  const nimMove = findNimStrategyMove(plates, totalPlates);
  if (nimMove) return nimMove;

  // Fallback to conservative move (should never reach here in valid game)
  return takeConservativeMove(plates);
}

// Helper functions
function findAndTakeLastPlate(plates: number[]): [number, number] {
  const col = plates.findIndex((count) => count === 1);
  return [col, 1];
}

function findEndgameMove(
  plates: number[],
  totalPlates: number
): [number, number] | null {
  // Attempt to leave exactly one plate total
  for (let col = 0; col < plates.length; col++) {
    if (plates[col] >= totalPlates - 1) {
      return [col, totalPlates - 1];
    }
  }

  // Try to create odd number of single-plate columns
  for (let col = 0; col < plates.length; col++) {
    if (plates[col] > 1) {
      const requiredTake = plates[col] - 1;
      const newPlates = [...plates];
      newPlates[col] = 1;

      if (hasOddSinglePlates(newPlates)) {
        return [col, requiredTake];
      }
    }
  }

  // Handle single non-empty column case
  const nonZeroColumns = plates.filter((count) => count > 0);
  if (nonZeroColumns.length === 1) {
    const col = plates.findIndex((count) => count > 0);
    return [col, plates[col] - 1];
  }

  return null;
}

function findNimStrategyMove(
  plates: number[],
  totalPlates: number
): [number, number] | null {
  const nimSum = plates.reduce((a, b) => a ^ b, 0);

  // Handle losing positions
  if (nimSum === 0) {
    const validColumns = plates
      .map((count, idx) => (count > 0 ? idx : -1))
      .filter((idx) => idx !== -1);
    const randomCol =
      validColumns[Math.floor(Math.random() * validColumns.length)];
    return [randomCol, 1];
  }

  // Find optimal Nim move with misère adjustments
  for (let col = 0; col < plates.length; col++) {
    const current = plates[col];
    if (current === 0) continue;

    const target = current ^ nimSum;
    if (target < current) {
      let take = current - target;
      const newPlates = [...plates];
      newPlates[col] = target;

      // Adjust for misère: avoid creating even single-plate setups
      if (hasAllSinglePlates(newPlates)) {
        const singleCount = newPlates.filter((c) => c > 0).length;
        if (singleCount % 2 === 0) {
          take = current; // Take entire column
        }
      }
      return [col, take];
    }
  }
  return null;
}

function takeConservativeMove(plates: number[]): [number, number] {
  for (let col = 0; col < plates.length; col++) {
    if (plates[col] > 0) {
      return [col, 1];
    }
  }
  return [0, 0];
}

// Utility predicates
function hasOddSinglePlates(plates: number[]): boolean {
  const nonZero = plates.filter((c) => c > 0);
  return nonZero.every((c) => c === 1) && nonZero.length % 2 === 1;
}

function hasAllSinglePlates(plates: number[]): boolean {
  return plates.every((c) => c === 0 || c === 1);
}
