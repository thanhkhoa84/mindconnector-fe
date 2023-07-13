import Container from "@/components/Container";

import {
  useGlobalModalContext,
  MODAL_TYPES,
} from "@/components/common/modal/GlobalModal";

export default function CtaBlock({ theme, heading, text, ctaText }) {
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
    <section id="register" className="pb-12 section-with-id">
      <Container>
        <div className="mb-4 mt-8 flex flex-col overflow-hidden rounded-3xl bg-[#941C50] text-white md:flex-row md:p-0">
          <header className="bg-[#B22F66] p-6 md:p-8">
            <h3
              dangerouslySetInnerHTML={{
                __html: heading.replace(new RegExp("\r?\n", "g"), "<br />"),
              }}
              className={`  ${
                theme == "Big Heading"
                  ? "font-black leading-none md:text-[34px] md:leading-none"
                  : "text-[24px] font-black"
              }`}
            />
            <p
              className={`${
                theme == "Big Heading" ? "mt-4" : "mt-2 font-medium"
              }`}
            >
              {text}
            </p>
          </header>
          <div className="flex min-w-[296px] flex-col items-center justify-center gap-2 p-6 md:w-2/5">
            <p className="flex items-center">
              <button
                onClick={createModal}
                className="btn-primary block w-full overflow-hidden text-[13px] sm:text-[16px]"
              >
                {ctaText}
              </button>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
