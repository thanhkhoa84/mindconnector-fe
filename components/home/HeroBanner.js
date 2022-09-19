import { forwardRef, useReducer, useRef, useState, useEffect } from "react";
import styles from "./HeroBanner.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = forwardRef(({ ...props }, ref) => {
  return (
    <div
      role="group"
      className={`relative mx-auto ${styles.HeroItemContainer}`}
      {...props}
      style={{
        transform: `translate3d(${-props.current * props.itemwidth}px, 0, 0)`,
      }}
      ref={ref}
    />
  );
});
Carousel.displayName = "Carousel";

const CarouselItem = ({
  headline,
  body,
  image,
  link,
  index,
  currentindex,
  isCurrent,
  length,
  ...props
}) => {
  let [width, setWidth] = useState(0);
  let [position, setPosition] = useState(index);
  let [progress, setProgress] = useState(index);
  let ref = useRef();

  useEffect(() => {
    let draw = () => {
      setProgress(index);
      setWidth(ref.current.clientWidth);
      setPosition(width * index);
    };
    draw();
    window.addEventListener("resize", draw);
    return () => {
      window.removeEventListener("resize", draw);
    };
  }, []);

  useEffect(() => {
    // (t %= this._items.length) < 0 ? this._items.length + t : t;
    let animate = () => {
      if (currentindex == length - 1 && index == 0) {
        setProgress(1);
      }

      setPosition(width * progress);
      console.log(`item ${index} - ${currentindex} ${progress}  `);
    };
    animate();
  }, [currentindex]);

  return (
    <div
      role="tabpanel"
      className={`
        hero-slide group ${progress}
        ${styles.HeroItem}  
        ${isCurrent ? "active" : ""}
      `}
      ref={ref}
      style={{
        transform: `translate3d(${position}px, 0, 0)`,
      }}
    >
      <a
        href={link}
        className=""
        style={{
          // backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      >
        <figure>
          <img src={image} alt="" />
        </figure>
      </a>
      <div
        className={`
            delay-0 static bottom-[2em] left-[2em] transition-all delay-500 duration-[650ms] sm:absolute sm:w-[40%]
            ${isCurrent ? "opacity-1 translate-y-0" : "translate-y-8 opacity-0"}
          `}
      >
        <div
          className={`z-10 rounded-xl bg-white bg-opacity-80 px-[1em] pt-[2em] pb-[1em] md:px-8 md:py-12 md:shadow-xl`}
        >
          <h2 className="mb-[0.5em] text-[28px] font-black leading-none md:text-4xl">
            {headline} {progress}
          </h2>
          <p className="leading-6 line-clamp-3">{body}</p>
          <p className={`btn-primary mt-4 inline-block`}>Xem thêm</p>
        </div>
      </div>
    </div>
  );
};

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
    <section className={styles.HeroBanner}>
      <h4 className="sr-only">Tin tức mới nhất</h4>
      <Slider {...settings}>
        {slides.map(({ ...props }, index) => {
          return (
            <div {...props} key={index} className="relative mx-auto my-0">
              <a
                href={props.link}
                className="mx-auto my-0 block"
                style={{
                  // backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                }}
              >
                <figure>
                  <img src={props.image} alt="" className="w-full" />
                </figure>
              </a>
              <div
                className={`
                  delay-0 static bottom-[2em] left-[2em] transition-all delay-500 duration-[650ms] sm:absolute sm:w-[40%]
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
                  <h2 className="mb-[0.5em] text-[28px] font-black leading-none md:text-4xl">
                    {props.headline} {index}
                  </h2>
                  <p className="leading-6 line-clamp-3">{props.body}</p>
                  <p className={`btn-primary mt-4 inline-block`}>Xem thêm</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      {/* <Carousel
        slides={slides}
        current={state.currentIndex}
        ref={ref}
        itemwidth={width}
      >
        {slides.map(({ ...props }, i) => {
          return (
            <CarouselItem
              {...props}
              key={`hero-item-${i}`}
              index={i}
              currentindex={state.currentIndex}
              isCurrent={i === state.currentIndex}
              length={slides.length}
              where={i}
              onClick={() => {
                dispatch({ type: "GOTO", i });
              }}
            />
          );
        })}
      </Carousel> */}

      {/* <div className={styles.HeroDots}>
        <ul>
          {slides.map((slide, index) => {
            return (
              <li key={index}>
                <button
                  key={index}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => {
                    console.log(index);
                    if (index == state.currentIndex) return;
                    dispatch({ type: "GOTO", index });
                  }}
                >
                  {index}
                </button>
              </li>
            );
          })}
        </ul>
      </div> */}
    </section>
  );
};

export default HeroBanner;
