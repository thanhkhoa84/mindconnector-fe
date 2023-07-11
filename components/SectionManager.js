import QandA from "@/components/QandA";
import ValueSection from "@/components/home/ValueSection";
import Teachers from "@/components/common/teachers/Teachers";
import HeroBanner from "@/components/home/HeroBanner";
import LogoList from "@/components/LogoList";
import CtaBlock from "@/components/CtaBlock";
import StudentHeading from "@/components/StudentHeading";
import StudentProgramIntro from "@/components/StudentProgramIntro";
import BusinessHeading from "@/components/BusinessHeading";
import BusinessServices from "@/components/BusinessServices";
import BusinessDifference from "@/components/BusinessDifference";

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
          theme={rest.theme}
          mentors={rest.mentors}
          key={`mentors-${index}`}
        />
      );
    case "section.student-heading":
      return (
        <StudentHeading
          heading={rest.heading}
          text={rest.text}
          image={rest.backgroundImage.imageDesktop}
          key={`student-heading-${index}`}
        />
      );
    case "shared.cta-block":
      return (
        <CtaBlock
          heading={rest.heading}
          text={rest.text}
          ctaText={rest.button.Link.title}
          key={`cta-${index}`}
        />
      );
    case "section.student-programs":
      return (
        <StudentProgramIntro
          programs={rest.programs}
          tilte={"programs"}
          key={`programs-${index}`}
        />
      );

    case "section.business-intro":
      return <BusinessHeading {...rest} key={`business-intro-${index}`} />;

    case "section.services":
      return <BusinessServices {...rest} key={`business-services-${index}`} />;

    case "section.business-difference":
      return (
        <BusinessDifference {...rest} key={`business-difference-${index}`} />
      );
  }
};

const SectionManager = ({ sections }) => sections.map(getSliceComponent);

export default SectionManager;
