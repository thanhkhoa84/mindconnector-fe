import { forwardRef, useReducer, useRef, useState, useEffect } from "react";
import Image from "next/future/image";
import styles from "./HeroBanner.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`
        absolute top-1/2 -right-[40px] z-10 hidden h-[80px] w-[80px] -translate-y-1/2 cursor-pointer overflow-hidden lg:block
      `}
      onClick={onClick}
      style={{}}
    >
      <Image
        src="/img/btn-next.png"
        width={80}
        height={80}
        alt=""
        className="absolute top-0 left-0"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`
        absolute top-1/2 -left-[40px] z-10 hidden h-[80px] w-[80px] -translate-y-1/2 cursor-pointer overflow-hidden lg:block
      `}
      onClick={onClick}
      style={{}}
    >
      <Image
        src="/img/btn-prev.png"
        width={80}
        height={80}
        alt=""
        className="absolute top-0 right-0"
      />
    </div>
  );
}

const Slide = ({ index, ...props }) => {
  return (
    <div {...props} className="relative mx-auto my-0">
      <div className="leading-[1]">
        <Image
          src={props.image}
          alt={props.headline}
          width={1920}
          height={1282}
          priority={true}
          className="block w-full"
        />
      </div>
      <div
        className={`
        delay-0 lg:w-1/3} static bottom-[2em] left-[2em] transition-all delay-500 duration-[650ms] lg:absolute lg:w-[420px]
      `}
      >
        <div
          className={`z-10 rounded-xl bg-white bg-opacity-80 px-[1em] pt-[2em] pb-[2em] lg:ml-[10%] lg:px-8 lg:py-12 lg:pb-[1em] lg:shadow-xl`}
        >
          <h2 className="mb-[0.5em] text-[28px] font-black leading-none md:text-3xl">
            {props.headline}
          </h2>
          <p className="line-clamp-12 leading-6">{props.body}</p>
        </div>
      </div>
    </div>
  );
};

const HeroBanner = ({ slides, ...props }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 10000,
    fade: false,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className={`max-auto bg-[#FFF7ED] ${styles.HeroBanner}`}>
      <h4 className="sr-only">Tin tức mới nhất</h4>
      <Slider {...settings}>
        {slides.map(({ ...props }, index) => {
          return <Slide {...props} index={index} key={index} />;
        })}
      </Slider>
    </section>
  );
};

export default HeroBanner;

