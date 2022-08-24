import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components/NavBar.module.scss';
import { forwardRef, useEffect, useState } from 'react';

const DropdownMenu = ({ children }) => {
  return (
    <ul className={styles.dropdownMenu}>
      {children.map((l, index) => {
        return (
          <li key={index}>
            <Link href={l.path} className={styles.navLink} scroll={false}>
              {l.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const NavItems = forwardRef(({ navlinks }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = (e) => {
    e.preventDefault();
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    return () => {};
  }, [isOpen]);
  return (
    <ul>
      {navlinks.map((link, index) => {
        return (
          <li
            className={`${isOpen ? styles.active : ''} ${
              link.children ? styles.navItemDropdown : ''
            } ${styles.navItem}`}
            key={index}
            onClick={link.children ? onClickHandler : null}
          >
            <Link href={link.path} className={styles.navLink}>
              {link.name}
            </Link>
            {link.children && isOpen && (
              <DropdownMenu children={link.children} />
            )}
          </li>
        );
      })}
    </ul>
  );
});
NavItems.displayName = 'NavItems';

const NavBar = ({ ...navlinks }) => {
  return (
    <nav className={styles.nav}>
      <NavItems {...navlinks} />
    </nav>
  );
};

export default NavBar;
