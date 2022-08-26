import Rating from '../../Rating';

import styles from '../../../styles/components/common/courses/CourseCard.module.scss';

const CourseCard = () => (
  <div className={styles.courseCard}>
    <div className={styles.courseCardImage}>
      <img src='/img/course-1.png' alt='' />
    </div>
    <div className={styles.courseCardInfo}>
      <div className={styles.courseInfo__Hot}>
        <h5>Khoá học bán chạy</h5>
      </div>
      <h3>Theo đuổi sự học cả đời</h3>
      <p>
        <span>4 lessons &#x2022; </span>
        <span>3 hours</span>
      </p>
      <div className={styles.courseInfo__Rating}>
        <Rating value={4.5} total={1590} />
      </div>
      <div className={styles.courseInfo__Price}>
        <span>USD$ </span>
        84<sup>99</sup>
      </div>
    </div>
  </div>
);

export default CourseCard;
