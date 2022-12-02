import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ImprintContextProvider } from 'components/layout/imprintContext';
import { ImprintDialog } from 'components/layout/imprintDialog';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Christian Höpfner | Website</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />

        <link rel="manifest" href="/favicon/site.webmanifest" />

        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#111827"
        />

        <meta name="msapplication-TileColor" content="#111827" />
        <meta name="theme-color" content="#111827" />
      </Head>

      <ImprintContextProvider>
        <Component {...pageProps} />
        <ImprintDialog />
      </ImprintContextProvider>
    </>
  );
}
