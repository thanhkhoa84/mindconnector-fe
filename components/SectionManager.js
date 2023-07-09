import QandA from "@/components/QandA";

const getSliceComponent = ({ __component, ...rest }, index) => {
  switch (__component) {
    case "section.qa":
      return <QandA questions={rest.QA} />;
  }
};

const SectionManager = ({ sections }) => sections.map(getSliceComponent);

export default SectionManager;
