import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/future/image";
import YouTube from "react-youtube";

import Container from "../../components/Container";
import Seo from "../../components/SEO";
import QandA from "../../components/QandA";
import ProgramCourseCard from "../../components/common/courses/ProgramCourseCard";
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
    image: "/img//mentors/mandy-nguyen.png",
  },
  {
    name: "Bà Đào Minh Huyền",
    title: "StartUp Advisor - Cố vấn Khởi nghiệp và Đầu tư",
    image: "/img//mentors/dao-minh-huyen.png",
  },
  {
    name: "Bà Nina Trần Lê",
    title: "Thiết kế chương trình và vận hành",
    image: "/img/mentors/nina-tran.png",
  },
  {
    name: "Ông Nguyễn Mạnh Cường",
    title: "Chuyên viên chiến lược và sáng tạo",
    image: "/img//mentors/nguyen-manh-cuong.png",
  },
];

const Decoration = dynamic(() => import("../../components/Decoration"), {
  ssr: false,
});

const tabs = [
  {
    title: "Về chương trình",
    href: "#about",
  },
  {
    title: "Lịch học",
    href: "#schedule",
  },
  {
    title: "Đánh giá",
    href: "#rating",
  },
  {
    title: "Hỏi đáp",
    href: "#qa",
  },
  {
    title: "Cách đăng ký",
    href: "#register",
  },
];

const Tab = ({ tab, index, active, onClick }) => {
  return (
    <li
      className={`
      ${active ? "font-bold text-black" : "text-[#9A9A9A]"}
      inline-block py-0 px-4 pl-0 align-middle hover:font-bold hover:text-black md:pl-6
      `}
      key={index}
      onClick={() => onClick(index)}
    >
      <a href={tab.href} className="block" type="button">
        {tab.title}
      </a>
    </li>
  );
};

const TabPanels = () => {
  const [current, setCurrent] = useState(0);
  let clickHandler = (index) => {
    setCurrent(index);
  };

  return (
    <ul className="block flex w-full overflow-x-auto overflow-y-hidden whitespace-nowrap py-6 pr-4 md:justify-evenly">
      {tabs.map((tab, index) => {
        return (
          <Tab
            onClick={() => {
              clickHandler(index);
            }}
            key={tab.title}
            tab={tab}
            index={index}
            active={current == index}
          />
        );
      })}
    </ul>
  );
};

