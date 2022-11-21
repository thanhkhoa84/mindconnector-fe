import Head from 'next/head';
import Link from "next/link";
import Image from "next/future/image";
import Container from "@/components/Container";
import Seo from "@/components/SEO";
import LogoList from "@/components/LogoList";
import Teachers from "@/components/common/teachers/Teachers";
import StudentCardList from "@/components/common/courses/StudentCardList";
import { programs } from "@/data/global";

import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "@/components/common/modal/GlobalModal";

const Student = ({ questions, logoslist, programs }) => {
  const seo = {
    metaTitle: "Dành cho sinh viên",
    metaDescription:
      "Mind Connector là một mạng lưới của các nhà tư vấn kinh doanh cùng các giảng viên vốn là các lãnh đạo và chuyên gia hàng đầu trong nhiều lĩnh vực khác nhau. Mind Connector kết nối tầm nhìn và tri thức để giúp doanh nghiệp, cá nhân phát triển và tăng trưởng mạnh mẽ trong tương lai",
    keywords: [
      "mind connector",
      "kết nối",
      "tầm nhìn",
      "training",
      "mạng lưới",
      "doanh nghiệp",
      "cá nhân",
    ],
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
      <Head></Head>
      <>
        <Seo seo={seo} />
        <main className="overflow-hidden">
          <section>
            <header className={`relative bg-[#F9F1DD] py-[3em]`}>
              <div className="absolute inset-0">
                <Image
                  alt=""
                  src="/img/bg-head-section.png"
                  width={1400}
                  height={600}
                  priority={true}
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="relative">
                <Container>
                  <h1 className="mx-auto mt-0 mb-4 text-center text-3xl font-black dark:text-white dark:text-white md:text-left md:text-6xl md:leading-[1.2]">
                    Học hỏi <br className="hidden md:inline" />
                    để thành công
                  </h1>
                  <p className="text-center md:text-left">
                    Cùng Mind Connector xây dựng nền tảng vững chắc để thành
                    công.
                  </p>
                </Container>
              </div>
            </header>
            <Container>
              <LogoList
                title="Mind Connector hợp tác với trường đại học và công ty hàng đầu"
                list={logoslist}
              />
            </Container>
          </section>
          <section className={`py-[3em] `}>
            <Container>
              <h2 className="my-0 mx-auto text-base font-bold leading-[1] text-gray dark:text-white">
                Chương trình cơ bản
              </h2>
              <h1 className="mx-auto mt-0 mb-4 text-4xl font-black leading-[1.3] dark:text-white">
                Kỹ Năng Xã Hội
              </h1>
              <p>
                <b>“Nền tảng vững chắc, tương lai khởi sắc”</b> <br />
                Trang bị những kỹ năng cần thiết ngay từ khi ngồi trên giảng
                đường để bạn có một hành trang vững chắc cho tương lai.
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
              <h2 className="my-0 mx-auto text-base font-bold leading-[1] text-gray dark:text-white">
                Chương trình trung cấp
              </h2>
              <h1 className="mx-auto mt-0 mb-4 text-4xl font-black leading-[1.3] dark:text-white">
                Vững Vàng Lập Nghiệp
              </h1>
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
              <h2 className="my-0 mx-auto text-base font-bold leading-[1] text-gray dark:text-white">
                Chương trình nâng cao
              </h2>
              <h1 className="mx-auto mt-0 mb-4 text-4xl font-black leading-[1.3] dark:text-white">
                Sẵn Sàng Khởi Nghiệp Kinh Doanh
              </h1>
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
              <h1 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white">
                Đội ngũ giảng viên
              </h1>
              <Teachers />
            </Container>
          </section>
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
        </main>
      </>
    </>
  );
};

export default Student;

export async function getStaticProps() {
  /** TODO: get real QaA from backend */
  const questions = [
    {
      Question: "Các chương trình học có cần yêu cầu đầu vào hay không?",
      Answer:
        "Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.",
    },
    {
      Question:
        "Làm cách nào tôi có thể trao đổi với giảng viên khi có những thắc mắc về bài học?",
      Answer:
        "Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.",
    },
    {
      Question:
        "Liệu tôi có thể khởi nghiệp ngay từ khi còn ngồi trên ghế nhà trường?",
      Answer:
        "Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.",
    },
    {
      Question:
        "Ngoài video bài giảng, tôi có nhận được tài liệu khác hay không?",
      Answer:
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

