"use client";

import Head from "next/head";
import React, { useState } from "react";
import BingoCard from "@/components/BingoCard";
import Button from "@/components/Button";
import Modal from "@/components/Modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <>
      <Head>
        <title>The Rest is Bingo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="relative flex h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/turf.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <main
          role="main"
          className="relative z-10 flex h-full w-full flex-col items-center justify-center"
        >
          <Modal show={showModal} onClose={refreshPage} />

          <div className="flex h-full w-full flex-col gap-1 sm:gap-2">
            <div className="flex w-full justify-between px-1 md:px-0 ">
              <div></div>
              <div className="flex w-full flex-col items-start justify-center pt-4 align-middle font-core uppercase leading-none text-neutral-100 md:max-w-[450px] 3xl:max-w-[700px]">
                <h1
                  aria-label="Main Title"
                  className="text-xs sm:text-sm md:text-xs"
                >
                  The rest is
                </h1>
                <div className="flex flex-row items-start">
                  <h2 className="text-lg sm:text-xxl md:text-lg">Bingo</h2>
                </div>
              </div>
              <div></div>
            </div>

            <div
              role="region"
              aria-label="Bingo Card"
              className="flex h-fit w-full items-center justify-center px-1"
            >
              <div className="flex-grow-1 pb-8">
                <BingoCard
                  showModal={showModal}
                  setShowModal={setShowModal}
                  className=""
                />
              </div>
            </div>

            <div className="flex h-fit w-full items-center justify-center">
              <div>
                <Button />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
