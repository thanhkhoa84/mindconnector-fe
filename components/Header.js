import Image from 'next/image';
import Link from 'next/link';
import NavBar from './NavBar';
import CTA from './CTA';

import styles from '../styles/components/Header.module.scss';
import Container from './Container';
import { Logo } from './Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.headerNav}>
        <NavBar />
        <CTA href='explore'>Khám phá ngay</CTA>
      </div>
    </header>
  );
};

export default Header;
