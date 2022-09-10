import Link from "next/link";
import React from "react";

const Title = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className="inline-block select-none text-sm font-black leading-[1] text-white lg:text-2xl lg:text-purple
    "
    >
      Mind Connector
    </a>
  );
});
Title.displayName = "Title";

const Logo = React.forwardRef(() => {
  return (
    <Link href="/" passHref>
      <Title />
    </Link>
  );
});
Logo.displayName = "Logo";

const LogoMobile = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <h1 className="block select-none text-center text-xl font-black leading-none text-purple md:text-2xl">
      Mind Connector
    </h1>
  );
});
LogoMobile.displayName = "LogoMobile";

module.exports = { Logo, LogoMobile };
