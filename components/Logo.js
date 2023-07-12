import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/media";
import { useMenuContext } from "@/context/MenuProvider";

const Title = React.forwardRef(({ onClick, href }, ref) => {
  let context = useMenuContext();
  let logo = context.logo;
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className="inline-block leading-[0] transition-all"
      title="Mind Connector"
    >
      {logo ? (
        <>
          <Image
            src={getStrapiMedia(logo.logoLight)}
            alt="Mind Connector logo"
            width={151}
            height={14}
            className="hidden lg:inline"
          />
          <Image
            src={getStrapiMedia(logo.logoDark)}
            alt="Mind Connector logo"
            width={151}
            height={14}
            className="lg:hidden"
          />
        </>
      ) : (
        <>
          <Image
            src={"/img/logo.png"}
            alt="Mind Connector logo"
            width={151}
            height={14}
            className="hidden lg:inline"
          />
          <Image
            src="/img/logo-mb.png"
            alt="Mind Connector logo"
            width={151}
            height={14}
            className="lg:hidden"
          />
        </>
      )}
    </a>
  );
});
Title.displayName = "Title";

const Logo = React.forwardRef(({ logo }) => {
  return (
    <Link legacyBehavior href="/" passHref>
      <Title {...logo} />
    </Link>
  );
});
Logo.displayName = "Logo";

const LogoMobile = () => {
  return (
    <h3 className="block select-none text-center text-xl font-black leading-none text-purple md:text-2xl">
      Mind Connector
    </h3>
  );
};

module.exports = { Logo, LogoMobile };
