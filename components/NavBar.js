import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'

import { forwardRef, useEffect, useState } from 'react';

import styles from '../styles/components/NavBar.module.scss';

const DropdownMenu = ({ items, isOpen, dropdId }) => {
  return (
    <ul id={dropdId} className={`rounded-b-2xl shadow-xl m-0 flex flex-col absolute shadow-2xl bg-white p-4 lg:top-[55px] left-[-30px] lg:w-[320px] ${isOpen ? 'block' : 'hidden'}`}>
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

const NavItems = forwardRef(({ navlinks }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onClickHandler = (e) => {
    setIsOpen((isOpen) => !isOpen);
    e.preventDefault();
  };

  useEffect(() => {
    if(isOpen) return;

    const handleRouteChange = (url, { shallow }) => {
      setIsOpen(false)
    }

    router.events.on("hashChangeStart", handleRouteChange);
    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('hashChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <ul className='m-0 p-0 z-10 relative h-[100%] font-bold justify-center items-center lg:flex lg:space-x-6 items-center lg:flex-row lg:mr-6'>
      {navlinks.map((link, index) => {
        return (
          <li
            className={`
              items-center
              justiofy-center
              ${link.submenus ? 'group relative' : ''} 
            `}
            key={index}
          >
            {link.submenus ? 
              (
                <>
                  <button onClick={onClickHandler} data-dropdown-toggle={`dropdown-${index}`} className='hover:color-purple'>{link.name}</button>
                  <DropdownMenu dropdId={`dropdown-${index}`} items={link.submenus} isOpen={isOpen}/>
                </>
              )
                :
              (<Link href={link.path} className='hover:text-purple'>
                {link.name}
              </Link>)
            }
          </li>
        );
      })}
    </ul>
  );
});
NavItems.displayName = 'NavItems';

const NavBar = ({ ...navlinks }) => {
  return (
    <nav className='h-full'>
      <NavItems {...navlinks} />
    </nav>
  );
};

export default NavBar;
