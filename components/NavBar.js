import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components/NavBar.module.scss';

const navLinks = [
  {
    name: 'Student',
    path: 'student',
  },
  {
    name: 'Business',
    path: 'business',
  },
  {
    name: 'News',
    path: 'news',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
  // {
  //   name: 'Explore',
  //   path: 'explore',
  // },
];

const NavItems = () => {
  return navLinks.map((link, index) => {
    return (
      <li className={styles.navItem} key={index}>
        <Link href={link.path} className={styles.navLink}>
          {link.name}
        </Link>
      </li>
    );
  });
};

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <NavItems />
      </ul>
    </nav>
  );
};

export default NavBar;
