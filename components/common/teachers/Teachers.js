import Image from "next/future/image";
import { allTeachers } from "../../../data/global";

let socialImages = {
  linkedin: "/img/linkedin.svg",
  instagram: "/img/linkedin.svg",
  twitter: "/img/twitter.svg",
  youtube: "/img/youtube.svg",
  instagram: "/img/instagram.svg",
};

const TeacherCard = ({ entitled, name, imgUrl, title, socials }) => {
  return (
    <div
      className={`relative mb-12 inline-block w-[160px] max-w-[228px] px-[10px] align-top xs:w-[49%] sm:w-[25%] md:mb-0 lg:w-[228px]`}
    >
      <div className={`relative text-center`}>
        <Image
          src={imgUrl}
          alt=""
          width={208}
          height={208}
          className="inline-block align-top"
        />
      </div>
      <div className="mt-4 flex w-full flex-col text-center">
        <div className="m-0 text-xs leading-none text-purple dark:text-white">
          {entitled}
        </div>
        <h3 className="m-0 text-sm font-black leading-none text-purple dark:text-white md:text-base">
          {name}
        </h3>
        <p
          dangerouslySetInnerHTML={{ __html: title }}
          className="mt-2 min-h-[calc(2*1.25*1em)] text-sm leading-none dark:text-white sm:text-xs lg:text-base lg:text-sm"
        />
      </div>
    </div>
  );
};

const TeacherList = ({ data }) => {
  let teachers = data || allTeachers;
  return (
    <div className="-mx-4 flex flex-col flex-wrap items-center justify-center pt-12 text-center xs:flex-row xs:items-start md:mx-0 md:justify-around lg:justify-evenly">
      {teachers.map((teacher, index) => {
        return <TeacherCard {...teacher} key={teacher.name} />;
      })}
    </div>
  );
};

const Teachers = ({ data }) => {
  return (
    <div className={``}>
      <TeacherList data={data} />
    </div>
  );
};

export default Teachers;
