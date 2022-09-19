import { useState, useEffect, memo } from "react";

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
    <div className={`${styles.teacherCard}`}>
      <div className={styles.teacherImageContainer}>
        <img
          src="/img/bg-teacher-card.svg"
          alt=""
          className={styles.teacherCardBg}
        />
        <div className={styles.teacherImage}>
          <img src={imgUrl} alt="" />
        </div>
      </div>
      <div className="absolute top-[67.9758308157%] w-full px-4 text-center">
        <h3 className="m-0 mt-1 text-base font-black text-purple md:text-sm">
          {name}
        </h3>
        <p className="min-h-[calc(2*1.25*1em)] px-[0.3em] text-base leading-5 xs:text-xs lg:text-sm">
          {title}
        </p>
        {socials && (
          <div className={`mt-2 flex flex-row justify-center gap-2`}>
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
                >
                  {/* <img
                    src={socialImages[s.name]}
                    alt=""
                    className=""
                    width={30}
                    height={30}
                  /> */}
                </a>
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
    <div className="text-center">
      {allTeachers.map((teacher, index) => {
        return <TeacherCard {...teacher} key={teacher.name} />;
      })}
    </div>
  );
};

const useMedia = (query) => {
  let [matches, setMatches] = useState(null);

  useEffect(() => {
    let media = window.matchMedia(query);

    if (media.matches != matches) {
      setMatches(media.matches);
    }
    let listener = (e) => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return matches;
};

const Teachers = () => {
  const total = 5;
  return (
    <div
      className={`
        ${total <= 5 ? "slider-less-than-five" : ""} 
      }`}
    >
      <SectionHeading align="center">Đội ngũ giảng viên</SectionHeading>
      <div className="text-center">
        <TeacherList />
      </div>
    </div>
  );
};

export default memo(Teachers);
