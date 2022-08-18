import Image from 'next/image';
import Link from 'next/link';
import NavBar from './NavBar';
import { HeaderCTA } from './CTA';

import styles from '../styles/components/Header.module.scss';
import { Logo } from './Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.headerNav}>
        <NavBar />
        <HeaderCTA href='explore'>Khám phá ngay</HeaderCTA>
      </div>
    </header>
  );
};

export default Header;
