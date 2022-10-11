import { useState, useEffect, memo } from "react";
import Image from "next/future/image";
import { SectionHeading } from "../../Heading";
import { allTeachers } from "../../../data/global";

let socialImages = {
  linkedin: "/img/linkedin.svg",
  instagram: "/img/linkedin.svg",
  twitter: "/img/twitter.svg",
  youtube: "/img/youtube.svg",
  instagram: "/img/instagram.svg",
};

const TeacherCard = ({ name, imgUrl, title, socials }) => {
  return (
    <div
      className={`relative mb-12 inline-block w-[160px] align-top align-top md:w-[288px] lg:w-[228px]`}
    >
      <div className={`relative`}>
        <Image src={imgUrl} alt="" width={248} height={248} />
      </div>
      <div className="mt-4 flex w-full flex-col px-4 text-center">
        <h3 className="m-0 text-sm font-black leading-none text-purple md:text-base">
          {name}
        </h3>
        <p
          dangerouslySetInnerHTML={{ __html: title }}
          className="mt-2 min-h-[calc(2*1.25*1em)] px-[0.3em] text-sm leading-none dark:text-white xs:text-xs md:text-base lg:text-sm"
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
    <div className="-mx-4 flex flex-col flex-wrap items-start justify-around pt-12 text-center xs:flex-row md:mx-0 lg:justify-evenly">
      {allTeachers.map((teacher, index) => {
        return <TeacherCard {...teacher} key={teacher.name} />;
      })}
    </div>
  );
};

const Teachers = () => {
  return (
    <div className={``}>
      <SectionHeading align="center">Đội ngũ giảng viên</SectionHeading>
      <TeacherList />
    </div>
  );
};

export default memo(Teachers);
