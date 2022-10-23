import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/future/image";

import Container from "../../components/Container";
import Seo from "../../components/SEO";
import QandA from "../../components/QandA";
import CoursesCardList from "../../components/common/courses/CoursesCardList";
import Testimonial from "../../components/Testimonial";
import TabPanels from "../../components/TabPanels";
import { programs } from "../../data/global";
import CourseTeachers from "../../components/common/teachers/CourseTeachers";

import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "../../components/common/modal/GlobalModal";

const seo = {
  metaTitle: "Vững vàng lập nghiệp",
  metaDescription: "Mind Connector",
  // shareImage: article.attributes.image,
  // article: true,
};

const mentors = [
  {
    entitled: "Bà",
    name: "Mandy Nguyễn",
    title: "Chuyên gia <br/>Sales - Marketing",
    image: "/img/mentors/mandy-nguyen.png",
  },
  {
    entitled: "Ông",
    name: "Tony Bảo Trần",
    title: "Chuyên Viên của META & MBA <br/>YALE Management School",
    image: "/img/mentors/tony-bao-tran.png",
  },
  {
    entitled: "Bà",
    name: "Nina Trần",
    title: "Chuyên gia <br/>Tư vấn Thương hiệu",
    image: "/img/mentors/nina-tran.png",
  },
  {
    entitled: "Bà",
    name: "Đào Minh Huyền",
    title: "Cố vấn Khởi nghiệp",
    image: "/img/mentors/dao-minh-huyen.png",
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
      <main className="overflow-hidden">
        <div className="relative bg-[#F7F3F4] py-[3em] text-center md:py-[4em] md:pb-[0]">
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
              <h4 className="font-bold text-gray">Chương trình</h4>
              <h1 className="leading-0 text-3xl font-black uppercase md:text-6xl">
                VỮNG VÀNG LẬP NGHIỆP
              </h1>
              <p className="mt-4">
                &quot;Kỹ năng thiết thực, dẫn lối thành công&quot;
              </p>
              <CourseTeachers teachers={mentors} />
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
                        Phát triển sự nghiệp bền vững
                      </h3>
                      <p className="pr-4 leading-5">
                        Giúp các bạn sinh viên mới ra trường hay người mới bắt
                        đầu đi làm sẵn sàng về mặt tư duy, kỹ năng, ý thức và
                        thái độ để tự định hình sự nghiệp của mình trong ngắn
                        hạn và dài hạn.
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
                        30 ngày học linh hoạt
                      </h3>
                      <p className="pr-4 leading-5">
                        Chương trình được thiết kế để bạn học trong vòng 30
                        ngày. Bạn có thể rút ngắn hoặc kéo dài tùy theo thời
                        gian của mình.
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
                        Cơ hội tuyển dụng
                      </h3>
                      <p className="pr-4 leading-5">
                        Các học viên sẽ có cơ hội được giới thiệu vào các công
                        ty, tập đoàn lớn sau khi hoàn thành khoá học.
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
                  <div className="overflow-hidden">
                    <Image
                      src="/img/info-program-vung-vang.png"
                      width={704}
                      height={400}
                      alt=""
                    />
                  </div>
                  <div className="inline-flex flex-col items-start bg-purple p-8 md:min-w-[340px] md:rounded-tr-[20px] md:rounded-br-[20px] lg:justify-center">
                    <h2 className="text-[28px] font-black md:text-[34px]">
                      Về chương trình
                    </h2>
                    <p className="mt-4 max-w-[300px] md:max-w-none">
                      <a
                        href="/docs/[Mind Connector] Vững Vàng Lập Nghiệp.pdf"
                        download
                        className="btn-primary block max-w-[300px] md:inline-block md:w-auto"
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
                  Chia sẻ từ học viên <br />
                  Mind Connector
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
              <div className="flex min-w-[296px] flex-col items-center justify-center gap-2 p-6 md:w-2/5">
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
      </main>
    </>
  );
};

export async function getStaticProps() {
  /** TODO: get real QaA from backend */
  const questions = [
    {
      Question: `Chương trình Vững Vàng Lập Nghiệp dành cho ai?`,
      Answer: `Các bạn sinh viên đại học, cao đẳng từ năm nhất đến năm cuối; các bạn mới đi làm hoặc các doanh nghiệp có nhu cầu đào tạo thế hệ mới đều có thể tham gia chương trình Vững Vàng Lập Nghiệp.`,
    },
    {
      Question: `Khoá học Vững Vàng Lập Nghiệp của Mind Connector có các điểm khác biệt như thế nào?`,
      Answer: `Khoá học giúp các bạn định hình tư duy và kiến thức dựa trên những nguyên lý cốt lõi, thay vì đóng khung vào một số ngành nghề nhất định. Từ đó, dù thị trường lao động có thay đổi thế nào, từng cá nhân vẫn vững bước và thích nghi, dựa trên những nguyên lý sẵn có. Các bạn sẽ hiểu thêm về những yêu cầu mà các doanh nghiệp đang đề ra trong việc tuyển chọn tài năng trẻ vào làm việc tại công ty.`,
    },
    {
      Question: `Sau chương trình, học viên sẽ nhận được gì?`,
      Answer: `Sau chương trình, bạn sẽ có cơ hội được giới thiệu vào các doanh nghiệp; làm chủ sự nghiệp của mình; đóng góp vào sự phát triển doanh nghiệp; điều chỉnh thái độ tác phong phù hợp với nơi làm việc; xây dựng network và nhân hiệu của mình, tạo đà thành công chắc chắn tại doanh nghiệp.`,
    },
  ];
  const courses = programs.trungCap;
  const testimonial = {
    headline: `Chương trình này là một cơ hội giúp em kịp thời thay đổi suy nghĩ, tự tin trình bày, trao đổi với nhà tuyển dụng.`,
    body: `Thiếu kinh nghiệm và khả năng trình bày chưa có sức thuyết phục là vấn đề mà em cũng như nhiều bạn sinh viên khác gặp phải khi tìm kiếm công việc đầu tiên sau tốt nghiệp. Điều này cũng khiến em dễ bị tự ti khi phỏng vấn. Có thể nói rằng chương trình này là một cơ hội giúp em kịp thời thay đổi suy nghĩ, tự tin trình bày, trao đổi với nhà tuyển dụng. Ngoài ra, các anh chị giảng viên còn hướng dẫn em phương pháp quản lý và tư duy để công việc đạt được hiệu quả.`,
    peep: {
      name: `Hạ My`,
      title: `Sinh viên năm cuối trường Đại học Ngoại Thương`,
      image: `/img/testimonial-vung-vang-lap-nghiep.png`,
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
