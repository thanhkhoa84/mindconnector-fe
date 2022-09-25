import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "../../../styles/components/common/courses/CourseCard.module.scss";
import Image from "next/future/image";

const Rating = dynamic(() => import("../../Rating"), {
  ssr: false,
});

const CourseCard = ({ course }) => {
  const info = {
    title: "Khoá học nghiên cứu và phân tích",
    currency: "USD$",
    price: "84.99",
    lessons: "4",
    time: "3 hours",
    feature: true,
    rating: 1,
    slug: "/courses/for-student/khoa-hoc-nghien-cuu-va-phan-tich",
  };
  let { title, currency, price, lessons, time, feature, rating, slug } = info;
  let priceMain = price.split(".")[0];
  let fraction = price.split(".")[1];
  return (
    <div
      className={`relative max-w-[180px] overflow-hidden rounded-[30px] border-[6px] border-orange-medium text-left md:max-w-[200px]`}
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
          className={`after:bg-gradient-overlay absolute top-0 left-0 right-0 bottom-0 flex cursor-pointer flex-col justify-end px-4 pb-4 text-sm text-white after:content-none md:p-4 md:pb-8`}
        >
          {feature && (
            <div className="overflow-hidden">
              <h5 className="float-left inline-block h-6 rounded-sm bg-purple px-2 text-[10px] font-bold leading-6">
                Khoá học bán chạy
              </h5>
            </div>
          )}
          <h3 className="mt-2 text-xl font-black leading-5">{title}</h3>
          <p className="mt-2 leading-4">
            <span>{lessons} lessons &#x2022; </span>
            <span>{time}</span>
          </p>
          {rating > 0 && <Rating value={4.5} total={1590} />}
          <div className="mt-2 text-3xl font-bold">
            <span className="text-xs font-normal">{currency} </span>
            {priceMain}
            <sup className="top-[-1em] text-[0.45em] font-normal">
              {fraction}
            </sup>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
