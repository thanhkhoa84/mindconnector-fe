import Head from 'next/head';
import Image from "next/future/image";
import dynamic from "next/dynamic";

import QandA from "../components/QandA";
import ValueSection from "../components/home/ValueSection";
import Teachers from "../components/common/teachers/Teachers";
import About from "../components/home/About";
import Seo from "./../components/SEO";
import Container from "./../components/Container";

const HeroBanner = dynamic(() => import("../components/home/HeroBanner"), {
  ssr: false,
});

export default function Home({ slides, questions }) {
  const seo = {
    metaTitle: "Mind Connector",
    metaDescription: "Mind Connector",
    // shareImage: article.attributes.image,
    // article: true,
  };

  return (
    <>
      <Head>
        <title>Mind Connector</title>
        <meta
          name="description"
          content="Mind Connector là một mạng lưới của các nhà tư vấn kinh doanh cùng các giảng viên vốn là các lãnh đạo và chuyên gia hàng đầu trong nhiều lĩnh vực khác nhau. Mind Connector kết nối tầm nhìn và tri thức để giúp doanh nghiệp, cá nhân phát triển và tăng trưởng mạnh mẽ trong tương lai"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Seo seo={seo} />
        <div>
          <HeroBanner slides={slides} />
        </div>
        <ValueSection />
        <About />
        <section className={`relative bg-[#FFF7ED] py-12`}>
          <Container>
            <Teachers />
          </Container>
        </section>
        <Container>
          <QandA questions={questions}></QandA>
        </Container>
      </>
    </>
  );
}

export async function getStaticProps() {
  /** TODO: get real QaA from backend */
  const questions = [
    {
      question: "Điểm khác biệt của Mind Connector là gì?",
      answer:
        "Mind Connector là một mạng lưới của các nhà tư vấn kinh doanh cùng các giảng viên vốn là các lãnh đạo và chuyên gia hàng đầu trong nhiều lĩnh vực khác nhau. Vì thế, Mind Connector sẽ cung cấp những chương trình học đa dạng, khác biệt nhưng vẫn phù hợp với nhu cầu thực tế của từng cá nhân. Vì thế, với các kiến thức từ Mind Connector, bạn hoàn toàn có thể tự tin để có thể chinh phục những dự định của tương lai.",
    },
    {
      question: "Mind Connector có những loại khóa học nào?",
      answer:
        "Mỗi cá nhân, mỗi doanh nghiệp sẽ có nhu cầu và định hướng phát triển riêng. Vì thế Mind Connector xây dựng những chương trình học với những kiến thức nền tảng, dù đa dạng, khác biệt nhưng vẫn đáp ứng được nhu cầu, nguyện vọng của từng cá nhân. Đối với sinh viên đang ngồi trên ghế nhà trường, bạn có thể tham khảo khoá học “Kỹ năng xã hội” để không những có thể trở thành một sinh viên ưu tú mà còn trang bị cho mình những kỹ năng phục vụ cho tương lai. Bên cạnh đó, khi sắp tốt nghiệp ra trường, bạn có thể tham khảo khoá học “Vững vàng lập nghiệp” nếu muốn trở thành nhân viên xuất sắc ở công ty bạn yêu thích, hoặc khoá học “Thành công trong khởi nghiệp kinh doanh” để có thể chạm đỉnh vinh quang trên con đường khởi nghiệp của mình. Không dừng lại ở đó, Mind Connector còn thiết kế những khoá đào tạo nội bộ cho các doanh nghiệp và cung cấp các giải pháp chiến lược chuyên biệt, sát cánh cùng doanh nghiệp trên hành trình phát triển mỗi ngày.",
    },
    {
      question:
        "Các chương trình đào tạo của MC có cần chất lượng đầu vào hay không?",
      answer:
        "Các chương trình đào tạo của MC không yêu cầu chất lượng đầu vào. Miễn bạn là sinh viên đang muốn phấn đấu để trở nên ưu tú, hay muốn trở thành nhân viên xuất sắc sau khi ra trường. Miễn doanh nghiệp của bạn đang muốn đào tạo đội ngũ nhân viên tài ba, hay doanh nghiệp đang có vấn đề cần tìm kiếm sự tư vấn giải pháp chuyên nghiệp, tận tâm. Mind Connector sẽ có những chương trình phù hợp với từng nhu cầu của cá nhân, doanh nghiệp, từ đó có thể sát cánh cùng tất cả mọi người để hướng đến một tương lai thành công rực rỡ.",
    },
  ];

  let slides = [
    {
      headline: "Mind Connector ký hợp đồng tư vấn dài hạn với Tập Đoàn STP ",
      body: "Mind Connector trở thành đơn vị tư vấn chính thức của Tập Đoàn STP tại Hà Nội về mô hình kinh doanh và xây dựng thương hiệu trong lĩnh vực Aquatech.",
      image: "/img/home-banner-1.png",
    },
    {
      headline:
        "Mind Connector đảm nhiệm vai trò mới tại Hội Giáo Dục Nghề Nghiệp phía Nam ",
      body: "Ngày 15/7/2022, Ban Giám Đốc Hội Giáo Dục Nghề Nghiệp phía Nam đã chính thức chỉ định Mind Connector làm Trung Tâm Đào Tạo Kỹ Năng và Kết Nối Doanh Nghiệp, cung cấp các khoá đào tạo cho các trường Cao Đẳng và Doanh Nghiệp thuộc hệ thống hỗ trợ đào tạo của Hội.",
      image: "/img/home-banner-2.png",
    },
  ];

  return {
    props: {
      slides,
      questions,
    },
  };
}
