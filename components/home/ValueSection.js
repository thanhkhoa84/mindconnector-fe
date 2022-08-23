import Container from '../../components/Container';
import { SectionHeading } from '../../components/Heading';
import styles from './Value.module.scss';
import LogoList from './../LogoList';

const ValueSection = () => {
  return (
    <section className={styles.value}>
      <Container>
        <SectionHeading align='center'>
          Cùng Mind Connector tạo ra những giá trị đích thực
        </SectionHeading>
      </Container>

      <LogoList
        backgroundColor='#FFEFDB'
        title='Được tin chọn bởi nhiều trường đại học và doanh nghiệp'
        list={[
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
        ]}
      />
    </section>
  );
};

export default ValueSection;
