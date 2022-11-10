import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/future/image";
import ActiveLink from "./ActiveLink";
import { useMenuContext } from "../components/common/MenuProvider";

// Desktop Navigation
const DropdownMenu = ({ items, dropdown, dropdId }) => {
  return (
    <ul
      id={dropdId}
      className={`
        left-[-30px] m-0 flex flex-col rounded-b-2xl bg-white p-4 backdrop-blur-xl  
        lg:absolute lg:top-full lg:w-[320px] lg:shadow-xl lg:shadow-2xl
        ${dropdown ? "block" : "hidden"}`}
    >
      {items.map((item, index) => {
        return (
          <li key={index} className="group mb-4 w-full font-normal leading-8">
            <ActiveLink
              href={item.path}
              activeClassName="text-purple"
              scroll={false}
            >
              <a className="hover:text-purple">{item.name}</a>
            </ActiveLink>
          </li>
        );
      })}
    </ul>
  );
};

const NavItem = ({ link, index }) => {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();
  let navItem = useRef();

  const handleRouteChange = (url, { shallow }) => {
    setDropdown(false);
  };

  const onClickHandler = (e) => {
    setDropdown((dropdown) => !dropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdown) return;
    if (navItem.current && !navItem.current.contains(event.target)) {
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
  });

  return (
    <li
      className={`
        lg:flex lg:h-[80px] lg:items-center lg:justify-center hover:[&>a]:text-purple
        ${link.submenus ? "group relative" : ""} 
      `}
      ref={navItem}
      key={index}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {link.submenus ? (
        <>
          <ActiveLink href={link.path} activeClassName="text-purple">
            <a onClick={onClickHandler} className="hover:text-purple">
              {link.name}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline h-4 w-4 align-sub transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </ActiveLink>
          <DropdownMenu
            dropdId={`dropdown-${index}`}
            items={link.submenus}
            dropdown={dropdown}
          />
        </>
      ) : (
        <ActiveLink href={link.path} activeClassName="text-purple">
          <a className="hover:text-purple">{link.name}</a>
        </ActiveLink>
        // <ActiveLink
        //   href={link.path}
        //   activeClassName="text-purple"
        //   className="hover:text-purple"
        // >
        //   <a className="hover:text-purple">{link.name}</a>
        // </ActiveLink>
      )}
    </li>
  );
};

const NavBar = () => {
  const navlinks = useMenuContext();
  return (
    <ul
      className="relative z-10 m-0 h-full w-full flex-col items-center items-center justify-center
      p-0 font-bold md:space-x-2 
      lg:mr-2 lg:block lg:flex lg:flex-row lg:space-x-3 lg:bg-transparent xl:space-x-8"
    >
      <li>
        <ActiveLink href="/" activeClassName="[&>svg>path]:fill-purple">
          <a className="group block hover:[&>svg>path]:fill-purple">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              className="cursor-pointer"
            >
              <path
                id="_001-home"
                data-name="001-home"
                d="M11.677,5.219h0L6.781.324a1.1,1.1,0,0,0-1.563,0L.325,5.216l0,.005A1.1,1.1,0,0,0,1.056,7.1l.034,0h.2v3.6A1.294,1.294,0,0,0,2.578,12H4.493a.352.352,0,0,0,.352-.352V8.824a.591.591,0,0,1,.59-.59h1.13a.591.591,0,0,1,.59.59v2.824A.352.352,0,0,0,7.506,12H9.421a1.294,1.294,0,0,0,1.293-1.293V7.1H10.9a1.1,1.1,0,0,0,.782-1.885Zm0,0"
                transform="translate(0.001)"
                fill="#2b2b2b"
              />
            </svg>
          </a>
        </ActiveLink>
      </li>
      {navlinks.map((link, index) => {
        return <NavItem link={link} index={index} key={index} />;
      })}
    </ul>
  );
};

// Mobile Navigation
const MobileDropdown = ({ items, dropdown, dropdId }) => {
  return (
    <ul
      id={`mobile-${dropdId}`}
      className={`
      rounded-xl bg-[#EAE5DF] p-4 py-6 font-normal
        ${dropdown ? "block" : "hidden"}
      `}
    >
      {items.map((item, index) => {
        return (
          <li
            key={index}
            className={`
            w-full text-[14px] font-normal leading-none
            ${index == 0 ? "" : "mt-6"}
          `}
          >
            <Link href={item.path} className={``} scroll={false}>
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const MobileNavItem = ({ link, index }) => {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();
  let ref = useRef();

  const handleRouteChange = (url, { shallow }) => {
    setDropdown((prev) => false);
  };

  const onClickHandler = (e) => {
    setDropdown((dropdown) => !dropdown);
    e.preventDefault();
  };

  useEffect(() => {
    router.events.on("hashChangeStart", handleRouteChange);
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("hashChangeStart", handleRouteChange);
    };
  }, [dropdown, router.events]);

  return (
    <li
      className={`
        rounded-xl font-bold
        ${index == 0 ? "" : "mt-4"}
        ${link.submenus ? "p-0" : "w-full border border-purple bg-white p-4"}
        ${link.submenus ? "group relative" : ""} 
        ${link.submenus ? "bg-[#EAE5DF]" : ""} 
      `}
      ref={ref}
      key={index}
    >
      {link.submenus ? (
        <>
          <button
            data-dropdown-toggle={`mobile-dropdown-${index}`}
            aria-expanded={dropdown ? "true" : "false"}
            onClick={onClickHandler}
            className="flex w-full flex-row items-center justify-between rounded-xl border border-purple bg-white px-4 py-3 text-left leading-none"
          >
            {link.name}
            <span>
              <Image
                src="/img/detail-arrow.png"
                alt=""
                width={30}
                height={30}
                className={`
                  w-[30px] transition-all
                  ${dropdown ? "-rotate-180" : ""}
                `}
              />
            </span>
          </button>
          <MobileDropdown
            dropdId={`dropdown-${index}`}
            items={link.submenus}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link href={link.path} className="block hover:text-purple">
          {link.name}
        </Link>
      )}
    </li>
  );
};

const MobileNav = () => {
  const navlinks = useMenuContext();
  return (
    <ul className="flex flex-col rounded-b-2xl bg-[#E0E0E0] p-4 pb-8 text-left shadow-asidebox">
      {navlinks.map((link, index) => {
        return <MobileNavItem link={link} index={index} key={index} />;
      })}
    </ul>
  );
};

export { NavBar, MobileNav };
