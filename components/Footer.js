import { LogoMobile } from "./Logo";
import Container from "./Container";
import Image from "next/future/image";
import dynamic from "next/dynamic";

let MobileNavFooter = dynamic(() => import("./MobileNavFooter"), {
  ssr: false,
});

const Footer = ({ position, navlinks }) => {
  return (
    <footer className="relative bg-[#F7F3F4] px-0">
      <div className="absolute inset-0">
        <Image
          alt=""
          src="/img/bg-footer.png"
          blurDataURL={"/img/bg-footer.png"}
          placeholder="blur"
          width={1400}
          height={320}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="relative py-12">
        <Container>
          <div className="flex flex-row justify-center lg:justify-start">
            <LogoMobile />
          </div>

          <div>
            <MobileNavFooter navlinks={navlinks} position="footer" />
          </div>

          {/* <div className="mt-8 md:-mt-[40px]">
            <ul className="flex flex-row justify-center gap-4 md:justify-end md:gap-6 md:gap-6">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <Image
                    src="/img/facebook.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/img/instagram.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <Image src="/img/twitter.svg" alt="" width={40} height={40} />
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <Image src="/img/youtube.svg" alt="" width={40} height={40} />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Image
                    src="/img/linkedin.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </a>
              </li>
            </ul>
          </div> */}
        </Container>
      </div>
      <div className="relative h-16 bg-purple text-center leading-[4rem] text-white">
        <Container>&copy; Mind Connector, Inc. 2022</Container>
      </div>
    </footer>
  );
};

export default Footer;
