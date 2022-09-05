import Image from 'next/image';
import { useState, useEffect, useContext } from "react";
import NavBar from "./NavBar";
import { CTA } from "./CTA";
import { Logo } from "./Logo";
import styles from "../styles/components/Header.module.scss";

const Header = ({ ...navlinks }) => {
  let [toggle, setToggle] = useState(false);
  let toggleMenu = () => {
    setToggle((prev) => !prev);
  };
  return (
    <header className="rounded2-b-xl relative flex h-[60px] items-center justify-between bg-purple px-4 lg:h-[80px] lg:rounded-none lg:bg-white lg:shadow-lg">
      <div className="flex flex-wrap items-center">
        <Logo />
      </div>
      {/* <div className={`nav bg-[#DEDFDF] lg:bg-transparent`}>
        <nav className="h-full"></nav>
      </div> */}
      <div className="flex flex-row items-center">
        <div className="absolute top-full left-0 right-0 w-full bg-[#DDDEDE] lg:static lg:bg-transparent">
          <NavBar {...navlinks} />
        </div>
        <CTA href="explore" name="header-cta">
          Khám phá ngay
        </CTA>
        <button
          type="button"
          className="ml-2 h-[40px] w-[40px] text-center lg:hidden"
          onClick={toggleMenu}
        >
          <span className="inline-block text-center">
            <img
              src="/img/menu.svg"
              alt=""
              className={`${toggle ? "hidden" : ""}`}
              width={14}
              height={14}
            />
            <img
              src="/img/menu-close.svg"
              alt=""
              className={`${!toggle ? "hidden" : ""}`}
              width={12}
              height={12}
            />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
