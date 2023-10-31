type RevealedCells = Record<string, boolean | string | null | undefined>;

const checkHorizontal = (revealedCells: RevealedCells, rowIndex: number) => {
  for (let col = 0; col < 5; col++) {
    if (!revealedCells[`${rowIndex}-${col}`]) return false;
  }
  console.log("Horizontal win on row", rowIndex);
  return true;
};

const checkVertical = (revealedCells: RevealedCells, colIndex: number) => {
  for (let row = 0; row < 5; row++) {
    if (!revealedCells[`${row}-${colIndex}`]) return false;
  }
  console.log("Vertical win on column", colIndex);
  return true;
};

const checkDiagonalLeftToRight = (revealedCells: RevealedCells) => {
  for (let i = 0; i < 5; i++) {
    if (!revealedCells[`${i}-${i}`]) return false;
  }
  console.log("Diagonal win from top-left to bottom-right");
  return true;
};

const checkDiagonalRightToLeft = (revealedCells: RevealedCells) => {
  for (let i = 0; i < 5; i++) {
    if (!revealedCells[`${i}-${4 - i}`]) return false;
  }
  console.log("Diagonal win from top-right to bottom-left");
  return true;
};

export const checkWinner = (revealedCells: RevealedCells) => {
  for (let i = 0; i < 5; i++) {
    if (checkHorizontal(revealedCells, i) || checkVertical(revealedCells, i)) {
      return true;
    }
  }

  if (
    checkDiagonalLeftToRight(revealedCells) ||
    checkDiagonalRightToLeft(revealedCells)
  ) {
    return true;
  }
  return false;
};
