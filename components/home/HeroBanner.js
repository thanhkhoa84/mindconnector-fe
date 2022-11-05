import Image from "next/future/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getStrapiMedia } from "../../lib/media";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`
        absolute top-[calc(100%*1396/2800/2)] -right-[40px] z-10 h-[80px] w-[80px] -translate-y-1/2 cursor-pointer overflow-hidden rounded-full shadow-md lg:top-1/2 lg:block
      `}
      onClick={onClick}
      style={{}}
    >
      <Image
        src="/img/btn-next.png"
        width={80}
        height={80}
        blurDataURL="/img/btn-next.png"
        placeholder="blur"
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
        absolute top-[calc(100%*1396/2800/2)] -left-[40px] z-10 h-[80px] w-[80px] -translate-y-1/2 cursor-pointer overflow-hidden rounded-full shadow-md lg:top-1/2 lg:block
      `}
      onClick={onClick}
      style={{}}
    >
      <Image
        src="/img/btn-prev.png"
        width={80}
        height={80}
        blurDataURL="/img/btn-prev.png"
        placeholder="blur"
        alt=""
        className="absolute top-0 right-0"
      />
    </div>
  );
}

const Slide = ({ index, ...props }) => {
  // let ImageUrl = getStrapiMedia(props.Image);
  let ImageUrl = props.Image.data.attributes.url;
  return (
    <div className="relative mx-auto my-0">
      <div className="leading-[1]">
        <Image
          // src={props.Image.data.attributes.url}
          // blurDataURL={props.Image.data.attributes.url}
          src={ImageUrl}
          blurDataURL={ImageUrl}
          placeholder="blur"
          alt={props.Title}
          width={1920}
          height={957}
          priority={index == 0}
          className="w-full"
        />
      </div>
      <div
        className={`
        delay-0 static bottom-[2em] transition-all delay-500 duration-[650ms] lg:absolute lg:left-[calc((100vw-1024px)/2)] lg:w-1/3 lg:max-w-[420px] xl:left-[calc((100vw-1120px)/2)]
      `}
      >
        <div
          className={` z-10 rounded-xl bg-white bg-opacity-80 px-[1em] pt-[2em] pb-[2em] lg:px-8 lg:py-8 lg:shadow-xl`}
        >
          <h2 className="mb-[0.5em] text-[28px] font-black leading-none md:text-3xl">
            {props.Title}
          </h2>
          <p
            className="line-clamp-12 leading-6"
            dangerouslySetInnerHTML={{ __html: props.Body }}
          />
        </div>
      </div>
    </div>
  );
};

const HeroBanner = ({ slides, ...props }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section
      className={`max-auto relative mx-auto overflow-hidden bg-[#FFF7ED]`}
    >
      <h4 className="sr-only">Tin tức mới nhất</h4>
      <Slider {...settings}>
        {slides.map(({ ...props }, index) => {
          return (
            <Slide {...props} index={index} key={`hero-banner-${index}`} />
          );
        })}
      </Slider>
    </section>
  );
};

export default HeroBanner;
