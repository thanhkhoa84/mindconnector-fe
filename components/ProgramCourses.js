import dynamic from "next/dynamic";
import Container from "@/components/Container";
import CoursesCardList from "@/components/common/courses/CoursesCardList";

const Decoration = dynamic(() => import("@/components/Decoration"), {
  ssr: false,
});

export default function ProgramCourses({ heading, courses }) {
  return (
    <section className="relative mt-[4em] section-with-id">
      <Decoration />
      <Container>
        <h2 className="text-center text-[22px] font-black leading-none md:text-[34px] lg:block">
          {heading}
        </h2>
      </Container>
      <div className="course-card relative mt-8 block py-8">
        <CoursesCardList courses={courses.data} />
      </div>
    </section>
  );
}
