import React from "react";
import { useGlobalModalContext } from "./GlobalModal";

const UpdateModal = () => {
  const { hideModal } = useGlobalModalContext();

  const handleModalToggle = () => {
    hideModal();
  };

  return <div>UpdateModal</div>;
};

export default UpdateModal;
