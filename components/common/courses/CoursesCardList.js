import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/future/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Rating = dynamic(() => import("../../Rating"), {
  ssr: false,
});

const ProgramCourseCard = ({ course }) => {
  let { title, lessons, time, img, level } = course;
  return (
    <div
      // className={`relative w-[165px] overflow-hidden rounded-[30px] border-[6px] border-[#FFF7EC] text-left md:w-[190px] `}
      className={`relative inline-block w-[165px] overflow-hidden rounded-[30px] border-[6px] border-[#FFF7EC] text-left md:w-[190px]`}
    >
      <div className={`overflow-hidden rounded-2xl `}>
        <Image
          src={img}
          alt=""
          width={360}
          height={540}
          className="block w-full"
        />
      </div>
      {/* <Link href={slug}> */}
      <div
        className={`after:bg-gradient-overlay absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end px-4 pb-8 text-sm text-white after:content-none md:p-4 md:pb-8`}
      >
        <h3 className="mt-2 text-xl font-black uppercase leading-5">{title}</h3>
        <p className="mt-2 leading-4">
          {lessons && <span>{lessons} bài học &#x2022; </span>}
          {level && <span>{level} &#x2022; </span>}
          <span>{time} giờ</span>
        </p>
      </div>
      {/* </Link> */}
    </div>
  );
};

const Slide = ({ index, course, ...props }) => {
  let { title, lessons, time, img, level } = course;
  return (
    <div
      className={`relative w-[140px] overflow-hidden rounded-[30px] border-[6px] border-[#FFF7EC] text-left xs:w-[165px] md:w-[190px] `}
    >
      <div
        className={`overflow-hidden rounded-2xl after:absolute after:inset-0 after:block after:bg-gradient-to-b after:from-[rgba(43,43,43,0)] after:to-[#000] after:content-['']`}
      >
        <Image
          src={img}
          alt=""
          width={360}
          height={540}
          className="block w-full"
        />
      </div>
      <div
        className={`after:bg-gradient-overlay absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end px-4 pb-8 text-sm text-white after:content-none md:p-4 md:pb-8`}
      >
        <h3 className="mt-2 text-xl font-black uppercase leading-5">{title}</h3>
        <p className="mt-2 leading-4">
          {lessons && <span>{lessons} bài học &#x2022; </span>}
          {level && <span>{level} &#x2022; </span>}
          <span>{time} giờ</span>
        </p>
      </div>
    </div>
  );
};

const CoursesList = ({ courses }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
        breakpoint: 512,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {courses.map((course, index) => {
          return <Slide course={course} key={index} />;
        })}
      </Slider>
    </>
  );
};

export default CoursesList;
