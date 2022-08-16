import Image from 'next/image';
import Link from 'next/link';
import NavBar from './NavBar';

import styles from '../styles/Header.module.scss';
import Container from './Container';
import Logo from './Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
