"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { checkWinner } from "@/utils/patternLogic";
import { dabberImages } from "@/utils/dabberList";
import textList from "@/utils/textDatabase";

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
  const handleKeyDown = (e: React.KeyboardEvent, i: number, j: number) => {
    if (e.key === "Enter" || e.key === " ") {
      handleCellClick(i, j);
      e.preventDefault();
    }
  };

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
      className="grid w-full cursor-pointer auto-rows-fr grid-cols-5 items-center gap-1 rounded-lg border border-neutral-900/30 bg-neutral-900/20 p-[2px] shadow-lg md:max-w-[450px] md:auto-rows-auto 3xl:max-w-[700px]"
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
              tabIndex={0}
              aria-label={`Click to reveal cell ${i + 1}-${
                j + 1
              }, contains ${cell}`}
              key={j}
              onClick={() => handleCellClick(i, j)}
              onKeyDown={(e) => handleKeyDown(e, i, j)}
              className={`relative grid aspect-square h-full items-center justify-center gap-1 rounded-lg bg-neutral-900/80 text-center text-vxs text-neutral-100 transition duration-300 hover:bg-neutral-100 hover:text-neutral-900/80 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-xxxs md:text-xxxxs 
              ${cell === "FREE SPACE" ? "bg-blue-500 font-tenar" : ""}`}
            >
              {revealedCells[`${i}-${j}`] && (
                <Image
                  src={`/images/dabbers/${revealedCells[`${i}-${j}`]}`}
                  alt="A revealed bingo dabber image"
                  width={100}
                  height={100}
                  className="absolute inset-x-0 inset-y-0 z-10 mx-auto my-auto flex h-fit w-fit items-center justify-center"
                />
              )}
              <span className="z-0 whitespace-normal break-words p-[2px] text-xs">
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
