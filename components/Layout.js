import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import { useState } from "react";
import { MenuProvider } from "../components/common/MenuProvider";
import { GlobalModal } from "./common/modal/GlobalModal";
import { Navigation } from "../data/global";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalModal>
        <MenuProvider value={Navigation}>
          <Header />
          <main className="overflow-hidden">{children}</main>
          <Footer />
        </MenuProvider>
      </GlobalModal>
    </>
  );
}
