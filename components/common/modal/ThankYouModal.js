import React, { useEffect, useRef } from "react";
import { useGlobalModalContext } from "./GlobalModal";

const ThankYouModal = () => {
  const { hideModal, store } = useGlobalModalContext();
  const { modalProps } = store || {};
  const { title } = modalProps || {};
  let ref = useRef(null);

  const keyDownHandler = (event) => {
    if (event.key === "Escape") {
      hideModal();
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      hideModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", keyDownHandler);
    let hide = setInterval(() => {
      hideModal();
    }, 3000);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", keyDownHandler);
      clearInterval(hide);
    };
  });

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-gray-400 bg-opacity-90">
      <div ref={ref} className="m-4 w-[512px] rounded-2xl bg-white p-8">
        <h4 className="hidden text-center text-[16px] font-bold leading-none">
          {title}
        </h4>
        <p className="m-0 text-center text-[14px] leading-[18px]">
          Cảm ơn bạn. Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất.
        </p>
      </div>
    </div>
  );
};

export default ThankYouModal;
