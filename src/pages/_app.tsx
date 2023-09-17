//import ViewTransition from "@/components/view-transition";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
