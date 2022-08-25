import YouTube from 'react-youtube';

import Container from '../../components/Container';
import { SectionHeading } from '../../components/Heading';
import styles from './About.module.scss';
import LogoList from './../LogoList';

const About = () => {
  const opts = {
    height: 'auto',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <section className={styles.AboutMi}>
      <Container>
        <SectionHeading align='center'>Về Mind Connector</SectionHeading>
        <p className='text-center'>
          Mind Connector kết nối tầm nhìn và tri thức để giúp doanh nghiệp, cá
          nhân phát triển và tăng trưởng mạnh mẽ trong tương lai.
        </p>
        {/* <div className={styles.videoEmbed}>
          <YouTube videoId='8dJyRm2jJ-U' opts={opts} onReady={_onReady} />
        </div> */}
      </Container>
      <LogoList
        title='Đối tác'
        list={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
      />
    </section>
  );
};

export default About;
