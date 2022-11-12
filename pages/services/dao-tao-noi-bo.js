import Image from "next/future/image";
import Container from "../../components/Container";
import Seo from "../../components/SEO";
import Testimonial from "../../components/Testimonial";
import Teachers from "@/components/common/teachers/Teachers";
import LeadingForm from "@/components/LeadingForm";

const seo = {
  metaTitle: "Đào tạo nội bộ (Corporate Training)",
  metaDescription:
    "Mind Connector là một mạng lưới của các nhà tư vấn kinh doanh cùng các giảng viên vốn là các lãnh đạo và chuyên gia hàng đầu trong nhiều lĩnh vực khác nhau. Mind Connector kết nối tầm nhìn và tri thức để giúp doanh nghiệp, cá nhân phát triển và tăng trưởng mạnh mẽ trong tương lai",
};

const CoursePost = ({ approachs, teachers, testimonial }) => {
  return (
    <>
      <Seo seo={seo} />
      <main className="dark overflow-hidden bg-black">
        <section className="dark relative flex aspect-2 origin-center flex-col items-center justify-center bg-black bg-[url(/img/bg-service.png)] bg-cover bg-center bg-no-repeat py-20 xl:py-36">
          <div className="relative px-8 py-12 text-center dark:text-white">
            <h2 className="mt-8 text-3xl font-black md:text-5xl">
              Đào tạo nội bộ
            </h2>
            <p className="mt-8">
              <button
                onClick={() => {
                  document.getElementById("contact").scrollIntoView();
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
              Đội ngũ chuyên gia của Mind Connector đến từ khắp nơi trên thế
              giới (Mỹ, Anh, Úc, Singapore, Ấn Độ) với kinh nghiệm từ 15-20 năm
              trong các lĩnh vực nhân sự, tài chính, kinh doanh, truyền thông,
              logistics, sáng tạo, công nghệ thông tin, nghiên cứu thị trường
              v.v… Chúng tôi có thể cung cấp dịch vụ đào tạo nội bộ ngắn hạn và
              dài hạn theo đơn đặt hàng của doanh nghiệp. Chứng chỉ đầu ra sẽ do
              các đối tác đào tạo trong và ngoài nước đồng ký kết với Mind
              Connector.
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
                    <p
                      className="leading-8"
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
            <h1 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3]">
              Cảm nhận của khách hàng
            </h1>
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
            <h1 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white">
              Đội ngũ chuyên gia
            </h1>
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
      title: `Quan sát và đánh giá`,
      body: `
        - Tìm hiểu nhu cầu doanh nghiệp <br/>
        - Đánh giá kỹ năng bộ phận cần đào tạo
      `,
    },
    {
      title: `Đề xuất`,
      body: `
        - Các khoá học cần thiết <br/>
        - Mô hình đào tạo
      `,
    },
    {
      title: `Thực hiện đào tạo `,
      body: `
        - Thiết kế chuyên biệt cho doanh nghiệp <br/>
        - Kiểm tra tính áp dụng của khoá học <br/>
        - Đánh giá sau từng lớp học và điều chỉnh <br/>
        - Tư vấn nâng cao One-on-one
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
