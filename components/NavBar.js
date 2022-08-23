import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components/NavBar.module.scss';

const navLinks = [
  {
    name: 'Dành cho sinh viên',
    path: 'student',
  },
  {
    name: 'Dành cho doanh nghiệp',
    path: 'business',
  },
  {
    name: 'Đối tác',
    path: 'partners',
  },
  {
    name: 'Tin tức & Sự kiện',
    path: 'news',
  },
  {
    name: 'Liên hệ',
    path: 'contact',
  },
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
