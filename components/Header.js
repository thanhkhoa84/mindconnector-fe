import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import { CTA } from "./CTA";
import { Logo } from "./Logo";
import styles from "../styles/components/Header.module.scss";

const Header = ({ ...navlinks }) => {
  let [toggle, setToggle] = useState(false);
  const router = useRouter();

  let toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  const handleRouteChange = (url, { shallow }) => {
    setToggle((prev) => false);
  };

  useEffect(() => {
    router.events.on("hashChangeStart", handleRouteChange);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("hashChangeStart", handleRouteChange);
    };
  });

  return (
    <header className="relative">
      <div className="rounded2-b-xl flex h-[60px] items-center justify-between bg-purple px-4 lg:h-[80px] lg:rounded-none lg:bg-white lg:shadow-lg">
        <div className="flex flex-wrap items-center">
          <Logo />
        </div>
        <div className="flex flex-row items-center">
          <div className="hidden w-full bg-[#DDDEDE] lg:block lg:bg-transparent">
            <NavBar {...navlinks} />
          </div>

          <CTA href="explore" name="header-cta">
            Khám phá ngay
          </CTA>

          <button
            type="button"
            className="h-[40px] w-[30px] text-right lg:hidden"
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
      </div>
      <div
        className={`
          ${toggle ? "block" : "hidden"}
          absolute top-full z-10 w-full rounded-b-2xl bg-transparent lg:hidden
        `}
      >
        <MobileNav {...navlinks} />
      </div>
    </header>
  );
};

export default Header;
