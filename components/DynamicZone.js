import Container from "@/components/Container";
import HeroBanner from "@/components/home/HeroBanner";
import QandA from "@/components/QandA";

const getSliceComponent = ({ __typename, ...rest }, index) => {
  switch (__typename) {
    case "ComponentSectionHeroSlider":
      return <HeroBanner key={`topFeature${index}`} slides={rest.HeroSlider} />;
    case "ComponentSectionQa":
      return (
        <section>
          <Container>
            <QandA questions={rest.QA} />
          </Container>
        </section>
      );
  }
};

const DynamicZone = ({ slices }) => slices.map(getSliceComponent);

DynamicZone.defaultProps = {
  slices: [],
};

export default DynamicZone;
