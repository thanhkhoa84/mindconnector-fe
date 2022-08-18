import styles from '../styles/components/Footer.module.scss';
import { LogoMobile } from './Logo';
import Container from './Container';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerInfo}>
          <LogoMobile />
          <div className={styles.footerNav}></div>
        </div>
      </Container>
      <div className={styles.copyright}>
        <Container>&copy; Mind Connector, Inc. 2022</Container>
      </div>
    </footer>
  );
};

export default Footer;
