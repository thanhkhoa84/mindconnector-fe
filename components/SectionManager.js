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
import ServiceAbout from "@/components/ServiceAbout";
import ServiceApproach from "@/components/ServiceApproach";
import TestimonialBlock from "@/components/TestimonialBlock";
import ProgramCourses from "@/components/ProgramCourses";
import ProgramApproach from "./ProgramApproach";
import ProgramOverview from "./ProgramOverview";
import ProgramSchedule from "./ProgramSchedule";
import ProgramCTABlock from "./ProgramCTABlock";

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
          theme={rest.theme}
          heading={rest.heading}
          text={rest.text}
          ctaText={rest.button.Link.title}
          program={rest.program}
          key={`cta-${index}`}
        />
      );

    case "section.student-programs":
      return (
        <StudentProgramIntro
          programs={rest.programs.data}
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

    case "section.service-about":
      return <ServiceAbout {...rest} key={`service-about-${index}`} />;

    case "section.service-approach":
      return <ServiceApproach {...rest} key={`service-approach-${index}`} />;

    case "section.testimonial":
      return <TestimonialBlock {...rest} key={`testimonial-${index}`} />;

    case "section.program-courses":
      return <ProgramCourses {...rest} key={`program-courses-${index}`} />;

    case "section.program-approach":
      return <ProgramApproach {...rest} key={`program-approach-${index}`} />;

    case "section.program-overview":
      return <ProgramOverview {...rest} key={`program-overview-${index}`} />;

    case "section.program-schedule":
      return <ProgramSchedule {...rest} key={`program-schedule-${index}`} />;

    case "section.program-cta-block":
      return <ProgramCTABlock {...rest} key={`program-cta-block-${index}`} />;
  }
};

const SectionManager = ({ sections }) => sections.map(getSliceComponent);

export default SectionManager;
