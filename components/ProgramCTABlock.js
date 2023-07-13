import { getStrapiMedia } from "@/lib/media";
import Image from "next/image";
import Link from "next/link";

import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "@/components/common/modal/GlobalModal";

export default function ProgramCTABlock({ heading, text, image, cta }) {
  const { showModal } = useGlobalModalContext();
  const createModal = () => {
    showModal(MODAL_TYPES.REGISTER_MODAL, {
      title: "Điền thông tin liên lạc, Mind Connector sẽ liên hệ bạn sau",
      program: "KỸ NĂNG XÃ HỘI",
      course: "",
      confirmBtn: "Save",
    });
  };

  return (
    <section className="mt-12 py-12 section-with-id" id="about">
      <div className="mx-auto my-0 min-w-[290px] max-w-[1120px] px-[1em]">
        <div className="flex flex-col overflow-hidden rounded-[20px] text-white md:flex-row">
          <div className="overflow-hidden">
            <Image
              src={getStrapiMedia(image)}
              width={704}
              height={400}
              alt=""
            />
          </div>
          <div className="flex-col justify-center bg-purple p-8 md:inline-flex md:min-w-[340px] md:rounded-br-[20px] md:rounded-tr-[20px] lg:justify-center">
            <h2 className="text-[28px] font-black md:text-[34px]">{heading}</h2>
            <p className="mt-4">
              {cta.attachment.data != null ? (
                <Link
                  href={getStrapiMedia(cta.attachment)}
                  download
                  className="btn-primary block max-w-[300px] md:inline-block md:w-auto"
                >
                  {cta.title}
                </Link>
              ) : (
                <button
                  className="btn-primary block max-w-[300px] md:inline-block md:w-auto"
                  onClick={createModal}
                >
                  {cta.title}
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
