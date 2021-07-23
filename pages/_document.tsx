import Document, { Html, Main, NextScript, Head } from 'next/document';
import Script from 'next/script';

import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script async src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        </Head>

        <body className="mdc-typography">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
