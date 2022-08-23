import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/CTA.module.scss';

const Button = React.forwardRef(({ href, onClick, ...props }, ref) => {
  console.log(props.name);
  return (
    <a href={href} onClick={onClick} ref={ref} className={styles[props.name]}>
      {props.children}
    </a>
  );
});

const CTA = ({ href, name, children }) => {
  return (
    <Link href={href} passHref>
      <Button name={name}>{children}</Button>
    </Link>
  );
};

module.exports = { CTA };
