import Link from "next/link";
import Image from "next/future/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`
        absolute top-1/2 -right-[40px] z-10 -mt-[55px] hidden h-[80px] w-[80px] -translate-y-1/2 cursor-pointer overflow-hidden rounded-full shadow-md lg:block
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
        absolute top-1/2 -left-[40px] z-10 -mt-[55px] hidden h-[80px] w-[80px] -translate-y-1/2 cursor-pointer overflow-hidden rounded-full shadow-md lg:block
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

const ServiceCard = ({ index, service, ...props }) => {
  return (
    <div
      className={`relative mx-auto mt-[20px] h-[215px] w-full max-w-[365px] overflow-hidden rounded-[30px] border-[6px] border-[#414141] text-left text-white md:mt-0 md:w-[336px]`}
    >
      <div
        className={`overflow-hidden rounded-2xl after:absolute after:inset-0 after:block after:bg-gradient-to-b after:from-[rgba(43,43,43,0)] after:to-[#000] after:content-['']`}
      >
        <Image
          src="/img/services-01.png"
          alt={""}
          width={326}
          height={215}
          className="block w-full"
        />
      </div>
      <div
        className={`after:bg-gradient-overlay absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end px-4 pb-8 text-sm text-white text-white after:content-none md:p-4 md:pb-6`}
      >
        <h3 className="text-[18px] font-black uppercase">{service.name}</h3>
        <h4 className="mt-[8px] text-[14px]">{service.body}</h4>
      </div>
    </div>
  );
};

const ServicesCardList = ({ services }) => {
  let settings = {
    dots: true,
    // infinite: true,
    arrows: false,
    centerPadding: "0px",
    centerMode: true,
    className: "center",
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1119,
        settings: {
          centerPadding: "80px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          centerPadding: "20px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          infinite: false,
          centerPadding: "20px",
          slidesToShow: 5,
          vertical: true,
          dots: false,
          adaptiveHeight: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {services.map((s, index) => {
        return <ServiceCard service={s} key={index} />;
      })}
    </Slider>
  );
};

export default ServicesCardList;
