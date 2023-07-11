import React from "react";
import Container from "@/components/Container";

import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "@/components/common/modal/GlobalModal";

export default function CtaBlock({ heading, text, ctaText }) {
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
    <section className="pb-12">
      <Container>
        <div className="mb-4 mt-8 items-center overflow-hidden rounded-3xl bg-[#941C50] text-white md:flex md:flex-row">
          <header className="bg-[#B22F66] px-6 py-8">
            <h3 className="text-[24px] font-black">{heading}</h3>
            <p className="mt-2 font-medium">{text}</p>
          </header>
          <div className="items-center justify-between p-6 md:flex md:flex-col lg:flex-1">
            <button
              onClick={createModal}
              className="btn-primary block w-full min-w-[296px] overflow-hidden text-[13px] sm:text-[16px]"
            >
              {ctaText}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
