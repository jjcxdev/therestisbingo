import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <html lang="en">
      <Head>
        <title>The Rest is BINGO</title>
        <meta
          name="description"
          content="Join in for a cheeky bingo game whilst tuning into the latest episodes of 'The Rest is Football'. A brilliant mate for keen listeners!"
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="http://therestisbingo.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Rest is BINGO" />
        <meta
          property="og:description"
          content="Join in for a cheeky bingo game whilst tuning into the latest episodes of 'The Rest is Football'. A brilliant mate for keen listeners!"
        />
        <meta
          property="og:image"
          content="http://therestisbingo.vercel.app/images/bingoScreenshot.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="therestisbingo.vercel.app" />
        <meta
          property="twitter:url"
          content="http://therestisbingo.vercel.app/"
        />
        <meta name="twitter:title" content="The Rest is BINGO" />
        <meta
          name="twitter:description"
          content="Join in for a cheeky bingo game whilst tuning into the latest episodes of 'The Rest is Football'. A brilliant mate for keen listeners!"
        />
        <meta
          name="twitter:image"
          content="http://therestisbingo.vercel.app/images/bingoScreenshot.png"
        />
      </Head>
      <body>
        <Component {...pageProps} />
        <Analytics />
      </body>
    </html>
  );
};

export default MyApp;
