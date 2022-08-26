import styles from '../../../styles/components/common/teachers/TeacherCard.module.scss';

const TeacherCard = () => {
  return (
    <div className={styles.teacherCard}>
      <div className={styles.teacherImageContainer}>
        <img
          src='/img/bg-teacher-card.svg'
          alt=''
          className={styles.teacherCardBg}
        />
        <div className={styles.teacherImage}>
          <img src='/img/mentors/hieu-nguyen.png' alt='' />
        </div>
      </div>
      <div className={styles.teacherInfo}>
        <h3>Hiếu Nguyễn</h3>
        <p>
          Phụ trách nghiên cứu <br />
          phát triển thị trường
        </p>
        <div className={styles.socialInfo}>
          <a href='#' target='_blank'>
            <img src='/img/mentor-linkedin.svg' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
