import dynamic from "next/dynamic";
import Image from "next/image";

import { fetchAPI } from "@/lib/api.js";
import SectionManager from "@/components/SectionManager";
import Container from "@/components/Container";
import Seo from "@/components/SEO";
import TabPanels from "@/components/TabPanels";

import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "@/components/common/modal/GlobalModal";

const Decoration = dynamic(() => import("@/components/Decoration"), {
  ssr: false,
});

const ProgramPost = ({ seo, sections }) => {
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
      <Seo seo={seo} />
      <main className="overflow-hidden">
        <div className="sr-only">
          <h1>{seo.metaTitle} | Mind Connector</h1>
        </div>

        <SectionManager sections={sections} />

        {/* <div className="relative bg-[#F7F3F4] py-[3em] text-center md:py-[4em] md:pb-[0]">
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
              <div className="font-bold text-gray">Chương trình</div>
              <h2 className="leading-0 text-3xl font-black uppercase md:text-6xl">
                Sẵn sàng khởi nghiệp kinh doanh
              </h2>
              <p className="mt-4">
                “Khởi nghiệp thuận lợi, chạm đỉnh vinh quang”
              </p>
              <CourseTeachers teachers={mentors} />
              <div className="mt-8 flex flex-col rounded-xl text-left md:relative md:top-[35px] md:mt-0 md:h-[70px] md:flex-row md:justify-between md:bg-white md:shadow-lg">
                <div className=" flex flex-row flex-nowrap items-start justify-start gap-4 rounded-2xl border-2 border-solid border-[#d2d2d2] border-white bg-[#FFF2EB] bg-opacity-75 px-6 py-[1em] xs:flex-row sm:flex-row sm:gap-8 md:items-center md:bg-transparent">
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
        </div>

        <div className="">
          <Container>
            <div className="md:pt-[4em]">
              <div className="flex flex-col justify-between md:flex-row">
                <div className="w-full">
                  <div className="flex flex-col justify-evenly pt-16 md:flex-row">
                    <div className="relative flex-shrink flex-grow basis-full border-l border-[#F5CBCC] pb-12 pl-8 md:border-l-0 md:border-t md:pl-0 md:pr-6 md:pt-12">
                      <Image
                        src="/img/icon-steps.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="absolute left-[-12px] top-[-5px] w-[24px] md:left-[-5px] md:top-[-12px]"
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
                    <div className="relative flex-shrink flex-grow basis-full border-l border-[#F5CBCC] pb-12 pl-8 md:border-l-0 md:border-t md:pl-0 md:pr-6 md:pt-12">
                      <Image
                        src="/img/icon-steps.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="absolute left-[-12px] top-[-5px] w-[24px] md:left-[-5px] md:top-[-12px]"
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
                    <div className="relative flex-shrink flex-grow basis-full pb-12 pl-8 md:pl-0 md:pr-6 md:pt-12">
                      <Image
                        src="/img/icon-steps.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="absolute left-[-12px] top-[-5px] w-[24px] md:left-[-5px] md:top-[-12px]"
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
                  <div className="flex-col justify-center bg-purple p-8 md:inline-flex md:min-w-[340px] md:rounded-br-[20px] md:rounded-tr-[20px] lg:justify-center">
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
        </div> */}

        <div id="register" className="pb-12">
          <Container>
            <div className="mb-4 mt-8 flex flex-col overflow-hidden rounded-3xl bg-[#941C50] text-white md:flex-row md:p-0">
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
                    className="btn-primary block w-full overflow-hidden text-[13px] sm:text-[16px]"
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

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const programs = await fetchAPI(`/programs`);
  let match = programs.data.filter((s) => {
    return s.attributes.slug == slug;
  });

  const query = {
    nested: true,
    populate: ["seo", "Content", "Content.QA"],
  };

  const page = await fetchAPI(`/programs/${match[0].id}`, query);
  const seo = page.data.attributes.seo;
  const sections = page.data.attributes.Content;

  return {
    props: {
      seo,
      sections,
    },
  };
}

export default ProgramPost;
