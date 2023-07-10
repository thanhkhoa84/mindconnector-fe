import QandA from "@/components/QandA";
import ValueSection from "@/components/home/ValueSection";
import Teachers from "@/components/common/teachers/Teachers";
import HeroBanner from "@/components/home/HeroBanner";
import LogoList from "@/components/LogoList";

const getSliceComponent = ({ __component, ...rest }, index) => {
  switch (__component) {
    case "section.hero-slider":
      return (
        <HeroBanner
          title={rest.title}
          slides={rest.Slider}
          key={`hero-${index}`}
        />
      );
    case "section.home-values":
      return <ValueSection {...rest} key={`value-${index}`} />;
    case "section.logo-list":
      return (
        <LogoList
          backgroundColor={""}
          title={rest.heading}
          list={rest.partners}
          key={`logo-${index}`}
        />
      );
    case "section.qa":
      return <QandA questions={rest.QA} key={`QandA-${index}`} />;
    case "section.mentors":
      return (
        <Teachers
          title={rest.heading}
          mentors={rest.mentors}
          key={`mentors-${index}`}
        />
      );
  }
};

const SectionManager = ({ sections }) => sections.map(getSliceComponent);

export default SectionManager;
