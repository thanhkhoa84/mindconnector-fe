import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { BannerHeading, SectionSubHeading } from "../components/Heading";
import { QandAProgram } from "../components/QandA";
import { useContext } from "react";
import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "../components/common/modal/GlobalModal";

const seo = {
  metaTitle: "Mind Connector",
  metaDescription: "Mind Connector",
  // shareImage: article.attributes.image,
  // article: true,
};

const LogoList = dynamic(() => import("./../components/LogoList"), {
  ssr: false,
});

const Course = ({ questions, logoslist, programInfo }) => {
  const { showModal } = useGlobalModalContext();
  const createModal = () => {
    showModal(MODAL_TYPES.REGISTER_MODAL, {
      title: "Điền thông tin liên lạc, Mind Connector sẽ liên hệ bạn sau",
      confirmBtn: "Save",
    });
  };

  return (
    <>
      <Head>
        <title>Mind Connector</title>
        <meta name="description" content="Mind Connector" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Seo seo={seo} />
      <>
        <div className="bg-[url(/img/bg-head-section.png)] bg-cover py-[3em] text-center md:py-[4em] md:pb-[0]">
          <Container>
            <SectionSubHeading>
              Chương trình Thành công trong học tập
            </SectionSubHeading>
            <h1 className="leading-0 text-3xl font-black md:text-6xl">
              Khoá học nghiên cứu và phân tích
            </h1>
            <p className="mt-4">“Khởi đầu vững chắc, tương lai khởi sắc”</p>
            <div className="mt-8">
              <img
                src="/img/avatar.png"
                className="inline-block w-[100px] rounded-full"
                alt="Avatar"
              />
              <p className="mt-1 text-[18px] font-black text-purple">
                Stephanie J
              </p>
              <p className="text-xs">CEO Alphabet</p>
            </div>
            <div className="mt-8 flex flex-col rounded-xl text-left md:relative md:top-[35px] md:mt-0 md:h-[70px] md:flex-row md:justify-between md:bg-white md:shadow-lg">
              <div className=" flex flex-row flex-nowrap items-start justify-start gap-4 rounded-2xl border-solid border-[#d2d2d2] bg-[#FFF2EB] bg-opacity-75 py-[1em] px-6 xs:flex-row sm:flex-row sm:gap-8 md:items-center md:bg-transparent">
                <div className="text-gray">
                  <p className="text-[20px] font-bold">
                    4.9{" "}
                    <span className="mt-0 inline-block text-[12px]">
                      <img src="/img/star-rating-fill.svg" alt="" width={15} />
                    </span>
                  </p>
                  <p className="text-[14px]">1988 Đánh giá</p>
                </div>
                <div className="text-gray">
                  <p className="text-[20px] font-bold">2000</p>
                  <p className="text-[14px]">Học viên</p>
                </div>
                <div className="text-gray">
                  <p className="text-[20px] font-bold">60</p>
                  <p className="text-[14px]">Giờ học</p>
                </div>
              </div>
              <div className="mt-6 flex flex-row flex-wrap items-center justify-between md:mt-0 md:gap-5 md:px-6">
                <p>
                  Học phí <span className="text-[14px] font-bold">USD$</span>{" "}
                  <span className="text-[32px] font-bold">84</span>
                  <sup className="text-[18px] font-bold">99</sup>
                </p>
                <p>
                  <button onClick={createModal} className="btn-primary">
                    Đăng ký học ngay
                  </button>
                </p>
              </div>
            </div>
          </Container>
        </div>
        <div className="bg-[#FFFEFD]">
          <Container>
            <div className="flex flex-col md:py-[4em]">
              <div className="flex flex-col justify-between md:flex-row md:gap-4">
                <div className="w-full md:w-3/5 lg:w-[688px]">
                  <div className="flex items-center md:h-[60px] md:rounded-xl lg:shadow-md ">
                    <ul className="block overflow-x-auto overflow-y-hidden whitespace-nowrap ">
                      <li className="inline-block py-0 px-4 pl-0 align-middle md:pl-6">
                        <a
                          className="block"
                          href="#about"
                          className="font-bold"
                        >
                          Về chương trình
                        </a>
                      </li>
                      <li className="inline-block py-4 px-4 align-middle">
                        <a className="block" href="#schedule">
                          Lịch học
                        </a>
                      </li>
                      <li className="inline-block py-4 px-4 align-middle">
                        <a className="block" href="#rating">
                          Đánh giá
                        </a>
                      </li>
                      <li className="inline-block py-4 px-4 align-middle">
                        <a className="block" href="#qa">
                          Hỏi đáp
                        </a>
                      </li>
                      <li className="inline-block py-4 px-8 align-middle">
                        <a className="block" href="#register">
                          Cách đăng ký
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12" id="about">
                    <h2 className="mb-3 text-[34px] font-black leading-[1] leading-[1.2]">
                      Tổng quan về khoá học
                    </h2>
                    <p>
                      Mauris ut dapibus lacus, sodales tempus ante. Donec
                      faucibus sem vestibulum. gravida quam at, ultricies
                      tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Sed accumsan erat quam,
                      ac iaculis neque tempus non. Cras mattis auctor gravida.
                      Donec rutrum lobortis est, et faucibus arcu sagittis eu.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      Mauris ut dapibus lacus, sodales tempus ante. Donec
                      faucibus sem vestibulum. gravida quam at, ultricies
                      tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Sed accumsan erat quam,
                      ac iaculis neque tempus non. Cras mattis auctor gravida.
                      Donec rutrum lobortis est, et faucibus arcu sagittis eu.
                    </p>
                  </div>
                  <div className="mt-12">
                    <h4 className="text-[22px] font-black">
                      Kỹ năng bạn có được
                    </h4>
                    <ul className="mt-2">
                      <li className="mr-2 mb-2 inline-block rounded-full bg-purple px-4 py-2 font-bold text-white">
                        Logistic regressive for classification
                      </li>
                      <li className="mr-2 mb-2 inline-block rounded-full bg-purple px-4 py-2 font-bold text-white">
                        Linear regression
                      </li>
                      <li className="mr-2 mb-2 inline-block rounded-full bg-purple px-4 py-2 font-bold text-white">
                        Supervised learning
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8 rounded-2xl bg-[#FFEFDB] bg-opacity-75">
                    <LogoList
                      title="Tổ chức và đối tác tham gia vào khoá học"
                      list={logoslist}
                    />
                  </div>
                  <div className="mt-12">
                    <h4 className="text-[22px] font-black">
                      Yêu cầu về khoá học
                    </h4>
                    <p>
                      Mauris ut dapibus lacus, sodales tempus ante. Donec
                      faucibus sem vestibulum. gravida quam at, ultricies
                      tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Sed accumsan erat quam,
                      ac iaculis neque tempus non. Cras mattis auctor gravida.
                      Donec rutrum lobortis est, et faucibus arcu sagittis eu.
                    </p>
                  </div>
                  <div className="mt-12">
                    <h4 className="text-[22px] font-black">Bạn sẽ học được</h4>
                    <p>Cách thu thập, hệ thống hoá và phân tích thông tin</p>
                  </div>
                  <div className="mt-12">
                    <h4 className="text-[22px] font-black">
                      Ai phù hợp với khoá học này?
                    </h4>
                    <ul className="list-inside list-disc">
                      <li className="text-gray-default marker:m-0">
                        <span className="text-black">
                          Mauris ut dapibus lacus, sodales tempus ante. Donec
                          sem vestibulum. Gravida quam at, ultricies tellus.
                        </span>
                      </li>
                      <li className="text-gray-default marker:m-0">
                        <span className="text-black">
                          Mauris ut dapibus lacus, sodales tempus ante.
                        </span>{" "}
                      </li>
                      <li className="text-gray-default marker:m-0">
                        <span className="text-black">
                          Donec faucibus sem vestibulum. Gravida quam at,
                          ultricies tellus.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12">
                    <h4 className="text-[22px] font-black">Các lưu ý khác</h4>
                    <p>
                      Mauris ut dapibus lacus, sodales tempus ante. Donec
                      faucibus sem vestibulum. gravida quam at, ultricies
                      tellus. Etiam ac bibendum quam.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      adipiscing elit. Sed accumsan erat quam, ac iaculis neque
                      tempus non. Cras mattis auctor gravida. Donec rutrum
                      lobortis est, et faucibus arcu sagittis eu.
                    </p>
                  </div>
                </div>
                <aside className="hidden w-full md:block md:w-2/5 lg:w-[336px]">
                  <div className="divide-y rounded-2xl border-2 border-gray-100/50 p-8 px-6 shadow-xl">
                    <div className="pb-8">
                      <SectionSubHeading>
                        Chương trình Thành công trong học tập
                      </SectionSubHeading>
                      <h3 className="mt-2 text-[24px] font-black leading-8">
                        Khoá học nghiên cứu và phân tích
                      </h3>
                      <p className="mt-2 text-[14px] font-bold leading-4">
                        “Khởi đầu vững chắc, tương lai khởi sắc”
                      </p>
                    </div>
                    <div className="flex flex-col items-baseline justify-between pt-4">
                      <p className="flex w-full flex-row items-center justify-between text-[14px] font-bold">
                        <span className="h-full">Học phí </span>
                        <span className="text-[32px]">
                          <span className="text-[14px]">USD$</span>289
                          <sup className="text-[18px]">99</sup>
                        </span>
                      </p>
                      <p className="mt-4 min-w-[296px]">
                        <button
                          onClick={createModal}
                          className="btn-primary block w-full "
                        >
                          Đăng Ký Học Ngay
                        </button>
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
              <div
                className="mt-12 mb-12 w-full md:w-3/5 lg:w-[688px]"
                id="rating"
              >
                <div>
                  <h2 className="mb-3 text-[34px] font-black leading-[1] leading-[1.2]">
                    Chia sẻ từ học viên Mind Connector
                  </h2>
                  <p>
                    645 học viên đã tham gia khoá học{" "}
                    <b>Ngiên Cứu và Phân Tích</b>. Cùng lắng nghe những chia sẻ
                    từ họ nhé!
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <Link href="/">Xem tất cả chia sẻ</Link>
                  </p>
                </div>
                <div id="qa">
                  <QandAProgram questions={questions} />
                </div>
                <div id="register">
                  <h2 className="text-[34px] font-black">Đăng ký khoá học</h2>
                  <p>Đăng ký ngay để phát triển kỹ năng của bạn. </p>
                  <div className="mt-8 mb-4 overflow-hidden rounded-3xl bg-[#941C50] text-white">
                    <header className="bg-[#B22F66] py-4 px-6">
                      <h3 className="text-[24px] font-black">
                        Đăng ký khoá lẻ
                      </h3>
                    </header>
                    <div className="flex flex-col items-center justify-between p-6 sm:flex-row">
                      <p className="text-[14px] font-bold">
                        <span>Học phí USD$</span>{" "}
                        <span className="text-[32px]">
                          89<sup className="text-[18px]">99</sup>
                        </span>
                      </p>
                      <p className="flex items-center sm:basis-[300px]">
                        <button
                          onClick={createModal}
                          className="btn-primary block w-full min-w-[296px]"
                        >
                          Đăng ký học ngay!
                        </button>
                      </p>
                    </div>
                  </div>
                  <p className="text-center sm:text-left">Hoặc</p>
                  <div className="mt-4 overflow-hidden rounded-3xl bg-[#D34C2A] text-white">
                    <header className="bg-[#FE8C57] py-4 px-6">
                      <h3 className="text-[24px] font-black">
                        Đăng ký toàn bộ chương trình, nhận ngay ưu đãi
                      </h3>
                      <p className="mt-2 font-medium">
                        Bạn có thể đăng ký cả chương trình Thành Công Trong học
                        Tập để nhận giá ưu đãi vô cùng hấp dẫn.{" "}
                      </p>
                    </header>
                    <div className="flex flex-col items-center justify-between p-6 sm:flex-row">
                      <p className="text-[14px] font-bold">
                        <span>Học phí USD$</span>{" "}
                        <span className="text-[32px]">
                          289<sup className="text-[18px]">99</sup>
                        </span>
                      </p>
                      <p className="sm:basis-[300px]">
                        <button
                          onClick={createModal}
                          className="btn-invert block w-full min-w-[296px]"
                        >
                          {/* Đừng Bỏ Lỡ, Đăng Ký Học Ngay! */}
                          Khám Phá Tất Cả Các Khoá Học
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </>
    </>
  );
};

export async function getStaticProps() {
  /** TODO: get real QaA from backend */
  const questions = [
    {
      question: "Làm thế nào để tôi có thể trở thành sinh viên ưu tú?",
      answer:
        "Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.",
    },
    {
      question: "Tôi cần chuẩn bị hành trang gì cho một kỳ thực tập hoàn hảo?",
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
        "Doanh nghiệp tôi muốn đào tạo một đội ngũ nhân viên chất lượng, Mind Connector có chương trình nào phù hợp hay không?",
      answer:
        "Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.",
    },
  ];

  const logoslist = ["1", "2", "3", "4"];
  const programInfo = {
    title: "Khoá học nghiên cứu và phân tích",
    price: "89.99",
  };
  return {
    props: {
      questions,
      logoslist,
      programInfo,
    },
  };
}

export default Course;
