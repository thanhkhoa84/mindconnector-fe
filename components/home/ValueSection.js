import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from "next/image";
import Container from "../../components/Container";
import { SectionHeading } from "../../components/Heading";
import styles from "./Value.module.scss";

const LogoList = dynamic(() => import("./../LogoList"), {
  ssr: false,
});

const ValueSection = () => {
  const list = ["1", "2", "3", "4", "5", "6"];
  return (
    <section className="bg-[#FFF7ED] pt-[4em]">
      <Container>
        <SectionHeading align="center">
          Cùng Mind Connector tạo ra những giá trị đích thực
        </SectionHeading>
        <div
          className={`mt-[3em] mb-[4em] flex justify-between gap-6 self-stretch pb-[1em] lg:items-center lg:self-auto`}
        >
          <div className="relative flex flex-row">
            <div
              className={`
              relative my-[1.5em] ml-0 -mr-[2em] flex max-w-full flex-col rounded-2xl border-4 border-white bg-gradient-to-b from-[#f5cbcc] to-[#ffaf43] px-4 pt-[2.5em] pb-4 shadow-lg md:w-[55%] md:pr-[10%]
            `}
            >
              <span className="absolute -top-[30px] block w-[66px]">
                <Image
                  src="/img/icon-value-for-student.png"
                  className="block"
                  width="66"
                  height="66"
                  alt=""
                />
              </span>
              <h2 className="text-xl font-black leading-6 md:text-[22px]">
                Dành cho <br className="md:hidden" />
                sinh viên
              </h2>
              <p className="mt-4 hidden md:block">
                Xây dựng nền móng vững chắc với các kỹ năng quan trọng để sẵn
                sàng theo đuổi và thành công trong công việc hằng mong muốn.
              </p>
              <p className="mt-4 md:hidden">
                Xây dựng nền móng vững chắc để sẵn sàng theo đuổi thành công.
              </p>
              <Link href="student">
                <span className="link-arrow mt-4 font-black leading-none lg:mt-12">
                  Discover more
                </span>
              </Link>
            </div>
            <div className="relative z-10 hidden overflow-hidden rounded-3xl object-cover shadow-lg md:flex md:w-[300px]">
              <img
                src="/img/value-student.png"
                alt=""
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative flex flex-row">
            <div
              className={`
              relative my-[1.5em] ml-0 -mr-[2em] flex max-w-full flex-col rounded-2xl border-4 border-white bg-gradient-to-b from-[#f5cbcc] to-[#ffaf43] px-4 pt-[2.5em] pb-4 shadow-lg md:w-[55%] md:pr-[10%]
            `}
            >
              <span className="absolute -top-[30px] block w-[66px]">
                <Image
                  src="/img/icon-value-for-business.png"
                  className="block"
                  width="66"
                  height="66"
                  alt=""
                />
              </span>
              <h2 className="text-xl font-black leading-6 md:text-[22px]">
                Dành cho <br className="md:hidden" />
                doanh nghiệp
              </h2>
              <p className="mt-4 hidden md:block">
                Đào tạo năng lực của nhân viên để doanh nghiệp không chỉ có một
                nguồn nhân lực chất lượng, mà còn có thể lớn mạnh hơn từng ngày.
              </p>
              <p className="mt-4 md:hidden">
                Đào tạo nguồn nhân lực chất lượng để giúp công ty thêm lớn mạnh.
              </p>
              <Link href="business">
                <span className="link-arrow mt-4 font-black leading-none lg:mt-12">
                  Discover more
                </span>
              </Link>
            </div>
            <div className="relative z-10 hidden overflow-hidden rounded-3xl object-cover shadow-lg md:flex md:w-[300px]">
              <img
                src="/img/value-business.png"
                alt=""
                className="object-cover"
              />
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
