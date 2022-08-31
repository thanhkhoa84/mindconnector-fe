import Link from 'next/link';
import { CTA } from '../CTA';
import Container from './../Container';

import styles from './HeroBanner.module.scss';
import { useReducer, useState } from 'react';

const Carousel = ({ ...props }) => {
  const width = 1015;
  const {slides, currentindex} = {...props}
  let translate = `translate(${-currentindex * width}px, 0)`
  // if(currentindex == slides.length - 1) {
  //   translate =`translate(${-1*width*currentindex}px, 0)`
  // }
  return (
    <div className={styles.HeroItemContainer} {...props} style={{
      transform: translate
    }}/>
  )
}

const CarouselItem = ({ headline, body, image, link, slideLength, currentindex, index }) => {
  console.log(slideLength)
  const width = 1015;
  let translate = 'translate(0,0)';
  translate = `translate(${index*width}px, 0)`;
  // if(index == slideLength - 1) {
  //   translate =`translate(${-1*width}px, 0)`
  // }
  return (
    <div className={styles.HeroItem}  style={{ transform: translate }}>
      <a href={link} style={{ 
        backgroundImage: `url(${image})`, 
        backgroundSize: 'cover',
      }}>
        <div className={styles.HeroInner}>
          <div className={styles.HeroSliderInfo}>
            <h2>{headline} {index}</h2>
            <p>{body}</p>
            <p className={styles.HeroCta}>Xem thêm</p>
          </div>
        </div>
      </a>
    </div>
  )
}

const HeroBanner = ({ slides }) => {
  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "NEXT":
          return {
            ...state,
            currentIndex:
              (state.currentIndex + 1) %
              slides.length
          };
        case "PREV":
          return {
            ...state,
            currentIndex:
              (state.currentIndex -
                1 +
                slides.length) %
              slides.length,
          };
        case "GOTO":
          console.log(state)
          return {
            ...state,
            currentIndex: action.index
          };
        default:
          return state;
      }
    },
    {
      currentIndex: 0,
    }
  );


  return (
    <section className={styles.HeroBanner}>
      <h4 className='visuallyhidden'>Tin tức mới nhất</h4>
      <Carousel slides={slides} currentindex={state.currentIndex} >
        {slides.map(({ ...props }, i) => {
          return (
            <CarouselItem 
              {...props} 
              key={`hero-item-${i}`} 
              index={i} 
              slideLength={slides.length} 
              currentindex={state.currentIndex}
              onClick={() => {
                console.log(index)
                dispatch({ type: "GOTO", index });}
              }
            />
          )
        })}
      </Carousel>
      <div className={styles.HeroDots}>
        <ul>
        {slides.map((slide, index) => {
          return (
            <li key={index}>
              <button key={index}
                aria-label={`Slide ${index + 1}`}
                onClick={() => {
                  console.log(index)
                  dispatch({ type: "GOTO", index });}
                }>
                {index}
              </button>
            </li>)
        })}
      </ul>
      </div>
    </section>
  );
};

export default HeroBanner;
