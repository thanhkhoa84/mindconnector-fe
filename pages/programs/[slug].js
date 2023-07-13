import { fetchAPI } from "@/lib/api.js";
import SectionManager from "@/components/SectionManager";
import Seo from "@/components/SEO";
import { useEffect } from "react";

const ProgramPost = ({ seo, sections }) => {
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

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const programs = await fetchAPI(`/programs`);
  let match = programs.data.filter((s) => {
    return s.attributes.slug == slug;
  });

  const query = {
    nested: true,
    populate: [
      "seo",
      "Content",
      "Content.courses.thumbnailInfo",
      "Content.courses.thumbnailInfo.image",
      "Content.avatar",
      "Content.QA",
      "Content.cta.attachment",
      "Content.cta.image",
      "Content.rating",
      "Content.rating.cta",
      "Content.rating.cta.Link",
      "Content.approachs",
      "Content.courses",
      "Content.testimonial",
      "Content.testimonial.avatar",
      "Content.button",
      "Content.button.Link",
      "Content.giang_viens",
      "Content.giang_viens.image",
      "Content.icon",
      "Content.image",
      "Content.schedules.image",
    ],
  };

  const page = await fetchAPI(`/programs/${match[0].id}`, query);
  const seo = page.data.attributes.seo;
  const sections = page.data.attributes.Content;

  return {
    props: {
      seo,
      sections,
    },
  };
}

export default ProgramPost;
