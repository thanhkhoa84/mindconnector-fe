import Container from "@/components/Container";
import Image from "next/image";
import dynamic from "next/dynamic";

const LogoMobile = dynamic(() =>
  import("@/components/Logo").then((mod) => mod.LogoMobile)
);
const MobileNavFooter = dynamic(() => import("@/components/MobileNavFooter"));

const Footer = () => {
  return (
    <footer className="relative bg-[#F7F3F4] px-0">
      <div className="sr-only">
        <h2>Footer</h2>
      </div>
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
            <MobileNavFooter />
          </div>
        </Container>
      </div>
      <div className="relative h-16 bg-purple text-center leading-[4rem] text-white">
        <Container>&copy; Mind Connector, Inc. 2022</Container>
      </div>
    </footer>
  );
};

export default Footer;
