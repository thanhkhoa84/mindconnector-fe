import dynamic from 'next/dynamic';

const CourseCard = dynamic(() => import('./CourseCard'), {
  ssr: false
})

const Courses = () => {
  let total = 8;
  return (
    <div
      className={`
        text-justify my-[2em] mx-0 bg-transparent grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-2 sm:gap-6 md:gap-5 content-start  
        ${total <= 5 ? 'slider-less-than-five' : ''}`}
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
