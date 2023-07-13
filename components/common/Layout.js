import Header from "@/components/global/Header";
import Footer from "../Footer";
import Head from "next/head";
import Router from "next/router";
import { MenuProvider } from "@/context/MenuProvider";
import { GlobalModal } from "@/components/common/modal/GlobalModal";

Router.onRouteChangeComplete = () => {
  window.scroll({
    top: 0,
    left: 0,
  });
};

export default function Layout({ children }) {
  let logo = children.props.global.logo.data.attributes;
  let Navigations = children.props.global.menus.map((panel) => {
    return {
      name: panel.attributes.title,
      path: panel.attributes.url,
      submenus: panel.attributes.children.data.map((i) => {
        return {
          name: i.attributes.title,
          path: i.attributes.url,
        };
      }),
    };
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalModal>
        <MenuProvider logo={logo} nav={Navigations}>
          <Header />
          {children}
          <Footer />
        </MenuProvider>
      </GlobalModal>
    </>
  );
}
