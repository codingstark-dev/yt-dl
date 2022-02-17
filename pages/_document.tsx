import Document, { Html, Head, Main, NextScript } from "next/document";
import { SiteDetails } from "../setup";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.webmanifest" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin="true"
          />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          {SiteDetails.googleAnalytic && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${SiteDetails.googleAnalytic}`}
              />
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${SiteDetails.googleAnalytic}');`,
                }}
              />
            </>
          )}
          <meta httpEquiv="Content-Type" content="text/html; iso-8859-1" />
          <meta name="robots" content="INDEX,FOLLOW" />
          <meta name="creation_Date" content="01/01/2022" />
          <meta name="revisit-after" content="7 days" />
        </Head>
        <body className="dark:bg-black dark:text-white text-black bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
