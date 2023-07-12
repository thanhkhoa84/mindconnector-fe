import Seo from "@/components/SEO";
import Container from "@/components/Container";
import LeadingForm from "@/components/LeadingForm";
import SectionManager from "@/components/SectionManager";
import { fetchAPI } from "@/lib/api.js";

const CoursePost = ({ seo, sections }) => {
  return (
    <>
      <Seo seo={seo} />
      <main className="dark overflow-hidden bg-black">
        <div className="sr-only">
          <h1>{seo.metaTitle} | Mind Connector</h1>
        </div>

        <SectionManager sections={sections} />
        {/* <section className="dark relative flex aspect-[375/461] origin-center flex-col items-center justify-end overflow-hidden bg-cover bg-center bg-no-repeat sm:aspect-[2/1] sm:justify-center lg:aspect-[3/1.2]">
          <Image
            src={`/img/bg-services-dao-tao-noi-bo.png`}
            blurDataURL={`/img/bg-services-dao-tao-noi-bo.png`}
            placeholder="blur"
            alt=""
            width={1400}
            height={698}
            className="absolute inset-0 hidden h-full w-full object-cover sm:block"
          />
          <Image
            src={`/img/bg-services-dao-tao-noi-bo-mb.png`}
            blurDataURL={`/img/bg-services-dao-tao-noi-bo-mb.png`}
            placeholder="blur"
            alt=""
            width={375}
            height={461}
            className="absolute inset-0 h-full w-full object-cover sm:hidden"
          />
          <div className="relative px-8 py-12 text-center dark:text-white">
            <h2 className="mt-8 text-3xl font-black md:text-5xl">
              Đào tạo nội bộ
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
                      relative flex-shrink flex-grow basis-full border-l border-[#F5CBCC] pb-12 pl-8 
                      md:border-l-0  md:pl-0 md:pr-2 md:pt-12
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
                      className="absolute left-[-12px] top-[-5px] w-[24px] md:left-[-5px] md:top-[-12px]"
                    />
                    <h4 className="mb-4 inline-block rounded-lg bg-purple p-3 py-1 text-sm font-bold text-white">
                      {a.title}
                    </h4>
                    <div
                      className="leading-6 [&>ul>li+li]:mt-2 [&>ul>li]:list-outside [&>ul]:list-disc [&>ul]:pl-4"
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
            <h2 className="mx-auto mb-4 mt-0 text-center text-4xl font-black leading-[1.3]">
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
            <h2 className="mx-auto mb-4 mt-0 text-center text-4xl font-black leading-[1.3] dark:text-white">
              Đội ngũ chuyên gia
            </h2>
            <Teachers data={teachers} />
          </Container>
        </section>
        */}

        <section className="py-8 pb-12" id="contact">
          <Container>
            <LeadingForm />
          </Container>
        </section>
      </main>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const services = await fetchAPI(`/services`);
  let match = services.data.filter((s) => s.attributes.slug == slug);

  const query = {
    nested: true,
    populate: [
      "seo",
      "Content",
      "Content.button.Link",
      "Content.mentors",
      "Content.mentors.image",
      "Content.backgroundImage",
      "Content.backgroundImage.imageDesktop",
      "Content.backgroundImage.imageMobile",
      "Content.approachs",
      "Content.approachs.approach",
    ],
  };

  const page = await fetchAPI(`/services/${match[0].id}`, query);
  const seo = page.data.attributes.seo;
  const sections = page.data.attributes.Content;

  console.log(seo);

  return {
    props: {
      seo,
      sections,
    },
  };
}

export default CoursePost;
