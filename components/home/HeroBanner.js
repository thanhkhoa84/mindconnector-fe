import { motion } from "framer-motion";

import Link from 'next/link';
import { CTA } from '../CTA';
import Container from './../Container';

import styles from './HeroBanner.module.scss';
import { useReducer, useRef, useState, useEffect } from 'react';

/* 
  TODO:
  - Get slide width
  - Positioning slides
  - Init animation for first slide
  - Recalculate when resize
*/
const Carousel = ({ ...props }) => {
  let ref = useRef(null);
  let translate = `translate3d(${-props.current*995}px, 0, 0)`;
  console.log(translate)

  return (
    <div role='group' className={styles.HeroItemContainer} {...props} ref={ref} style={{
      transform: translate
    }}/>
  )
}

const CarouselItem = ({ headline, body, image, link, index }) => {
  const width = 1005;
  let translate = 'translate3d(0,0,0)';
  translate = `translate3d(${index*width}px, 0, 0)`;

  /* 
    TODO: make next slide available at last 
  */


  return (
    <div role='tabpanel' className={`hero-slide ${styles.HeroItem }`}  style={{ transform: translate }}>
      <a href={link} style={{ 
        backgroundImage: `url(${image})`, 
        backgroundSize: 'cover',
      }}>
        <div className={`w-[40%] absolute bottom-[2em] left-[2em]`}>
          <div className={`bg-white bg-opacity-80 py-12 px-8 rounded-xl shadow-xl pt-[2em] pb-[1em] px[1em]`}>
            <h2 className='text-4xl font-black leading-9 mb-[0.5em]'>{headline} {index}</h2>
            <p className='leading-6'>{body}</p>
            <p className={`btn-primary inline-block mt-4`}>Xem thêm</p>
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

  

  useEffect(() => {
    console.log('rendered')
    let width = document.querySelectorAll('.hero-slide')[0].offsetWidth
    console.log(state.currentIndex)
  }, [state.currentIndex])

  return (
    <section className={styles.HeroBanner}>
      <h4 className='sr-only'>Tin tức mới nhất</h4>
      <Carousel slides={slides} current={state.currentIndex}>
        {slides.map(({ ...props }, i) => {
          return (
            <CarouselItem 
              {...props} 
              key={`hero-item-${i}`} 
              index={i} 
              isCurrent={i===state.currentIndex}
              onClick={() => {
                dispatch({ type: "GOTO", i });}
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
