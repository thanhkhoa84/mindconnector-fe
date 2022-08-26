import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';

import { SectionHeading } from '../../Heading';

import styles from '../../../styles/components/common/teachers/Teachers.module.scss';
import cardStyles from '../../../styles/components/common/teachers/TeacherCard.module.scss';

const TeacherList = () => (
  <div className={styles.teachersList}>
    <div className={cardStyles.teacherCard}>
      <div className={cardStyles.teacherImageContainer}>
        <img
          src='/img/bg-teacher-card.svg'
          alt=''
          className={cardStyles.teacherCardBg}
        />
        <div className={cardStyles.teacherImage}>
          <img src='/img/mentors/hieu-nguyen.png' alt='' />
        </div>
      </div>
      <div className={cardStyles.teacherInfo}>
        <h3>Hiếu Nguyễn</h3>
        <p>
          Phụ trách nghiên cứu <br />
          phát triển thị trường
        </p>
        <div className={cardStyles.socialInfo}>
          <a href='#' target='_blank'>
            <img src='/img/mentor-linkedin.svg' alt='' />
          </a>
        </div>
      </div>
    </div>
    <div className={cardStyles.teacherCard}>
      <div className={cardStyles.teacherImageContainer}>
        <img
          src='/img/bg-teacher-card.svg'
          alt=''
          className={cardStyles.teacherCardBg}
        />
        <div className={cardStyles.teacherImage}>
          <img src='/img/mentors/nina-tran.png' alt='' />
        </div>
      </div>
      <div className={cardStyles.teacherInfo}>
        <h3>Nina Trần</h3>
        <p>
          Phụ trách <br />
          thiết kế chương trình
        </p>
        <div className={cardStyles.socialInfo}>
          <a href='#' target='_blank'>
            <img src='/img/mentor-linkedin.svg' alt='' />
          </a>
        </div>
      </div>
    </div>
    <div className={cardStyles.teacherCard}>
      <div className={cardStyles.teacherImageContainer}>
        <img
          src='/img/bg-teacher-card.svg'
          alt=''
          className={cardStyles.teacherCardBg}
        />
        <div className={cardStyles.teacherImage}>
          <img src='/img/mentors/mandy-nguyen.png' alt='' />
        </div>
      </div>
      <div className={cardStyles.teacherInfo}>
        <h3>Mandy Nguyễn</h3>
        <p>
          Chuyên gia <br />
          Kinh doanh - Marketing
        </p>
        <div className={cardStyles.socialInfo}>
          <a href='#' target='_blank'>
            <img src='/img/mentor-linkedin.svg' alt='' />
          </a>
        </div>
      </div>
    </div>
    <div className={cardStyles.teacherCard}>
      <div className={cardStyles.teacherImageContainer}>
        <img
          src='/img/bg-teacher-card.svg'
          alt=''
          className={cardStyles.teacherCardBg}
        />
        <div className={cardStyles.teacherImage}>
          <img src='/img/mentors/dao-minh-huyen.png' alt='' />
        </div>
      </div>
      <div className={cardStyles.teacherInfo}>
        <h3>Đào Minh Huyền</h3>
        <p>
          Owner of Ask2Go App, <br />
          Mihoo Cosmetics,…
        </p>
        <div className={cardStyles.socialInfo}>
          <a href='#' target='_blank'>
            <img src='/img/mentor-linkedin.svg' alt='' />
          </a>
        </div>
      </div>
    </div>
    <div className={cardStyles.teacherCard}>
      <div className={cardStyles.teacherImageContainer}>
        <img
          src='/img/bg-teacher-card.svg'
          alt=''
          className={cardStyles.teacherCardBg}
        />
        <div className={cardStyles.teacherImage}>
          <img src='/img/mentors/dao-minh-huyen.png' alt='' />
        </div>
      </div>
      <div className={cardStyles.teacherInfo}>
        <h3>Đào Minh Huyền</h3>
        <p>
          Owner of Ask2Go App, <br />
          Mihoo Cosmetics,…
        </p>
        <div className={cardStyles.socialInfo}>
          <a href='#' target='_blank'>
            <img src='/img/mentor-linkedin.svg' alt='' />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const flickityOptions = {
  initialIndex: 0,
  contain: true,
  percentPosition: true,
  prevNextButtons: true,
  pageDots: false,
};

function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <div className={cardStyles.teacherCard}>
        <div className={cardStyles.teacherImageContainer}>
          <img
            src='/img/bg-teacher-card.svg'
            alt=''
            className={cardStyles.teacherCardBg}
          />
          <div className={cardStyles.teacherImage}>
            <img src='/img/mentors/hieu-nguyen.png' alt='' />
          </div>
        </div>
        <div className={cardStyles.teacherInfo}>
          <h3>Hiếu Nguyễn</h3>
          <p>
            Phụ trách nghiên cứu <br />
            phát triển thị trường
          </p>
          <div className={cardStyles.socialInfo}>
            <a href='#' target='_blank'>
              <img src='/img/mentor-linkedin.svg' alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className={cardStyles.teacherCard}>
        <div className={cardStyles.teacherImageContainer}>
          <img
            src='/img/bg-teacher-card.svg'
            alt=''
            className={cardStyles.teacherCardBg}
          />
          <div className={cardStyles.teacherImage}>
            <img src='/img/mentors/nina-tran.png' alt='' />
          </div>
        </div>
        <div className={cardStyles.teacherInfo}>
          <h3>Nina Trần</h3>
          <p>
            Phụ trách <br />
            thiết kế chương trình
          </p>
          <div className={cardStyles.socialInfo}>
            <a href='#' target='_blank'>
              <img src='/img/mentor-linkedin.svg' alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className={cardStyles.teacherCard}>
        <div className={cardStyles.teacherImageContainer}>
          <img
            src='/img/bg-teacher-card.svg'
            alt=''
            className={cardStyles.teacherCardBg}
          />
          <div className={cardStyles.teacherImage}>
            <img src='/img/mentors/mandy-nguyen.png' alt='' />
          </div>
        </div>
        <div className={cardStyles.teacherInfo}>
          <h3>Mandy Nguyễn</h3>
          <p>
            Chuyên gia <br />
            Kinh doanh - Marketing
          </p>
          <div className={cardStyles.socialInfo}>
            <a href='#' target='_blank'>
              <img src='/img/mentor-linkedin.svg' alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className={cardStyles.teacherCard}>
        <div className={cardStyles.teacherImageContainer}>
          <img
            src='/img/bg-teacher-card.svg'
            alt=''
            className={cardStyles.teacherCardBg}
          />
          <div className={cardStyles.teacherImage}>
            <img src='/img/mentors/dao-minh-huyen.png' alt='' />
          </div>
        </div>
        <div className={cardStyles.teacherInfo}>
          <h3>Đào Minh Huyền</h3>
          <p>
            Owner of Ask2Go App, <br />
            Mihoo Cosmetics,…
          </p>
          <div className={cardStyles.socialInfo}>
            <a href='#' target='_blank'>
              <img src='/img/mentor-linkedin.svg' alt='' />
            </a>
          </div>
        </div>
      </div>
      {/* <div className={cardStyles.teacherCard}>
        <div className={cardStyles.teacherImageContainer}>
          <img
            src='/img/bg-teacher-card.svg'
            alt=''
            className={cardStyles.teacherCardBg}
          />
          <div className={cardStyles.teacherImage}>
            <img src='/img/mentors/dao-minh-huyen.png' alt='' />
          </div>
        </div>
        <div className={cardStyles.teacherInfo}>
          <h3>Đào Minh Huyền</h3>
          <p>
            Owner of Ask2Go App, <br />
            Mihoo Cosmetics,…
          </p>
          <div className={cardStyles.socialInfo}>
            <a href='#' target='_blank'>
              <img src='/img/mentor-linkedin.svg' alt='' />
            </a>
          </div>
        </div>
      </div> */}
    </Flickity>
  );
}

const Teachers = () => {
  const total = 5;
  return (
    <div
      className={`${total <= 5 ? 'slider-less-than-five' : ''} ${
        styles.teachers
      }`}
    >
      <SectionHeading align='center'>Đội ngũ giảng viên</SectionHeading>
      <div className={styles.teachersList}>
        <Carousel />
      </div>
    </div>
  );
};

export default Teachers;
