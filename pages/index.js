import Head from 'next/head';
import Image from 'next/image';

import QandA from '../components/QandA';
import ValueSection from '../components/home/ValueSection';
import HeroBanner from '../components/home/HeroBanner';
import Teachers from '../components/home/Teachers';
import About from '../components/home/About';
import Layout from './../components/Layout';
import Seo from './../components/SEO';

export default function Home() {
  const seo = {
    metaTitle: 'Mind Connector',
    metaDescription: 'Mind Connector',
    // shareImage: article.attributes.image,
    // article: true,
  };

  return (
    <>
      <Head>
        <title>Mind Connector</title>
        <meta name='description' content='Mind Connector' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        {/* <Seo seo={seo} /> */}
        <div>
          <HeroBanner />
          <ValueSection />
          <About />
          <Teachers />
          <QandA />
        </div>
      </Layout>
    </>
  );
}

