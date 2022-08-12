import Image from 'next/image';
import Link from 'next/link';
import NavBar from './NavBar';

import styles from '../styles/Header.module.css';
import Container from './Container';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Link href='/'>Mind Connector</Link>
        <NavBar />
      </Container>
    </header>
  );
};

export default Header;
