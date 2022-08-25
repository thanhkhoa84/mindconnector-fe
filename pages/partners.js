import Head from 'next/head';
import Container from '../components/Container';
import Layout from './../components/Layout';
import Seo from './../components/SEO';

const seo = {
  metaTitle: 'Mind Connector',
  metaDescription: 'Mind Connector',
  // shareImage: article.attributes.image,
  // article: true,
};

const Partners = () => (
  <>
    <Head>
      <title>Mind Connector</title>
      <meta name='description' content='Mind Connector' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <>
      <Seo seo={seo} />
      <h1>Partners</h1>
      <div></div>
    </>
  </>
);

export default Partners;
