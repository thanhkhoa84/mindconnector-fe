import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { getStrapiMedia } from "@/lib/media";

const ValueSection = ({ text, values }) => {
  return (
    <section className="bg-[#FFF7ED] py-[4em]">
      <Container>
        <h2
          className={`mx-auto mb-4 mt-0 text-center text-4xl font-black leading-[1.3] dark:text-white md:max-w-[80%]`}
        >
          {text.title}
        </h2>
        <div
          className={`mt-[3em] flex flex-col justify-between gap-6 self-stretch pb-[1em] xs:flex-row xs:gap-4 lg:items-center lg:gap-12 lg:self-auto`}
        >
          {values.map((value, index) => {
            return (
              <div
                className="relative flex flex-row  justify-between"
                key={`value-${index}`}
              >
                <div
                  className={`
              relative -mr-[2em] ml-0 mt-[1.5em] flex max-w-full flex-col justify-between rounded-2xl border-4 border-white bg-gradient-to-br from-[#FFF4EB] via-[#FFE4D5] to-[#FDD2D3] px-4 pb-4 pt-[2.5em] shadow-lg lg:my-[1.5em] lg:w-[55%] lg:pr-[2em]
            `}
                >
                  <span
                    className="absolute -top-[30px] block w-[66px]"
                    aria-hidden={true}
                  >
                    <Image
                      src={getStrapiMedia(value.icon)}
                      className="block"
                      width="66"
                      height="66"
                      blurDataURL={getStrapiMedia(value.icon)}
                      placeholder="blur"
                      alt=""
                    />
                  </span>
                  <h3 className="text-[19px] font-black leading-6 md:text-[22px] text-balance">
                    {/* Dành cho <br className="md:hidden lg:inline" />
                    sinh viên */}
                    {value.title}
                  </h3>
                  <p className="mt-4 hidden lg:block">
                    {value.descriptionDesktop}
                  </p>
                  <p className="mt-4 lg:hidden">{value.descriptionMobile}</p>
                  <Link legacyBehavior href={value.link.href}>
                    <a className="link-arrow mt-4 font-black leading-none lg:mt-12">
                      {value.link.title}
                    </a>
                  </Link>
                </div>
                <div className="relative z-10 hidden overflow-hidden rounded-3xl object-cover shadow-lg lg:flex lg:w-[260px]">
                  <Image
                    src={getStrapiMedia(value.image)}
                    alt=""
                    width="300"
                    height="333"
                    blurDataURL={getStrapiMedia(value.image)}
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}

          {/* <div className="relative flex flex-row  justify-between">
            <div
              className={`
              relative -mr-[2em] ml-0 mt-[1.5em] flex max-w-full flex-col justify-between rounded-2xl border-4 border-white bg-gradient-to-br from-[#FFF4EB] via-[#FFE4D5] to-[#FDD2D3] px-4 pb-4 pt-[2.5em] shadow-lg lg:my-[1.5em] lg:w-[55%] lg:pr-[2em]
            `}
            >
              <span
                className="absolute -top-[30px] block w-[66px]"
                aria-hidden={true}
              >
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
              <h3 className="text-[19px] font-black leading-6 md:text-[22px]">
                Dành cho <br className="md:hidden lg:inline" />
                doanh nghiệp
              </h3>
              <p className="mt-4 hidden lg:block">
                Đào tạo năng lực của nhân viên để doanh nghiệp không chỉ có một
                nguồn nhân lực chất lượng, mà còn có thể lớn mạnh hơn từng ngày.
              </p>
              <p className="mt-4 lg:hidden">
                Đào tạo nguồn nhân lực chất lượng để giúp công ty thêm lớn mạnh.
              </p>
              <Link legacyBehavior href="/business">
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
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default ValueSection;
