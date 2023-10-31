import Head from "next/head";
import React, { useState } from "react";
import BingoCard from "@/components/BingoCard";
import Button from "@/components/Button";
import Modal from "@/components/Modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Head>
        <title>The Rest is Bingo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/turf.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <main
          role="main"
          className="relative z-10 flex h-full w-full flex-col items-center"
        >
          <Modal show={showModal} onClose={() => setShowModal(false)} />

          <div className="flex h-full w-full flex-col items-center justify-around">
            <div className="flex w-full justify-center">
              <h1
                aria-label="Main Title"
                className="4xl:text-9xl flex-shrink-0 font-core text-6xl uppercase text-neutral-100 sm:text-8xl md:text-7xl"
              >
                The rest is Bingo
              </h1>
            </div>

            <div
              role="region"
              aria-label="Bingo Card"
              className="flex h-full w-full items-center justify-center px-1 py-4"
            >
              <div className="flex-grow-1">
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
