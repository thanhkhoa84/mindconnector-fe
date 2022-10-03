import { useState, useEffect, memo } from "react";
import Image from "next/future/image";
import { SectionHeading } from "../../Heading";

import styles from "../../../styles/components/common/teachers/Teachers.module.scss";

let socialImages = {
  linkedin: "/img/linkedin.svg",
  instagram: "/img/linkedin.svg",
  twitter: "/img/twitter.svg",
  youtube: "/img/youtube.svg",
  instagram: "/img/instagram.svg",
};

const TeacherCard = ({ name, imgUrl, title, socials }) => {
  return (
    <div className={`mt-12 mb-8 ${styles.teacherCard}`}>
      <div className={`relative`}>
        <Image src={imgUrl} alt="" width={248} height={248} />
      </div>
      <div className="mt-4 flex w-full flex-col px-4 text-center">
        <h3 className="m-0 text-sm font-black leading-none text-purple md:text-base">
          {name}
        </h3>
        <p className="mt-2 min-h-[calc(2*1.25*1em)] px-[0.3em] text-sm leading-none dark:text-white xs:text-xs md:text-base lg:text-sm">
          {title}
        </p>
        {socials && (
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
        )}
      </div>
    </div>
  );
};

const TeacherList = () => {
  const allTeachers = [
    {
      name: "Hiếu Nguyễn",
      imgUrl: "/img/mentors/hieu-nguyen.png",
      title: "Phụ trách nghiên cứu phát triển thị trường",
      socials: [
        { name: "linkedin", url: "https://linkedin.com" },
        { name: "twitter", url: "https://twitter.com" },
      ],
    },
    {
      name: "Nina Trần",
      imgUrl: "/img/mentors/nina-tran.png",
      title: "Phụ trách thiết kế chương trình",
      socials: [{ name: "linkedin", url: "https://linkedin.com" }],
    },
    {
      name: "Mandy Nguyễn",
      imgUrl: "/img/mentors/mandy-nguyen.png",
      title: "Chuyên gia Kinh doanh - Marketing",
      socials: [{ name: "linkedin", url: "https://linkedin.com" }],
    },
    {
      name: "Đào Minh Huyền",
      imgUrl: "/img/mentors/dao-minh-huyen.png",
      title: "Owner of Ask2Go App, Mihoo Cosmetics,…",
      socials: [{ name: "linkedin", url: "https://linkedin.com" }],
    },
  ];
  return (
    <div className="-mx-4 flex flex-col flex-wrap items-center justify-around pt-8 text-center xs:flex-row md:mx-0 lg:justify-between lg:justify-evenly">
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
