import Link from 'next/link';
import { CTA } from '../CTA';
import Container from './../Container';

import styles from './HeroBanner.module.scss';
import { useReducer, useState } from 'react';

const HeroBanner = ({ slides }) => {
  let [index, setIndex] = useState(0);
  
  useReducer(()=>{

  }, []);

  return (
    <section className={styles.HeroBanner}>
      <h4 className='visuallyhidden'>Tin tức mới nhất</h4>
      <div className={styles.HeroItemContainer}>
        {slides.map(({ headline, body, image, link }, i) => {
          return (
            <div className={`${index == i ? 'current': ''} ${styles.HeroItem}`} key={`hero-item-${i}`}>
              <a href={link} style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
                <div className={styles.HeroInner}>
                  <div className={styles.HeroSliderInfo}>
                    <h2>{headline}</h2>
                    <p>{body}</p>
                    <p className={styles.HeroCta}>
                      Xem thêm
                    </p>
                    {/* <CTA name='CTA' href={link}></CTA> */}
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <div className={styles.HeroDots}>
        <ul>
        {slides.map(({ headline, body, image, link }, i) => {
          return (<li className={`${index == i ? 'current': ''}`}><button >{i}</button></li>)
        })}
      </ul>
      </div>
    </section>
  );
};

export default HeroBanner;
