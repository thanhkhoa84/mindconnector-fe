import Container from '../../components/Container';
import { SectionHeading } from '../../components/Heading';
import styles from './Teachers.module.scss';
import Link from 'next/link';

const Teachers = () => {
  return (
    <section className={styles.teachers}>
      <Container>
        <SectionHeading align='center'>Đội ngũ giảng viên</SectionHeading>

        <div className={styles.teachersList}>
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
          <div className={styles.teacherCard}>
            <div className={styles.teacherImageContainer}>
              <img
                src='/img/bg-teacher-card.svg'
                alt=''
                className={styles.teacherCardBg}
              />
              <div className={styles.teacherImage}>
                <img src='/img/mentors/nina-tran.png' alt='' />
              </div>
            </div>
            <div className={styles.teacherInfo}>
              <h3>Nina Trần</h3>
              <p>
                Phụ trách <br />
                thiết kế chương trình
              </p>
              <div className={styles.socialInfo}>
                <a href='#' target='_blank'>
                  <img src='/img/mentor-linkedin.svg' alt='' />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.teacherCard}>
            <div className={styles.teacherImageContainer}>
              <img
                src='/img/bg-teacher-card.svg'
                alt=''
                className={styles.teacherCardBg}
              />
              <div className={styles.teacherImage}>
                <img src='/img/mentors/mandy-nguyen.png' alt='' />
              </div>
            </div>
            <div className={styles.teacherInfo}>
              <h3>Mandy Nguyễn</h3>
              <p>
                Chuyên gia <br />
                Kinh doanh - Marketing
              </p>
              <div className={styles.socialInfo}>
                <a href='#' target='_blank'>
                  <img src='/img/mentor-linkedin.svg' alt='' />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.teacherCard}>
            <div className={styles.teacherImageContainer}>
              <img
                src='/img/bg-teacher-card.svg'
                alt=''
                className={styles.teacherCardBg}
              />
              <div className={styles.teacherImage}>
                <img src='/img/mentors/dao-minh-huyen.png' alt='' />
              </div>
            </div>
            <div className={styles.teacherInfo}>
              <h3>Đào Minh Huyền</h3>
              <p>
                Owner of Ask2Go App, <br />
                Mihoo Cosmetics,…{' '}
              </p>
              <div className={styles.socialInfo}>
                <a href='#' target='_blank'>
                  <img src='/img/mentor-linkedin.svg' alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Teachers;
