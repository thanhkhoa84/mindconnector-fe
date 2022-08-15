import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import styles from '../styles/Logo.module.scss';

const Title = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref} className={styles.logo}>
      Mind <br />
      Connector
    </a>
  );
});

const Logo = React.forwardRef(() => {
  return (
    <Link href='/' passHref>
      <Title />
    </Link>
  );
});

export default Logo;
