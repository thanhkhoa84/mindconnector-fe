import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/CTA.module.scss';

const Button = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref} className={styles.CTA}>
      Khám phá ngay
    </a>
  );
});

const CTA = React.forwardRef(({ href }) => {
  return (
    <Link href={href} passHref>
      <Button />
    </Link>
  );
});

export default CTA;
