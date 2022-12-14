import App from "next/app";
import { createContext } from "react";

import "../styles/globals.scss";
import Layout from "./../components/common/Layout";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <GlobalContext.Provider value={global}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  // Fetch global site settings from Strapi
  // const globalRes = await fetchAPI('/global', {
  //   populate: {
  //     favicon: '*',
  //     defaultSeo: {
  //       populate: '*',
  //     },
  //   },
  // });

  // Pass the data to our page via props
  // return { ...appProps, pageProps: { global: globalRes.data } };
  const { locale, defaultLocale, asPath } = ctx;
  return {
    ...appProps,
    pageProps: {
      global: {
        siteName: "Mind Connector",
      },
    },
  };
};

export default MyApp;
