import Head from 'next/head';
import Link from 'next/link';
import Container from './../components/Container';
import QandA from './../components/QandA';
import Seo from './../components/SEO';
import {
  SectionHeading,
  SectionSubHeading,
  BannerHeading,
} from '../components/Heading';
import LogoList from '../components/LogoList';

import Teachers from './../components/common/teachers/Teachers';
import styles from '../styles/pages/Student.module.scss';
import { validateConfig } from 'next/dist/server/config-shared';

const seo = {};

const Rating = ({ value, total }) => {
  const rating = () => {
    return Math.floor(Math.random() * (5 + 3));
  };

  const Star = ({ value }) => {
    return Array(5)
      .fill(0)
      .map((_, idx) => {
        return idx < Math.floor(value) ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='10'
            viewBox='0 0 10 10'
            key={idx}
          >
            <path
              id='Path_4333'
              data-name='Path 4333'
              d='M5,0,3.455,3.292,0,3.82,2.5,6.382,1.91,10,5,8.292,8.091,10,7.5,6.382,10,3.82,6.545,3.292Z'
              transform='translate(0 0)'
              fill='#ffaf43'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='10'
            viewBox='0 0 10 10'
            key={idx}
          >
            <path
              id='Path_4337'
              data-name='StarRating'
              d='M5,0,3.455,3.292,0,3.82,2.5,6.382,1.91,10,5,8.292,8.091,10,7.5,6.382,10,3.82,6.545,3.292Z'
              transform='translate(0 0)'
              fill='#fff'
            />
          </svg>
        );
      });
  };

  return (
    <div className={styles.rating}>
      {value} <Star value={rating()} /> ({total})
    </div>
  );
};

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

const Student = ({ questions }) => (
  <>
    <Head>
      <title>Mind Connector</title>
      <meta
        name='description'
        content='Mind Connector là một mạng lưới của các nhà tư vấn kinh doanh cùng các giảng viên vốn là các lãnh đạo và chuyên gia hàng đầu trong nhiều lĩnh vực khác nhau. Mind Connector kết nối tầm nhìn và tri thức để giúp doanh nghiệp, cá nhân phát triển và tăng trưởng mạnh mẽ trong tương lai'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <>
      <Seo seo={seo} />
      <header className={`header-with-bg ${styles.studentHeader}`}>
        <Container>
          <BannerHeading>
            Học hỏi <br />
            để thành công
          </BannerHeading>
          <p>Cùng Mind Connector xây dựng nền tảng vững chắc để thành công.</p>
        </Container>
      </header>
      <Container>
        <LogoList
          title='Mind Connector hợp tác với trường đại học và công ty hàng đầu'
          list={['1']}
        />
      </Container>
      <section
        id='thanh-cong-trong-hoc-tap'
        className={`${styles.studentSuccess} ${styles.studentSuccess__Learning}`}
      >
        <Container>
          <SectionSubHeading>Chương trình cơ bản</SectionSubHeading>
          <SectionHeading>Thành công trong học tập</SectionHeading>
          <p>
            <b>“Khởi đầu vững chắc, tương lai khởi sắc”</b> <br />
            Trang bị những kỹ năng cần thiết ngay từ khi ngồi trên giảng đường
            để bạn có một hành trang vững chắc cho tương lai.
          </p>
          <p>
            <Link href='#'>Tìm hiểu thêm</Link>
          </p>
        </Container>
        <div>
          <Container>
            <div className={styles.coursesList}>
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </Container>
        </div>
      </section>
      <section
        id='thanh-cong-trong-ung-tuyen'
        className={`${styles.studentSuccess} ${styles.studentSuccess__Jobs}`}
      >
        <Container>
          <SectionSubHeading>Chương trình trung cấp</SectionSubHeading>
          <SectionHeading>Thành công trong ứng tuyển</SectionHeading>
          <p>
            <b>“Kỹ năng công việc, dẫn lối thành công”</b> <br />
            Chuẩn bị một phong cách làm việc chuyên nghiệp cùng với những kỹ
            năng quan trọng chính là chìa khoá để thành công.
          </p>
          <p>
            <Link href='#'>Tìm hiểu thêm</Link>
          </p>
        </Container>
      </section>
      <section
        id='thanh-cong-trong-khoi-su-kinh-doanh'
        className={`${styles.studentSuccess} ${styles.studentSuccess__Startup}`}
      >
        <Container>
          <SectionSubHeading>Chương trình nâng cao</SectionSubHeading>
          <SectionHeading>Thành công trong khởi sự kinh doanh</SectionHeading>
          <p>
            <b>“Khởi nghiệp thuận lợi, chạm đỉnh vinh quang”</b> <br />
            Vững vàng kiến thức và kỹ năng để khởi sự kinh doanh thuận lợi.
          </p>
          <p>
            <Link href='#'>Tìm hiểu thêm</Link>
          </p>
        </Container>
      </section>
      <section>
        <Teachers></Teachers>
      </section>
      <section>
        <Container>
          <QandA questions={questions} />
        </Container>
      </section>
    </>
  </>
);

export default Student;

export async function getStaticProps() {
  /** TODO: get real QaA from backend */
  const questions = [
    {
      question: 'Các chương trình học có cần yêu cầu đầu vào hay không?',
      answer:
        'Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.',
    },
    {
      question:
        'Làm cách nào tôi có thể trao đổi với giảng viên khi có những thắc mắc về bài học?',
      answer:
        'Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.',
    },
    {
      question:
        'Liệu tôi có thể khởi nghiệp ngay từ khi còn ngồi trên ghế nhà trường?',
      answer:
        'Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.',
    },
    {
      question:
        'Ngoài video bài giảng, tôi có nhận được tài liệu khác hay không?',
      answer:
        'Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.',
    },
  ];

  const logoList = [];

  return {
    props: {
      questions,
    },
  };
}

