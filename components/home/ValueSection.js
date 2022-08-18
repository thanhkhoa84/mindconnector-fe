import Container from '../../components/Container';
import { SectionHeading } from '../../components/Heading';
import styles from './Value.module.scss';

const ValueSection = () => {
  return (
    <section className={styles.value}>
      <Container>
        <SectionHeading align='center'>
          Cùng Mind Connector tạo ra những giá trị đích thực
        </SectionHeading>
      </Container>
    </section>
  );
};

export default ValueSection;
