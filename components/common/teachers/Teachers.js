import Image from "next/image";
import Container from "@/components/Container";
import { getStrapiMedia } from "@/lib/media";

const TeacherCard = ({ entitled, name, image, title }) => {
  return (
    <div
      className={`relative mb-12 inline-block w-[160px] max-w-[228px] px-[10px] align-top xs:w-[49%] sm:w-[25%] md:mb-0 lg:w-[228px]`}
    >
      <div className={`relative text-center`}>
        <Image
          src={getStrapiMedia(image)}
          alt=""
          width={208}
          height={208}
          className="inline-block align-top"
        />
      </div>
      <div className="mt-4 flex w-full flex-col text-center">
        <div className="m-0 text-xs leading-none text-purple dark:text-white">
          {entitled}
        </div>
        <h3 className="m-0 text-sm font-black leading-none text-purple dark:text-white md:text-base">
          {name}
        </h3>
        <p
          dangerouslySetInnerHTML={{
            __html: title.replace(new RegExp("\r?\n", "g"), "<br />"),
          }}
          className="mt-2 min-h-[calc(2*1.25*1em)] text-sm leading-none dark:text-white sm:text-xs lg:text-sm"
        />
      </div>
    </div>
  );
};

const TeacherList = (mentors) => {
  let teachers = mentors.data;
  return (
    <div className="-mx-4 flex flex-col flex-wrap items-center justify-center pt-12 text-center xs:flex-row xs:items-start md:mx-0 md:justify-around lg:justify-evenly">
      {teachers.map((teacher, index) => {
        return <TeacherCard {...teacher.attributes} key={`teacher-${index}`} />;
      })}
    </div>
  );
};

const Teachers = ({ title, mentors }) => {
  return (
    <section className={`relative bg-[#FFF7ED] py-12`}>
      <Container>
        <h2 className="mx-auto mt-0 mb-4 text-center text-4xl font-black leading-[1.3] dark:text-white">
          {title}
        </h2>
        <TeacherList data={mentors.data} />
      </Container>
    </section>
  );
};

export default Teachers;
