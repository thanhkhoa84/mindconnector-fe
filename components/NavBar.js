import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

import styles from "../styles/components/NavBar.module.scss";

const DropdownMenu = ({ items, dropdown, dropdId }) => {
  return (
    <ul
      id={dropdId}
      className={`
        left-[-30px] m-0 flex flex-col rounded-b-2xl bg-white p-4  
        lg:absolute lg:top-full lg:w-[320px] lg:shadow-xl lg:shadow-2xl
        ${dropdown ? "block" : "hidden"}`}
    >
      {items.map((item, index) => {
        return (
          <li key={index} className="w-full font-normal leading-8">
            <Link
              href={item.path}
              className={`${styles.navLink}`}
              scroll={false}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const NavItem = ({ link, index }) => {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();
  let ref = useRef();

  const handleRouteChange = (url, { shallow }) => {
    setDropdown(false);
  };

  const onClickHandler = (e) => {
    setDropdown((dropdown) => !dropdown);
    e.preventDefault();
  };

  const handleClickOutside = (event) => {
    if (dropdown) return;
    if (ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    router.events.on("hashChangeStart", handleRouteChange);
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("hashChangeStart", handleRouteChange);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  return (
    <li
      className={`
        lg:flex lg:h-[80px] lg:items-center lg:justify-center
        ${link.submenus ? "group relative" : ""} 
      `}
      ref={ref}
      key={index}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {link.submenus ? (
        <>
          <button
            onClick={onClickHandler}
            data-dropdown-toggle={`dropdown-${index}`}
            aria-expanded={dropdown ? "true" : "false"}
            className="hover:color-purple"
            onClick={onClickHandler}
          >
            {link.name}{" "}
            {dropdown ? (
              <span className="inline-block text-[10px]">
                <AiOutlineUp value={{ fontSize: "1em" }} />
              </span>
            ) : (
              <span className="inline-block text-[10px]">
                <AiOutlineDown />
              </span>
            )}
          </button>
          <DropdownMenu
            dropdId={`dropdown-${index}`}
            items={link.submenus}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link href={link.path} className="hover:text-purple">
          {link.name}
        </Link>
      )}
    </li>
  );
};

const NavItems = ({ navlinks }) => {
  return (
    <ul
      className="relative z-10 m-0 h-full w-full flex-col items-center items-center justify-center
      p-0 font-bold lg:mr-6 
      lg:block lg:flex lg:flex-row lg:space-x-6 lg:bg-transparent"
    >
      {navlinks.map((link, index) => {
        return <NavItem link={link} index={index} key={index} />;
      })}
    </ul>
  );
};

const NavBar = ({ ...navlinks }) => {
  return <NavItems {...navlinks} />;
};

export default NavBar;
