import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';

import CourseCard from './CourseCard';
import styles from '../../../styles/components/common/courses/Courses.module.scss';
import Container from './../../Container';

const flickityOptions = {
  initialIndex: 0,
  contain: true,
  percentPosition: true,
  prevNextButtons: true,
  pageDots: false,
  cellAlign: 'left',
};

function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </Flickity>
  );
}

const Courses = () => {
  let total = 8;
  return (
    <div
      className={`${total <= 5 ? 'slider-less-than-five' : ''} ${
        styles.coursesList
      }`}
    >
      <Carousel />
    </div>
  );
};

export default Courses;
