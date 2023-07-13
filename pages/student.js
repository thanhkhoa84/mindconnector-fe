import Seo from "@/components/SEO";

import { fetchAPI } from "@/lib/api.js";
import SectionManager from "@/components/SectionManager";

import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "@/components/common/modal/GlobalModal";

const Student = ({ seo, sections }) => {
  const { showModal } = useGlobalModalContext();
  const createModal = () => {
    showModal(MODAL_TYPES.REGISTER_MODAL, {
      title: "Điền thông tin liên lạc, Mind Connector sẽ liên hệ bạn sau",
      program: "",
      course: "",
      confirmBtn: "Save",
    });
  };

  return (
    <>
      <Seo seo={seo} />
      <main className="overflow-hidden">
        <div className="sr-only">
          <h1>{seo.metaTitle} | Mind Connector</h1>
        </div>

        <SectionManager sections={sections} />

        {/* <div className="mt-12 py-12" id="about">
          <div className="flex flex-col overflow-hidden rounded-[20px] text-white md:flex-row">
            <div className="overflow-hidden">
              <Image
                src="/img/info-program-san-sang.png"
                width={704}
                height={400}
                alt=""
              />
            </div>
            <div className="flex-col justify-center bg-purple p-8 md:inline-flex md:min-w-[340px] md:rounded-br-[20px] md:rounded-tr-[20px] lg:justify-center">
              <h2 className="text-[28px] font-black md:text-[34px]">
                Về chương trình
              </h2>
              <p className="mt-4">
                <a
                  href="/docs/[Mind Connector] Sẵn sàng khởi nghiệp kinh doanh.pdf"
                  download
                  className="btn-primary block max-w-[300px] md:inline-block md:w-auto"
                >
                  Tải thông tin
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12" id="schedule">
          <h2 className="mb-3 text-center text-[34px] font-black md:text-left">
            Lịch học
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="flex-[3] items-center justify-center text-center md:pr-12 md:text-left">
              <p>
                <b>Chiêu sinh:</b> Tháng 10/2022
              </p>
              <p>
                <b>Chi tiết khóa học:</b> 20 buổi trong 8 tuần
              </p>
              <Image
                src="/img/icon-schedule.png"
                width={488}
                height={328}
                alt=""
                className="mx-auto mt-12 block"
              />
            </div>
            <div className="flex-[5]">
              <div>
                <p className="font-bold">Lịch học tháng 11</p>
                <Image
                  src="/img/schedule-nov.png"
                  width={512}
                  height={175}
                  alt=""
                  className="mt-4 w-full"
                />
              </div>
              <div className="mt-8">
                <p className="font-bold">Lịch học tháng 12</p>
                <Image
                  src="/img/schedule-dec.png"
                  width={512}
                  height={175}
                  alt=""
                  className="mt-4 w-full"
                />
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
};

export default Student;

export async function getServerSideProps() {
  const params = {
    nested: true,
    populate: [
      "seo",
      "Content",
      "Content.mentors",
      "Content.mentors.image",
      "Content.QA",
      "Content.partners",
      "Content.partners.image",
      "Content.button.Link",
      "Content.backgroundImage.imageDesktop",
      "Content.backgroundImage.imageMobile",
      "Content.programs.mon_hocs",
      "Content.programs.mon_hocs.thumbnailInfo",
      "Content.programs.mon_hocs.thumbnailInfo.image",
      "Content.link",
    ],
  };
  const page = await fetchAPI(`/student`, params);
  const seo = page.data.attributes.seo;
  const sections = page.data.attributes.Content;

  return {
    props: {
      seo,
      sections,
    },
  };
}
