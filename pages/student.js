import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import Container from './../components/Container';
import QandA from './../components/QandA';
import Seo from './../components/SEO';
import {
  SectionHeading,
  SectionSubHeading,
  BannerHeading,
} from '../components/Heading';
import Teachers from './../components/common/teachers/Teachers';
import Courses from "../components/common/courses/Courses";

const LogoList = dynamic(() => import("./../components/LogoList"), {
  ssr: false,
});

const Student = ({ questions, logoslist }) => {
  const seo = {
    metaTitle: "Mind Connector | Dành cho sinh viên",
    metaDescription:
      "Mind Connector là một mạng lưới của các nhà tư vấn kinh doanh cùng các giảng viên vốn là các lãnh đạo và chuyên gia hàng đầu trong nhiều lĩnh vực khác nhau. Mind Connector kết nối tầm nhìn và tri thức để giúp doanh nghiệp, cá nhân phát triển và tăng trưởng mạnh mẽ trong tương lai",
    // shareImage: article.attributes.image,
    // article: true,
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Seo seo={seo} />
        <header
          className={`bg-[url('/img/bg-head-section.png')] bg-cover py-[3em]`}
        >
          <Container>
            <BannerHeading>
              Học hỏi <br className="hidden md:inline" />
              để thành công
            </BannerHeading>
            <p className="text-center lg:text-left">
              Cùng Mind Connector xây dựng nền tảng vững chắc để thành công.
            </p>
          </Container>
        </header>
        <Container>
          <LogoList
            title="Mind Connector hợp tác với trường đại học và công ty hàng đầu"
            list={logoslist}
          />
        </Container>
        <section id="thanh-cong-trong-hoc-tap" className={`py-[3em] `}>
          <Container>
            <SectionSubHeading>Chương trình cơ bản</SectionSubHeading>
            <SectionHeading>Thành công trong học tập</SectionHeading>
            <p>
              <b>“Khởi đầu vững chắc, tương lai khởi sắc”</b> <br />
              Trang bị những kỹ năng cần thiết ngay từ khi ngồi trên giảng đường
              để bạn có một hành trang vững chắc cho tương lai.
            </p>
            <p>
              <Link href="/programs/for-student/thanh-cong-trong-hoc-tap">
                <span className="link-arrow">Tìm hiểu thêm</span>
              </Link>
            </p>
          </Container>
          <div>
            <Container>
              <Courses />
            </Container>
          </div>
        </section>
        <section
          id="thanh-cong-trong-ung-tuyen"
          className={`bg-[#FFEFDB]  py-[3em]`}
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
              <Link href="/programs/for-student/thanh-cong-trong-ung-tuyen">
                <span className="link-arrow">Tìm hiểu thêm</span>
              </Link>
            </p>
          </Container>
          <div>
            <Container>
              <Courses />
            </Container>
          </div>
        </section>
        <section
          id="thanh-cong-trong-khoi-su-kinh-doanh"
          className={`py-[3em]`}
        >
          <Container>
            <SectionSubHeading>Chương trình nâng cao</SectionSubHeading>
            <SectionHeading>Thành công trong khởi sự kinh doanh</SectionHeading>
            <p>
              <b>“Khởi nghiệp thuận lợi, chạm đỉnh vinh quang”</b> <br />
              Vững vàng kiến thức và kỹ năng để khởi sự kinh doanh thuận lợi.
            </p>
            <p>
              <Link href="/programs/for-student/thanh-cong-trong-khoi-su-kinh-doanh">
                <span className="link-arrow">Tìm hiểu thêm</span>
              </Link>
            </p>
          </Container>
          <div>
            <Container>
              <Courses />
            </Container>
          </div>
        </section>
        <section>
          <Container>
            <Teachers />
          </Container>
        </section>
        <section>
          <Container>
            <QandA questions={questions} />
          </Container>
        </section>
      </>
    </>
  );
};

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

  const logoslist = ['1', '2', '3', '4', '5'];

  return {
    props: {
      questions,
      logoslist,
    },
  };
}

