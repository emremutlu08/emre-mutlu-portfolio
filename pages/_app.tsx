import "tailwindcss/tailwind.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EMRE MUTLU | PORTFOLIO APP</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
