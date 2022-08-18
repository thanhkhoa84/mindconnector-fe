import Container from './Container';
import { SectionHeading } from './Heading';

import styles from '../styles/QandA.module.scss';

const QandA = [
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

const QA = () => {
  return (
    <section className={styles.QandA}>
      <Container>
        <SectionHeading>Câu hỏi thường gặp</SectionHeading>
        <div>
          {QandA.map(({ question, answer }, index) => {
            return (
              <details key={index}>
                <summary className={styles.question}>{question}</summary>
                <p className={styles.anwser}>{answer}</p>
              </details>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default QA;
