import Container from './Container';
import { SectionHeading } from './Heading';

import styles from '../styles/components/QandA.module.scss';

const QA = ({ questions }) => {
  return (
    <section className={styles.QandA}>
      <Container>
        <header className={styles.QandAHeading}>
          <SectionHeading>Câu hỏi thường gặp</SectionHeading>
        </header>
        <div className={styles.QandADetails}>
          {questions &&
            questions.map(({ question, answer }, index) => {
              return (
                <details key={`qa-${index}`} className={styles.details}>
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
