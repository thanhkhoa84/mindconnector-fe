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

        {/*

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
      "content.icon",
      "content.image.imageDesktop",
      "content.services",
      "content.services.thumbnailInfo",
      "content.services.thumbnailInfo.image",
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
