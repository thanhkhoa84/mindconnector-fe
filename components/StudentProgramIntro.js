import Link from "next/link";
// import StudentCardList from "@/components/common/courses/StudentCardList";
import Container from "@/components/Container";

export default function StudentProgramIntro(props) {
  const { programs } = props;
  return (
    <>
      {programs.data.map((p, index) => {
        console.log(p.attributes);
        return (
          <section
            className={`py-[3em] ${index % 2 ? "bg-[#FFEFDB]" : ""}`}
            key={`student-intro${index}`}
          >
            <Container>
              <div className="mx-auto my-0 text-base font-bold leading-[1] text-gray dark:text-white">
                {p.attributes.label}
              </div>
              <h2 className="mx-auto mb-4 mt-0 text-4xl font-black leading-[1.3] dark:text-white">
                {p.attributes.title}
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: p.attributes.body.replace(
                    new RegExp("\r?\n", "g"),
                    "<br />",
                  ),
                }}
              ></p>
              <p>
                <Link legacyBehavior href="/programs/ky-nang-xa-hoi">
                  <span className="link-arrow">Tìm hiểu thêm</span>
                </Link>
              </p>
            </Container>
            <div className="course-card relative mt-8 block py-8">
              {/* <StudentCardList courses={p.mon_hocs.data} /> */}
            </div>
          </section>
        );
      })}
    </>
  );
}
