import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "@/components/common/modal/GlobalModal";
import Seo from "@/components/SEO";
import { fetchAPI } from "@/lib/api.js";
import SectionManager from "@/components/SectionManager";
import LeadingForm from "@/components/LeadingForm";
import Container from "@/components/Container";

const tabs = [
  {
    title: "Coaching",
    href: "#coaching",
  },
  {
    title: "Business Consultancy",
    href: "#consultancy",
  },
  {
    title: "Marketing and Sales Outsourcing",
    href: "#outsourcing",
  },
];

// const Tab = ({ tab, index, active, onClick }) => {
//   return (
//     <li
//       className={`
//       font-bold
//       ${active ? "text-orange-dark" : "text-[#9A9A9A]"}
//       inline-block py-0 align-middle hover:font-bold hover:text-orange-dark
//       `}
//       key={index}
//       onClick={() => onClick(index)}
//     >
//       <button className="block">{tab.title}</button>
//     </li>
//   );
// };

const Business = ({ seo, sections }) => {
  const { showModal } = useGlobalModalContext();
  const createModal = () => {
    showModal(MODAL_TYPES.BUSINESS_VIDEO_MODAL, {
      title: "Điền thông tin liên lạc, Mind Connector sẽ liên hệ bạn sau",
      confirmBtn: "Save",
    });
  };

  return (
    <>
      <Seo seo={seo} />
      <main className="dark overflow-hidden bg-black pb-12">
        <div className="sr-only">
          <h1>{seo.metaTitle} | Mind Connector</h1>
        </div>

        <SectionManager sections={sections} />

        <section className="py-8 pb-12" id="contact">
          <Container>
            <LeadingForm />
          </Container>
        </section>
      </main>
    </>
  );
};

export default Business;

export async function getServerSideProps() {
  const params = {
    nested: true,
    populate: [
      "seo",
      "content",
      "content.button.Link",
      "content.backgroundImage",
      "content.backgroundImage.imageDesktop",
      "content.backgroundImage.imageMobile",
      "content.mentors",
      "content.mentors.image",
      "content.icon",
      "content.image.imageDesktop",
      "content.services",
      "content.services.thumbnailInfo",
      "content.services.thumbnailInfo.image",
    ],
  };
  const page = await fetchAPI(`/business`, params);
  const seo = page.data.attributes.seo;
  const sections = page.data.attributes.content;

  return {
    props: {
      seo,
      sections,
    },
  };
}
