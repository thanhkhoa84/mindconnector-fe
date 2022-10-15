import { useState, useEffect, memo } from "react";
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
        <h4 className="m-0 text-xs leading-none text-purple">{entitled}</h4>
        <h3 className="m-0 text-sm font-black leading-none text-purple md:text-base">
          {name}
        </h3>
        <p
          dangerouslySetInnerHTML={{ __html: title }}
          className="m-0 min-h-[calc(2*1.25*1em)] text-sm leading-none dark:text-white sm:text-xs lg:text-base lg:text-sm"
        >
          {/* {title} */}
        </p>
        {/* {socials && (
          <div className={`mt-4 inline-flex flex-row justify-center gap-2`}>
            {socials.map((s, i) => {
              return (
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block h-[30px] w-[30px] overflow-hidden rounded-full"
                  style={{
                    WebkitMask: `url(${
                      socialImages[s.name]
                    }) no-repeat 50% 50%`,
                    mask: `url(${socialImages[s.name]}) no-repeat 50% 50%`,
                    WebkitMaskSize: "cover",
                    maskSize: "cover",
                    backgroundColor: "#ffaf43",
                  }}
                  key={s.name}
                ></a>
              );
            })}
          </div>
        )} */}
      </div>
    </div>
  );
};

const TeacherList = () => {
  return (
    <div className="-mx-4 flex flex-col flex-wrap items-center justify-center pt-12 text-center xs:flex-row xs:items-start md:mx-0 md:justify-around lg:justify-evenly">
      {allTeachers.map((teacher, index) => {
        return <TeacherCard {...teacher} key={teacher.name} />;
      })}
    </div>
  );
};

const Teachers = () => {
  return (
    <div className={``}>
      <h1 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white">
        Đội ngũ giảng viên
      </h1>
      <TeacherList />
    </div>
  );
};

export default memo(Teachers);
