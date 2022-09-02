import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import styles from '../styles/components/Logo.module.scss';

const Title = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref} className='font-black inline-block text-white select-none text-sm leading-[1] lg:text-2xl lg:text-purple'>
      Mind Connector
    </a>
  );
});
Title.displayName = 'Title';

const Logo = React.forwardRef(() => {
  return (
    <Link href='/' passHref>
      <Title />
    </Link>
  );
});
Logo.displayName = 'Logo';

const LogoMobile = React.forwardRef(({ onClick, href }, ref) => {
  return <h1 className={styles.logoMobile}>Mind Connector</h1>;
});
LogoMobile.displayName = 'LogoMobile';

module.exports = { Logo, LogoMobile };
