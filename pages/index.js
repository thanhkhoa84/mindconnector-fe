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
      question:
        "Tôi là sinh viên năm 4, tôi vẫn chưa biết xác định tương lai sau này của mình như thế nào? Em phải làm gì?",
      answer:
        'Việc xác định hướng tương lai ngay từ khi ngồi trên ghế nhà trường rất quan trọng. Vì điều này sẽ giúp bạn tiết kiệm thời gian, chọn được nghề nghiệp phù hợp, từ đó sẽ có hướng đi chắc chắn cho tương lai. Để có một tương lai vững vàng bạn nên có một nền tảng kiến thức vững chắc. Mind Connector sẽ cung cấp những chương trình đào tạo với những kiến thức chuyên sâu và thiết thực để bạn có thể định hướng tương lai. Trong đó có hai chương trình nổi bật là “Thành công trong ứng tuyển" để bạn có thể tự tin ứng tuyển vào bất kì vị trí nào tại các doanh nghiệp, và chương trình “Sẵn sàng khởi nghiệp kinh doanh" để bạn có thể làm chủ chính doanh nghiệp của mình.',
    },
    {
      question: "Mind Connector có đảm bảo kết quả sau khi học tập hay không?",
      answer:
        "Mỗi cá nhân, mỗi doanh nghiệp sẽ có nhu cầu và định hướng phát triển riêng. Vì thế Mind Connector xây dựng những chương trình học với những kiến thức nền tảng, dù đa dạng, khác biệt nhưng vẫn đáp ứng được nhu cầu, nguyện vọng của từng cá nhân. Từ những kiến thức nền tảng này, bạn sẽ chắc chắn xây dựng được lộ trình phát triển cho tương lai từ đó đạt được kết quả tươi sáng nhất. ",
    },
  ];

  let slides = [
    {
      headline: "Buổi làm việc của MC và Tập đoàn Nhựa Trường Phát tại Hà Nội",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet in elit vestibulum. Aenean hendrerit arcu vitae commodo sem consequat phasellus",
      image: "/img/home-banner.png",
      link: "#",
    },
    {
      headline: "Workshop với Valoma và 8 trường Đại Học Phía Nam",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet in elit vestibulum. Aenean hendrerit arcu vitae commodo sem consequat phasellus",
      image: "/img/home-banner.png",
      link: "#",
    },
    {
      headline: "Workshop với Valoma và 8 trường Đại Học Phía Nam",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet in elit vestibulum. Aenean hendrerit arcu vitae commodo sem consequat phasellus",
      image: "/img/home-banner.png",
      link: "#",
    },
    {
      headline: "Workshop với Valoma và 8 trường Đại Học Phía Nam",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet in elit vestibulum. Aenean hendrerit arcu vitae commodo sem consequat phasellus",
      image: "/img/home-banner.png",
      link: "#",
    },
  ];

  return {
    props: {
      slides,
      questions,
    },
  };
}
