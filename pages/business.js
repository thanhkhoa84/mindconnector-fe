import Head from 'next/head';
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/future/image";
import { useState } from "react";
import Container from "./../components/Container";
import QandA from "./../components/QandA";
import Seo from "./../components/SEO";
import {
  SectionHeading,
  SectionSubHeading,
  BannerHeading,
} from "../components/Heading";
import Teachers from "./../components/common/teachers/Teachers";
import Courses from "../components/common/courses/Courses";
import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "../components/common/modal/GlobalModal";

const LogoList = dynamic(() => import("./../components/LogoList"), {
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

const Business = ({ questions, logoslist }) => {
  console.log(MODAL_TYPES);
  const { showModal } = useGlobalModalContext();
  const createModal = () => {
    showModal(MODAL_TYPES.BUSINESS_VIDEO_MODAL, {
      title: "Điền thông tin liên lạc, Mind Connector sẽ liên hệ bạn sau",
      confirmBtn: "Save",
    });
  };

  const seo = {
    metaTitle: "Mind Connector | Dành cho sinh viên",
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
              Trusted Insights from top leading experts
            </h2>
            <p className="mt-4">
              Provide world-class training & business consultancy developed by
              leading experts in the industry
            </p>
            <p className="mt-8">
              <Link href="contact">
                <span className="btn-primary">Contact us now</span>
              </Link>
            </p>
          </div>
        </section>
        <section className="dark bg-black py-12">
          <h1 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white">
            Our use cases
          </h1>
        </section>
        <section className="dark bg-black py-12">
          <Container>
            <h1 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white">
              What makes us different
            </h1>
            <TabPanels />
          </Container>
        </section>
        <section className="dark bg-black py-12">
          <h1 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white">
            Check out the latest insights from our experts
          </h1>
        </section>
        <section className="dark bg-black py-12 dark:text-white">
          <Container>
            <Teachers />
          </Container>
        </section>
      </>
    </>
  );
};

export default Business;

export async function getStaticProps() {
  /** TODO: get real QaA from backend */
  const logoslist = ["1", "2", "3", "4", "5"];

  return {
    props: {
      logoslist,
    },
  };
}

