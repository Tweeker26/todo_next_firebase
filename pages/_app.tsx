import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RMWCProvider } from '@rmwc/provider';
import { AuthProvider } from '@/lib/auth';

import 'material-components-web/dist/material-components-web.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RMWCProvider
      icon={{ basename: 'material-icons' }}
      typography={{ defaultTag: 'div', headline1: 'h1' }}
      tooltip={{ align: 'right' }}
    >
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Todo Next with Firebase</title>
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RMWCProvider>
  );
}

export default MyApp;
