import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ navlinks, children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header navlinks={navlinks} />
      <main>{children}</main>
      <Footer navlinks={navlinks} />
    </>
  );
}
