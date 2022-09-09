import dynamic from 'next/dynamic';
import YouTube from 'react-youtube';

import Container from '../../components/Container';
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
          Mind Connector kết nối tầm nhìn và tri thức để giúp doanh nghiệp, cá
          nhân phát triển và tăng trưởng mạnh mẽ trong tương lai.
        </p>
        <div className="aspect-w-16 aspect-h-9 relative -mx-[1em] mt-[3em] overflow-hidden bg-gray-default md:mx-0 md:rounded-3xl [&>div>iframe]:h-full [&>div>iframe]:w-full">
          {/* <YouTube videoId="8dJyRm2jJ-U" opts={opts} onReady={_onReady} /> */}
        </div>
      </Container>
      <LogoList title="Đối tác" list={["1", "2", "3", "4", "5", "6"]} />
    </section>
  );
};

export default About;
