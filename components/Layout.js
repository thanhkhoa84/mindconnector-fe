import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import { GlobalModal } from "./common/modal/GlobalModal";

export default function Layout({ navlinks, children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalModal>
        <Header navlinks={navlinks} />
        <main className="overflow-hidden">{children}</main>
        <Footer navlinks={navlinks} />
      </GlobalModal>
    </>
  );
}