const ProgramPost = ({ questions, courses }) => {
  const { showModal } = useGlobalModalContext();
  const createModal = () => {
    showModal(MODAL_TYPES.REGISTER_MODAL, {
      title: "Điền thông tin liên lạc, Mind Connector sẽ liên hệ bạn sau",
      program: "Sẵn sàng khởi nghiệp kinh doanh",
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
            <h1 className="leading-0 text-3xl font-black normal-case md:text-6xl">
              Sẵn sàng khởi nghiệp kinh doanh
            </h1>
            <p className="mt-4">
              ““Khởi nghiệp thuận lợi, chạm đỉnh vinh quang””
            </p>
            <div className="mt-8 flex flex-row flex-wrap justify-around gap-4 md:justify-center md:gap-6">
              {mentors.map((m, index) => {
                const { name, title, image } = m;
                return (
                  <div className="w-[48%] md:w-auto">
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
                    <p className="mx-auto max-w-[80%] text-xs">{title}</p>
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
                  <p className="text-[20px] font-bold">2000</p>
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
                        30 ngày học linh hoạt
                      </h3>
                      <p className="pr-8 leading-5">
                        Chương trình được thiết kế để bạn học trong vòng 30
                        ngày. Bạn có thể rút ngắn hoặc kéo dài tuỳ theo thời
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
                        Chứng nhận
                      </h4>
                      <h3 className="mb-4 text-xl font-black leading-none md:text-2xl md:leading-none">
                        Chứng nhận hoàn thành chương trình
                      </h3>
                      <p className="pr-8 leading-5">
                        Bạn sẽ nhận chứng nhận sau khi hoàn thành chương trình
                        học.
                      </p>
                    </div>
                  </div>
                  <div className="mx-[-1em] flex items-center px-[1em] shadow-asideboxLight md:mx-0 md:h-[60px] md:rounded-xl">
                    <TabPanels />
                  </div>
                </div>
              </div>

              <div className="mt-12" id="about">
                <div className="aspect-w-16 aspect-h-9 relative -mx-[1em] mt-[3em] overflow-hidden bg-gray md:mx-0 md:rounded-3xl [&>div>iframe]:h-full [&>div>iframe]:w-full">
                  {/* <YouTube videoId="8dJyRm2jJ-U" opts={opts} onReady={_onReady}/> */}
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="relative mt-[4em]">
          <Decoration />
          <Container>
            <h2 className="hidden text-center text-[22px] font-black leading-none lg:block">
              Phát triển mọi kỹ năng với cấu trúc chương trình học chặt chẽ
            </h2>
            <ul className="mt-8 overflow-hidden md:text-center">
              {courses.map((course, index) => {
                return (
                  <li
                    key={index}
                    className={`
                      relative my-0 mx-auto w-[300px] overflow-hidden md:mx-[1%] md:inline-block
                      md:w-[18%] md:w-[190px] md:text-center md:align-top
                      ${index % 2 ? "text-right md:mt-8" : "md:mt-8"}
                      ${index == 0 ? "" : "mt-[2em] md:mt-0"}
                    `}
                  >
                    <div
                      className={`
                        md:inline-block md:align-top
                        ${index % 2 ? "text-right md:mt-[4em]" : ""}
                      `}
                    >
                      <div
                        className={`
                          absolute top-1/2
                          -translate-y-1/2 after:absolute after:right-0 after:top-[50%] after:h-[24px] after:w-[24px] after:-translate-y-[8px] after:animate-pulse after:bg-[url(/img/indicator.png)]  after:content-[''] md:static md:translate-y-0 after:md:top-full after:md:left-1/2 after:md:-translate-y-[22px] after:md:-translate-x-[10px]
                          ${
                            index % 2
                              ? "left-0 after:-right-[12px]"
                              : "right-0 after:-left-[12px]"
                          }
                        `}
                      >
                        <div className="flex flex-col items-center justify-center">
                          <p className="relative z-10 inline-block rounded-xl bg-purple px-4 py-2 text-sm font-bold leading-none text-white">
                            Khoá
                          </p>
                          <p
                            className={`
                              relative -top-[10px] inline-flex h-[78px] w-[78px] items-center justify-center rounded-xl bg-[#FDF2F2] text-[54px] font-black text-[#F5B0C5] shadow-lg
                            `}
                          >
                            {index + 1}
                          </p>
                        </div>
                        <div
                          className={`
                            absolute top-1/2 w-[100vw] translate-y-[3px] border-t-2 border-dotted md:top-full md:left-1/2 md:h-[200px] md:w-0 md:w-[1px] md:border-t-0 md:border-r-2
                            ${index % 2 ? "left-full" : "right-full"}
                          `}
                        ></div>
                      </div>
                      <div className="inline-block md:pt-[4em]">
                        <ProgramCourseCard course={course} />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Container>
        </div>

        <div className="mt-12 bg-[#FFEFDB] py-14" id="rating">
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
                  <blockquote
                    className={`relative rounded-2xl bg-white/70 p-6 py-8 italic shadow-asideboxLight 
                      before:absolute before:-top-[0.3em] before:left-4 before:text-[60px] before:font-black before:leading-none  before:text-purple before:content-['"'] 
                      after:absolute after:-bottom-[0.7em] after:right-[0.5em] after:text-[60px] after:font-black after:leading-none after:text-purple after:content-['"']`}
                  >
                    <p>
                      Tôi có một khoảng thời gian được trải nghiệm thật sự cảm
                      giác lăn xả vào dự án khi tham gia khóa đào tạo này. Trước
                      đây tôi cũng biết được rằng khởi nghiệp không hề đơn giản,
                      từ lúc ấp ủ ý tưởng đến lúc quyết tâm thực thi tôi rất lo
                      lắng vì bản thân còn loay hoay, nhiều vấn đề chưa sáng tỏ.
                      Khi tôi lên kế hoạch được 80% thì gặp được chương trình
                      này. Phải nói rằng những thông tin trong khóa học rất
                      thiết thực, các giảng viên là những người đã làm start up,
                      đang thành công theo mô hình tự thân, tôi thấy vô cùng phù
                      hợp với hoàn cảnh hiện tại của mình. Ban đầu tôi hơi lấn
                      cấn về chi phí khóa học, tuy nhiên khi vào học thì không
                      phải chỉ được học và tôi được các chuyên gia tư vấn thực
                      sự trên kế hoạch kinh doanh của chính tôi. Học xong, tôi
                      thấy tự tin hơn và biết rõ mình muốn gì hơn trong tương
                      lai.
                    </p>
                    <div className="mt-4 flex flex-row items-center gap-6">
                      <Image
                        src="/img/testimonial.png"
                        width={60}
                        height={60}
                        alt=""
                        className="block"
                      />
                      <div className="">
                        <h3 className="font-black text-purple">
                          Chị Phạm Thị Hải An
                        </h3>
                        <div className="text-xs text-[#6C6C6C] lg:text-sm">
                          <p>Học viên Chương trình nâng cao </p>
                          <p className="font-black">
                            “Thành công trong khởi sự kinh doanh”
                          </p>
                        </div>
                      </div>
                    </div>
                  </blockquote>
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
              <header className="bg-[#B22F66] p-8">
                <h3 className="text-[30px] font-black leading-none md:text-[34px] md:leading-none">
                  Đăng ký toàn bộ chương trình, nhận ngay ưu đãi
                </h3>
                <p className="mt-4">
                  Nhập email để thử trải nghiệm miễn phí các khoá học của Mind
                  Connector.
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
                    Đừng bỏ lỡ, đăng ký học ngay!
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
      question:
        "Tôi đang có một số vốn để khởi nghiệp, tôi không biết nên lựa chọn sản phẩm nào để kinh doanh. Vậy tôi phải bắt đầu từ đâu? ",
      answer:
        'Sản phẩm đóng vai trò vô cùng quan trọng khi bạn bắt tay khởi nghiệp. Một sản phẩm chất lượng, được nhiều người mua sẽ là chìa khoá thành công của bạn. Hiểu được điều đó, với chương trình học “Sẵn sàng khởi nghiệp kinh doanh”, Mind Connector thiết kế các môn học như: “Sản phẩm", “Product Concept & Business Concept” cùng nhiều môn học có liên quan để bạn có thể xác định sản phẩm kinh doanh hợp lý, từ đó có thể chạm đến thành công trong hành trình khởi nghiệp của mình.',
    },
    {
      question: "Làm thế nào để khởi nghiệp không bị lỗ vốn?",
      answer:
        'Lỗ vốn chính là vấn đề e ngại, khiến mọi người không dám bắt đầu con đường khởi nghiệp của mình. Tuy nhiên, vẫn có giải pháp để có thể phòng tránh việc lỗ vốn, đó chính là trang bị cho mình những kiến thức nền tảng vững chắc, cũng như nhận được sự tư vấn của những người có kinh nghiệm. Chương trình học “Sẵn sàng khởi nghiệp kinh doanh" tạo ra khoá học với tư duy và kiến thức nền tảng để mỗi cá nhân tự xác lập nguyên tắc riêng, từ đó tự tìm ra đường lối thành công trong ngắn hạn và dài hạn cho chính mình, cũng như phòng tránh những rủi ro có thể xảy ra. ',
    },
    {
      question:
        "Tôi nên tìm kiếm người đồng hành? Hay nên khởi nghiệp một mình?",
      answer:
        'Mỗi hướng đi đều có những cơ hội và rủi ro khác nhau. Khi khởi nghiệp một mình bạn sẽ có tự do, khả năng quyết định độc lập, tránh những mâu thuẫn với bạn đồng hành. Tuy nhiên, bạn sẽ phải một mình giải quyết khối lượng công việc lớn, áp lực dồn lên bạn cũng nhiều hơn. Mặt khác, có bạn đồng hành sẽ giúp san sẻ rủi ro tài chính, bạn sẽ có cái nhìn khách quan hơn, tiềm năng công ty sẽ vô cùng lớn nếu bạn tìm được bạn đồng hành có năng lực. Để có thể đạt được điều đó, bạn nên chọn bạn đồng hành có chung chí hướng để tránh những mâu thuẫn đáng tiếc có thể xảy ra. Tham gia chương trình học “Sẵn sàng khởi nghiệp kinh doanh" sẽ giúp bạn trang bị những kiến thức nền tảng, để dù bạn khởi nghiệp một mình hay với một nhóm, bạn vẫn tìm được đường lối thành công. ',
    },
  ];
  const logoslist = ["1", "2", "3", "4"];
  const courses = [
    {
      title: "Lên kế hoạch kinh doanh",
      subtitle: "Khởi nghiệp thuận lợi, chạm đỉnh vinh quang",
      lessons: "6",
      time: "16 hours",
      feature: false,
      slug: "/courses/len-ke-hoach-kinh-doanh",
    },
    {
      title: "Hoạch định kế hoạch kinhd doanh",
      subtitle: "Khởi nghiệp thuận lợi, chạm đỉnh vinh quang",
      lessons: "6",
      time: "14 hours",
      feature: false,
      slug: "/courses/hoach-dinh-ke-hoach-kinh-doanh",
    },
    {
      title: "Quản lý hệ thống kinh doanh",
      subtitle: "Khởi nghiệp thuận lợi, chạm đỉnh vinh quang",
      lessons: "5",
      time: "10 hours",
      feature: false,
      slug: "/courses/quan-ly-he-thong-kinh-doanh",
    },
    {
      title: "Thuyết trình cuối khóa",
      subtitle: "Khởi nghiệp thuận lợi, chạm đỉnh vinh quang",
      lessons: "1",
      time: "1 hours",
      feature: false,
      slug: "/courses/thuyet-trinh-cuoi-khoa",
    },
  ];
  return {
    props: {
      questions,
      logoslist,
      courses,
    },
  };
}

export default ProgramPost;
