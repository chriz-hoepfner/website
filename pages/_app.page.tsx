import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ImprintContextProvider } from 'components/layout/imprintContext';
import { ImprintDialog } from 'components/layout/imprintDialog';

import '../styles/globals.css';
import { useDarkModeDetection } from './_app.hooks';

export default function App({ Component, pageProps }: AppProps) {
  useDarkModeDetection();

  const experienceInYears = new Date().getFullYear() - 2013;
  const description = `Hi, I'm Chris, a Software Engineer from Berlin with ${experienceInYears}+ years of experience in software development. Check out my website and get in touch to work with me.`;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />

        <title>Website | Christian Höpfner</title>

        <meta name="description" content={description} />

        <meta
          key="og:title"
          property="og:title"
          content="Christian Höpfner | Website"
        />

        <meta
          key="og:description"
          property="og:description"
          content={description}
        />

        <meta
          key="og:image"
          property="og:image"
          content="http://christian-hoepfner.com/images/og_preview.jpg"
        />

        <meta
          key="twitter:label1"
          property="twitter:label1"
          content="Christian Höpfner"
        />

        <meta
          key="twitter:data1"
          property="twitter:data1"
          content="Software Engineer"
        />

        <meta name="author" content="Christian Höpfner" />

        <meta
          key="twitter:label2"
          property="twitter:label2"
          content="Read time"
        />

        <meta key="twitter:data2" property="twitter:data2" content="2min" />

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
