import Head from 'next/head';
import Container from '../components/Container';
import Layout from './../components/Layout';
import Seo from './../components/SEO';
import { BannerHeading } from "../components/Heading";

const seo = {
  metaTitle: "Mind Connector",
  metaDescription: "Mind Connector",
  // shareImage: article.attributes.image,
  // article: true,
};

const Explore = () => (
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
        <Container>
          <BannerHeading>News</BannerHeading>
        </Container>
      </div>
    </>
  </>
);

export default Explore;
