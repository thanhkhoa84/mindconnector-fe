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
import LogoList from "./../components/LogoList";
import Teachers from "./../components/common/teachers/Teachers";
import StudentCardList from "./../components/common/courses/StudentCardList";
import { programs } from "../data/global";

import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "./../components/common/modal/GlobalModal";

const Student = ({ questions, logoslist, programs }) => {
  const seo = {
    metaTitle: "Dành cho sinh viên",
    metaDescription:
      "Mind Connector là một mạng lưới của các nhà tư vấn kinh doanh cùng các giảng viên vốn là các lãnh đạo và chuyên gia hàng đầu trong nhiều lĩnh vực khác nhau. Mind Connector kết nối tầm nhìn và tri thức để giúp doanh nghiệp, cá nhân phát triển và tăng trưởng mạnh mẽ trong tương lai",
    // shareImage: article.attributes.image,
    // article: true,
  };

  const { showModal } = useGlobalModalContext();
  const createModal = () => {
    showModal(MODAL_TYPES.REGISTER_MODAL, {
      title: "Điền thông tin liên lạc, Mind Connector sẽ liên hệ bạn sau",
      program: "",
      course: "",
      confirmBtn: "Save",
    });
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
            <p className="text-center md:text-left">
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
        <section className={`py-[3em] `}>
          <Container>
            <SectionSubHeading>Chương trình cơ bản</SectionSubHeading>
            <SectionHeading>Kỹ Năng Xã Hội</SectionHeading>
            <p>
              <b>“Nền tảng vững chắc, tương lai khởi sắc”</b> <br />
              Trang bị những kỹ năng cần thiết ngay từ khi ngồi trên giảng đường
              để bạn có một hành trang vững chắc cho tương lai.
            </p>
            <p>
              <Link href="/programs/ky-nang-xa-hoi">
                <span className="link-arrow">Tìm hiểu thêm</span>
              </Link>
            </p>
          </Container>
          <div className="course-card relative mt-8 block py-8">
            <StudentCardList courses={programs.soCap} />
          </div>
        </section>
        <section className={`bg-[#FFEFDB]  py-[3em]`}>
          <Container>
            <SectionSubHeading>Chương trình trung cấp</SectionSubHeading>
            <SectionHeading>Vững Vàng Lập Nghiệp</SectionHeading>
            <p>
              <b>“Kỹ năng thiết thực, dẫn lối thành công”</b> <br />
              Chuẩn bị một phong cách làm việc chuyên nghiệp cùng với những kỹ
              năng quan trọng chính là chìa khoá để thành công.
            </p>
            <p>
              <Link href="/programs/vung-vang-lap-nghiep">
                <span className="link-arrow">Tìm hiểu thêm</span>
              </Link>
            </p>
          </Container>
          <div>
            <div className="course-card relative mt-8 block py-8">
              <StudentCardList courses={programs.trungCap} />
            </div>
          </div>
        </section>
        <section className={`py-[3em]`}>
          <Container>
            <SectionSubHeading>Chương trình nâng cao</SectionSubHeading>
            <SectionHeading>Sẵn Sàng Khởi Nghiệp Kinh Doanh</SectionHeading>
            <p>
              <b>“Khởi nghiệp thuận lợi, chạm đỉnh vinh quang”</b> <br />
              Vững vàng kiến thức và kỹ năng để khởi sự kinh doanh thuận lợi.
            </p>
            <p>
              <Link href="/programs/san-sang-khoi-nghiep-kinh-doanh">
                <span className="link-arrow">Tìm hiểu thêm</span>
              </Link>
            </p>
          </Container>
          <div>
            <div className="course-card relative mt-8 block py-8">
              <StudentCardList courses={programs.caoCap} />
            </div>
          </div>
        </section>
        <section>
          <Container>
            <Teachers />
          </Container>
        </section>
        {/* <section>
          <Container>
            <QandA questions={questions} />
          </Container>
        </section> */}
        <section className="pb-12">
          <Container>
            <div className="mt-8 mb-4 items-center overflow-hidden rounded-3xl bg-[#941C50] text-white md:flex md:flex-row">
              <header className="bg-[#B22F66] py-8 px-6">
                <h3 className="text-[24px] font-black">Học thử miễn phí</h3>
                <p className="mt-2 font-medium">
                  Nhập thông tin để có cơ hội trải nghiệm miễn phí các chương
                  trình của Mind Connector.
                </p>
              </header>
              <div className="items-center justify-between p-6 md:flex md:flex-col lg:flex-1">
                <button
                  onClick={createModal}
                  className="btn-primary block w-full min-w-[296px] overflow-hidden text-[13px] sm:text-[16px]"
                >
                  Đừng bỏ lỡ, đăng ký ngay!
                </button>
              </div>
            </div>
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
      question: "Các chương trình học có cần yêu cầu đầu vào hay không?",
      answer:
        "Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.",
    },
    {
      question:
        "Làm cách nào tôi có thể trao đổi với giảng viên khi có những thắc mắc về bài học?",
      answer:
        "Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.",
    },
    {
      question:
        "Liệu tôi có thể khởi nghiệp ngay từ khi còn ngồi trên ghế nhà trường?",
      answer:
        "Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.",
    },
    {
      question:
        "Ngoài video bài giảng, tôi có nhận được tài liệu khác hay không?",
      answer:
        "Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.",
    },
  ];

  const logoslist = ["1", "2", "3", "4", "5"];

  let soCap = programs.soCap.filter((c) => c.feature == "Môn học bán chạy");
  let trungCap = programs.trungCap.filter(
    (c) => c.feature == "Môn học bán chạy"
  );
  let caoCap = programs.caoCap.filter((c) => c.feature == "Chủ đề bán chạy");
  return {
    props: {
      questions,
      logoslist,
      programs: {
        soCap,
        trungCap,
        caoCap,
      },
    },
  };
}

