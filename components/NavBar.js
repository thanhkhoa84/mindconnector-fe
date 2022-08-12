import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='student'>Student</Link>
        </li>
        <li>
          <Link href='business'>Business</Link>
        </li>
        <li>
          <Link href='partners'>Partners</Link>
        </li>
        <li>
          <Link href='news'>News</Link>
        </li>
        <li>
          <Link href='contact'>Contact</Link>
        </li>
        <li>
          <Link href='explore'>Explore</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
