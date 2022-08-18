import Head from 'next/head';
import Image from 'next/image';

import QandA from '../components/QandA';
import ValueSection from '../components/home/ValueSection';
import HeroBanner from '../components/home/HeroBanner';
import Teachers from '../components/home/Teachers';
import About from '../components/home/About';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mind Connector</title>
        <meta name='description' content='Mind Connector' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <HeroBanner />
        <ValueSection />
        <About />
        <Teachers />
        <QandA />
      </div>
    </>
  );
}
