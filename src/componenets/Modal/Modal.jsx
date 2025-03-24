import React, { useState } from "react";
import ModalContain from "./ModalContain";

const Modal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <div className="flex  items-center justify-center mt-6 ">
      <button
        onClick={openModal}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
      >
        Open Modal
      </button>
      <ModalContain isVisible={isModalVisible} closeModal={closeModal} />
    </div>
  );
};
export default Modal;
