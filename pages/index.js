import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic'

import QandA from '../components/QandA';
import ValueSection from '../components/home/ValueSection';
import Teachers from '../components/common/teachers/Teachers';
import About from '../components/home/About';
import Seo from './../components/SEO';
import Container from './../components/Container';

import styles from '../styles/pages/Home.module.scss';


const HeroBanner = dynamic(() => import('../components/home/HeroBanner'), {
  ssr: false
})

export default function Home({ slides, questions }) {
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
        <meta
          name='description'
          content='Mind Connector là một mạng lưới của các nhà tư vấn kinh doanh cùng các giảng viên vốn là các lãnh đạo và chuyên gia hàng đầu trong nhiều lĩnh vực khác nhau. Mind Connector kết nối tầm nhìn và tri thức để giúp doanh nghiệp, cá nhân phát triển và tăng trưởng mạnh mẽ trong tương lai'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <>
        {/* <Seo seo={seo} /> */}
        <HeroBanner slides={slides} />
        <ValueSection />
        <About />
        <section className={styles.homeTeachers}>
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

  let slides = [
    {
      headline: 'Workshop với Valoma và 8 trường Đại Học Phía Nam',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet in elit vestibulum. Aenean hendrerit arcu vitae commodo sem consequat phasellus',
      image: '/img/home-banner.png',
      link: '#',
    },
  ];

  return {
    props: {
      slides,
      questions,
    },
  };
}
