import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/future/image";

const Rating = dynamic(() => import("../../Rating"), {
  ssr: false,
});

const ProgramCourseCard = ({ course }) => {
  let { title, lessons, time, img, level } = course;
  return (
    <div
      className={`relative w-[165px] overflow-hidden rounded-[30px] border-[6px] border-[#FFF7EC] text-left md:w-[190px] `}
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

const CoursesList = ({ courses }) => {
  return (
    <ul className="mt-8 flex flex-wrap gap-4 overflow-hidden md:justify-center md:gap-8 lg:justify-around lg:gap-4">
      {courses.map((course, index) => {
        return (
          <li
            key={index}
            className={`
                      overflow-hiddenmd:text-center relative my-0 inline-block md:align-top lg:flex-shrink
                    `}
          >
            <div className="inline-block md:pt-[4em]">
              <ProgramCourseCard course={course} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CoursesList;
