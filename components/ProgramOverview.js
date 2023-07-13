import Image from "next/image";
import Container from "@/components/Container";
import CourseTeachers from "@/components/common/teachers/CourseTeachers";
import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "@/components/common/modal/GlobalModal";

export default function ProgramOverview({
  label,
  heading,
  text,
  rating,
  giang_viens,
}) {
  const { showModal } = useGlobalModalContext();
  const createModal = () => {
    showModal(MODAL_TYPES.REGISTER_MODAL, {
      title: "Điền thông tin liên lạc, Mind Connector sẽ liên hệ bạn sau",
      program: "",
      course: "",
      confirmBtn: "Save",
    });
  };

  return (
    <section className="relative bg-[#F7F3F4] py-[3em] text-center md:py-[4em] md:pb-[0]">
      <div className="absolute inset-0">
        <Image
          alt=""
          src="/img/bg-head-section.png"
          width={1400}
          height={600}
          priority={true}
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <div className="relative">
        <Container>
          <div className="font-bold text-gray">{label}</div>
          <h2 className="leading-0 text-3xl font-black uppercase md:text-6xl">
            {heading}
          </h2>
          <p className="mt-4">{text}</p>
          <CourseTeachers teachers={giang_viens.data} />
          <div className="mt-8 flex flex-col rounded-xl text-left md:relative md:top-[35px] md:mt-0 md:h-[70px] md:flex-row md:justify-between md:bg-white md:shadow-lg">
            <div className=" flex flex-row flex-nowrap items-start justify-start gap-4 rounded-2xl border-2 border-solid border-[#d2d2d2] border-white bg-[#FFF2EB] bg-opacity-75 px-6 py-[1em] xs:flex-row sm:flex-row sm:gap-8 md:items-center md:bg-transparent">
              <div className="text-black">
                <p className="text-[20px] font-bold">
                  {rating.rating}{" "}
                  <span className="mt-0 inline-block text-[12px]">
                    <Image
                      src="/img/star-rating-fill.svg"
                      alt=""
                      width={15}
                      height={15}
                    />
                  </span>
                </p>
                <p className="text-[14px]">{rating.rates} Đánh giá</p>
              </div>
              <div className="text-black">
                <p className="text-[20px] font-bold">{rating.student}</p>
                <p className="text-[14px]">Học viên</p>
              </div>
              <div className="text-black">
                <p className="text-[20px] font-bold">{rating.hour}</p>
                <p className="text-[14px]">Giờ học</p>
              </div>
            </div>
            <div className="mt-6 flex flex-row flex-wrap items-center justify-between md:mt-0 md:gap-5 md:px-6">
              <p>
                <button onClick={createModal} className="btn-primary">
                  {rating.cta.Link.title}
                </button>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
