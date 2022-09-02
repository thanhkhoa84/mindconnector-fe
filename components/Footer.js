import styles from '../styles/components/Footer.module.scss';
import { LogoMobile } from './Logo';
import Container from './Container';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className="py-8 px-0">
          <LogoMobile />
          <div className={styles.footerNav}>
            <ul></ul>
          </div>
        </div>
      </Container>
      <div className="bg-purple text-center text-white h-16 leading-[4rem]">
        <Container>&copy; Mind Connector, Inc. 2022</Container>
      </div>
    </footer>
  );
};

export default Footer;
