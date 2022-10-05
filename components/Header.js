import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavBar, MobileNav } from "./HeaderNavigation";
import Container from "./Container";
import { Logo } from "./Logo";

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
    <header className="relative bg-purple lg:bg-white">
      <Container>
        <div className="rounded2-b-xl flex h-[60px] items-center justify-between lg:-mx-4 lg:h-[80px] lg:rounded-none ">
          <div className="flex flex-wrap items-center">
            <Logo />
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="hidden w-full bg-[#DDDEDE] lg:block lg:bg-transparent">
              <NavBar {...navlinks} />
            </div>

            <Link href="">
              <span className="header-cta">Khám phá ngay</span>
            </Link>

            <button
              type="button"
              className="h-[40px] w-[30px] text-right text-white lg:hidden"
              onClick={toggleMenu}
              aria-label="Menu Button"
            >
              <span className="inline text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`
                  ${toggle ? "hidden" : ""}
                  h-6 w-6
                `}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`
                  ${toggle ? "" : "hidden"}
                  h-6 w-6
                `}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div
          className={`
          ${toggle ? "block" : "hidden"}
          absolute top-full z-10 -mx-[1em] w-full rounded-b-2xl bg-transparent lg:hidden
        `}
        >
          <MobileNav {...navlinks} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
