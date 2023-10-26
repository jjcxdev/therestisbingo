import React, { useState, useEffect } from "react";
import textList from "@/utils/textDatabase";
import { dabberImages } from "@/utils/dabberList";
import Image from "next/image";

interface BingoCardProps {
  className?: string;
}

const BingoCard: React.FC<BingoCardProps> = () => {
  const [bingoGrid, setBingoGrid] = useState<string[][]>([]);
  const [revealedCells, setRevealedCells] = useState<
    Record<string, boolean | string | null | undefined>
  >({});

  useEffect(() => {
    const shuffledTextList = [...textList].sort(() => Math.random() - 0.5);
    const grid: string[][] = [];

    for (let i = 0; i < 5; i++) {
      const row: string[] = [];
      for (let j = 0; j < 5; j++) {
        if (i === 2 && j === 2) {
          row.push("FREE SPACE");
        } else {
          const text = shuffledTextList.pop() ?? "";
          row.push(text);
        }
      }
      grid.push(row);
    }

    setBingoGrid(grid);
  }, []);

  // Handle cell click to reveal image
  const handleCellClick = (i: number, j: number) => {
    const key = `${i}-${j}`;
    const randomIndex = Math.floor(Math.random() * dabberImages.length);
    const randomDabber = dabberImages[randomIndex];

    setRevealedCells((prevState) => ({
      ...prevState,
      [key]:
        prevState[key] === undefined
          ? randomDabber
          : prevState[key]
          ? null
          : randomDabber,
    }));
  };

  return (
    <div className="grid max-w-full cursor-pointer grid-cols-5 items-center gap-1">
      {bingoGrid.map((row, i) => (
        <div key={i} className="col-span-5 grid grid-cols-5 items-center gap-1">
          {row.map((cell, j) => (
            <div
              key={j}
              onClick={() => handleCellClick(i, j)}
              className="relative grid aspect-square items-center justify-center gap-1 border border-neutral-800 text-center lg:text-lg"
            >
              {revealedCells[`${i}-${j}`] && (
                <Image
                  src={`/images/dabbers/${revealedCells[`${i}-${j}`]}`}
                  alt="Dabber"
                  className="absolute inset-x-0 inset-y-0 z-10 mx-auto my-auto flex h-3/4 w-3/4 items-center justify-center"
                />
              )}
              <span className="z-0 p-1 text-3xs sm:text-2xs xl:text-sm">
                {cell}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default BingoCard;
