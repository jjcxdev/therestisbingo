import React, { useState, useEffect } from "react";
import textList from "@/utils/textDatabase";
import { dabberImages } from "@/utils/dabberList";
import Image from "next/image";
import { checkWinner } from "@/utils/patternLogic";

interface BingoCardProps {
  className?: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BingoCard: React.FC<BingoCardProps> = ({ setShowModal }) => {
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

    setRevealedCells((prevState) => {
      const updatedState = {
        ...prevState,
        [key]:
          prevState[key] === undefined
            ? randomDabber
            : prevState[key]
            ? null
            : randomDabber,
      };

      if (checkWinner(updatedState)) {
        console.log("Updated State", updatedState);
        console.log("We have a winner");
        setShowModal(true);
      }

      return updatedState;
    });
  };

  return (
    <div
      role="grid"
      className="w[100vw] grid cursor-pointer auto-rows-fr grid-cols-5 items-center gap-1 md:auto-rows-auto"
    >
      {bingoGrid.map((row, i) => (
        <div
          role="row"
          key={i}
          className="col-span-5 grid h-full grid-cols-5 items-center gap-1"
        >
          {row.map((cell, j) => (
            <div
              role="gridcell"
              aria-label={`Click to reveal cell ${i + 1}-${
                j + 1
              }, contains ${cell}`}
              key={j}
              onClick={() => handleCellClick(i, j)}
              className="text-5xs relative grid h-full min-w-fit items-center justify-center gap-1 whitespace-normal break-words rounded-lg bg-neutral-900/80 text-center text-neutral-100 transition duration-300 sm:aspect-square lg:text-lg"
            >
              {revealedCells[`${i}-${j}`] && (
                <Image
                  src={`/images/dabbers/${revealedCells[`${i}-${j}`]}`}
                  width={10}
                  height={10}
                  alt="A revealed bingo dabber image"
                  className="absolute inset-x-0 inset-y-0 z-10 mx-auto my-auto flex h-3/4 w-3/4 items-center justify-center"
                />
              )}
              <span className="3xl:max-w-[150px] 4xl:text-4xl 4xl:max-w-[300px] max-w[50px] z-0 p-[2px] text-xs lg:max-w-[100px] lg:p-2 xl:max-w-[110px] xl:text-sm 2xl:max-w-[125px]">
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
