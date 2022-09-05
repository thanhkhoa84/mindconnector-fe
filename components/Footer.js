import styles from '../styles/components/Footer.module.scss';
import { LogoMobile } from './Logo';
import Container from './Container';
import Link from "next/link";

import Navigation from "./Navigation";

const Footer = ({ position, navlinks }) => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className="py-8 px-0">
          <LogoMobile />
          <div className={styles.footerNav}>
            <Navigation navlinks={navlinks} position="footer" />
          </div>
        </div>
      </Container>
      <div className="h-16 bg-purple text-center leading-[4rem] text-white">
        <Container>&copy; Mind Connector, Inc. 2022</Container>
      </div>
    </footer>
  );
};

export default Footer;
