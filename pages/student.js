import Head from 'next/head';
import Layout from './../components/Layout';
import Container from './../components/Container';
import QandA from './../components/QandA';
import Seo from './../components/SEO';

const seo = {};

const Student = ({ questions }) => (
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
      <Seo seo={seo} />
      <Container>
        <h1>Students</h1>
        <div>
          <div id='thanh-cong-trong-hoc-tap'>thanh cong trong hoc tap</div>
          <div id='thanh-cong-trong-ung-tuyen'>ung tuyen</div>
          <div id='thanh-cong-trong-khoi-su-kinh-doanh'>startup</div>
          <QandA questions={questions} />
        </div>
      </Container>
    </>
  </>
);

export default Student;

export async function getStaticProps() {
  /** TODO: get real QaA from backend */
  const questions = [
    {
      question: 'Các chương trình học có cần yêu cầu đầu vào hay không?',
      answer:
        'Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.',
    },
    {
      question:
        'Làm cách nào tôi có thể trao đổi với giảng viên khi có những thắc mắc về bài học?',
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
        'Ngoài video bài giảng, tôi có nhận được tài liệu khác hay không?',
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

