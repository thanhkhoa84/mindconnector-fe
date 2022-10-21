import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/future/image";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from "../components/Container";
import QandA from "../components/QandA";
import Seo from "../components/SEO";
import BusinessCardList from "../components/common/courses/BusinessCardList";
import Teachers from "../components/common/teachers/Teachers";
import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "../components/common/modal/GlobalModal";

const LogoList = dynamic(() => import("../components/LogoList"), {
  ssr: false,
});

const tabs = [
  {
    title: "Coaching",
    href: "#coaching",
  },
  {
    title: "Business Consultancy",
    href: "#consultancy",
  },
  {
    title: "Marketing and Sales Outsourcing",
    href: "#outsourcing",
  },
];

const Tab = ({ tab, index, active, onClick }) => {
  return (
    <li
      className={`
      font-bold
      ${active ? "text-orange-dark" : "text-[#9A9A9A]"}
      inline-block py-0 align-middle hover:font-bold hover:text-orange-dark 
      `}
      key={index}
      onClick={() => onClick(index)}
    >
      <button className="block">{tab.title}</button>
    </li>
  );
};

const TabPanels = () => {
  const [current, setCurrent] = useState(0);
  let clickHandler = (index) => {
    setCurrent(index);
  };

  return (
    <ul className="flex w-full items-center justify-start gap-12 overflow-x-auto overflow-y-hidden whitespace-nowrap py-6 md:justify-center">
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

const BusinessCard = () => (
  <div className="relative inline-flex h-[269px] w-[160px] overflow-hidden rounded-3xl border-4 border-gray-500">
    <Image
      src="/img/for-business-courses-article-card.png"
      width={160}
      height={269}
      alt=""
      className=""
    />
    <div className="absolute bottom-0 left-0 right-0 px-4 py-4 text-white">
      <h4 className="mb-2 text-base font-black leading-tight">
        Measure what customers want
      </h4>
      <Link href="">
        <span className="link-arrow">Xem thêm</span>
      </Link>
    </div>
  </div>
);

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`
        absolute top-1/2 -right-[40px] z-10 -mt-[55px] hidden h-[80px] w-[80px] -translate-y-1/2 cursor-pointer overflow-hidden rounded-full shadow-md lg:block
      `}
      onClick={onClick}
      style={{}}
    >
      <Image
        src="/img/btn-next.png"
        width={80}
        height={80}
        blurDataURL="/img/btn-next.png"
        placeholder="blur"
        alt=""
        className="absolute top-0 left-0"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`
        absolute top-1/2 -left-[40px] z-10 -mt-[55px] hidden h-[80px] w-[80px] -translate-y-1/2 cursor-pointer overflow-hidden rounded-full shadow-md lg:block
      `}
      onClick={onClick}
      style={{}}
    >
      <Image
        src="/img/btn-prev.png"
        width={80}
        height={80}
        blurDataURL="/img/btn-prev.png"
        placeholder="blur"
        alt=""
        className="absolute top-0 right-0"
      />
    </div>
  );
}

const Card = () => {
  return (
    <div
      className={`relative h-[215px] w-[336px] overflow-hidden rounded-[30px] border-[6px] border-[#414141] text-left text-white`}
    >
      <div
        className={`overflow-hidden rounded-2xl after:absolute after:inset-0 after:block after:bg-gradient-to-b after:from-[rgba(43,43,43,0)] after:to-[#000] after:content-['']`}
      >
        <Image
          src="/img/services-01.png"
          alt={""}
          width={326}
          height={215}
          className="block w-full"
        />
      </div>
      <div
        className={`after:bg-gradient-overlay absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end px-4 pb-8 text-sm text-white text-white after:content-none md:p-4 md:pb-6`}
      >
        <h3 className="text-[18px] font-black">
          TƯ VẤN CHIẾN LƯỢC THƯƠNG HIỆU
        </h3>
        <h4 className="mt-[8px] text-[14px]">
          Phát triển chiến lược thương hiệu bền vững để doanh nghiệp tăng trưởng
          bứt phá.
        </h4>
      </div>
    </div>
  );
};

const ServicesSlider = () => {
  let settings = {
    dots: true,
    // infinite: true,
    className: "center",
    centerMode: false,
    // centerPadding: "60px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 374,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Slider>
  );
};

const Business = ({}) => {
  const { showModal } = useGlobalModalContext();
  const createModal = () => {
    showModal(MODAL_TYPES.BUSINESS_VIDEO_MODAL, {
      title: "Điền thông tin liên lạc, Mind Connector sẽ liên hệ bạn sau",
      confirmBtn: "Save",
    });
  };

  const seo = {
    metaTitle: "Dành cho doanh nghiệp",
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
        <main className="dark overflow-hidden bg-black pb-12">
          <section className="dark relative flex origin-center flex-col items-center justify-center bg-black bg-[url(/img/bg-video.png)] bg-cover bg-center bg-no-repeat py-20 xl:py-36">
            <div className="relative py-12 text-center dark:text-white">
              <button
                className="inline-block cursor-pointer"
                onClick={createModal}
              >
                <Image
                  src="/img/btn-play-video.svg"
                  width={80}
                  height={80}
                  alt=""
                  className="block"
                />
              </button>
              <h2 className="mt-8 text-4xl font-black">
                Kinh nghiệm thực chiến từ chuyên gia hàng đầu
              </h2>
              <p className="mt-4">
                Cùng doanh nghiệp bứt phá thành công với đội ngũ nhân viên xuất
                sắc và chiến lược kinh doanh hiệu quả.
              </p>
              <p className="mt-8">
                <Link href="contact">
                  <span className="btn-primary">
                    Trò chuyện ngay với chuyên gia
                  </span>
                </Link>
              </p>
            </div>
          </section>
          <section className="py-12">
            <Container>
              <h1 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white">
                Dịch vụ của chúng tôi
              </h1>
            </Container>
            <div className="relative mt-12 pb-12">
              <ServicesSlider />
            </div>
          </section>
          <section className="py-12">
            <Container>
              <h1 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white">
                What makes us different
              </h1>
            </Container>
          </section>
          <section className="text-center text-white">
            <Container>
              <h1 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white">
                Điều gì giúp chúng tôi khác biệt?
              </h1>
              <h2 className="mt-8 text-4xl font-black">
                THIẾT KẾ GIẢI PHÁP CHIẾN LƯỢC CHUYÊN BIỆT DÀNH CHO DOANH NGHIỆP
              </h2>
              <p className="mt-4">
                Dựa vào từng nhu cầu, mong muốn riêng biệt của từng nhà lãnh đạo
                doanh nghiệp và tổ chức, Mind Connector với đội ngũ chuyên gia
                hàng đầu trong các lĩnh vực, với kinh nghiệm dày dặn trong việc
                nghiên cứu, vận hành và tư vấn chiến lược, sẵn sàng sát cánh
                cùng bạn đi tìm con đường phát triển của riêng mình.
              </p>
            </Container>
            <div className="course-card business-card relative mt-8 block py-8">
              <BusinessCardList courses={Array(25).fill(0)} />
            </div>
          </section>
          <section className="dark:text-white">
            <Container>
              <Teachers />
            </Container>
          </section>
        </main>
      </>
    </>
  );
};

export default Business;

export async function getStaticProps() {
  /** TODO: get real QaA from backend */

  return {
    props: {},
  };
}
