import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Container from "@/components/Container";
import Seo from "@/components/SEO";
// import Teachers from "@/components/common/teachers/Teachers";
import StudentCardList from "@/components/common/courses/StudentCardList";
import { programs } from "@/data/global";

const Teachers = dynamic(
  () => import("@/components/common/teachers/Teachers"),
  {
    suspense: true,
  },
);

import { fetchAPI } from "@/lib/api.js";
import SectionManager from "@/components/SectionManager";

import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "@/components/common/modal/GlobalModal";

const Student = ({ seo, sections, questions, logoslist, programs }) => {
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
          <h1>Mind Connector - Dành cho sinh viên</h1>
        </div>

        <SectionManager sections={sections} />

        {/* <section className={`py-[3em] `}>
          <Container>
            <div className="mx-auto my-0 text-base font-bold leading-[1] text-gray dark:text-white">
              Chương trình cơ bản
            </div>
            <h2 className="mx-auto mb-4 mt-0 text-4xl font-black leading-[1.3] dark:text-white">
              Kỹ Năng Xã Hội
            </h2>
            <p>
              <b>“Nền tảng vững chắc, tương lai khởi sắc”</b> <br />
              Trang bị những kỹ năng cần thiết ngay từ khi ngồi trên giảng đường
              để bạn có một hành trang vững chắc cho tương lai.
            </p>
            <p>
              <Link legacyBehavior href="/programs/ky-nang-xa-hoi">
                <span className="link-arrow">Tìm hiểu thêm</span>
              </Link>
            </p>
          </Container>
          <div className="course-card relative mt-8 block py-8">
            <StudentCardList courses={programs.soCap} />
          </div>
        </section>
        <section className={`bg-[#FFEFDB]  py-[3em]`}>
          <Container>
            <div className="mx-auto my-0 text-base font-bold leading-[1] text-gray dark:text-white">
              Chương trình trung cấp
            </div>
            <h2 className="mx-auto mb-4 mt-0 text-4xl font-black leading-[1.3] dark:text-white">
              Vững Vàng Lập Nghiệp
            </h2>
            <p>
              <b>“Kỹ năng thiết thực, dẫn lối thành công”</b> <br />
              Chuẩn bị một phong cách làm việc chuyên nghiệp cùng với những kỹ
              năng quan trọng chính là chìa khoá để thành công.
            </p>
            <p>
              <Link legacyBehavior href="/programs/vung-vang-lap-nghiep">
                <span className="link-arrow">Tìm hiểu thêm</span>
              </Link>
            </p>
          </Container>
          <div>
            <div className="course-card relative mt-8 block py-8">
              <StudentCardList courses={programs.trungCap} />
            </div>
          </div>
        </section>
        <section className={`py-[3em]`}>
          <Container>
            <div className="mx-auto my-0 text-base font-bold leading-[1] text-gray dark:text-white">
              Chương trình nâng cao
            </div>
            <h2 className="mx-auto mb-4 mt-0 text-4xl font-black leading-[1.3] dark:text-white">
              Sẵn Sàng Khởi Nghiệp Kinh Doanh
            </h2>
            <p>
              <b>“Khởi nghiệp thuận lợi, chạm đỉnh vinh quang”</b> <br />
              Vững vàng kiến thức và kỹ năng để khởi sự kinh doanh thuận lợi.
            </p>
            <p>
              <Link
                legacyBehavior
                href="/programs/san-sang-khoi-nghiep-kinh-doanh"
              >
                <span className="link-arrow">Tìm hiểu thêm</span>
              </Link>
            </p>
          </Container>
          <div>
            <div className="course-card relative mt-8 block py-8">
              <StudentCardList courses={programs.caoCap} />
            </div>
          </div>
        </section> */}
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
      "Content.backgroundImage, imageMobile",
      "Content.programs.mon_hocs",
      "Content.programs.mon_hocs.thumbnailInfo",
      "Content.programs.mon_hocs.thumbnailInfo.image",
      "Content.link",
    ],
  };
  const page = await fetchAPI(`/student`, params);
  const seo = page.data.attributes.seo;
  const sections = page.data.attributes.Content;

  /** TODO: get real QaA from backend */
  const questions = [
    {
      Question: "Các chương trình học có cần yêu cầu đầu vào hay không?",
      Answer:
        "Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.",
    },
    {
      Question:
        "Làm cách nào tôi có thể trao đổi với giảng viên khi có những thắc mắc về bài học?",
      Answer:
        "Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.",
    },
    {
      Question:
        "Liệu tôi có thể khởi nghiệp ngay từ khi còn ngồi trên ghế nhà trường?",
      Answer:
        "Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.",
    },
    {
      Question:
        "Ngoài video bài giảng, tôi có nhận được tài liệu khác hay không?",
      Answer:
        "Mauris ut dapibus lacus, sodales tempus ante. Donec faucibus sem vestibulum, gravida quam at, ultricies tellus. Etiam ac bibendum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat quam, ac iaculis neque tempus non. Cras mattis auctor. Donec rutrum lobortis est, et faucibus arcu sagittis eu.",
    },
  ];

  let soCap = programs.soCap.filter((c) => c.feature == "Môn học bán chạy");
  let trungCap = programs.trungCap.filter(
    (c) => c.feature == "Môn học bán chạy",
  );
  let caoCap = programs.caoCap.filter((c) => c.feature == "Chủ đề bán chạy");
  return {
    props: {
      seo,
      sections,
      questions,
      // programs: {
      //   soCap,
      //   trungCap,
      //   caoCap,
      // },
    },
  };
}
