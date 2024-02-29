/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

import { useEffect } from "react";
export default function Document() {
 
 
  return (
    <Html lang="en">
      <Head>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="application-name"
          content="admin-panel"
        />
        <meta name="author" content="admin-panel" />
       
       
       
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@100;200;300;400;500;600;700;800&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />

        <link
          rel="shortcut icon"
          href="/images/logo/logo.png"
          type="image/x-icon"
        />


      </Head>

      <body>
        <Main />

      </body>
      <NextScript />
    </Html>
  );
}
