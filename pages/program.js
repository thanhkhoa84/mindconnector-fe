import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { BannerHeading, SectionSubHeading } from "../components/Heading";
import LogoList from "../components/LogoList";
import QandA from "../components/QandA";

const seo = {
  metaTitle: "Mind Connector",
  metaDescription: "Mind Connector",
  // shareImage: article.attributes.image,
  // article: true,
};

const Program = ({ questions, logoslist }) => (
  <>
    <Head>
      <title>Mind Connector</title>
      <meta name="description" content="Mind Connector" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <>
      <Seo seo={seo} />
      <div className="bg-[url(/img/bg-head-section.png)] bg-cover py-[3em] text-center md:py-[4em] md:pb-[0]">
        <Container>
          <SectionSubHeading>
            Chương trình Thành công trong học tập
          </SectionSubHeading>
          <h1 className="text-3xl font-black md:text-6xl">
            Khoá học nghiên cứu và phân tích
          </h1>
          <p className="mt-4">“Khởi đầu vững chắc, tương lai khởi sắc”</p>
          <div className="mt-8">
            <img
              src="/img/avatar.png"
              class="inline-block w-[100px] rounded-full"
              alt="Avatar"
            />
            <p className="mt-1 text-[18px] font-black text-purple">
              Stephanie J
            </p>
            <p className="text-xs">CEO Alphabet</p>
          </div>
          <div className="mt-8 flex flex-col rounded-xl text-left md:relative md:top-[35px] md:mt-0 md:h-[70px] md:flex-row md:justify-between md:bg-white md:shadow-lg">
            <div className="flex flex-col flex-nowrap items-start justify-start gap-8 rounded-2xl border-2 border-white bg-[#FFF2EB] bg-opacity-75 py-[1em] px-6 xs:flex-row xs:items-center md:bg-transparent">
              <div className="text-gray flex-2">
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
                <a href="program" className="btn-primary">
                  Đăng ký học ngay
                </a>
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="flex flex-grow flex-col justify-between py-[6em]">
        <Container>
          <div className="flex flex-row">
            <div className="w-3/4 pr-8">
              <div>
                <h2 className="text-[34px] font-black">
                  Tổng quan về khoá học
                </h2>
                <p>
                  Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus
                  sem vestibulum. gravida quam at, ultricies tellus. Etiam ac
                  bibendum quam. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed accumsan erat quam, ac iaculis neque
                  tempus non. Cras mattis auctor gravida. Donec rutrum lobortis
                  est, et faucibus arcu sagittis eu.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus
                  sem vestibulum. gravida quam at, ultricies tellus. Etiam ac
                  bibendum quam. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed accumsan erat quam, ac iaculis neque
                  tempus non. Cras mattis auctor gravida. Donec rutrum lobortis
                  est, et faucibus arcu sagittis eu.
                </p>
              </div>
              <div className="mt-12">
                <h4 className="text-[22px] font-black">Kỹ năng bạn có được</h4>
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
                <h4 className="text-[22px] font-black">Yêu cầu về khoá học</h4>
                <p>
                  Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus
                  sem vestibulum. gravida quam at, ultricies tellus. Etiam ac
                  bibendum quam. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed accumsan erat quam, ac iaculis neque
                  tempus non. Cras mattis auctor gravida. Donec rutrum lobortis
                  est, et faucibus arcu sagittis eu.
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
                      Mauris ut dapibus lacus, sodales tempus ante. Donec sem
                      vestibulum. Gravida quam at, ultricies tellus.
                    </span>
                  </li>
                  <li className="text-gray-default marker:m-0">
                    <span className="text-black">
                      Mauris ut dapibus lacus, sodales tempus ante.
                    </span>{" "}
                  </li>
                  <li className="text-gray-default marker:m-0">
                    <span className="text-black">
                      Donec faucibus sem vestibulum. Gravida quam at, ultricies
                      tellus.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-12">
                <h4 className="text-[22px] font-black">Các lưu ý khác</h4>
                <p>
                  Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus
                  sem vestibulum. gravida quam at, ultricies tellus. Etiam ac
                  bibendum quam.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  adipiscing elit. Sed accumsan erat quam, ac iaculis neque
                  tempus non. Cras mattis auctor gravida. Donec rutrum lobortis
                  est, et faucibus arcu sagittis eu.
                </p>
              </div>
              <div>
                <QandA questions={questions} />
              </div>

              <div>
                <h2 className="text-[34px] font-black">
                  Chia sẻ từ học viên Mind Connector
                </h2>
                <p>
                  645 học viên đã tham gia khoá học{" "}
                  <b>Ngiên Cứu và Phân Tích</b>. Cùng lắng nghe những chia sẻ từ
                  họ nhé!
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <Link href="/">Xem tất cả chia sẻ</Link>
                </p>
              </div>

              <div>
                <h2 className="text-[34px] font-black">Đăng ký khoá học</h2>
                <p>Đăng ký ngay để phát triển kỹ năng của bạn. </p>
                <div className="mt-8 mb-4 overflow-hidden rounded-3xl bg-[#941C50] text-white">
                  <header className="bg-[#B22F66] p-6">
                    <h3 className="text-2xl font-black">Đăng ký khoá lẻ</h3>
                  </header>
                  <div className="flex flex-row items-center justify-between px-6 py-8">
                    <p className="text-[14px] font-bold">
                      Học phí <span>USD$</span>{" "}
                      <b className="text-[32px]">89</b>{" "}
                      <sup className="text-[14px]">99</sup>
                    </p>
                    <p className="font-black">
                      <a href="/" className="btn-primary block">
                        Đăng ký học ngay!
                      </a>
                    </p>
                  </div>
                </div>
                <p>Hoặc</p>
                <div className="mt-4 overflow-hidden rounded-3xl bg-[#D34C2A] text-white">
                  <header className="bg-[#FE8C57] p-6">
                    <h3 className="text-2xl font-bold">
                      Đăng ký toàn bộ chương trình, nhận ngay ưu đãi
                    </h3>
                    <p className="font-bold">
                      Bạn có thể đăng ký cả chương trình Thành Công Trong học
                      Tập để nhận giá ưu đãi vô cùng hấp dẫn.{" "}
                    </p>
                  </header>
                  <div className="flex flex-row items-center justify-between px-6 py-8">
                    <p className="text-[14px] font-bold">
                      Học phí <span>USD$</span>{" "}
                      <b className="text-[32px]">289</b>{" "}
                      <sup className="text-[14px]">99</sup>
                    </p>
                    <p>
                      <a href="/" className="btn-invert block">
                        Đừng Bỏ Lỡ, Đăng Ký Học Ngay!
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <aside className="w-1/4 p-4">
              <SectionSubHeading>
                Chương trình Thành công trong học tập
              </SectionSubHeading>
              <h3>Khoá học nghiên cứu và phân tích</h3>
              <p>“Khởi đầu vững chắc, tương lai khởi sắc”</p>
            </aside>
          </div>
        </Container>
      </div>
    </>
  </>
);

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

  return {
    props: {
      questions,
      logoslist,
    },
  };
}

export default Program;
