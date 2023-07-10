import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import dynamic from "next/dynamic";

import Seo from "@/components/SEO";
import Container from "@/components/Container";
import { fetchAPI } from "@/lib/api.js";

import SectionManager from "@/components/SectionManager";

const HeroBanner = dynamic(() => import("@/components/home/HeroBanner"), {
  suspense: true,
  ssr: false,
});
const About = dynamic(() => import("@/components/home/About"), {
  suspense: true,
  ssr: false,
});
const ValueSection = dynamic(() => import("@/components/home/ValueSection"), {
  suspense: true,
  ssr: false,
});
const Teachers = dynamic(
  () => import("@/components/common/teachers/Teachers"),
  {
    suspense: true,
    ssr: false,
  },
);
const QandA = dynamic(() => import("@/components/QandA"), {
  suspense: true,
  ssr: false,
});

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
  console.log(sections);

  return {
    props: {
      seo,
      sections,
    },
  };
}
