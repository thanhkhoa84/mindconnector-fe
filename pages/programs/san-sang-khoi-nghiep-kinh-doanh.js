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
  metaTitle: "Mind Connector",
  metaDescription: "Mind Connector",
  // shareImage: article.attributes.image,
  // article: true,
};

const mentors = [
  {
    entitled: "Bà",
    name: "Nina Trần",
    title: "Chuyên gia <br/>Tư vấn Thương hiệu",
    image: "/img/mentors/nina-tran-03.png",
  },
  {
    entitled: "Bà",
    name: "Mandy Nguyễn",
    title: "Chuyên gia <br/>Sales - Marketing",
    image: "/img/mentors/mandy-nguyen-03.png",
  },
  {
    entitled: "Bà",
    name: "Đào Minh Huyền",
    title: "Cố vấn Khởi nghiệp",
    image: "/img/mentors/dao-minh-huyen.png",
  },
  {
    entitled: "Ông",
    name: "Nguyễn Mạnh Cường",
    title: "Chuyên gia chiến lược",
    image: "/img/mentors/nguyen-manh-cuong.png",
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
            <h1 className="leading-0 text-3xl font-black uppercase md:text-6xl">
              Sẵn sàng khởi nghiệp kinh doanh
            </h1>
            <p className="mt-4">
              “Khởi nghiệp thuận lợi, chạm đỉnh vinh quang”
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
                  <p className="text-[14px]">2033 Đánh giá</p>
                </div>
                <div className="text-black">
                  <p className="text-[20px] font-bold">200</p>
                  <p className="text-[14px]">Học viên</p>
                </div>
                <div className="text-black">
                  <p className="text-[20px] font-bold">32</p>
                  <p className="text-[14px]">Giờ học</p>
                </div>
              </div>
              <div className="mt-6 flex flex-row flex-wrap items-center justify-between md:mt-0 md:gap-5 md:px-6">
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
                      <p className="pr-4 leading-5">
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
                      <p className="pr-4 leading-5">
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
                      <p className="pr-4 leading-5">
                        Các học viên sẽ trình bày dự án với Ban Chuyên Môn và có
                        cơ hội nhận được phần tài trợ tương đương
                        200,000,000VNĐ. Ngoài ra, học viên còn có cơ hội nhận
                        thêm tài trợ từ các nhà đầu tư khác.
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
                      src="/img/info-program-san-sang.png"
                      width={704}
                      height={400}
                      alt=""
                    />
                  </div>
                  <div className="flex-col justify-center bg-purple p-8 md:inline-flex md:min-w-[340px] md:rounded-tr-[20px] md:rounded-br-[20px] lg:justify-center">
                    <h2 className="text-[28px] font-black md:text-[34px]">
                      Về chương trình
                    </h2>
                    <p className="mt-4">
                      <a
                        href="/docs/[Mind Connector] Sẵn sàng khởi nghiệp kinh doanh.pdf"
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
                      <b>Chi tiết khóa học:</b> 20 buổi trong 8 tuần
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
                    <div className="mt-8">
                      <p className="font-bold">Lịch học tháng 12</p>
                      <Image
                        src="/img/schedule-dec.png"
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
  const courses = programs.caoCap;
  const testimonial = {
    headline: `Tôi có một khoảng thời gian được trải nghiệm thật sự cảm giác
    lăn xả vào dự án khi tham gia khóa đào tạo này.`,
    body: `Tôi có một khoảng thời gian được trải nghiệm thật sự cảm giác lăn xả
    vào dự án khi tham gia khóa đào tạo này. Trước đây tôi cũng biết được
    rằng khởi nghiệp không hề đơn giản, từ lúc ấp ủ ý tưởng đến lúc quyết
    tâm thực thi tôi rất lo lắng vì bản thân còn loay hoay, nhiều vấn đề
    chưa sáng tỏ. Khi tôi lên kế hoạch được 80% thì gặp được chương trình
    này. Phải nói rằng những thông tin trong khóa học rất thiết thực, các
    giảng viên là những người đã làm start up, đang thành công theo mô
    hình tự thân, tôi thấy vô cùng phù hợp với hoàn cảnh hiện tại của
    mình. Ban đầu tôi hơi lấn cấn về chi phí khóa học, tuy nhiên khi vào
    học thì không phải chỉ được học và tôi được các chuyên gia tư vấn thực
    sự trên kế hoạch kinh doanh của chính tôi. Học xong, tôi thấy tự tin
    hơn và biết rõ mình muốn gì hơn trong tương lai.`,
    peep: {
      name: `Chị Phạm Thị Hải An`,
      title: `Founder nhãn hàng Gac Lyco – các sản phẩm dinh dưỡng tiền
      Vitamin C từ Gấc`,
      image: `/img/testimonial.png`,
    },
  };
  return {
    props: {
      questions,
      logoslist,
      courses,
      testimonial,
    },
  };
}

export default ProgramPost;
