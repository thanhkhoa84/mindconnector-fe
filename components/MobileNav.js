import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

/* Mobile Navigation */
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
    console.log(shallow);
    setDropdown((prev) => !prev);
    console.log(dropdown);
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
  }, [dropdown]);

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
              <img
                src="/img/detail-arrow.png"
                alt=""
                className={`
                  w-[30px]
                  ${dropdown ? "hidden" : ""}
                `}
              />
              <img
                src="/img/detail-arrow-close.png"
                alt=""
                className={`
                  w-[30px]
                  ${dropdown ? "" : "hidden"}
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

const MobileNavItems = ({ navlinks }) => {
  return (
    <ul className="flex flex-col rounded-b-2xl bg-[#E0E0E0] p-4 pb-8 text-left shadow-asidebox">
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
