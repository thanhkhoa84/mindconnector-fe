import Image from "next/future/image";
import dynamic from "next/dynamic";
import Container from "@/components/Container";
import Seo from "@/components/SEO";
import Testimonial from "@/components/Testimonial";
// import Teachers from "@/components/common/teachers/Teachers";
import LeadingForm from "@/components/LeadingForm";

const Teachers = dynamic(
  () => import("@/components/common/teachers/Teachers"),
  {
    suspense: true,
  }
);

const seo = {
  metaTitle: "Tư vấn chiến lược thương hiệu",
  metaDescription:
    "Mind Connector kết nối tầm nhìn và tri thức để giúp doanh nghiệp, cá nhân phát triển và tăng trưởng mạnh mẽ trong tương lai",
  keywords: [
    "mind connector",
    "mindconnector",
    "kết nối",
    "tầm nhìn",
    "training",
    "mạng lưới",
    "doanh nghiệp",
    "cá nhân",
  ],
};

const CoursePost = ({ approachs, teachers, testimonial }) => {
  return (
    <>
      <Seo seo={seo} />
      <main className="dark overflow-hidden bg-black">
        <div className="sr-only">
          <h1>Mind Connector - Dịch vụ Tư vấn Chiến lược Thương hiệu</h1>
        </div>
        <section className="dark relative flex aspect-[375/461] origin-center flex-col items-center justify-end overflow-hidden bg-cover bg-center bg-no-repeat sm:aspect-[2/1] sm:justify-center lg:aspect-[3/1.2]">
          <Image
            src={`/img/bg-services-thuong-hieu.png`}
            blurDataURL={`/img/bg-services-thuong-hieu.png`}
            placeholder="blur"
            alt=""
            width={1400}
            height={698}
            className="absolute inset-0 hidden h-full w-full object-cover sm:block"
          />
          <Image
            src={`/img/bg-services-thuong-hieu-mb.png`}
            blurDataURL={`/img/bg-services-thuong-hieu-mb.png`}
            placeholder="blur"
            alt=""
            width={375}
            height={461}
            className="absolute inset-0 h-full w-full object-cover sm:hidden"
          />
          <div className="relative px-8 py-12 text-center dark:text-white">
            <h2 className="mt-8 text-3xl font-black md:text-5xl">
              Tư vấn Chiến lược Thương hiệu
            </h2>
            <p className="mt-8">
              <button
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
                type="button"
                className="min-w-[280px]"
              >
                <span className="btn-pink">Trò chuyện ngay với chuyên gia</span>
              </button>
            </p>
          </div>
        </section>

        <section className="dark relative flex origin-center flex-col items-center justify-center py-12 text-center text-white xl:py-24">
          <Container>
            <h2 className="text-[25px] font-black dark:text-white md:text-4xl">
              Giới thiệu dịch vụ
            </h2>
            <p className="mt-8">
              Trong khoảng thời gian 3 năm gần đây, ngày càng nhiều các doanh
              nghiệp Việt Nam đầu tư vào phần thương hiệu để thay đổi hình ảnh
              công ty và tăng giá trị doanh nghiệp trên nhiều mặt. Tuy nhiên
              không phải doanh nghiệp nào cũng có sự tiếp cận mang tiêu chuẩn
              cao cấp về mặt xây dựng thương hiệu. Tại Mind Connector, với đội
              ngũ chuyên gia xây dựng truyền thông và thương hiệu hàng đầu Việt
              Nam, các doanh nghiệp Việt Nam sẽ tự tin hơn trong việc xây dựng
              giá trị mới cho thương hiệu của mình.
            </p>
          </Container>
        </section>

        <section className="dark:text-white">
          <Container>
            <h2 className="mt-8 text-center text-[25px] font-black dark:text-white md:text-4xl">
              Phương pháp tiếp cận
            </h2>
            <div className="flex flex-col justify-evenly pt-16 md:flex-row">
              {approachs.map((a, idx) => {
                return (
                  <div
                    key={`approach-${idx}`}
                    className={`
                      relative flex-shrink flex-grow basis-full border-l border-[#F5CBCC] pl-8 pb-12 
                      md:border-l-0  md:pl-0 md:pt-12 md:pr-2
                      ${
                        idx === approachs.length - 1
                          ? "border-l-0 md:border-t-0"
                          : "md:border-t"
                      }
                    `}
                  >
                    <Image
                      src="/img/icon-steps.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="absolute top-[-5px] left-[-12px] w-[24px] md:top-[-12px] md:left-[-5px]"
                    />
                    <h4 className="mb-4 inline-block rounded-lg bg-purple p-3 py-1 text-sm font-bold text-white">
                      {a.title}
                    </h4>
                    <div
                      className="leading-6 [&>ul>li]:list-outside [&>ul>li+li]:mt-2 [&>ul]:list-disc [&>ul]:pl-4"
                      dangerouslySetInnerHTML={{ __html: a.body }}
                    />
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="invisible hidden py-12 dark:text-white">
          <Container>
            <h2 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3]">
              Cảm nhận của khách hàng
            </h2>
            <p className="mt-4 text-center">
              Hơn 200 doanh nghiệp đang đồng hành cùng{" "}
              <span className="inline-block whitespace-nowrap">
                Mind Connector
              </span>
            </p>
            <div className="mt-8">
              <Testimonial data={testimonial} />
            </div>
          </Container>
        </section>

        <section className="py-12 dark:text-white">
          <Container>
            <h2 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white">
              Đội ngũ chuyên gia
            </h2>
            <Teachers data={teachers} />
          </Container>
        </section>

        <section className="py-8 pb-12" id="contact">
          <Container>
            <LeadingForm />
          </Container>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  /** TODO: get real QaA from backend */
  let approachs = [
    {
      title: `Phân tích`,
      body: `
        <ul>
          <li>Hoạt động thương hiệu hiện tại</li>
          <li>Đối thủ</li>
          <li>Mô hình kinh doanh</li>
          <li>Tầm nhìn doanh nghiệp</li>
        </ul>
      `,
    },
    {
      title: `Đề xuất`,
      body: `
        <ul>
          <li>Gói xây dựng thương hiệu phù hợp</li>
          <li>Lộ trình thực thi</li>
        </ul>
      `,
    },
    {
      title: `Đồng hành thực thi`,
      body: `
        <ul>
          <li>Thực hiện giám sát sản xuất</li>
          <li>Lên kế hoạch truyền thông</li>
          <li>Triển khai cùng các đối tác sáng tạo</li>
          <li>Lập khung kiểm soát chỉ tiêu truyền thông </li>  
        </ul>     
      `,
    },
  ];

  let testimonial = {
    headline: `Tôi có một khoảng thời gian được trải nghiệm thật sự cảm giác
    lăn xả vào dự án khi tham gia khóa đào tạo này.`,
    body: `Tôi có một khoảng thời gian được trải nghiệm thật sự cảm giác lăn xả
    vào dự án khi tham gia khóa đào tạo này. Trước đây tôi cũng biết được
    rằng khởi nghiệp không hề đơn giản, từ lúc ấp ủ ý tưởng đến lúc quyết
    tâm thực thi tôi rất lo lắng vì bản thân còn loay hoay, nhiều vấn đề
    chưa sáng tỏ. Khi tôi lên kế hoạch được 80% thì gặp được chương trình
    này. Phải nói rằng những thông tin trong khóa học rất thiết thực, các
    giảng viên là những người đã làm start up, đang thành công theo mô
    hình tự thân, tôi thấy vô cùng phù hợp với hoàn cảnh hiện tại của
    mình. Ban đầu tôi hơi lấn cấn về chi phí khóa học, tuy nhiên khi vào
    học thì không phải chỉ được học và tôi được các chuyên gia tư vấn thực
    sự trên kế hoạch kinh doanh của chính tôi. Học xong, tôi thấy tự tin
    hơn và biết rõ mình muốn gì hơn trong tương lai.`,
    peep: {
      name: `Chị Phạm Thị Hải An`,
      title: `
        Học viên Chương trình nâng cao <br/>
        <b>“Thành công trong khởi sự kinh doanh”</b> 
      `,
      image: `/img/testimonial.png`,
    },
  };

  let teachers = [
    {
      entitled: "Bà",
      name: "Nina Trần",
      imgUrl: "/img/mentors/nina-tran-02.png",
      title: "Chuyên gia <br/>Tư vấn Thương hiệu",
    },
    {
      entitled: "Bà",
      name: "Mandy Nguyễn",
      imgUrl: "/img/mentors/mandy-nguyen-02.png",
      title: "Chuyên gia <br/>Sales - Marketing",
    },
    {
      entitled: "Bà",
      name: "Vinkai AR Bhatia",
      imgUrl: "/img/mentors/vinkai-bhatia.png",
      title: "Chuyên gia <br/>Chiến lược",
    },
    {
      entitled: "Bà",
      name: "Duy Trần",
      imgUrl: "/img/mentors/duy-tran.png",
      title: "Chuyên gia <br/>Vận hành và HR",
    },
  ];

  return {
    props: {
      approachs,
      testimonial,
      teachers,
    },
  };
}

export default CoursePost;
