import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from "next/image";
import Container from "../../components/Container";
import { SectionHeading } from "../../components/Heading";

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
          className={`mt-[3em] mb-[4em] flex flex-col justify-between gap-6 self-stretch pb-[1em] xs:flex-row xs:gap-3 lg:items-center lg:gap-4 lg:self-auto`}
        >
          <div className="relative flex flex-row  justify-between">
            <div
              className={`
              relative mt-[1.5em] ml-0 -mr-[2em] flex max-w-full flex-col justify-between rounded-2xl border-4 border-white bg-gradient-to-b from-[#f5cbcc] to-[#ffaf43] px-4 pt-[2.5em] pb-4 shadow-lg lg:my-[1.5em] lg:w-[55%] lg:pr-[2em]
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
              <h2 className="text-[19px] font-black leading-6 md:text-[22px]">
                Dành cho <br className="md:hidden" />
                sinh viên
              </h2>
              <p className="mt-4 hidden lg:block">
                Xây dựng nền móng vững chắc với các kỹ năng quan trọng để sẵn
                sàng theo đuổi và thành công trong công việc hằng mong muốn.
              </p>
              <p className="mt-4 lg:hidden">
                Xây dựng nền móng vững chắc để sẵn sàng theo đuổi thành công.
              </p>
              <Link href="student">
                <span className="link-arrow mt-4 font-black leading-none lg:mt-12">
                  Discover more
                </span>
              </Link>
            </div>
            <div className="relative z-10 hidden overflow-hidden rounded-3xl object-cover shadow-lg lg:flex lg:w-[260px]">
              <img
                src="/img/value-student.png"
                alt=""
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative flex flex-row  justify-between">
            <div
              className={`
              relative mt-[1.5em] ml-0 -mr-[2em] flex max-w-full flex-col justify-between rounded-2xl border-4 border-white bg-gradient-to-b from-[#f5cbcc] to-[#ffaf43] px-4 pt-[2.5em] pb-4 shadow-lg lg:my-[1.5em] lg:w-[55%] lg:pr-[2em]
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
              <h2 className="text-[19px] font-black leading-6 md:text-[22px]">
                Dành cho <br className="md:hidden" />
                doanh nghiệp
              </h2>
              <p className="mt-4 hidden lg:block">
                Đào tạo năng lực của nhân viên để doanh nghiệp không chỉ có một
                nguồn nhân lực chất lượng, mà còn có thể lớn mạnh hơn từng ngày.
              </p>
              <p className="mt-4 lg:hidden">
                Đào tạo nguồn nhân lực chất lượng để giúp công ty thêm lớn mạnh.
              </p>
              <Link href="business">
                <span className="link-arrow mt-4 font-black leading-none lg:mt-12">
                  Discover more
                </span>
              </Link>
            </div>
            <div className="relative z-10 hidden overflow-hidden rounded-3xl object-cover shadow-lg lg:flex lg:w-[260px]">
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
