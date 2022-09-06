import Link from 'next/link';
import dynamic from 'next/dynamic';

import Container from '../../components/Container';
import { SectionHeading } from '../../components/Heading';
import styles from "./Value.module.scss";

const LogoList = dynamic(() => import("./../LogoList"), {
  ssr: false,
});

const ValueSection = () => {
  const list = ["1", "2", "3", "4", "5", "6"];
  return (
    <section className={styles.value}>
      <Container>
        <SectionHeading align="center">
          Cùng Mind Connector tạo ra những giá trị đích thực
        </SectionHeading>
        <div className={`mt-[3em] ${styles.valueCardContainer}`}>
          <div className={styles.valueCard}>
            <div className={`${styles.valueInfo} value-for-student`}>
              <span
                className={`${styles.valueIcon} ${styles.valueIcon__Student}`}
              ></span>
              <h2>
                Dành cho <br />
                sinh viên
              </h2>
              <p className="hidden md:block">
                Xây dựng nền móng vững chắc với các kỹ năng quan trọng để sẵn
                sàng theo đuổi và thành công trong công việc hằng mong muốn.
              </p>
              <p className="md:hidden">
                Xây dựng nền móng vững chắc để sẵn sàng theo đuổi thành công.
              </p>
              <Link href="student">Discover more</Link>
            </div>
            <div className={styles.valueImage}>
              <img src="/img/value-student.png" alt="" />
            </div>
          </div>
          <div className={styles.valueCard}>
            <div className={`${styles.valueInfo} value-for-business`}>
              <span
                className={`${styles.valueIcon} ${styles.valueIcon__Business}`}
              ></span>
              <h2>
                Dành cho <br />
                doanh nghiệp
              </h2>
              <p className="hidden md:block">
                Đào tạo năng lực của nhân viên để doanh nghiệp không chỉ có một
                nguồn nhân lực chất lượng, mà còn có thể lớn mạnh hơn từng ngày.
              </p>
              <p className="md:hidden">
                Đào tạo nguồn nhân lực chất lượng để giúp công ty thêm lớn mạnh.
              </p>
              <Link href="#">Discover more</Link>
            </div>
            <div className={styles.valueImage}>
              <img src="/img/value-business.png" alt="" />
            </div>
          </div>
        </div>
      </Container>

      <LogoList
        backgroundColor="#FFFDFA"
        title="Được tin chọn bởi nhiều trường đại học và doanh nghiệp"
        list={list}
      />
    </section>
  );
};

export default ValueSection;
