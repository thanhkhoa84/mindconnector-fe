import Link from "next/link";
import Image from "next/future/image";
import Container from "@/components/Container";
import LogoList from "./../LogoList";

const ValueSection = () => {
  return (
    <section className="bg-[#FFF7ED] pt-[4em]">
      <Container>
        <h2
          className={`mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white md:max-w-[80%]`}
        >
          Mind Connector cung cấp các chương trình đào tạo cho sinh viên và
          doanh nghiệp
        </h2>
        <div
          className={`mt-[3em] mb-[4em] flex flex-col justify-between gap-6 self-stretch pb-[1em] xs:flex-row xs:gap-4 lg:items-center lg:gap-12 lg:self-auto`}
        >
          <div className="relative flex flex-row  justify-between">
            <div
              className={`
              relative mt-[1.5em] ml-0 -mr-[2em] flex max-w-full flex-col justify-between rounded-2xl border-4 border-white bg-gradient-to-br from-[#FFF4EB] via-[#FFE4D5] to-[#FDD2D3] px-4 pt-[2.5em] pb-4 shadow-lg lg:my-[1.5em] lg:w-[55%] lg:pr-[2em]
            `}
            >
              <span className="absolute -top-[30px] block w-[66px]">
                <Image
                  src="/img/icon-value-for-student.png"
                  className="block"
                  width="66"
                  height="66"
                  blurDataURL="/img/icon-value-for-student.png"
                  placeholder="blur"
                  alt=""
                />
              </span>
              <h2 className="text-[19px] font-black leading-6 md:text-[22px]">
                Dành cho <br className="md:hidden lg:inline" />
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
                  Khám phá
                </span>
              </Link>
            </div>
            <div className="relative z-10 hidden overflow-hidden rounded-3xl object-cover shadow-lg lg:flex lg:w-[260px]">
              <Image
                src="/img/value-student.png"
                alt=""
                width="300"
                height="333"
                blurDataURL="/img/value-student.png"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative flex flex-row  justify-between">
            <div
              className={`
              relative mt-[1.5em] ml-0 -mr-[2em] flex max-w-full flex-col justify-between rounded-2xl border-4 border-white bg-gradient-to-br from-[#FFF4EB] via-[#FFE4D5] to-[#FDD2D3] px-4 pt-[2.5em] pb-4 shadow-lg lg:my-[1.5em] lg:w-[55%] lg:pr-[2em]
            `}
            >
              <span className="absolute -top-[30px] block w-[66px]">
                <Image
                  src="/img/icon-value-for-business.png"
                  className="block"
                  width="66"
                  height="66"
                  blurDataURL="/img/icon-value-for-business.png"
                  placeholder="blur"
                  alt=""
                />
              </span>
              <h2 className="text-[19px] font-black leading-6 md:text-[22px]">
                Dành cho <br className="md:hidden lg:inline" />
                doanh nghiệp
              </h2>
              <p className="mt-4 hidden lg:block">
                Đào tạo năng lực của nhân viên để doanh nghiệp không chỉ có một
                nguồn nhân lực chất lượng, mà còn có thể lớn mạnh hơn từng ngày.
              </p>
              <p className="mt-4 lg:hidden">
                Đào tạo nguồn nhân lực chất lượng để giúp công ty thêm lớn mạnh.
              </p>
              <Link href="/business">
                <span className="link-arrow mt-4 font-black leading-none lg:mt-12">
                  Khám phá
                </span>
              </Link>
            </div>
            <div className="relative z-10 hidden overflow-hidden rounded-3xl object-cover shadow-lg lg:flex lg:w-[260px]">
              <Image
                src="/img/value-business.png"
                alt=""
                width="300"
                height="333"
                blurDataURL="/img/value-business.png"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="mt-8">
        <LogoList title="Mind Connector đang là đối tác của các trường Đại học và Doanh nghiệp" />
      </div>
    </section>
  );
};

export default ValueSection;
