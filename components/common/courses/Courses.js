import dynamic from 'next/dynamic';

const CourseCard = dynamic(() => import('./CourseCard'), {
  ssr: false
})

const Courses = () => {
  return (
    <div
      className={`
        my-[2em] mx-0 grid grid-cols-1 content-start gap-2 bg-transparent text-justify xs:grid-cols-2 xs:gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-5 lg:grid-cols-5  
      `}
    >
      <div className="mx-auto flex justify-center">
        <CourseCard />
      </div>
      <div className="mx-auto flex justify-center">
        <CourseCard />
      </div>
      <div className="mx-auto flex justify-center">
        <CourseCard />
      </div>
      <div className="mx-auto flex justify-center">
        <CourseCard />
      </div>
      <div className="mx-auto flex justify-center">
        <CourseCard />
      </div>
    </div>
  );
};

export default Courses;
