import React from "react";
import YouTube from "react-youtube";
import { useEffect, useRef } from "react";
import { useGlobalModalContext } from "./GlobalModal";

const BusinessVideoModal = () => {
  const { hideModal, store } = useGlobalModalContext();
  let ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      hideModal();
    }
  };
  const keyDownHandler = (event) => {
    if (event.key === "Escape") {
      hideModal();
    }
  };

  useEffect(() => {
    console.log("render");
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const opts = {
    height: "auto",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-gray-400 bg-opacity-90">
      <div
        ref={ref}
        className="m-4 w-[80vw] min-w-[512px] rounded-2xl bg-[#DADADA] p-8"
      >
        <div className="aspect-w-16 aspect-h-9 relative overflow-hidden bg-gray md:mx-0 md:rounded-3xl [&>div>iframe]:h-full [&>div>iframe]:w-full">
          <YouTube videoId="8dJyRm2jJ-U" opts={opts} onReady={_onReady} />
        </div>
      </div>
    </div>
  );
};

export default BusinessVideoModal;
