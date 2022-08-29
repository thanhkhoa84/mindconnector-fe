import Link from 'next/link';
import { CTA } from '../CTA';
import Container from './../Container';

import styles from './HeroBanner.module.scss';

const HeroBanner = ({ slides }) => {
  return (
    <section className={styles.HeroBanner}>
      <h4 className='visuallyhidden'>Tin tức mới nhất</h4>
      <div className={styles.HeroContainer}>
        {slides.map(({ headline, body, image, link }, index) => {
          console.log(typeof image)
          return (
            <div className={styles.HeroSlide} key={index}>
              <a href={link} style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
                <div className={styles.HeroInner}>
                  {/* <div className={styles.HeroImage}>
                    <img
                      src={image}
                      alt='Workshop với Valoma và 8 trường Đại Học Phía Nam' />
                  </div> */}
                  <div className={styles.HeroSliderInfo}>
                    <h2>{headline}</h2>
                    <p>{body}</p>
                    <p>
                      {/* <CTA name='CTA' href={link}>
                        Xem thêm
                      </CTA> */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HeroBanner;
