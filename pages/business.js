import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "@/components/common/modal/GlobalModal";
import Seo from "@/components/SEO";
import { fetchAPI } from "@/lib/api.js";
import SectionManager from "@/components/SectionManager";
import LeadingForm from "@/components/LeadingForm";
import Container from "@/components/Container";

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

// const Tab = ({ tab, index, active, onClick }) => {
//   return (
//     <li
//       className={`
//       font-bold
//       ${active ? "text-orange-dark" : "text-[#9A9A9A]"}
//       inline-block py-0 align-middle hover:font-bold hover:text-orange-dark
//       `}
//       key={index}
//       onClick={() => onClick(index)}
//     >
//       <button className="block">{tab.title}</button>
//     </li>
//   );
// };

const Business = ({ seo, sections }) => {
  const { showModal } = useGlobalModalContext();
  const createModal = () => {
    showModal(MODAL_TYPES.BUSINESS_VIDEO_MODAL, {
      title: "Điền thông tin liên lạc, Mind Connector sẽ liên hệ bạn sau",
      confirmBtn: "Save",
    });
  };

  return (
    <>
      <Seo seo={seo} />
      <main className="dark overflow-hidden bg-black pb-12">
        <div className="sr-only">
          <h1>{seo.metaTitle} | Mind Connector</h1>
        </div>

        <SectionManager sections={sections} />

        {/*<section className="dark relative flex aspect-[375/461] origin-center flex-col items-center justify-end overflow-hidden bg-cover bg-center bg-no-repeat sm:aspect-[2/1] sm:justify-center lg:aspect-[3/1.2]">
          <Image
            src={`/img/bg-video.png`}
            alt=""
            width={1400}
            height={698}
            className="absolute inset-0 hidden h-full w-full object-cover sm:block"
          />
          <Image
            src={`/img/bg-video-mb.png`}
            blurDataURL={`/img/bg-video-mb.png`}
            placeholder="blur"
            alt=""
            width={375}
            height={461}
            className="absolute inset-0 h-full w-full object-cover sm:hidden"
          />
          <div className="relative max-w-[800px] px-4 py-12 text-center dark:text-white sm:px-8">
            <h2 className="[&>span:inline-block] mt-8 text-3xl font-black md:text-5xl [&>span]:whitespace-nowrap">
              Kinh nghiệm thực chiến từ <span>chuyên gia hàng đầu</span>
            </h2>
            <p className="mt-4">
              Cùng doanh nghiệp bứt phá thành công với đội ngũ nhân viên xuất
              sắc và{" "}
              <span className="xs:inline-block">
                chiến lược kinh doanh hiệu quả
              </span>
              .
            </p>
            <p className="mt-8">
              <button
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
                type="button"
                className="min-w-[280px]"
              >
                <span className="btn-pink">Trò chuyện ngay với chuyên gia</span>
              </button>
            </p>
          </div>
        </section>

        <section className="mt-8 overflow-hidden py-16">
          <Container>
            <h2 className="mx-auto mb-4 mt-0 text-center text-4xl font-black leading-[1.3] dark:text-white">
              Dịch vụ của chúng tôi
            </h2>
            <div className="mt-12">
              <ServicesCardList services={services} />
            </div>
          </Container>
        </section>

        <section className="dark relative mt-12 flex origin-center flex-col items-center justify-center py-[100px] text-center text-white xl:py-36">
          <Image
            src={`/img/bg-difference.png`}
            alt=""
            width={1400}
            height={698}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative">
            <div className="mx-auto px-4 lg:max-w-[750px]">
              <h2 className="mx-auto mb-4 mt-0 text-center text-4xl font-black leading-[1.3]">
                Điều gì giúp chúng tôi khác biệt?
              </h2>
              <Image
                src="/img/icon-difference.svg"
                alt=""
                width={116}
                height={120}
                className="mt-8 inline-block"
              />
              <h3 className="mt-8 text-[25px] font-black text-[#F5B0C5] md:text-4xl">
                THIẾT KẾ GIẢI PHÁP CHIẾN LƯỢC CHUYÊN BIỆT{" "}
                <span className="xs:inline-block">DÀNH CHO DOANH NGHIỆP</span>
              </h3>
              <p className="mt-4">
                Dựa vào từng nhu cầu, mong muốn riêng biệt của từng nhà lãnh đạo
                doanh nghiệp và tổ chức, Mind Connector với đội ngũ chuyên gia
                hàng đầu trong các lĩnh vực, với kinh nghiệm dày dặn trong việc
                nghiên cứu, vận hành và tư vấn chiến lược, sẵn sàng sát cánh
                cùng bạn đi tìm con đường phát triển của riêng mình.
              </p>
            </div>
          </div>
        </section>

        <section className="invisible hidden py-12">
          <Container>
            <h2 className="mx-auto mb-4 mt-0 text-center text-4xl font-black leading-[1.3]">
              Cảm nhận của khách hàng
            </h2>
            <p className="mt-4">
              Hơn 200 doanh nghiệp đang đồng hành cùng Mind Connector
            </p>
            <div className="mt-8">
              <Testimonial data={testimonial} />
            </div>
          </Container>
        </section>*/}

        <section className="py-8 pb-12" id="contact">
          <Container>
            <LeadingForm />
          </Container>
        </section>
      </main>
    </>
  );
};

export default Business;

export async function getServerSideProps() {
  const params = {
    nested: true,
    populate: [
      "seo",
      "content",
      "content.button.Link",
      "content.backgroundImage",
      "content.backgroundImage.imageDesktop",
      "content.backgroundImage.imageMobile",
      "content.mentors",
      "content.mentors.image",
    ],
  };
  const page = await fetchAPI(`/business`, params);
  const seo = page.data.attributes.seo;
  const sections = page.data.attributes.content;

  return {
    props: {
      seo,
      sections,
    },
  };
}
