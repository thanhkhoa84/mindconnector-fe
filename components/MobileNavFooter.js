import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useMenuContext } from "../components/common/MenuProvider";

// Footer navigation
const MobileDropdown = ({ items, dropdId }) => {
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
            w-full text-[14px] font-normal leading-6
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
  let ref = useRef();

  return (
    <li
      className={`
        inline-flex flex-col items-center font-bold leading-6 md:items-start
        ${link.submenus ? "p-0" : ""}
        ${link.submenus ? "group relative" : ""} 
      `}
      ref={ref}
      key={index}
    >
      {link.submenus ? (
        <>
          <Link href={link.path}>{link.name}</Link>
          <MobileDropdown dropdId={`dropdown-${index}`} items={link.submenus} />
        </>
      ) : (
        <Link href={link.path}>{link.name}</Link>
      )}
    </li>
  );
};

const MobileNavFooter = () => {
  const navlinks = useMenuContext();
  return (
    <ul
      className={`mt-8 flex flex-col flex-wrap gap-8 md:gap-7 lg:flex-row lg:gap-x-16`}
    >
      {navlinks.map((link, index) => {
        return <MobileNavItem link={link} index={index} key={index} />;
      })}
    </ul>
  );
};

export default MobileNavFooter;
