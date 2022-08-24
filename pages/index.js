import Head from 'next/head';
import Image from 'next/image';

import QandA from '../components/QandA';
import ValueSection from '../components/home/ValueSection';
import HeroBanner from '../components/home/HeroBanner';
import Teachers from '../components/home/Teachers';
import About from '../components/home/About';
import Layout from './../components/Layout';
import Seo from './../components/SEO';

export default function Home({ questions }) {
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
          <QandA questions={questions}></QandA>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  /** TODO: get real QaA from backend */
  const questions = [
    {
      question: 'Làm thế nào để tôi có thể trở thành sinh viên ưu tú?',
      answer:
        'Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.',
    },
    {
      question: 'Tôi cần chuẩn bị hành trang gì cho một kỳ thực tập hoàn hảo?',
      answer:
        'Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.',
    },
    {
      question:
        'Liệu tôi có thể khởi nghiệp ngay từ khi còn ngồi trên ghế nhà trường?',
      answer:
        'Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.',
    },
    {
      question:
        'Doanh nghiệp tôi muốn đào tạo một đội ngũ nhân viên chất lượng, Mind Connector có chương trình nào phù hợp hay không?',
      answer:
        'Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.',
    },
  ];

  return {
    props: {
      questions,
    },
  };
}
