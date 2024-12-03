import { directions } from "../data/directions";

export const countLiveNeighbors = (
  grid: boolean[][],
  row: number,
  col: number
): number => {
  let liveCount = 0;

  for (const [dx, dy] of directions) {
    const newRow = row + dx;
    const newCol = col + dy;
    if (
      newRow >= 0 &&
      newRow < grid.length &&
      newCol >= 0 &&
      newCol < grid[0].length
    ) {
      if (grid[newRow][newCol]) {
        liveCount += 1;
      }
    }
  }
  return liveCount;
};
