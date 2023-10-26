import Head from "next/head";
import BingoCard from "@/components/BingoCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Rest is Bingo</title>
        <meta name="description" content="created by Homemade Code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/turf.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <main className="relative z-10 flex w-full max-w-[750px] flex-col items-center justify-center shadow-lg md:w-5/6 lg:w-3/4">
          <div className="flex w-full flex-col items-center justify-center">
            <h1 className="font-core text-6xl uppercase text-neutral-100 drop-shadow-lg md:text-8xl">
              The rest is...
            </h1>
            <div
              className="w-full bg-white md:rounded-3xl"
              // style={{
              //   backgroundImage: "url(/images/card_texture.jpeg)",
              //   backgroundBlendMode: "multiply",
              // }}
            >
              <div className="col-span-5 grid grid-cols-5 items-center gap-1 px-4 py-4 font-tenar text-neutral-800 md:px-10">
                <div className="flex items-center justify-center text-5xl leading-none md:text-8xl">
                  B
                </div>
                <div className="flex items-center justify-center text-5xl leading-none md:text-8xl">
                  I
                </div>
                <div className="flex items-center justify-center text-5xl leading-none md:text-8xl">
                  N
                </div>
                <div className="flex items-center justify-center text-5xl leading-none md:text-8xl">
                  G
                </div>
                <div className="flex items-center justify-center text-5xl leading-none md:text-8xl">
                  O
                </div>
              </div>
              <div className="flex justify-center px-1 pb-4 md:px-10 md:pb-10 lg:px-10 lg:pb-10">
                <BingoCard className="" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
