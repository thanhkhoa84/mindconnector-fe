import Container from '../../components/Container';
import { SectionHeading } from '../../components/Heading';
import styles from './About.module.scss';

const About = () => {
  return (
    <section className={styles.aboutMi}>
      <Container>
        <SectionHeading align='center'>Về Mind Connector</SectionHeading>
        <p className='text-center'>
          Mind Connector kết nối tầm nhìn và tri thức để giúp doanh nghiệp, cá
          nhân phát triển và tăng trưởng mạnh mẽ trong tương lai.
        </p>
      </Container>
    </section>
  );
};

export default About;
