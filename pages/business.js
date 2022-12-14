import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/future/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "@/components/common/modal/GlobalModal";
import Container from "@/components/Container";
// import QandA from "@/components/QandA";
import Seo from "@/components/SEO";
import ServicesCardList from "@/components/business/ServicesCardList";
// import Teachers from "@/components/common/teachers/Teachers";
import Testimonial from "@/components/Testimonial";
import LeadingForm from "@/components/LeadingForm";

const QandA = dynamic(() => import("@/components/QandA"), {
  suspense: true,
});
const Teachers = dynamic(
  () => import("@/components/common/teachers/Teachers"),
  {
    suspense: true,
  }
);

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

const Business = ({ services, teachers, testimonial }) => {
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
      "Mind Connector kết nối tầm nhìn và tri thức để giúp doanh nghiệp, cá nhân phát triển và tăng trưởng mạnh mẽ trong tương lai",
    keywords: [
      "mind connector",
      "mindconnector",
      "kết nối",
      "tầm nhìn",
      "training",
      "mạng lưới",
      "doanh nghiệp",
      "cá nhân",
    ],
    // shareImage: article.attributes.image,
    // article: true,
  };

  return (
    <>
      <Seo seo={seo} />
      <main className="dark overflow-hidden bg-black pb-12">
        <div className="sr-only">
          <h1>Mind Connector - Dành cho doanh nghiệp</h1>
        </div>
        <section className="dark relative flex aspect-[375/461] origin-center flex-col items-center justify-end overflow-hidden bg-cover bg-center bg-no-repeat sm:aspect-[2/1] sm:justify-center lg:aspect-[3/1.2]">
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
            <h2 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white">
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
              <h2 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3]">
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
            <h2 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3]">
              Cảm nhận của khách hàng
            </h2>
            <p className="mt-4">
              Hơn 200 doanh nghiệp đang đồng hành cùng Mind Connector
            </p>
            <div className="mt-8">
              <Testimonial data={testimonial} />
            </div>
          </Container>
        </section>

        <section className="py-12 dark:text-white">
          <Container>
            <h2 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white">
              Đội ngũ chuyên gia
            </h2>
            <Teachers data={teachers} />
          </Container>
        </section>

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

export async function getStaticProps() {
  /** TODO: get real QaA from backend */
  let services = [
    {
      name: `Tư vấn Chiến lược Thương hiệu`,
      body: `Phát triển chiến lược thương hiệu bền vững để doanh nghiệp tăng trưởng bứt phá.`,
      img: `/img/business-tu-van-chien-luoc-thuong-hieu.png`,
      url: `/services/tu-van-chien-luoc-thuong-hieu`,
    },
    {
      name: `Tư vấn Chiến lược phát triển chuỗi F&B `,
      body: `Hỗ trợ doanh nghiệp phát triển, thành công và tăng trưởng trong lĩnh vực F&B.`,
      img: `/img/business-tu-van-chien-luoc-fb.png`,
      url: `/services/tu-van-chien-luoc-phat-trien-chuoi-fb`,
    },
    {
      name: `Tư vấn Quản Trị Sự thay đổi`,
      body: `Giúp doanh nghiệp có thể linh hoạt, điều chỉnh và thích ứng với sự thay đổi mới.`,
      img: `/img/business-tu-van-quan-tri-su-thay-doi.png`,
      url: `/services/tu-van-quan-tri-su-thay-doi`,
    },
    {
      name: `Tư vấn và Thực thi Sales & Marketing (MSO)`,
      body: `Thảo luận, trao đổi, định hướng và thực thi chiến lược Sales và Marketing dài hạn cho doanh nghiệp.`,
      img: `/img/business-tu-van-sale.png`,
      url: `/services/tu-van-va-thuc-thi-mso`,
    },
    {
      name: `Đào tạo nội bộ`,
      body: `Đào tạo đội ngũ nhân viên xuất sắc để đưa doanh nghiệp phát triển nhanh chóng.`,
      img: `/img/business-dao-tao-noi-bo.png`,
      url: `/services/dao-tao-noi-bo`,
    },
  ];

  let testimonial = {
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
      title: `
        Học viên Chương trình nâng cao <br/>
        <b>“Thành công trong khởi sự kinh doanh”</b> 
      `,
      image: `/img/testimonial.png`,
    },
  };

  let teachers = [
    {
      entitled: "Bà",
      name: "Nina Trần",
      imgUrl: "/img/mentors/nina-tran-02.png",
      title: "Chuyên gia <br/>Tư vấn Thương hiệu",
    },
    {
      entitled: "Bà",
      name: "Mandy Nguyễn",
      imgUrl: "/img/mentors/mandy-nguyen-02.png",
      title: "Chuyên gia <br/>Sales - Marketing",
    },
    {
      entitled: "Bà",
      name: "Vinkai AR Bhatia",
      imgUrl: "/img/mentors/vinkai-bhatia.png",
      title: "Chuyên gia <br/>Chiến lược",
    },
    {
      entitled: "Bà",
      name: "Duy Trần",
      imgUrl: "/img/mentors/duy-tran.png",
      title: "Chuyên gia <br/>Vận hành và HR",
    },
  ];

  return {
    props: {
      services,
      testimonial,
      teachers,
    },
  };
}
