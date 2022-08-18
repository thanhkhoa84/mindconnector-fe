import Container from '../../components/Container';
import { SectionHeading } from '../../components/Heading';
import styles from './Teachers.module.scss';

const Teachers = () => {
  return (
    <section className={styles.teachers}>
      <Container>
        <SectionHeading align='center'>Đội ngũ giảng viên</SectionHeading>
      </Container>
    </section>
  );
};

export default Teachers;
