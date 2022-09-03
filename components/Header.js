import Image from 'next/image';
import Link from 'next/link';
import NavBar from './NavBar';
import { CTA } from './CTA';

import styles from '../styles/components/Header.module.scss';
import { Logo } from './Logo';

const Header = ({ ...navlinks }) => {
  return (
    <header className="bg-purple lg:bg-white rounded-b-xl lg:rounded-none lg:shadow-lg flex items-center justify-between h-[60px] lg:h-[80px] px-4">
      <div className="flex items-center flex-wrap">
        <Logo />
      </div>
      <div className={`flex items-center justify-center`}>
        <NavBar {...navlinks} />
        <CTA href='explore' name='header-cta'>
          Khám phá ngay
        </CTA>
      </div>
    </header>
  );
};

export default Header;
