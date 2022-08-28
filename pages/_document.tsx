/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Diamond Fitness</title>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        ></meta>
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover, width=device-width"
        ></meta>
        <meta name="description" content="Nep Lofi" />
        <meta name="author" content="Swikar Adhikari" />
        <meta name="author" content="swikarr_" />
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
        <meta property="og:site_name" content="Swikar Adhikari" />
        <meta name="og:title" content="Swikar Adhikari" />
        <meta property="og:type" content="website" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
