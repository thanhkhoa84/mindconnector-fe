import Image from "next/image";
import { getStrapiMedia } from "@/lib/media";

export default function BusinessDifference({
  label,
  heading,
  description,
  icon,
  image,
}) {
  return (
    <section className="dark relative mt-12 flex origin-center flex-col items-center justify-center py-[100px] text-center text-white xl:py-36">
      <Image
        src={getStrapiMedia(image.imageDesktop)}
        alt=""
        width={1400}
        height={698}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative">
        <div className="mx-auto px-4 lg:max-w-[750px]">
          <h2 className="mx-auto mb-4 mt-0 text-center text-4xl font-black leading-[1.3]">
            {label}
          </h2>
          <Image
            src={getStrapiMedia(icon)}
            alt=""
            width={116}
            height={120}
            className="mt-8 inline-block"
          />
          <h3 className="mt-8 text-[25px] font-black text-[#F5B0C5] md:text-4xl">
            {heading}
            {/* THIẾT KẾ GIẢI PHÁP CHIẾN LƯỢC CHUYÊN BIỆT{" "}
            <span className="xs:inline-block">DÀNH CHO DOANH NGHIỆP</span> */}
          </h3>
          <p className="mt-4">{description}</p>
        </div>
      </div>
    </section>
  );
}
