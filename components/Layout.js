import Header from './Header';
import Footer from './Footer';

export default function Layout({ navlinks, children }) {
  return (
    <>
      <Header navlinks={navlinks} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
