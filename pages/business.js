import Head from 'next/head';
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/future/image";
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

const LogoList = dynamic(() => import("./../components/LogoList"), {
  ssr: false,
});

const Business = ({ questions, logoslist }) => {
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
        <section className="dark relative flex origin-center flex-col items-center justify-center bg-black bg-[url(/img/bg-video.png)] bg-cover bg-center bg-no-repeat py-20 xl:py-44">
          <div className="relative py-24 text-center dark:text-white">
            <a className="inline-block cursor-pointer">
              <Image
                src="/img/btn-play-video.svg"
                width={80}
                height={80}
                alt=""
                className="block"
              />
            </a>
            <h2 className="mt-8 text-4xl font-black">
              Trusted Insights from top leading experts
            </h2>
            <p className="mt-4">
              Provide world-class training & business consultancy developed by
              leading experts in the industry
            </p>
            <p className="mt-4">
              <Link href="contact">
                <span className="btn-primary">Contact us now</span>
              </Link>
            </p>
          </div>
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

