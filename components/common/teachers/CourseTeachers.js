import Image from "next/future/image";

const CourseTeachers = ({ teachers }) => {
  return (
    <div className="mt-8 text-center">
      {teachers.map((m, index) => {
        const { entitled, name, title, image } = m;
        return (
          <div
            className="mb-8 inline-block w-[140px] align-top xs:w-[48%] sm:w-[24%] md:mb-0 lg:w-[190px]"
            key={index}
          >
            <div className="inline-block w-[90px] overflow-hidden rounded-full md:w-[100px]">
              <Image
                src={image}
                alt="Avatar"
                width={200}
                height={200}
                className="w-full object-cover transition-all hover:scale-[1.]"
              />
            </div>
            <p className="md:text-[16px]] m-0 mt-1 text-xs leading-none text-purple">
              {entitled}
            </p>
            <p className="m-0 text-xs font-black leading-none text-purple md:text-base">
              {name}
            </p>
            <p
              dangerouslySetInnerHTML={{ __html: title }}
              className="mx-auto text-xs sm:text-[10px] md:text-xs"
            />
          </div>
        );
      })}
    </div>
  );
};

export default CourseTeachers;
