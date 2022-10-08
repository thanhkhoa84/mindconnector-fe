import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/future/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from "../../components/Container";
import Seo from "../../components/SEO";
import QandA from "../../components/QandA";
import CoursesCardList from "../../components/common/courses/CoursesCardList";
import Testimonial from "../../components/Testimonial";
import TabPanels from "../../components/TabPanels";
import { programs } from "../../data/global";

import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "../../components/common/modal/GlobalModal";

const seo = {
  metaTitle: "Mind Connector",
  metaDescription: "Mind Connector",
  // shareImage: article.attributes.image,
  // article: true,
};

const mentors = [
  {
    name: "Bà Nguyễn Thị Thanh Trúc",
    title: "Cố Vấn Đào Tạo",
    image: "/img/mentors/mandy-nguyen.png",
  },
  {
    name: "Ông Tony Bảo Trần",
    title: "Chuyên Viên của META & MBA <br/>YALE Management School",
    image: "/img/mentors/tony-bao-tran.png",
  },
  {
    name: "Bà Nina Trần Lê",
    title: "Thiết kế chương trình <br/>và vận hành",
    image: "/img/mentors/nina-tran.png",
  },
  {
    name: "Nguyễn Phan Ngọc Hiếu",
    title: "Chuyên viên <br/>phát triển thị trường",
    image: "/img/mentors/hieu-nguyen.png",
  },
];

const Decoration = dynamic(() => import("../../components/Decoration"), {
  ssr: false,
});

