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

const News = () => (
  <>
    <Head>
      <title>Mind Connector</title>
      <meta name="description" content="Mind Connector" />
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

export default News;
