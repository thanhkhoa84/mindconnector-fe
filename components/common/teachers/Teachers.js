import { useState, useEffect, memo } from "react";

import { SectionHeading } from "../../Heading";

import styles from "../../../styles/components/common/teachers/Teachers.module.scss";

const TeacherCard = () => {
  return (
    <div className={`${styles.teacherCard}`}>
      <div className={styles.teacherImageContainer}>
        <img
          src="/img/bg-teacher-card.svg"
          alt=""
          className={styles.teacherCardBg}
        />
        <div className={styles.teacherImage}>
          <img src="/img/mentors/hieu-nguyen.png" alt="" />
        </div>
      </div>
      <div className={styles.teacherInfo}>
        <h3>Hiếu Nguyễn</h3>
        <p>
          Phụ trách nghiên cứu <br />
          phát triển thị trường
        </p>
        <div className={styles.socialInfo}>
          <a href="#" target="_blank">
            <img src="/img/mentor-linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

const TeacherList = () => (
  <div className={styles.teachersList}>
    <div className={styles.teacherCard}>
      <div className={styles.teacherImageContainer}>
        <img
          src="/img/bg-teacher-card.svg"
          alt=""
          className={styles.teacherCardBg}
        />
        <div className={styles.teacherImage}>
          <img src="/img/mentors/hieu-nguyen.png" alt="" />
        </div>
      </div>
      <div className={styles.teacherInfo}>
        <h3>Hiếu Nguyễn</h3>
        <p>
          Phụ trách nghiên cứu <br />
          phát triển thị trường
        </p>
        <div className={styles.socialInfo}>
          <a href="#" target="_blank">
            <img src="/img/mentor-linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div className={styles.teacherCard}>
      <div className={styles.teacherImageContainer}>
        <img
          src="/img/bg-teacher-card.svg"
          alt=""
          className={styles.teacherCardBg}
        />
        <div className={styles.teacherImage}>
          <img src="/img/mentors/nina-tran.png" alt="" />
        </div>
      </div>
      <div className={styles.teacherInfo}>
        <h3>Nina Trần</h3>
        <p>
          Phụ trách <br />
          thiết kế chương trình
        </p>
        <div className={styles.socialInfo}>
          <a href="#" target="_blank">
            <img src="/img/mentor-linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div className={styles.teacherCard}>
      <div className={styles.teacherImageContainer}>
        <img
          src="/img/bg-teacher-card.svg"
          alt=""
          className={styles.teacherCardBg}
        />
        <div className={styles.teacherImage}>
          <img src="/img/mentors/mandy-nguyen.png" alt="" />
        </div>
      </div>
      <div className={styles.teacherInfo}>
        <h3>Mandy Nguyễn</h3>
        <p>
          Chuyên gia <br />
          Kinh doanh - Marketing
        </p>
        <div className={styles.socialInfo}>
          <a href="#" target="_blank">
            <img src="/img/mentor-linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div className={styles.teacherCard}>
      <div className={styles.teacherImageContainer}>
        <img
          src="/img/bg-teacher-card.svg"
          alt=""
          className={styles.teacherCardBg}
        />
        <div className={styles.teacherImage}>
          <img src="/img/mentors/dao-minh-huyen.png" alt="" />
        </div>
      </div>
      <div className={styles.teacherInfo}>
        <h3>Đào Minh Huyền</h3>
        <p>
          Owner of Ask2Go App, <br />
          Mihoo Cosmetics,…
        </p>
        <div className={styles.socialInfo}>
          <a href="#" target="_blank">
            <img src="/img/mentor-linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

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
      className={`${total <= 5 ? "slider-less-than-five" : ""} ${
        styles.teachers
      }`}
    >
      <SectionHeading align="center">Đội ngũ giảng viên</SectionHeading>
      <div className={styles.teachersList}>
        <TeacherList />
      </div>
    </div>
  );
};

export default memo(Teachers);
