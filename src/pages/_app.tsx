import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Linktree Page Clone</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
