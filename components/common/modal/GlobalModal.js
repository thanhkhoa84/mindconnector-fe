import React, { useState, createContext, useContext } from "react";
import RegisterModal from "./RegisterModal";
import UpdateModal from "./UpdateModal";

export const MODAL_TYPES = {
  REGISTER_MODAL: "REGISTER_MODAL",
  // DELETE_MODAL: "DELETE_MODAL",
  // UPDATE_MODAL: "UPDATE_MODAL",
};

const MODAL_COMPONENTS = {
  [MODAL_TYPES.REGISTER_MODAL]: RegisterModal,
  // [MODAL_TYPES.DELETE_MODAL]: DeleteModal,
  [MODAL_TYPES.UPDATE_MODAL]: UpdateModal,
};

const initalState = {
  showModal: () => {
    return false;
  },
  hideModal: () => {
    return false;
  },
  store: {},
};

const GlobalModalContext = createContext(initalState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

export const GlobalModal = ({ children }) => {
  const [store, setStore] = useState();
  const { modalType, modalProps } = store || {};

  const showModal = (modalType, modalProps) => {
    setStore({
      ...store,
      modalType,
      modalProps,
    });
  };

  const hideModal = () => {
    setStore({
      ...store,
      modalType: null,
      modalProps: {},
    });
  };

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalType];
    if (!modalType || !ModalComponent) {
      return null;
    }
    return <ModalComponent id="global-modal" {...modalProps} />;
  };

  return (
    <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  );
};