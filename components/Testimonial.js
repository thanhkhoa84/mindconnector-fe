import Container from "./Container";
import Image from "next/image";

const Testimonial = ({ data }) => {
  let { headline, body, peep } = data;
  return (
    <blockquote
      className={`
        relative rounded-2xl bg-white/70 p-10 py-8 italic shadow-asideboxLight 
        before:absolute
        before:-top-[0.3em] before:left-4 before:text-[60px] before:font-black before:leading-none before:text-purple  before:content-['"'] after:absolute 
        after:-bottom-[0.7em] after:right-[0.5em] after:text-[60px] after:font-black after:leading-none after:text-purple after:content-['"'] 
        dark:bg-purple dark:text-white dark:before:text-white dark:after:text-white
      `}
    >
      <h5 className="text-4xl font-black not-italic text-purple dark:text-white">
        {headline}
      </h5>
      <p className="mt-8 text-justify italic dark:text-white">{body}</p>
      <div className="mt-4 flex flex-row items-center gap-6">
        <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
          <Image
            src={peep.image}
            width={60}
            height={60}
            alt=""
            className="block rounded-full"
          />
        </div>
        <div className="not-italic">
          <h3 className="font-black text-purple dark:text-white">
            {peep.name}
          </h3>
          <div className="text-xs text-[#6C6C6C] dark:text-white lg:text-sm">
            <p dangerouslySetInnerHTML={{ __html: peep.title }} />
            {/* <p className="font-black">
                    “Thành công trong khởi sự kinh doanh”
                  </p> */}
          </div>
        </div>
      </div>
    </blockquote>
  );
};

export default Testimonial;
