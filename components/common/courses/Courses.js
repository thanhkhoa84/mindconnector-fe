import dynamic from 'next/dynamic';

import styles from '../../../styles/components/common/courses/Courses.module.scss';
import Container from './../../Container';

const CourseCard = dynamic(() => import('./CourseCard'), {
  ssr: false
})

const Courses = () => {
  let total = 8;
  return (
    <div
      className={`${total <= 5 ? 'slider-less-than-five' : ''} ${
        styles.coursesList
      }`}
    >
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
};

export default Courses;
