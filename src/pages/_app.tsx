import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>The Rest is BINGO</title>
        <meta
          name="description"
          content="Join in for a cheeky bingo game whilst tuning into the latest episodes of 'The Rest is Football'. A brilliant mate for keen listeners!"
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://therestisbingo.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Rest is BINGO" />
        <meta
          property="og:description"
          content="Join in for a cheeky bingo game whilst tuning into the latest episodes of 'The Rest is Football'. A brilliant mate for keen listeners!"
        />
        <meta
          property="og:image"
          content="https://therestisbingo.com/images/ogbingo.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://therestisbingo.com/" />
        <meta name="twitter:title" content="The Rest is BINGO" />
        <meta
          name="twitter:description"
          content="Join in for a cheeky bingo game whilst tuning into the latest episodes of 'The Rest is Football'. A brilliant mate for keen listeners!"
        />
        <meta
          name="twitter:image"
          content="https://therestisbingo.com/images/ogbingo.png"
        />
      </Head>

      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default MyApp;
