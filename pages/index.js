import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";

import QandA from "@/components/QandA";
import ValueSection from "@/components/home/ValueSection";
import Teachers from "@/components/common/teachers/Teachers";
import About from "@/components/home/About";
import Seo from "@/components/SEO";
import Container from "@/components/Container";
import HeroBanner from "@/components/home/HeroBanner";

export default function Home({ slides, questions, teachers }) {
  const seo = {
    metaTitle: "Trang chủ",
    metaDescription:
      "Mind Connector là một mạng lưới của các nhà tư vấn kinh doanh cùng các giảng viên vốn là các lãnh đạo và chuyên gia hàng đầu trong nhiều lĩnh vực khác nhau. Mind Connector kết nối tầm nhìn và tri thức để giúp doanh nghiệp, cá nhân phát triển và tăng trưởng mạnh mẽ trong tương lai",
    keywords: [
      "mind connector",
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
      <main className="overflow-hidden">
        <section className="home-banner">
          <HeroBanner slides={slides} />
        </section>

        <section>
          <ValueSection />
        </section>

        <section>
          <About />
        </section>

        <section className={`relative bg-[#FFF7ED] py-12`}>
          <Container>
            <h1 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white">
              Đội ngũ giảng viên
            </h1>
            <Teachers />
          </Container>
        </section>

        <section>
          <Container>
            <QandA questions={questions}></QandA>
          </Container>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  /** TODO: get real QaA from backend */
  const questions = [
    {
      Question: "Điểm khác biệt của Mind Connector là gì?",
      Answer:
        "Mind Connector là một mạng lưới của các nhà tư vấn kinh doanh cùng các giảng viên vốn là các lãnh đạo và chuyên gia có kinh nghiệm thực chiến trong nhiều lĩnh vực khác nhau. Vì thế, Mind Connector sẽ cung cấp những chương trình học đa dạng, khác biệt nhưng vẫn phù hợp với nhu cầu thực tế của từng cá nhân. Với các kiến thức từ Mind Connector, bạn hoàn toàn có thể tự tin để có thể chinh phục những dự định của tương lai.",
    },
    {
      Question: "Mind Connector có những loại khóa học nào?",
      Answer: `Mỗi cá nhân, mỗi doanh nghiệp sẽ có nhu cầu và định hướng phát triển riêng. Vì thế Mind Connector xây dựng những chương trình học với những kiến thức nền tảng, dù đa dạng, khác biệt nhưng vẫn đáp ứng được nhu cầu, nguyện vọng của từng cá nhân. Đối với sinh viên đang ngồi trên ghế nhà trường, bạn có thể tham khảo khoá học “Kỹ năng xã hội” để không những có thể trở thành một sinh viên ưu tú mà còn trang bị cho mình những kỹ năng phục vụ cho tương lai. Bên cạnh đó, khi sắp tốt nghiệp ra trường, bạn có thể tham khảo khoá học “Vững vàng lập nghiệp” nếu muốn trở thành nhân viên xuất sắc ở công ty bạn yêu thích, hoặc khoá học “Thành công trong khởi nghiệp kinh doanh” để có thể chạm đỉnh vinh quang trên con đường khởi nghiệp của mình. Không dừng lại ở đó, Mind Connector còn thiết kế những khoá đào tạo nội bộ cho các doanh nghiệp và cung cấp các giải pháp chiến lược chuyên biệt, sát cánh cùng doanh nghiệp trên hành trình phát triển mỗi ngày. 
        `,
    },
    {
      Question:
        "Các chương trình đào tạo của Mind Connector có cần chất lượng đầu vào hay không?",
      Answer:
        "Các chương trình đào tạo của Mind Connector không yêu cầu chất lượng đầu vào. Miễn bạn là sinh viên đang muốn phấn đấu để trở nên ưu tú, hay muốn trở thành nhân viên xuất sắc sau khi ra trường. Miễn doanh nghiệp của bạn đang muốn đào tạo đội ngũ nhân viên tài ba, hay doanh nghiệp đang có vấn đề cần tìm kiếm sự tư vấn giải pháp chuyên nghiệp, tận tâm. Mind Connector sẽ có những chương trình phù hợp với từng nhu cầu của cá nhân, doanh nghiệp, từ đó có thể sát cánh cùng tất cả mọi người để hướng đến một tương lai thành công rực rỡ.",
    },
  ];

  let slides = [
    {
      Title: "Mind Connector ký hợp đồng tư vấn dài hạn với Tập Đoàn STP ",
      Body: "Mind Connector trở thành đơn vị tư vấn chính thức của Tập Đoàn STP tại Hà Nội về mô hình kinh doanh và xây dựng thương hiệu trong lĩnh vực Aquatech.",
      Image: {
        data: {
          attributes: {
            url: "/img/home-banner-01.png",
          },
        },
      },
    },
    {
      Title:
        "Mind Connector đảm nhiệm vai trò mới tại Hội Giáo Dục Nghề Nghiệp phía Nam ",
      Body: "Ngày 15/7/2022, Ban Giám Đốc Hội Giáo Dục Nghề Nghiệp phía Nam đã chính thức chỉ định Mind Connector làm Trung Tâm Đào Tạo Kỹ Năng và Kết Nối Doanh Nghiệp, cung cấp các khoá đào tạo cho các trường Cao Đẳng và Doanh Nghiệp thuộc hệ thống hỗ trợ đào tạo của Hội.",
      Image: {
        data: {
          attributes: {
            url: "/img/home-banner-02.png",
          },
        },
      },
    },
    {
      Title:
        "Mind Connector hợp tác cùng Hiệp hội Phát triển Nhân lực Logistics Việt Nam",
      Body: "Trong chuỗi sự kiện VALOMA CONFEST 2022, Mind Connector đã trở thành đối tác chiến lược với VALOMA trong lĩnh vực kết nối các chuyên gia trong lĩnh vực Logistics và hỗ trợ cho sinh viên, doanh nghiệp và nhà trường qua Job Fair 2022.",
      Image: {
        data: {
          attributes: {
            url: "/img/home-banner-03.png",
          },
        },
      },
    },
  ];

  // let query = gql`
  //   query GetHomepage {
  //     homepage {
  //       data {
  //         attributes {
  //           Content {
  //             __typename
  //             ... on ComponentSectionHeroSlider {
  //               HeroSlider {
  //                 Image {
  //                   data {
  //                     attributes {
  //                       url
  //                     }
  //                   }
  //                 }
  //                 Title
  //                 Body
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `;

  // try {
  //   const { data } = await client.query({
  //     query,
  //   });
  //   console.log(data);
  // } catch (error) {
  //   console.log(error);
  // }

  // let { teachers } = data.teachers.data;

  // let teachersList = teachers.filter((t) => {
  //   return t.attributes.featured == true;
  // });

  return {
    props: {
      slides,
      questions,
    },
  };
}
