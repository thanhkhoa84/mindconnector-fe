import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "../../../styles/components/common/courses/CourseCard.module.scss";
import Image from "next/future/image";

const Rating = dynamic(() => import("../../Rating"), {
  ssr: false,
});

const CourseCard = ({ course }) => {
  console.log(course);
  let { title, lessons, time, feature, rating, level } = course;
  // let priceMain = price.split(".")[0];
  // let fraction = price.split(".")[1];
  return (
    <div
      className={`relative w-[140px] overflow-hidden rounded-[30px] border-[6px] border-[#FFF7EC] text-left xs:w-[165px] md:w-[190px] `}
    >
      <div
        className={`
          overflow-hidden rounded-2xl after:absolute after:inset-0 after:block after:bg-gradient-to-b after:from-[rgba(43,43,43,0)] after:to-[#000] after:content-['']`}
      >
        <Image
          src="/img/course-1.png"
          alt={title}
          width={155}
          height={268}
          className="block w-full"
        />
      </div>
      {/* <Link href={slug}> */}
      <div
        className={`after:bg-gradient-overlay absolute top-0 left-0 right-0 bottom-0 flex cursor-pointer flex-col justify-end px-4 pb-4 text-sm text-white after:content-none md:p-4 md:pb-8`}
      >
        {feature && (
          <div className="overflow-hidden">
            <h5 className="float-left inline-block h-6 rounded-sm bg-purple px-2 text-[10px] font-bold leading-6">
              Môn học bán chạy
            </h5>
          </div>
        )}
        <h3 className="mt-2 text-xl font-black leading-5">{title}</h3>
        <p className="mt-2 leading-4">
          {level && <span>{level} &#x2022; </span>}
          {lessons && <span>{lessons} lessons &#x2022; </span>}
          <span>{time} giờ</span>
        </p>
        {rating > 0 && <Rating value={4.5} total={1590} />}
        {/* <div className="mt-2 text-3xl font-bold">
          <span className="text-xs font-normal">{currency} </span>
          {priceMain}
          <sup className="top-[-1em] text-[0.45em] font-normal">{fraction}</sup>
        </div> */}
      </div>
      {/* </Link> */}
    </div>
  );
};

export default CourseCard;
