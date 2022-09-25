import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "../../../styles/components/common/courses/CourseCard.module.scss";
import Image from "next/future/image";

const Rating = dynamic(() => import("../../Rating"), {
  ssr: false,
});

const ProgramCourseCard = ({ course }) => {
  let { title, lessons, time, slug } = course;
  return (
    <div
      className={`relative w-[165px] overflow-hidden rounded-[30px] border-[6px] border-orange-medium text-left md:w-[190px] `}
    >
      <div className={`overflow-hidden rounded-2xl  ${styles.courseCardImage}`}>
        <Image
          src="/img/course-1.png"
          alt=""
          width={155}
          height={268}
          className="block w-full"
        />
      </div>
      <Link href={slug}>
        <div
          className={`after:bg-gradient-overlay absolute top-0 left-0 right-0 bottom-0 flex cursor-pointer flex-col justify-end px-4 pb-8 text-sm text-white after:content-none md:p-4 md:pb-8`}
        >
          <h3 className="mt-2 text-xl font-black leading-5">{title}</h3>
          <p className="mt-2 leading-4">
            <span>{lessons} lessons &#x2022; </span>
            <span>{time}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProgramCourseCard;
