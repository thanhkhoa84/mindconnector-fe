import { CTA } from '../CTA';
import styles from './HeroBanner.module.scss';
import Container from './../Container';

const HeroBanner = ({ slides }) => {
  return (
    <section className={styles.HeroBanner}>
      {slides.map(({ headline, body, image, link }, index) => {
        return (
          <div className={styles.HeroSlide} key={index}>
            <Container>
              <div className={styles.HeroImage}>
                <img
                  src={image}
                  alt='Workshop với Valoma và 8 trường Đại Học Phía Nam'
                />
              </div>
              <div className={styles.HeroSliderInfo}>
                <h2>{headline}</h2>
                <p>{body}</p>
                <p>
                  <CTA name='CTA' href={link}>
                    Xem thêm
                  </CTA>
                </p>
              </div>
            </Container>
          </div>
        );
      })}
    </section>
  );
};

export default HeroBanner;
