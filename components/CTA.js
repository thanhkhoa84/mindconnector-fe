import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/CTA.module.scss';

const Button = React.forwardRef(({ href, onClick, ...props }, ref) => {
  console.log(props);
  return (
    <a href={href} onClick={onClick} ref={ref} className={styles.HeaderCTA}>
      {props.children}
    </a>
  );
});

const HeaderCTA = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <Button>{children}</Button>
    </Link>
  );
};

module.exports = { HeaderCTA };
