import App from 'next/app';
import Head from 'next/head';
import { createContext } from 'react';

import '../styles/globals.scss';
// import '../styles/app.scss';

import Layout from '../components/Layout';

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  // const { global } = pageProps;
  return (
    // <GlobalContext.Provider value={global.attributes}>
    <Component {...pageProps} />
    // </GlobalContext.Provider>
  );
}

// MyApp.getInitialProps = async (ctx) => {
//   // Calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(ctx);
//   // Fetch global site settings from Strapi
//   const globalRes = await fetchAPI('/global', {
//     populate: {
//       favicon: '*',
//       defaultSeo: {
//         populate: '*',
//       },
//     },
//   });
//   // Pass the data to our page via props
//   return { ...appProps, pageProps: { global: globalRes.data } };
// };

export default MyApp;
