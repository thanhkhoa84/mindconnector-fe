import Container from '../../components/Container';
import { SectionHeading } from '../../components/Heading';

import styles from './HeroBanner.module.scss';

const HeroBanner = () => {
  return (
    <section>
      <div className={styles.HeroSlide}>
        <Container>
          <SectionHeading></SectionHeading>
        </Container>
      </div>
    </section>
  );
};

export default HeroBanner;
