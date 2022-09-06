import Link from 'next/link';
import Rating from '../../Rating';
import styles from '../../../styles/components/common/courses/CourseCard.module.scss';

const CourseCard = () => (
  <div
    className={`relative inline-block w-full overflow-hidden rounded-[30px] border-[6px] border-orange-medium text-left`}
  >
    <div className={`overflow-hidden rounded-2xl  ${styles.courseCardImage}`}>
      <img src="/img/course-1.png" alt="" className="block w-full" />
    </div>
    <Link href="course">
      <div
        className={`after:bg-gradient-overlay absolute top-0 left-0 right-0 bottom-0 flex cursor-pointer flex-col justify-end px-5 pb-9 text-sm text-white after:content-none md:p-4 md:pb-8`}
      >
        <div className="overflow-hidden">
          <h5 className="float-left inline-block h-6 rounded-sm bg-purple px-2 text-[10px] font-bold leading-6">
            Khoá học bán chạy
          </h5>
        </div>
        <h3 className="mt-2 text-xl font-black leading-5">
          Khoá học nghiên cứu và phân tích
        </h3>
        <p className="mt-2 leading-4">
          <span>4 lessons &#x2022; </span>
          <span>3 hours</span>
        </p>
        <Rating value={4.5} total={1590} />
        <div className="mt-2 text-3xl font-bold">
          <span className="text-xs font-normal">USD$ </span>
          84<sup className="top-[-1em] text-[0.45em] font-normal">99</sup>
        </div>
      </div>
    </Link>
  </div>
);

export default CourseCard;
