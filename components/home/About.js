import Image from "next/image";
import Container from "@/components/Container";

const About = () => {
  return (
    <section className="pt-[3em]">
      <Container>
        <h2 className="mx-auto mb-4 mt-0 text-center text-4xl font-black leading-[1.3] dark:text-white">
          Về Mind Connector
        </h2>
        <p className="text-center lg:mx-auto lg:my-0 lg:max-w-[46%]">
          Mind Connector là một mạng lưới của các nhà tư vấn kinh doanh cùng các
          giảng viên vốn là các lãnh đạo và chuyên gia hàng đầu trong nhiều lĩnh
          vực khác nhau giúp các doanh nghiệp và cá nhân phát triển mạnh mẽ
          trong tương lai.
        </p>
        <div className="my-[60px]">
          <Image
            src="/img/home-about.png"
            alt=""
            width={2080}
            height={880}
            blurDataURL="/img/home-about.png"
            placeholder="blur"
            className="hidden md:inline-block"
          />
          <Image
            src="/img/home-about-mb.png"
            alt=""
            width={690}
            height={916}
            blurDataURL="/img/home-about-mb.png"
            placeholder="blur"
            className="md:hidden"
          />
        </div>
      </Container>
    </section>
  );
};

export default About;
