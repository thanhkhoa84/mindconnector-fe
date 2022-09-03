import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'

import { forwardRef, useEffect, useRef, useState } from 'react';

import styles from '../styles/components/NavBar.module.scss';

const DropdownMenu = ({ items, dropdown, dropdId }) => {
  return (
    <ul id={dropdId} className={`rounded-b-2xl shadow-xl m-0 flex flex-col absolute shadow-2xl bg-white p-4 lg:top-full left-[-30px] lg:w-[320px] ${dropdown ? 'block' : 'hidden'}`}>
      {items.map((item, index) => {
        return (
          <li key={index} className='w-full font-normal leading-8'>
            <Link href={item.path} className={`${styles.navLink}`} scroll={false}>
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const NavItem = ({link, index}) => {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();
  let ref = useRef();

  const handleRouteChange = (url, { shallow }) => {
    setDropdown(false)
  }
  
  const onClickHandler = (e) => {
    setDropdown((dropdown) => !dropdown);
    e.preventDefault();
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
    }
  }

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    router.events.on("hashChangeStart", handleRouteChange);
    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('hashChangeStart', handleRouteChange)
      document.removeEventListener("mousedown", handleClickOutside);
    }
  },[dropdown]);

  return(
    <li
      className={`
        flex
        items-center
        justiofy-center
        h-[80px]
        ${link.submenus ? 'group relative' : ''} 
      `}
      ref={ref}
      key={index}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >      
      {link.submenus ? 
        (
          <>
            <button onClick={onClickHandler} data-dropdown-toggle={`dropdown-${index}`} aria-expanded={dropdown ? "true" : "false"} className='hover:color-purple' onClick={onClickHandler}>{link.name}</button>
            <DropdownMenu dropdId={`dropdown-${index}`} items={link.submenus} dropdown={dropdown}/>
          </>
        )
          :
        (<Link href={link.path} className='hover:text-purple'>
          {link.name}
        </Link>)
      }
    </li>
  )
}

const NavItems = ({ navlinks }) => {
  return (
    <ul className='m-0 p-0 z-10 relative h-[100%] font-bold justify-center items-center lg:flex lg:space-x-6 items-center lg:flex-row lg:mr-6'>
      {navlinks.map((link, index) => {
        return (
          <NavItem link={link} index={index} key={index} />
        );
      })}
    </ul>
  );
};

const NavBar = ({ ...navlinks }) => {
  return (
    <nav className='h-full'>
      <NavItems {...navlinks} />
    </nav>
  );
};

export default NavBar;
