import Link from "next/link";
import { useRef } from "react";
import { useMenuContext } from "@/context/MenuProvider";

// Footer navigation
const MobileDropdown = ({ items, dropdId }) => {
  return (
    <ul
      id={`mobile-${dropdId}`}
      className={`
        flex flex-col items-center text-center font-normal md:text-left lg:items-start
      `}
    >
      {items.map((item, index) => {
        return (
          <li
            key={index}
            className={`
            w-full text-[14px] font-normal leading-6
            ${index == 0 ? "" : "mt-2"}
          `}
          >
            <Link legacyBehavior href={item.path} className={``} scroll={false}>
              <a className="block py-2">{item.name}</a>
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
          <Link legacyBehavior href={link.path}>
            <a className="block py-2">{link.name}</a>
          </Link>
          <MobileDropdown dropdId={`dropdown-${index}`} items={link.submenus} />
        </>
      ) : (
        <Link legacyBehavior href={link.path}>
          <a className="block py-2">{link.name}</a>
        </Link>
      )}
    </li>
  );
};

const MobileNavFooter = () => {
  const navlinks = useMenuContext();
  return (
    <ul
      className={`mt-4 flex flex-col flex-wrap gap-8 md:gap-7 lg:flex-row lg:gap-x-16`}
    >
      {navlinks.map((link, index) => {
        return <MobileNavItem link={link} index={index} key={index} />;
      })}
    </ul>
  );
};

export default MobileNavFooter;
