import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/future/image";
import { useState } from "react";

import Container from "../components/Container";
import QandA from "../components/QandA";
import Seo from "../components/SEO";
import ServicesCardList from "../components/business/ServicesCardList";
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

const Business = ({ services }) => {
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
      <>
        <Seo seo={seo} />
        <main className="dark overflow-hidden bg-black pb-12">
          <section className="dark relative flex origin-center flex-col items-center justify-center bg-black bg-[url(/img/bg-video.png)] bg-cover bg-center bg-no-repeat py-20 xl:py-36">
            <div className="relative py-12 text-center dark:text-white">
              <h2 className="mt-8 text-4xl font-black">
                Kinh nghiệm thực chiến từ chuyên gia hàng đầu
              </h2>
              <p className="mt-4">
                Cùng doanh nghiệp bứt phá thành công với đội ngũ nhân viên xuất
                sắc và chiến lược kinh doanh hiệu quả.
              </p>
              <p className="mt-8">
                <Link href="contact">
                  <span className="btn-pink">
                    Trò chuyện ngay với chuyên gia
                  </span>
                </Link>
              </p>
            </div>
          </section>

          <section className="overflow-hidden py-12">
            <Container>
              <h1 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white">
                Dịch vụ của chúng tôi
              </h1>
              <div className="mt-12">
                <ServicesCardList services={services} />
              </div>
            </Container>
          </section>

          <section className="py-12 text-center text-white">
            <Container>
              <h1 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3]">
                Điều gì giúp chúng tôi khác biệt?
              </h1>
              <h2 className="mt-8 text-4xl font-black text-[#F5B0C5]">
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
          </section>
          <section className="py-12 dark:text-white">
            <Container>
              <h1 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white">
                Đội ngũ chuyên gia
              </h1>
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
  let services = [
    {
      name: `Tư vấn Chiến lược Thương hiệu`,
      body: `Phát triển chiến lược thương hiệu bền vững để doanh nghiệp tăng trưởng bứt phá.`,
    },
    {
      name: `Tư vấn Chiến lược phát triển chuỗi F&B `,
      body: `Hỗ doanh nghiệp phát triển, thành công và tăng trưởng trong lĩnh vực F&B.`,
    },
    {
      name: `Tư vấn Quản Trị Sự thay đổi`,
      body: `Giúp doanh nghiệp có thể linh hoạt, điều chỉnh và thích ứng với sự thay đổi mới.`,
    },
    {
      name: `Tư vấn và Thực thi Sales & Marketing (MSO)`,
      body: `Thảo luận, trao đổi, định hướng và thực thi chiến lược Sales và Marketing dài hạn cho doanh nghiệp.`,
    },
    {
      name: `Đào tạo nội bộ`,
      body: `Đào tạo đội ngũ nhân viên xuất sắc để đưa doanh nghiệp phát triển nhanh chóng.`,
    },
  ];

  return {
    props: {
      services,
    },
  };
}
