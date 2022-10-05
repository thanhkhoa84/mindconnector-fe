import { forwardRef, useReducer, useRef, useState, useEffect } from "react";
import Image from "next/future/image";
import styles from "./HeroBanner.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroBanner = ({ slides, ...props }) => {
  let ref = useRef(null);
  let [width, setWidth] = useState(0);
  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "NEXT":
          return {
            ...state,
            currentIndex: (state.currentIndex + 1) % slides.length,
          };
        case "PREV":
          return {
            ...state,
            currentIndex:
              (state.currentIndex - 1 + slides.length) % slides.length,
          };
        case "GOTO":
          return {
            ...state,
            currentIndex: action.index,
          };
        default:
          return state;
      }
    },
    {
      currentIndex: 0,
      nextSlide: 1,
    }
  );

  /* 
  TODO:
    - Get slide width
    - Positioning slides
    - Init animation for first slide
    - Calculate next, prev slide position
    - Recalculate when resize
  */

  // useEffect(() => {
  //   // rearrange slides
  //   let draw = () => {
  //     setWidth(ref.current.children[0].clientWidth);
  //   };
  //   draw();

  //   window.addEventListener("resize", draw);
  //   return () => {
  //     window.removeEventListener("resize", draw);
  //   };
  // }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={`pb-10 ${styles.HeroBanner}`}>
      <h4 className="sr-only">Tin tức mới nhất</h4>
      <Slider {...settings}>
        {slides.map(({ ...props }, index) => {
          return (
            <div {...props} key={index} className="relative mx-auto my-0">
              <figure>
                <Image
                  src={props.image}
                  alt=""
                  width={1920}
                  height={1282}
                  className="w-full"
                />
              </figure>
              <div
                className={`
                  delay-0 static bottom-[2em] left-[2em] transition-all delay-500 duration-[650ms] md:absolute md:w-[420px] lg:w-1/3
                  ${
                    props.image
                      ? "opacity-1 translate-y-0"
                      : "translate-y-8 opacity-0"
                  }
                `}
              >
                <div
                  className={`z-10 rounded-xl bg-white bg-opacity-80 px-[1em] pt-[2em] pb-[1em] md:px-8 md:py-12 md:shadow-xl`}
                >
                  <h2 className="mb-[0.5em] text-[28px] font-black leading-none md:text-3xl">
                    {props.headline}
                  </h2>
                  <p className="leading-6 line-clamp-3">{props.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default HeroBanner;

