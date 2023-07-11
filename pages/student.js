import Seo from "@/components/SEO";

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
          <h1>{seo.metaTitle} | Mind Connector</h1>
        </div>

        <SectionManager sections={sections} />
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
