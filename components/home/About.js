import dynamic from 'next/dynamic';
import YouTube from 'react-youtube';
import Image from "next/future/image";
import Container from "../../components/Container";
import { SectionHeading } from "../../components/Heading";

const LogoList = dynamic(() => import("./../LogoList"), {
  ssr: false,
});

const About = () => {
  const opts = {
    height: "auto",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <section className="pt-[3em]">
      <Container>
        <SectionHeading align="center">Về Mind Connector</SectionHeading>
        <p className="text-center lg:my-0 lg:mx-auto lg:max-w-[46%]">
          Mind Connector là một mạng lưới của các nhà tư vấn kinh doanh cùng các
          giảng viên vốn là các lãnh đạo và chuyên gia hàng đầu trong nhiều lĩnh
          vực khác nhau giúp các doanh nghiệp và cá nhân phát triển mạnh mẽ
          trong tương lai.
        </p>
        <div className="my-[60px]">
          <Image
            src="/img/home-about.png"
            alt=""
            width={2080}
            height={880}
            className="hidden md:block"
          />
          <Image
            src="/img/home-about-mb.png"
            alt=""
            width={690}
            height={916}
            className="md:hidden"
          />
        </div>
      </Container>
    </section>
  );
};

export default About;
