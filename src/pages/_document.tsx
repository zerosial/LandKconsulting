/* eslint-disable react/jsx-props-no-spreading */
import { ColorModeScript } from '@chakra-ui/react';
import type { DocumentContext } from 'next/document';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

import Meta from '~/lib/components/Meta';
import customTheme from '~/lib/styles/theme';

class MyDocument extends Document {
  static getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Figtree:wght@300..900&display=swap"
            rel="stylesheet"
          />
          <Meta />
          <Script
            id="GTM"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MZCSGRDB');`,
            }}
          />
        </Head>
        <body>
          <noscript
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZCSGRDB"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <ColorModeScript
            initialColorMode={customTheme.config?.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
