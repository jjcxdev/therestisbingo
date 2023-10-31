import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <html lang="en">
      <Head>
        <title>The Rest is BINGO</title>
      </Head>
      <body>
        <Component {...pageProps} />
        <Analytics />
      </body>
    </html>
  );
};

export default MyApp;