const ProgramPost = ({ questions, courses, testimonial }) => {
  const { showModal } = useGlobalModalContext();
  const createModal = () => {
    showModal(MODAL_TYPES.REGISTER_MODAL, {
      title: "Điền thông tin liên lạc, Mind Connector sẽ liên hệ bạn sau",
      program: "VỮNG VÀNG LẬP NGHIỆP",
      course: "",
      confirmBtn: "Save",
    });
  };
  const opts = {
    height: "auto",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
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
        <div className="bg-[#f9f5e9] bg-[url(/img/bg-head-section.png)] bg-cover py-[3em] text-center md:py-[4em] md:pb-[0]">
          <Container>
            <h4 className="font-bold text-gray">Chương trình</h4>
            <h1 className="leading-0 text-3xl font-black uppercase md:text-6xl">
              VỮNG VÀNG LẬP NGHIỆP
            </h1>
            <p className="mt-4">
              &quot;Kỹ năng thiết thực, dẫn lối thành công&quot;
            </p>
            <div className="mt-8 grid grid-cols-2 gap-8 md:flex md:justify-center">
              {mentors.map((m, index) => {
                const { name, title, image } = m;
                return (
                  <div className="" key={index}>
                    <div className="inline-block w-[90px] overflow-hidden rounded-full md:w-[100px]">
                      <Image
                        src={image}
                        alt="Avatar"
                        width={200}
                        height={200}
                        className="w-full object-cover transition-all hover:scale-[1.]"
                      />
                    </div>
                    <p className="mt-1 text-xs font-black text-purple md:text-base">
                      {name}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{ __html: title }}
                      className="mx-auto text-xs"
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-8 flex flex-col rounded-xl text-left md:relative md:top-[35px] md:mt-0 md:h-[70px] md:flex-row md:justify-between md:bg-white md:shadow-lg">
              <div className=" flex flex-row flex-nowrap items-start justify-start gap-4 rounded-2xl border-2 border-solid border-[#d2d2d2] border-white bg-[#FFF2EB] bg-opacity-75 py-[1em] px-6 xs:flex-row sm:flex-row sm:gap-8 md:items-center md:bg-transparent">
                <div className="text-black">
                  <p className="text-[20px] font-bold">
                    4.9{" "}
                    <span className="mt-0 inline-block text-[12px]">
                      <Image
                        src="/img/star-rating-fill.svg"
                        alt=""
                        width={15}
                        height={15}
                      />
                    </span>
                  </p>
                  <p className="text-[14px]">1988 Đánh giá</p>
                </div>
                <div className="text-black">
                  <p className="text-[20px] font-bold">200</p>
                  <p className="text-[14px]">Học viên</p>
                </div>
                <div className="text-black">
                  <p className="text-[20px] font-bold">41</p>
                  <p className="text-[14px]">Giờ học</p>
                </div>
              </div>
              <div className="mt-6 flex flex-row flex-wrap items-center justify-between md:mt-0 md:gap-5 md:px-6">
                {/* <p>
                  Học phí <span className="text-[14px] font-bold">USD$</span>{" "}
                  <span className="text-[32px] font-bold">84</span>
                  <sup className="text-[18px] font-bold">99</sup>
                </p> */}
                <p>
                  <button onClick={createModal} className="btn-primary">
                    Đăng ký học ngay
                  </button>
                </p>
              </div>
            </div>
          </Container>
        </div>

        <div className="">
          <Container>
            <div className="md:pt-[4em]">
              <div className="flex flex-col justify-between md:flex-row">
                <div className="w-full">
                  <div className="flex flex-col justify-evenly pt-16 md:flex-row">
                    <div className="relative flex-shrink flex-grow basis-full border-l border-[#F5CBCC] pl-8 pb-12 md:border-l-0 md:border-t md:pl-0 md:pt-12 md:pr-6">
                      <Image
                        src="/img/icon-steps.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="absolute top-[-5px] left-[-12px] w-[24px] md:top-[-12px] md:left-[-5px]"
                      />
                      <h4 className="mb-4 inline-block rounded-lg bg-purple p-3 py-1 text-sm font-bold text-white">
                        Mục tiêu
                      </h4>
                      <h3 className="mb-4 text-xl font-black leading-none md:text-2xl md:leading-none">
                        Xây dựng nền tảng vững chắc
                      </h3>
                      <p className="pr-8 leading-5">
                        Chương trình học này sẽ giúp bạn có một khởi đầu vững
                        vàng trong hành trình chạm đến thành công.
                      </p>
                    </div>
                    <div className="relative flex-shrink flex-grow basis-full border-l border-[#F5CBCC] pl-8 pb-12 md:border-l-0 md:border-t md:pl-0 md:pt-12 md:pr-6">
                      <Image
                        src="/img/icon-steps.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="absolute top-[-5px] left-[-12px] w-[24px] md:top-[-12px] md:left-[-5px]"
                      />
                      <h4 className="mb-4 inline-block rounded-lg bg-purple p-3 py-1 text-sm font-bold text-white">
                        Cấu trúc
                      </h4>
                      <h3 className="mb-4 text-xl font-black leading-none md:text-2xl md:leading-none">
                        Kinh doanh thuận lợi
                      </h3>
                      <p className="pr-8 leading-5">
                        Vững vàng kiến thức và kỹ năng để khởi sự kinh doanh
                        thuận lợi.
                      </p>
                    </div>
                    <div className="relative flex-shrink flex-grow basis-full pl-8 pb-12 md:pl-0 md:pt-12 md:pr-6">
                      <Image
                        src="/img/icon-steps.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="absolute top-[-5px] left-[-12px] w-[24px] md:top-[-12px] md:left-[-5px]"
                      />
                      <h4 className="mb-4 inline-block rounded-lg bg-purple p-3 py-1 text-sm font-bold text-white">
                        Kết quả
                      </h4>
                      <h3 className="mb-4 text-xl font-black leading-none md:text-2xl md:leading-none">
                        Cơ hội thực hiện dự án
                      </h3>
                      <p className="pr-8 leading-5">
                        Các học viên sẽ trình bày dự án với Ban Chuyên Môn và có
                        cơ hội nhận được phần tài trợ tương đương 200,000,000
                        VNĐ. Ngoài ra, học viên còn có cơ hội nhận thêm tài trợ
                        từ các nhà đầu tư khác.
                      </p>
                    </div>
                  </div>
                  <div className="mx-[-1em] flex items-center px-[1em] shadow-asideboxLight md:mx-0 md:h-[60px] md:rounded-xl">
                    <TabPanels />
                  </div>
                </div>
              </div>

              <div className="mt-12 py-12" id="about">
                <div className="flex flex-col overflow-hidden rounded-[20px] text-white md:flex-row">
                  <div className="">
                    <Image
                      src="/img/info-program-vung-vang.png"
                      width={704}
                      height={400}
                      alt=""
                    />
                  </div>
                  <div className="flex inline-flex flex-col items-start bg-purple p-8 md:items-start lg:justify-center">
                    <h2 className="mb-3 text-[34px] font-black">
                      Về chương trình
                    </h2>
                    <p>
                      Tải ngay tài liệu để biết thêm tất tần tật những thông tin
                      về khoá học.
                    </p>
                    <p className="mt-4 max-w-[300px] md:max-w-none">
                      <a
                        href="/docs/[Mind Connector] Vững Vàng Lập Nghiệp.pdf"
                        download
                        className="btn-primary w-[300px] md:w-auto"
                      >
                        Tải thông tin
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12" id="schedule">
                <h2 className="mb-3 text-center text-[34px] font-black md:text-left">
                  Lịch học
                </h2>
                <div className="flex flex-col md:flex-row">
                  <div className="flex-[3] items-center justify-center text-center md:pr-12 md:text-left">
                    <p>
                      <b>Chiêu sinh:</b> Tháng 10/2022
                    </p>
                    <p>
                      <b>Chi tiết khóa học:</b> <br />
                      Học phần 1 & 2: 12 buổi <br />
                      Học phần 3: 2 - 4 buổi
                    </p>
                    <Image
                      src="/img/icon-schedule.png"
                      width={488}
                      height={328}
                      alt=""
                      className="mx-auto mt-12 block"
                    />
                  </div>
                  <div className="flex-[5]">
                    <div>
                      <p className="font-bold">Lịch học tháng 11</p>
                      <Image
                        src="/img/schedule-nov.png"
                        width={512}
                        height={175}
                        alt=""
                        className="mt-4 w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="relative mt-[4em]">
          <Decoration />
          <Container>
            <h2 className="text-center text-[22px] font-black leading-none md:text-[34px] lg:block">
              Phát triển mọi kỹ năng với cấu trúc chương trình học chặt chẽ
            </h2>
          </Container>
          <div className="course-card relative mt-8 block py-8">
            <CoursesCardList courses={courses} />
          </div>
        </div>

        <div className="relative mt-12 bg-[#FFEFDB] py-14" id="testimonial">
          <Container>
            <div className="flex flex-col">
              <div className="flex-shrink text-center">
                <h2 className="mb-3 text-center text-[34px] font-black">
                  Chia sẻ từ học viên Mind Connector
                </h2>
                <p>
                  Hơn 6688 học viên đang học tại Mind Connector. Lắng nghe những
                  chia sẻ từ họ nhé.
                </p>
              </div>
              <div className="align-center mt-12 flex flex-col">
                <div className="flex-shrink flex-grow self-center pb-14 ">
                  <Testimonial data={testimonial} />
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div id="qa">
          <Container>
            <QandA questions={questions} />
          </Container>
        </div>

        <div id="register" className="pb-12">
          <Container>
            <div className="mt-8 mb-4 flex flex-col overflow-hidden rounded-3xl bg-[#941C50] text-white md:flex-row md:p-0">
              <header className="bg-[#B22F66] p-6 md:p-8">
                <h3 className="text-[30px] font-black leading-none md:text-[34px] md:leading-none">
                  Đăng ký toàn bộ chương trình,{" "}
                  <br className="hidden lg:inline" />
                  nhận ngay ưu đãi
                </h3>
                <p className="mt-4">
                  Nhập thông tin để nhận ưu đãi khi đăng ký toàn bộ chương trình
                  và có cơ hội trải nghiệm miễn phí các chương trình khác của
                  Mind Connector.
                </p>
              </header>
              <div className="flex flex-col items-center justify-center gap-2 p-6 md:w-2/5">
                {/* <p className="text-[14px] font-bold">
                  <span>Học phí USD$</span>{" "}
                  <span className="text-[32px]">
                    89<sup className="text-[18px]">99</sup>
                  </span>
                </p> */}
                <p className="flex items-center">
                  <button
                    onClick={createModal}
                    className="btn-primary block w-full overflow-hidden text-[13px] sm:text-[16px] lg:min-w-[296px]"
                  >
                    Đừng bỏ lỡ, đăng ký ngay!
                  </button>
                </p>
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
      question: `Chương trình Vững Vàng Lập Nghiệp dành cho ai?`,
      answer: `Các bạn sinh viên đại học, cao đẳng từ năm nhất đến năm cuối; các bạn mới đi làm hoặc các doanh nghiệp có nhu cầu đào tạo thế hệ mới đều có thể tham gia chương trình Vững Vàng Lập Nghiệp.`,
    },
    {
      question: `Khoá học Vững Vàng Lập Nghiệp của Mind Connector có các điểm khác biệt như thế nào?`,
      answer: `Khoá học giúp các bạn định hình tư duy và kiến thức dựa trên những nguyên lý cốt lõi, thay vì đóng khung vào một số ngành nghề nhất định. Từ đó, dù thị trường lao động có thay đổi thế nào, từng cá nhân vẫn vững bước và thích nghi, dựa trên những nguyên lý sẵn có. Các bạn sẽ hiểu thêm về những yêu cầu mà các doanh nghiệp đang đề ra trong việc tuyển chọn tài năng trẻ vào làm việc tại công ty.`,
    },
    {
      question: `Sau chương trình, học viên sẽ nhận được gì?`,
      answer: `Sau chương trình, bạn sẽ có cơ hội được giới thiệu vào các doanh nghiệp; làm chủ sự nghiệp của mình; đóng góp vào sự phát triển doanh nghiệp; điều chỉnh thái độ tác phong phù hợp với nơi làm việc; xây dựng network và nhân hiệu của mình, tạo đà thành công chắc chắn tại doanh nghiệp.`,
    },
  ];
  const courses = programs.trungCap;
  const testimonial = {
    headline: `Chương trình này là một cơ hội giúp em kịp thời thay đổi suy nghĩ, tự tin trình bày, trao đổi với nhà tuyển dụng.`,
    body: `Thiếu kinh nghiệm và khả năng trình bày chưa có sức thuyết phục là vấn đề mà em cũng như nhiều bạn sinh viên khác gặp phải khi tìm kiếm công việc đầu tiên sau tốt nghiệp. Điều này cũng khiến em dễ bị tự ti khi phỏng vấn. Có thể nói rằng chương trình này là một cơ hội giúp em kịp thời thay đổi suy nghĩ, tự tin trình bày, trao đổi với nhà tuyển dụng. Ngoài ra, các anh chị giảng viên còn hướng dẫn em phương pháp quản lý và tư duy để công việc đạt được hiệu quả.`,
    peep: {
      name: `Hạ My`,
      title: `Học viên tham gia Chương trình`,
      image: `/img/Testimonial - Vững Vàng Lập Nghiệp.png`,
    },
  };
  return {
    props: {
      questions,
      courses,
      testimonial,
    },
  };
}

export default ProgramPost;
