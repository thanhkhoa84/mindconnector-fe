import dynamic from 'next/dynamic';
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const useMedia = (query) => {
  let [matches, setMatches] = useState(null);

  useEffect(() => {
    let media = window.matchMedia(query);

    if (media.matches != matches) {
      setMatches(media.matches);
    }
    let listener = (e) => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return matches;
};

const CourseCard = dynamic(() => import("./CourseCard"), {
  ssr: false,
});

const Courses = () => {
  let ref = useRef(null);
  let total = 8;
  let small = useMedia("screen and (min-width:375px)");
  let medium = useMedia("screen and (min-width:768px)");
  let large = useMedia("screen and (min-width:992px)");
  console.log(small, medium, large);

  useLayoutEffect(() => {
    let draw = () => {
      // let itemWidth = ref.current.children[0].clientWidth;
      // let w = window.innerWidth;
      // let s = w / itemWidth;
    };
    window.addEventListener("resize", draw);
    draw();
    return () => {
      window.removeEventListener("resize", draw);
    };
  }, []);

  return (
    // <div
    //   className={`
    //     my-[2em] mx-0 grid grid-cols-1 content-start items-center gap-2 bg-transparent text-center text-justify xs:grid-cols-2 xs:gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-3 md:gap-5 lg:grid-cols-5
    //     ${total <= 5 ? "slider-less-than-five" : ""}`}
    //   ref={ref}
    // >
    <div
      className={`
        my-[2em] mx-0 inline-flex content-start items-center gap-2 bg-transparent text-center text-justify xs:grid-cols-2 xs:gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-3 md:gap-5 lg:grid-cols-5
        ${total <= 5 ? "slider-less-than-five" : ""}`}
      ref={ref}
    >
      <div className="mx-auto xs:mx-0">
        <CourseCard />
      </div>
      <div className="mx-auto xs:mx-0">
        <CourseCard />
      </div>
      <div className="mx-auto xs:mx-0">
        <CourseCard />
      </div>
      <div className="mx-auto xs:mx-0">
        <CourseCard />
      </div>
      <div className="mx-auto xs:mx-0">
        <CourseCard />
      </div>
    </div>
  );
};

export default Courses;
