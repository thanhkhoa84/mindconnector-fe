import App from "next/app";
import { createContext } from "react";

import "../styles/globals.scss";
import Layout from "./../components/common/Layout";

import { fetchAPI } from "@/lib/api.js";

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
  const { locale, defaultLocale, asPath } = ctx;
  const params = {
    nested: true,
    populate: {
      items: {
        populate: "*",
      },
    },
  };
  const navData = await fetchAPI(`/menus/1`, params);
  let menus = navData.data.attributes.items.data;
  return {
    ...appProps,
    pageProps: {
      global: {
        siteName: "Mind Connector",
        menus,
      },
    },
  };
};

export default MyApp;
