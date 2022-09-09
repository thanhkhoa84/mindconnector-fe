import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import ActiveLink from "./ActiveLink";

/* Mobile Navigation */
const MobileDropdown = ({ items, dropdown, dropdId }) => {
  return (
    <ul
      id={`mobile-${dropdId}`}
      className={`
        mt-4 flex flex-col items-center text-center font-normal md:text-left lg:items-start
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
  const [mobile, setMobile] = useState(false);
  const router = useRouter();
  let ref = useRef();

  const handleRouteChange = (url, { shallow }) => {
    setDropdown((prev) => !prev);
  };

  const onClickHandler = (e) => {
    if (window.innerWidth >= 1024) return;
    setDropdown((dropdown) => !dropdown);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setMobile(false);
    } else {
      setMobile(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobile]);

  useEffect(() => {
    if (window.innerWidth >= 1024) setDropdown(true);
    router.events.on("hashChangeStart", handleRouteChange);
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("hashChangeStart", handleRouteChange);
    };
  }, [dropdown]);

  return (
    <li
      className={`
        inline-flex flex-col items-center font-bold md:items-start
        ${link.submenus ? "p-0" : ""}
        ${link.submenus ? "group relative" : ""} 
      `}
      ref={ref}
      key={index}
    >
      {link.submenus ? (
        <>
          {/* {mobile && !dropdown && (
            <div>
              <button href={link.path} onClick={onClickHandler}>
                {link.name}{" "}
                <span className="inline-block align-text-bottom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`
                    ${dropdown ? "-rotate-180" : ""}
                    inline h-2 w-2 transition-all lg:hidden
                  `}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
          )}
          {mobile && dropdown && <Link href={link.path}>{link.name}</Link>}
          {!mobile && <Link href={link.path}>{link.name}</Link>} */}
          <Link href={link.path}>{link.name}</Link>
          <MobileDropdown
            dropdId={`dropdown-${index}`}
            items={link.submenus}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link href={link.path}>{link.name}</Link>
      )}
    </li>
  );
};

const MobileNavItems = ({ navlinks }) => {
  return (
    <ul
      className={`mt-8 grid grid-flow-row grid-cols-1 md:grid-cols-${navlinks.length} gap-6`}
    >
      {navlinks.map((link, index) => {
        return <MobileNavItem link={link} index={index} key={index} />;
      })}
    </ul>
  );
};

const MobileNav = ({ ...navlinks }) => {
  return <MobileNavItems {...navlinks} />;
};

export default MobileNav;
