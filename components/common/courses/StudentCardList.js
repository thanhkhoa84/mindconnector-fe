import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getStrapiMedia } from "@/lib/media";

const Slide = ({ index, course, ...props }) => {
  let { name, description, image, feature, featureText } = course;
  return (
    <div
      className={`relative overflow-hidden rounded-[30px] border-[6px] border-[#FFF7EC] text-left xs:w-[174px]`}
    >
      {image && (
        <div
          className={`overflow-hidden rounded-2xl after:absolute after:inset-0 after:block after:bg-gradient-to-b after:from-[rgba(43,43,43,0)] after:to-[#000] after:content-['']`}
        >
          <Image
            src={getStrapiMedia(image)}
            alt={name}
            width={360}
            height={540}
            className="block w-full"
          />
        </div>
      )}
      <div
        className={`after:bg-gradient-overlay absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-end px-4 pb-8 text-sm text-white after:content-none md:p-4 md:pb-8`}
      >
        {featureText && (
          <div className="overflow-hidden">
            <h5 className="float-left inline-block h-6 rounded-sm bg-purple px-2 text-[10px] font-bold leading-6">
              {featureText}
            </h5>
          </div>
        )}
        <h3
          className="mt-2 text-lg font-black uppercase leading-[1.35]"
          dangerouslySetInnerHTML={{
            __html: name.replace(new RegExp("\r?\n", "g"), "<br />"),
          }}
        />
        <p className="mt-2 leading-4">{description}</p>
      </div>
    </div>
  );
};

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`
        absolute -right-[40px] top-1/2 z-10 -mt-[55px] hidden h-[80px] w-[80px] -translate-y-1/2 cursor-pointer overflow-hidden rounded-full shadow-md lg:block
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
        className="absolute left-0 top-0"
        aria-hidden={true}
      />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`
        absolute -left-[40px] top-1/2 z-10 -mt-[55px] hidden h-[80px] w-[80px] -translate-y-1/2 cursor-pointer overflow-hidden rounded-full shadow-md lg:block
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
        className="absolute right-0 top-0"
        aria-hidden={true}
      />
    </div>
  );
}

const StudentCardList = ({ courses }) => {
  let settings = {
    dots: true,
    infinite: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 374,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex-slider">
      <Slider {...settings}>
        {courses.map((course, index) => {
          return <Slide course={course.attributes.thumbnailInfo} key={index} />;
        })}
      </Slider>
    </div>
  );
};

export default StudentCardList;
