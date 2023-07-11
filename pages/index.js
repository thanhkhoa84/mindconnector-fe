import Seo from "@/components/SEO";
import { fetchAPI } from "@/lib/api.js";
import SectionManager from "@/components/SectionManager";

export default function Home({ seo, slides, questions, sections }) {
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
}

export async function getStaticProps() {
  const params = {
    nested: true,
    populate: [
      "seo",
      "Content",
      "Content.title",
      "Content.Slider",
      "Content.Slider.Image",
      "Content.text.title",
      "Content.values",
      "Content.values.icon",
      "Content.values.image",
      "Content.values.link",
      "Content.mentors",
      "Content.mentors.image",
      "Content.QA",
      "Content.partners",
      "Content.partners.image",
    ],
  };
  const page = await fetchAPI(`/homepage`, params);
  const seo = page.data.attributes.seo;
  const sections = page.data.attributes.Content;

  return {
    props: {
      seo,
      sections,
    },
  };
}
